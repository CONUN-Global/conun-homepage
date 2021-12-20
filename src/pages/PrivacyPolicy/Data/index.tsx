import { Trans } from "@lingui/macro";

type DataType = {
  id: string;
  title: JSX.Element;
  description: SubType[];
};
type SubType = {
  article: JSX.Element;
  section: JSX.Element;
};
export const DATA: DataType[] = [
  {
    id: "basic-principle",
    title: <Trans id="Basic principle" />,
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="We take personal information of users who use the website of CONUN Global (hereinafter referred to as 'the Company') very seriously and have the following personal information policy." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The privacy policy will be updated if there is a change in the statute or guideline related to personal information, which may also vary as company policies change. The company's Privacy Policy includes the following." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The Company shall comply with the personal information protection regulations of related laws and regulations that the information and communication service providers must comply with, such as the 'Information Communication Network Promotion and Information Protection Act,' and the 'Personal Information Protection Act Article 30', we are committed to protecting the rights and interests of our members by establishing a policy. We establish and disclose the personal information processing policy as follows to make it possible to handle the related complaints promptly and smoothly." />
        ),
      },
    ],
  },
  {
    id: "purpose-of-Collection-and-use-of-personal-information",
    title: (
      <Trans id="01. Purpose of Collection and Use of Personal Information" />
    ),
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The purpose of the company's collection of personal information is to verify the identity of the user and the intention to use the service, to provide optimized and customized services." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The Company collects only the minimum items of information necessary for the user to facilitate the provision of services at the time of initial membership, and may collect additional information on the use of the services provided by the Company." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The company shall not use the personal information for any purpose other than the purpose of collecting and using it or provide it to any third party without the consent of the users." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="When collecting user's personal information, the company collects it with the consent of the user, information such as race, place of birth, homeland, ideology, political orientation, criminal record, and health condition that may infringe the basic human rights of the user is not collected except by the consent of the user or the regulation." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The Company collects and uses member's personal information for the purpose of each of the following items." />
        ),
      },
    ],
  },
  {
    id: "collection-items-of-personal-information",
    title: <Trans id="02. Collection items of personal information" />,
    description: [
      {
        article: <Trans id="A. Sign up for Homepage" />,
        section: <Trans id="-Full name, email address, password" />,
      },
      {
        article: <Trans id="B. Sign up for Pre-Sale" />,
        section: (
          <Trans id="- Full name, e-mail address, password, mobile phone number, nationality, copy of identification (resident registration card, driver's license, passport, etc.), ethereum wallet address to receive CONUN coin (token) * Excludes personal identification numbers such as resident registration number, driver's license number, and passport number" />
        ),
      },
      {
        article: (
          <Trans id="C. The following information may be collected only for users who use the supplementary services, use customized services and apply for the event." />
        ),
        section: (
          <Trans id="-- If the user agree to collect additional personal information" />
        ),
      },
      {
        article: (
          <Trans id="D. Additional information created and collected during the using service" />
        ),
        section: (
          <Trans id="- When the user uses the service, the Company may collect the user's IP address, cookie, browser type and language, log data and so on." />
        ),
      },
    ],
  },
  {
    id: "providing-and-sharing-personal-information",
    title: <Trans id="03. Providing and sharing personal information" />,
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The Company shall not use the personal information of the user or provide it to any other person or company/organization except under the consent of the user or the provisions of related laws and regulations. However, in the following cases, it is possible to provide personal information without the consent of the user pursuant to the provisions of relevant laws and regulations." />
        ),
      },
    ],
  },
  {
    id: "petention-use-period-of-personal-information",
    title: (
      <Trans id="04. Retention/Use Period of Personal Information Collected by the Company and Destruction" />
    ),
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The Company reserves and uses the personal information of the user in principle for the period of notice and agreement, and if the purpose of collection and use of personal information is achieved or the user's request is destroyed, it will be destroyed without delay. However, the following information will be retained for the period specified below for the following reasons." />
        ),
      },
      {
        article: (
          <Trans id="A. Reason for holding information according to related laws and company policy" />
        ),
        section: (
          <Trans id="If necessary to preserve in accordance with the provisions of relevant laws and regulations, the user's personal information will be kept for a certain period of time. In this case, the company keeps the information separately, uses it only for its own storage purposes, and does not use it for other purpose such as marketing." />
        ),
      },
      {
        article: (
          <Trans id="B. The retention and utilization period of the collected personal information is from the time of signing a terms of service (sign-up) to the time of termination (including application for withdrawal, canceled or terminated by the Company)." />
        ),
        section: (
          <Trans id="In case of disagreement, the Company shall destroy the personal information of the user without delay except for the period of storing the information in accordance with the reasons stated above. If the personal information processing is entrusted to the third party, the company shall instruct the fiduciary to destroy it." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="C. In accordance with the need to retain personal information pursuant to the laws and regulations of the Republic of Korea, from August 18, 2015, the Company shall protect personal information of users who have not used the Company's services for a period of one year under the ‘Act on Promotion of Information and Communications Network Utilization and Information Protection, etc. Article 29’, the user is notified in advance, and personal information is destroyed or separately stored and managed. If requested by the user, the above period may be set differently. However, if it is necessary to preserve the personal information in accordance with the relevant laws and regulations such as the Communication Confidentiality Protection Act, the Consumer Protection Act in Electronic Commerce etc.," />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="D. The Company shall notify the users of the expiration date of the period and the items of the personal information by notices, e-mail, etc., along with the fact that the personal information is destroyed or separated or stored or managed until 30 days before the expiration of the period of Section C. To do this, user must provide/update the correct contact information to the Company." />
        ),
      },
      {
        article: <Trans id="E. Destruction Methods" />,
        section: (
          <Trans id="User’s personal information will be destroyed without delay after the purpose of collection and use is achieved. Personal information printed on paper is shredded or destroyed by incinerator, and personal information stored in the form of an electronic file is destroyed using a technical or physical method that cannot reproduce the record." />
        ),
      },
    ],
  },
  {
    id: "the-rights-of-users-and-their-legal-representatives ",
    title: (
      <Trans id="05. The rights of users and their legal representatives and how they should be held" />
    ),
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="At any time, the user can inquire or modify his or her personal information registered and request cancellation of the membership." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="Users can inquire or modify the member information anytime in the My Information menu and apply for withdrawal from the membership through email in case of membership withdrawal. User can also request a personal information manager in writing, by phone or email, and without delay after checking user’s identity." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="If the user requests correction of errors in personal information, the Company will not use or provide the personal information until the correction is completed." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="Also, if wrong personal information has already been provided to a third party, the result of the correction processing will be notified to the third party without delay to make correction." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The Company treats personal information that has been terminated or deleted at the user's request as described in 'Retention and Use Period of Personal Information Collected by the Company' and is prohibited from being viewed or accessed for other purposes." />
        ),
      },
    ],
  },
  {
    id: "user-responsibilities",
    title: <Trans id="06. User Responsibilities" />,
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The user is obliged to protect his/her personal information, the Company shall not be liable for any problems caused by leakage of personal information due to user's negligence such as transferring or lending of ID, password, access media, lost of ID or leave your account while logged in.etc., without the fault of the Company in spite of the company's considerable care, if it is a problem on the internet that cannot be controlled, such as a hacking attack using high-techniques that cannot be blocked by security measures." />
        ),
      },
    ],
  },
  {
    id: "matters-concerning-the-installation",
    title: (
      <Trans id="07. Matters concerning the installation, operation and rejection of the automatic collection device of personal information" />
    ),
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The company operates 'cookies' which store and find information of users from time to time. A cookie is a very small text file sent to your browser by the server used to run the website and stored on your computer hard disk. The company uses cookies for the following purposes." />
        ),
      },
      {
        article: <Trans id="A. Purpose of Use" />,
        section: (
          <Trans id="- Analyzes the frequency and duration of visits to members and non-members, maintains connection sessions for members, analyzes service visits and usage patterns, and provides secure access." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="- Members have the option to install cookies. So, members can set all options in the web browser to accept all cookies, check each time a cookie is saved, or refuse to save all cookies. However, if you refuse to install cookies, you will find it inconvenient to use the web and may find it difficult to use some services that require you to log in." />
        ),
      },
      {
        article: <Trans id="B. How to decline cookie settings" />,
        section: (
          <Trans id="Example: To decline cookie settings, you can either allow all cookies, check each time you save a cookie, or refuse to save all cookies by selecting the option of your web browser." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="Example of setting method (for Internet Explorer) : Tools> Internet Options> Privacy at the top of your web browser" />
        ),
      },
    ],
  },
  {
    id: "responsibility-for-link-site",
    title: <Trans id="08. Responsibility for Link Site" />,
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The Company may provide users with links to other Web sites. However, this 'Privacy Policy' does not apply to collecting personal information of linked websites." />
        ),
      },
    ],
  },
  {
    id: "privacy-protection",
    title: (
      <Trans id="09. Technical and institutional management for privacy protection" />
    ),
    description: [
      {
        article: <Trans id="A. Technical measures" />,
        section: (
          <Trans id="The Company takes the following technical measures to ensure the safety of personal information in order to prevent personal information from being lost, stolen, leaked, altered or damaged in handling personal information of users." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="① User's personal information is protected by password, and important data is protected by separate security function by encrypting file and transmission data or using file lock function (Lock)." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="② The company uses security systems such as intrusion prevention system and vulnerability analysis system for each server in preparation for external intrusion such as hacking." />
        ),
      },
      {
        article: <Trans id="B. Administrative measures" />,
        section: (
          <Trans id="- The Company limits access to users' personal information to the minimum number of persons. The minimum number of persons is as follows." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="① Those who perform marketing work directly against the user" />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="② Person who performs personal information management duties such as person in charge of personal information manager and employees" />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="③ Any other person who is obliged to handle personal information in business" />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="④ Regular in-house training and outsourcing training is conducted for employees who handle personal information, such as acquiring new security technologies and obligation to protect personal information." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="⑤ When join the company, internal procedures are prepared to prevent leakage of information by people through security pledge form and to monitor the performance of privacy policy and compliance with employees." />
        ),
      },
      {
        article: <Trans id="" />,
        section: (
          <Trans id="⑥ The transfer of duties of employees handling personal information is carried out in a secure manner, and responsibilities for personal information accidents are clearly disclosed after joining and retiring the company." />
        ),
      },
    ],
  },
  {
    id: "manager-contact",
    title: <Trans id="10. Personal information manager" />,
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="In order to protect user's personal information and to handle complaints and inquiries related to personal information, the Company has designated the related department and personal information manager as follows." />
        ),
      },
    ],
  },
  {
    id: "manager-contact",
    title: <Trans id="11. Personal Information Request" />,
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="Members may contact the following persons to expedite the handling of personal information inquiries." />
        ),
      },
    ],
  },
  {
    id: "duty-of-notification",
    title: <Trans id="12. Duty of Notification" />,
    description: [
      {
        article: <Trans id="" />,
        section: (
          <Trans id="The current privacy policy can be changed according to the policy of the government or the company. If there is any addition, deletion or modification of the contents, it will be notified in advance on the homepage or e-mail 7 days prior to enforcement. This policy will be enforced from the date of notification. However, if important matters, such as the purpose of collecting/using and the target for providing a third party, are added, deleted, or modified, it will be notified 30 days in advance and will be implemented after 30 days. In addition, the Company shall comply with the relevant laws and regulations, such as the Act on Promotion of Information and Communications Network Utilization and Information Protection, etc for the collection and utilization of personal information and the provision of third parties, and in the event that the contents related to the items requiring consent of the user are added or changed, the Company will obtain the user's consent in accordance with the relevant laws and regulations." />
        ),
      },
    ],
  },
];

