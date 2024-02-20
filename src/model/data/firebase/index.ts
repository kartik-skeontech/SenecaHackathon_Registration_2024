// index.ts
import {
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./Firebase_config";
import {
  IParticipant,
  IRegistrationForm,
  CollegeList,
} from "../../../interface/type";
import Facebook from "../../../assets/icons/Facebook.png";
import Instagram from "../../../assets/icons/Instagram.png";
import LinkedIn from "../../../assets/icons/LinkedIn.png";
//import TikTok from "../../../assets/icons/TikTok.png";
import XTwitter from "../../../assets/icons/XTwitter.png";

export async function sendRegistrationEmail(participant: IRegistrationForm) {
  console.log("participant", participant.email);
  const emailHtmlContent = `
    <h3>Dear ${participant.firstName},</h3>
    <p>Thank you for your interest in Housing Hackathon 2024.</p>
    <p>This email serves as an automated confirmation that you have been successfully registered to participate in the Qualifier round of the Hackathon, which is scheduled to begin on March 10, 2024.</p>
    <p>We are thrilled that you've chosen to be a part of this Hackathon, where innovative solutions will be developed to create a positive impact to tackle the Housing challenges. Your participation is invaluable, and we look forward to witnessing the creativity and expertise you bring to the event.</p>
    <p>Within 2 business days, our student success team will be reaching out to you with detailed information on the next steps of the competition.</p>
    <p>Should you have any questions or require further assistance, please do not hesitate to contact us via email. Additionally, feel free to connect with us through the social media links provided below.</p>
    <p>Thank you once again for your participation and we look forward to seeing you at the event.</p>
    <p>Best regards,</p>
    <p>Housing Hackathon 2024 Team</p>
    <hr/>
    <p>Connect with us:</p>
<table>
  <tr>
    <td align="center" style="padding: 0 10px;">
    <a
    href="https://www.instagram.com/senecahackathon/"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
  >
    <img src=${Instagram} alt="Instagram" />
  </a>
    </td>
    <td align="center" style="padding: 0 10px;">
    <a
    href="https://www.facebook.com/SenecaHackathon2022"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
  >
    <img src=${Facebook} alt="Facebook" />
  </a>
    </td>
    <td align="center" style="padding: 0 10px;">
    <a
    href="https://www.linkedin.com/company/seneca-hackathon/"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
  >
    <img src=${LinkedIn} alt="LinkedIn" />
  </a>
    </td>
    <td align="center" style="padding: 0 10px;">
    <a
    href="https://twitter.com/SenecaHackathon"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
  >
    <img src=${XTwitter} alt="XTwitter" />
  </a>
    </td>
    <td align="center" style="padding: 0 10px;">
    <a
    href="https://www.tiktok.com/@senecahackathon"
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
  >
    <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" />
  </a>
    </td>
  </tr>
</table>
    
    `;
  try {
    const isSend = await addDoc(collection(db, "mail"), {
      to: participant.email,
      message: {
        subject: "Registration Confirmation for Housing Hackathon 2024",
        html: emailHtmlContent,
      },
    });
    if (isSend) {
      return true;
    }
  } catch (error) {
    console.error("Error sending registration email: ", error);
  }
}

export const isEmailExist = async (email: string) => {
  try {
    const participantsRef = collection(db, "Participants");
    const querySnapshot = await getDocs(
      query(participantsRef, where("email", "==", email))
    );
    return !querySnapshot.empty;
  } catch (err) {
    console.error("Error checking email exist:", err);
    throw err;
  }
};

export const isPhoneExist = async (phone: string) => {
  try {
    const participantsRef = collection(db, "Participants");
    const queryCellPhone = await getDocs(
      query(participantsRef, where("cell_phone", "==", phone))
    );
    return queryCellPhone.docs.length > 0;
  } catch (err) {
    console.error("Error checking phone exist:", err);
    throw err;
  }
};

export const createParticipant = async (participant: IRegistrationForm) => {
  try {
    const docRef = await addDoc(collection(db, "Participants"), {
      first_name: participant.firstName,
      last_name: participant.lastName,
      college: participant.collegeName,
      program: participant.program,
      registrationDate: participant.registrationAtDate,
      semester: participant.semester,
      grad_year: participant.graduationYear,
      email: participant.email,
      team: {
        teamName: participant.team.teamName,
        teamMembers: participant.team.teamMembers.map((member) => ({
          firstName: member.firstName,
          lastName: member.lastName,
          institute: member.institute,

          email: member.email,
          swagSize: member.swagSize,
        })),
      },
      cell_phone: participant.cellPhone,
      isYourTeamComplete: participant.isTeamCompleted,
      seneca_student_status: participant.senecaStudentStatus,
      tshirt_size: participant.tShirtSize,
      participate_as: participant.registrationType,
      challenge: participant.challengeName,
      finaleJoinPreference: participant.finaleJoinPreference,
      alumini: participant.alumini,
      aluminiYear: participant.aluminiYear,
      aluminiProgram: participant.aluminiProgram,
      doYouFollowUsOnSocialMedia: participant.doYouFollowUsOnSocialMedia,
    });

    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const updateParticipant = async (
  participantId: string,
  participantData: Partial<IParticipant>
) => {
  try {
    const docRef = doc(db, "Participants", participantId);
    await updateDoc(docRef, participantData);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export const removeParticipant = async (participantId: string) => {
  try {
    const docRef = doc(db, "Participants", participantId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

export const getParticipant = async (
  participantId: string
): Promise<IParticipant | undefined> => {
  try {
    const docRef = doc(db, "Participants", participantId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as IParticipant;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
  }
};

export const getAllParticipants = async (): Promise<IParticipant[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "Participants"));

    const participants = querySnapshot.docs.map((doc) => {
      return { ...doc.data() } as IParticipant;
    });

    console.log("participants", participants);

    return participants;
  } catch (err) {
    console.error("Error fetching participants:", err);
    return [];
  }
};

export const getAllCollege = async (): Promise<CollegeList[]> => {
  try {
    const query = await getDocs(collection(db, "Colleges"));
    const colleges = query.docs.map((doc) => {
      return { ...doc.data() } as CollegeList;
    });

    return colleges;
  } catch (err) {
    console.error("Error fetching colleges:", err);
    return [];
  }
};
