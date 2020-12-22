import schoolprivacybadge from "../assets/schoolprivacybadge.jpg";
import studentsearchservice from "../assets/studentsearchservice.jpg";
import educatorguide from "../assets/educatorguide.jpg";
import bikelanes from "../assets/bikelanes.jpg";


const projects = [
  {
    id: 4,
    title: "School Privacy Badge",
    description:
      "I led a team of three to create the School Privacy Badge, a prototype designed to help schools protect student data privacy in their schools. Researched and designed as part of Harvard's T522 course: Innovation by Design: Projects in Educational Technology.",
    repoLink: "",
    deployLink: "https://bit.ly/SchoolPrivacyBadge",
    image: schoolprivacybadge,
    role: "UX Researcher / Designer",
    weekDuration: 10,
    technologies1: ["Notability", "Adobe XD"],
    technologies2: [],
  },
  {
    id: 3,
    title: "The Right to Your Data",
    description:
      "For my thesis, I am researching the collection and analysis of educational data by standardized testing and college admissions organizations such as the College Board and the ACT. I hope to determine equity implications for programs such as the Student Search Service providing students with personalized college recommendations while helping colleges engage in predatory marketing schemes.",
     repoLink: "",
     deployLink: "",
    image: studentsearchservice,
    role: "Researcher",
    weekDuration: 26,
    technologies1: [],
    technologies2: [],
  },
  {
    id: 2,
    title: "Teachable Classifier Educator Guide",
    description:
      "I developed an educator guide to be used alongside the Teachable Classifier plugin for Scratch. I designed the guide to incorporate discussions about what works and doesn't work within the Teachable Classifier plugin in order to spark conversations about algorithmic bias and facial recognition.",
    repoLink: "",
    deployLink: "https://docs.google.com/presentation/d/17Vq1dse3DUgdOlzo75TEpsqQuYJnm5m2PCalP0fBOpE/edit?usp=sharing",
    image: educatorguide,
    role: "Learning Experience Designer",
    weekDuration: "6",
    technologies1: ["Scratch", "Google Drive"],
    technologies2: [],
  },
  {
    id: 1,
    title: "Bike Safety in Boston: A Policy Proposal",
    description:
      "I collaborated with a classmate on a policy proposal around increasing bike lanes in Boston suggesting the creation of bike lanes in areas with high density of crashes and low density of bike lanes, especially in areas that are near Bluebikes stations without access to bike lanes.",
    repoLink: "",
    deployLink: "https://docs.google.com/presentation/d/1hFjpB3UqRTP0-owJUyEZbH83deY0w7xZiSYH8jcRQ3E/edit?usp=sharing",
    image: bikelanes,
    role: "Data Analyst",
    weekDuration: 3,
    technologies1: ["Tableau", "ArcGIS", "R"],
    technologies2: [],
  }
];

export default projects;