export const PURPOSE_OF_COLLECTION_LIST = [
  <Trans
    key="0"
    id="① Membership and management: To check the intention of membership registration, identify and authenticate the membership according to the service provision, maintain and control the membership status, prevent fraudulent use of the service, and to notify the various information and notices"
  />,
  <Trans
    key="1"
    id="② Providing services: Providing contents and providing services"
  />,
  <Trans
    key="2"
    id="③ Use in marketing and advertising: Purpose of developing new service and providing customized service, providing event and advertisement information, providing participation opportunity, providing customized advertisement information"
  />,
  <Trans
    key="3"
    id="④ Improvement of service: Purpose of checking the validity of the service, grasping the access frequency, or statistics about the use of the service of the member"
  />,
];

export const PERSONAL_INFO_SHARING_LIST = [
  <Trans
    key="0"
    id="① If necessary for statistical writing, academic research or market research, it is possible to provide personal information without the consent of the user if the specific individual is processed in an unrecognized form."
  />,
  <Trans
    key="1"
    id="② It is possible to provide personal information without the consent of the user even if there is a request by the investigation agency in accordance with procedures and methods set forth in laws and regulations for the purposes of investigation or for the purpose of investigation."
  />,
];
export const USER_RESPONSIBILITIES_LIST = [
  <Trans
    key="0"
    id="① The user must keep his / her personal information up to date and the user is responsible for the problem caused by the incorrect information input by the user."
  />,
  <Trans
    key="1"
    id="② You may be penalized in accordance with the related laws along with the loss of user qualification when processing the payment by stealing the membership or ID etc. of the other's personal information."
  />,
  <Trans
    key="2"
    id="③ The user is responsible for maintaining security for ID, password, etc., and cannot transfer or lease it to a third party. The user is obliged to cooperate with the periodic change of password for security in accordance with the company's privacy policy."
  />,
  <Trans
    key="3"
    id="④ After using the service of the Company, the user must close the login account and close the web browser program."
  />,
  <Trans
    key="4"
    id="⑤ The user must comply with laws related to personal information of other countries such as 'Act on Promotion of Information and Communications Network Utilization and Information Protection, Etc. ', 'Personal Information Protection Act ', 'Resident Registration Act'."
  />,
];
