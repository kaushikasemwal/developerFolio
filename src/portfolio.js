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
  [cite_start]username: "Kaushika Semwal", [cite: 1]
  title: "Hi all, I'm Kaushika",
  subTitle: emoji(
    "A B.Tech student in Artificial Intelligence with a passion for Computer Vision, Generative AI, and building impactful tech solutions. 🚀"
  ),
  resumeLink: "", // TODO: Add a link to your new resume PDF file.
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  [cite_start]github: "https://github.com/kaushikasemwal", [cite: 3]
  [cite_start]linkedin: "https://www.linkedin.com/in/kaushika-semwal-255165316/", [cite: 3]
  [cite_start]gmail: "kaushika13semwal@gmail.com", [cite: 2]
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "AI & ML ENTHUSIAST FOCUSED ON BUILDING AND DEPLOYING INTELLIGENT SYSTEMS",
  skills: [
    [cite_start]emoji("⚡ Building and training computer vision and generative AI models."), [cite: 10, 15]
    [cite_start]emoji("⚡ Developing front-end solutions for web applications."), [cite: 9, 22]
    [cite_start]emoji("⚡ Applying concepts of Linear Algebra, Probability, and Low-Level Design."), [cite: 11]
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
      [cite_start]subHeader: "B.Tech in Artificial Intelligence", [cite: 5]
      [cite_start]duration: "2023 – Present", [cite: 5]
      descBullets: [],
    },
    {
      schoolName: "Pace Junior College",
      [cite_start]subHeader: "Class 12 (HSC)", [cite: 6]
      [cite_start]duration: "2021", [cite: 6]
      descBullets: [],
    },
    {
      schoolName: "Rajhans Vidyalaya",
      [cite_start]subHeader: "Class 10 (SSC)", [cite: 7]
      [cite_start]duration: "2019", [cite: 7]
      descBullets: [],
    },
  ],
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Intern",
      [cite_start]company: "Valiance Solutions", [cite: 15]
      [cite_start]date: "May 2025 – Present", [cite: 15]
      [cite_start]desc: "Developed and tested computer vision models, gaining practical exposure to CNNs and object detection. Collaborated on mini-projects and prototypes later refined for client deployment.", [cite: 15]
      descBullets: [],
    },
    {
      [cite_start]role: "Senior Executive, Microsoft Students Club (MPSTME)", [cite: 16]
      company: "MPSTME",
      [cite_start]date: "Aug 2025 – Present", [cite: 16]
      [cite_start]desc: "Coordinated workshops and tech events, engaging 100+ students. Mentored junior members and contributed to event organization.", [cite: 17]
      descBullets: [],
    },
    {
      [cite_start]role: "Senior Executive, Sattva (NMIMS Cultural Committee)", [cite: 18]
      company: "NMIMS",
      [cite_start]date: "Jan 2025 – Mar 2025", [cite: 18]
      [cite_start]desc: "Led cultural event planning and execution, ensuring smooth operations and high student participation.", [cite: 19]
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
const Projects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/ai-image-generator.png"), // TODO: Add this image
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
      image: require("./assets/images/netflix-clone.png"), // TODO: Add this image
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
      image: require("./assets/images/netflix-clone.png"), // TODO: Add this image
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
      image: require("./assets/images/netflix-clone.png"), // TODO: Add this image
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
      [cite_start]subtitle: "Completed a certification on system design principles for payment applications from Scaler.", [cite: 26]
      image: require("./assets/images/scaler-logo.png"), // TODO: Add this image
      footerLink: [],
    },
    {
      title: "Building Resilience",
      [cite_start]subtitle: "Completed a professional development course on building resilience from LinkedIn Learning.", [cite: 28]
      image: require("./assets/images/linkedin-logo.png"), // TODO: Add this image
      footerLink: [],
    },
    {
      title: "Developing Your Emotional Intelligence",
      [cite_start]subtitle: "Completed a course focused on emotional intelligence from LinkedIn.", [cite: 29]
      image: require("./assets/images/linkedin-logo.png"), // TODO: Add this image
      footerLink: [],
    },
    {
      title: "Blockchain Training Workshop",
      [cite_start]subtitle: "Participated in a hands-on workshop covering the fundamentals of blockchain technology.", [cite: 30]
      image: require("./assets/images/mpstme-logo.png"), // TODO: Add this image
      footerLink: [],
    },
  ],
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  [cite_start]number: "8591691721", [cite: 2]
  [cite_start]email_address: "kaushika13semwal@gmail.com", [cite: 2]
};

const isHireable = true;

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
};