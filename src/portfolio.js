/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "AFIF Musyayyidin",
  logo_name: "AFIF",
  nickname: "Sayyidin",
  subTitle:
    "An aspiring developer who loves to take on new projects that challenges his analytical and technological capacities.",
  resumeLink:
    "https://drive.google.com/file/d/1uivA6u4K_fro7rwdqFCUy6bSvZAbFmL2/view?usp=sharing",
  portfolio_repository: "https://github.com/afiflampard/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/afiflampard/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/afif-musyayyidin/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCsuf4EALm8beUsBSJuMLxeA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },

  /*
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/14167873/jongi95",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#FE7A16", // Reference https://simpleicons.org/?q=twitter
  },
  */

  {
    name: "Instagram",
    link: "https://www.instagram.com/afif_musyayyidin/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Implementing secure access to database",
        "⚡ Creating application backend in Javascript and Golang",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "App Development",
      fileName: "AndroidImg",
      skills: [
        "⚡ Experience working on Android apps",
        "⚡ Knowledge on several SDKs & APIs",
        "⚡ Deploying Firebase based apps for secure accessing of information from anywhere",
        "⚡ Adapting new Material Design principles for a more refined look",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "mdi:android-studio",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "VS",
          fontAwesomeClassname: "mdi:microsoft-visual-studio",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#02303A",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "ADB",
          fontAwesomeClassname: "ic:outline-adb",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Eclipse",
          fontAwesomeClassname: "simple-icons:eclipseide",
          style: {
            color: "#2C2255",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "40%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "C/C++/C#",
      progressPercentage: "30%",
    },
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript/TypeScript",
      progressPercentage: "65%",
    },
    {
      Stack: "Golang",
      progressPercentage: "70%",
    },
    {
      Stack: "React",
      progressPercentage: "50%",
    },
    {
      Stack: "SQL/PLSQL",
      progressPercentage: "80%",
    },
    {
      Stack: "HTML", //Insert stack or technology you have experience in
      progressPercentage: "30%", //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS",
      progressPercentage: "30%",
    },
    {
      Stack: "Bootstrap",
      progressPercentage: "30%",
    },
    {
      Stack: "PHP",
      progressPercentage: "60%",
    },
    {
      Stack: "Dart",
      progressPercentage: "65%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visual Studio", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Google Colab",
      progressPercentage: "80%",
    },

    {
      Stack: "Android Studio", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Netbeans",
      progressPercentage: "80%",
    },
    {
      Stack: "Microsoft Office",
      progressPercentage: "90%",
    },
    {
      Stack: "Google Docs",
      progressPercentage: "90%",
    },
    {
      Stack: "Postgres Database", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MS SQL Server", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase", //Insert stack or technology you have experience in
      progressPercentage: "50%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Github",
      progressPercentage: "80%",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Brawijaya University",
      subtitle: "S.Kom in Computer Science",
      logo_path: "brawijaya-220x220.png",
      alt_name: "IIITDM Kurnool",
      duration: "August 2017 - Feb 2021",
      cgpa: "3.73 / 4.00",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOP, Functional Programming, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning and Full Stack Development.",
      ],
      website_link: "https://ub.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Data Structures",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/259bcebba35c1ba43934608a5fab9907",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    {
      title: "Python Basics",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/39d3749b06308a77e0f596129029d4fe",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    /*
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
	*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a fresh graduate with experience gained from voluntary works on sites like stackoverflow, github.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Backend Developer",
          company: "PT Lanius Inovasi Indonesia",
          //company_url: "https://legatohealthtech.com/",
          logo_path: "lKaTYJG0_400x400.png",
          duration: "November 2020 - January 2021",
          location: "Surabaya, Indonesia",
          description: "I am working on Backend Developer, using Node JS/TS",
          color: "#0879bf",
        },
        {
          title: "Backend Developer",
          company: "PT Bits Miliartha",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "Logo-Bee.png",
          duration: "February 2021 - September 2021",
          location: "Surabaya, Indonesia",
          description:
            "I am working on Backend Developer, using Golang and Node JS ",
          color: "#9b1578",
        },
        {
          title: "Backend Developer",
          company: "PT Ada Ide Langsung Jalan (Smartlink)",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "smartlink.jpg",
          duration: "November 2021 - April 2022",
          location: "Malang, Indonesia",
          description:
            "I am working on Backend Developer, using Golang, Node JS, Nats, ElasticSearch, Maxwell",
          color: "#9b1578",
        },
        {
          title: "Backend Developer",
          company: "PT Tokopedia",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "tokopedia.png",
          duration: "April 2022 - Present",
          location: "Surabaya, Indonesia",
          description:
            "I am working on Backend Developer, using Golang, Python, Sql",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science",
          company: "PT Come (Global Tekno Kreasi)",
          company_url: "https://www.delhivery.com/",
          logo_path: "logo-come.png",
          duration: "Jun 2020 - August 2020",
          location: "Jakarta, Indonesia",
          description: "I have worked on project of predicting using API",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        /*
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
		*/
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects. Most of these are academic projects with some personal projects in between.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "afif.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://miftaulmannan.wordpress.com/projects/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Jabon, Sidoarjo",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/yV1Vkp7L3to9qvKX6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+6281615962254",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
