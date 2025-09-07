/* Your Personal Portfolio Content
*/

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section
const illustration = {
  animated: true,
};

const greeting = {
  username: "Kaushika Semwal", 
  title: "Hi all, I'm Kaushika",
  subTitle: emoji(
    "A B.Tech student in Artificial Intelligence with a passion for Computer Vision, Generative AI, and building impactful tech solutions. 🚀"
  ),
  resumeLink: "https://kaushikasemwal.github.io/portfolio/resume.pdf",
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/kaushikasemwal", 
  linkedin: "https://www.linkedin.com/in/kaushika-semwal-255165316/",
  gmail: "kaushika13semwal@gmail.com", 
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "AI & ML ENTHUSIAST FOCUSED ON BUILDING AND DEPLOYING INTELLIGENT SYSTEMS",
  skills: [
    emoji("⚡ Building and training computer vision and generative AI models."), 
    emoji("⚡ Developing front-end solutions for web applications."), 
    emoji("⚡ Applying concepts of Linear Algebra, Probability, and Low-Level Design."), 
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
  ],
  display: true,
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Mukesh Patel School of Technology Management & Engineering",
      subHeader: "B.Tech in Artificial Intelligence",
      logo: require("./assets/images/image.png"),
      duration: "2023 – Present",
      descBullets: [],
    },
    {
      schoolName: "Pace Junior College",
      subHeader: "Class 12 (HSC)",
      duration: "2021",
      descBullets: [],
    },
    {
      schoolName: "Rajhans Vidyalaya",
      subHeader: "Class 10 (SSC)",
      logo: require("./assets/images/rajhans_logo.webp"),
      duration: "2019",
      descBullets: [],
    },
  ],
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Intern",
      company: "Valiance Solutions",
      companylogo: require("./assets/images/valiance-logo.png"),
      date: "May 2025 – Present",
      desc: "Developed and tested computer vision models, gaining practical exposure to CNNs and object detection. Collaborated on mini-projects and prototypes later refined for client deployment.",
      descBullets: [],
    },
    {
      role: "Senior Executive, Microsoft Students Club (MPSTME)",
      company: "MPSTME",
      companylogo: require("./assets/images/microsoft_learn.jpg"),
      date: "Aug 2025 – Present",
      desc: "Coordinated workshops and tech events, engaging 100+ students. Mentored junior members and contributed to event organization and execution.",
      descBullets: [],
    },
    {
      role: "Senior Executive, Sattva (NMIMS Cultural Committee)",
      company: "NMIMS",
      companylogo: require("./assets/images/image.png"),
      date: "Jan 2025 – Mar 2025",
      desc: "Led cultural event planning and execution, ensuring smooth operations and high student participation.",
      descBullets: [],
    },
  ],
};

// Your Open Source Section to View Your Github Pinned Projects
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I'VE BUILT",
  projects: [
    {
      //image: require("./assets/images/ai-image-generator.png"), // TODO: Add this image
      projectName: "Plant Disease Detection using Computer Vision",
      projectDesc: "A web application that leverages generative AI to create images from user-provided text prompts, built with HTML, CSS, and JavaScript.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/kaushikasemwal/plant_desiese_detection",
        },
      ],
    },
    {
      //image: require("./assets/images/netflix-clone.png"), // TODO: Add this image
      projectName: "Analyze Citizens' Travel Mode",
      projectDesc: "A front-end clone of the Netflix landing page, created to practice and demonstrate modern HTML and CSS skills.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/kaushikasemwal/-analyze-citizens-travel-mode",
        },
      ],
    },
    {
      //image: require("./assets/images/netflix-clone.png"), // TODO: Add this image
      projectName: "Email Spam Detection",
      projectDesc: "A front-end clone of the Netflix landing page, created to practice and demonstrate modern HTML and CSS skills.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/kaushikasemwal/fraud_detection",
        },
      ],
    },
    {
      //image: require("./assets/images/netflix-clone.png"), // TODO: Add this image
      projectName: "Iris Payment System",
      projectDesc: "A front-end clone of the Netflix landing page, created to practice and demonstrate modern HTML and CSS skills.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/kaushikasemwal/iris-payment-system",
        },
      ],
    },
  ],
  display: true,
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Key certifications and workshops I have completed.",
  achievementsCards: [
    {
      title: "Low Level Design of Payment Apps",
      subtitle: "Completed a certification on system design principles for payment applications from Scaler.",
      image: require("./assets/images/Scaler.png"), 
      footerLink: [
        {
      name: "View Certificate",
      url: "https://kaushikasemwal.github.io/portfolio/certificates/LLD.pdf",
        }
      ],
    },
    {
      title: "Building Resilience",
      subtitle: "Completed a professional development course on building resilience from LinkedIn Learning.", 
      image: require("./assets/images/linkedin_learning.png"),
      footerLink: [
        {
      name: "View Certificate",
      url: "https://kaushikasemwal.github.io/portfolio/certificates/Building Resilience.pdf",
        }
      ],
    },
    {
      title: "Introduction to Artificial Intelligence",
      subtitle: "Completed a course focused on the fundamentals of AI from LinkedIn.",
      image: require("./assets/images/linkedin_learning.png"),
      footerLink: [
        {
      name: "View Certificate",
      url: "https://kaushikasemwal.github.io/portfolio/certificates/Introduction to Artificial Intelligence.pdf",
        }
      ],
    },
    {
      title: "Blockchain Training Workshop",
      subtitle: "Participated in a hands-on workshop covering the fundamentals of blockchain technology.", 
      image: require("./assets/images/image.png"), // TODO: Add this image
      footerLink: [
        {
      name: "View Certificate",
      url: "https://kaushikasemwal.github.io/portfolio/certificates/Blockchain Training.png",
        }
      ],
    },
    {
      title: "Java Programming",
      subtitle: "Participated in a hands-on workshop covering the fundamentals of Java programming.", 
      image: require("./assets/images/image.png"),
      footerLink: [
        {
      name: "View Certificate",
      url: "https://kaushikasemwal.github.io/portfolio/certificates/Java Workshop.jpeg",
        }
      ],
    },
    {
      title: "Microsoft Learn Student Ambassador",
      subtitle: "Was part of the Microsoft Learn Student Ambassador program during my second year of college.",
      image: require("./assets/images/microsoft_learn.jpg"),
      footerLink: [
        {
      name: "View Certificate",
      url: "https://kaushikasemwal.github.io/portfolio/certificates/MSC Certificates.png",
        }
      ],
    },
  ],
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "8591691721", 
  email_address: "kaushika13semwal@gmail.com", 
};

const isHireable = true;
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true, // Set to false to hide the resume section
};

const twitterDetails = {
  userName: "your-twitter-handle", // This part doesn't matter
  display: false,                  // 👈 This line hides the section
};

// Hiding sections that are not yet filled
const techStack = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection,
  twitterDetails
};