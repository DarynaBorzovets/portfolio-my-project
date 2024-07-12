import {
  cardTrick,
  openTable,
  jobHunting,
  me,
 

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  
  {
    id: "technologies",
    title: "Technologies",
  },
  
  
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "experience",
    title: "Experience",
  },
 
  {
    id: "contact",
    title: "Contact",
  },
];

const tech = [
  {title: "JavaScript"},
  {title: "Node.js"},
  {title: "React"},
  {title: "PostgreSQL"},
  {title: "HTML"},
  {title: "CSS"},
  {title: "Express"},
  {title: "RESTful APIs"},
  {title: "Axios"},
  {title: "DevTools"},
  {title: "Git"},
  {title: "GitHub"},
  {title: "TailWind"},
  {title: "BootStrap"},
  {title: "MaterialUI"},

];

const photo = [
  { 
    title: "Web Developer",
    icon: me
    
 },];


const experiences = [
  {
    company_name: "Chef Driven Hospitality",
    title: "Hostess",
  

    date: "November 2023 - Present time",
    points: [
      "Managing reservations",
      "Meeting and greeting guests",
      "Accommodating guests",
      "Team work, helping on the floor",
    ],
  },
  {
    title: "Server",
    company_name: "Silk Restaurant & Lounge",

    date: "2022-2023",
    points: [
      "Serving",
      "Transacting payments",
      "Opening, closing shifts",
      "Team work, helping on the floor",
    ],
  },
  {
    title: "Day Trader",
    company_name: "Self employed",

    date: "2018-2021",
    points: [
      "Stock market analysis",
      "Ameritrade Thinkorswim",
      "High-risk Trades, Day Trading",
      "Pre-market and After-market Trades",
      "Penny Stocks"
    ],
  },
  {
    title: "Hostess",
    company_name: "Sotto 13",
    date: "2019-2020",
    points: [
      "Managing reservations",
      "Meeting and greeting guests",
      "Accommodating guests",
      "Team work, helping on the floor",
    ],
  },

  {
    title: "Business owner",
    company_name: "Best Chance",
    date: "2018-2020",
    points: [
      "Recruiting, interviewing, and connecting clients with candidates.",
      "Business management",
      "Customer service",
    ],
  },
];

const projects = [
  {
    name: "Magic trick",
    description:"Creative project focusing on a magic trick. Designed and implemented the user interface using React and Tailwind. Used React Router for navigation between sections without refreshing the page.",
   
    image: cardTrick,
    source_code_link: "https://github.com/DarynaBorzovets/magic-trick-my-project",
  },
  {
    name: "Open-table-improvement",
    description:"Developed a VIP list exclusively for guests with special tags or notes. During peak hours, these VIP guests will receive exceptional service directly from management, ensuring a smoother and more personalized dining experience.",
   
    image: openTable,
    source_code_link: "https://github.com/DarynaBorzovets/open-table-improvement-my-project",
  },
  {
    name: "Job-hunting",
    description:
      "I have created an application that enables people to filter job opportunities by language. Additionally, businesses can effortlessly publish job posts in their native language.",
    
    image: jobHunting,
    source_code_link: "https://github.com/DarynaBorzovets/job-hunting-my-project",
  },
];

export { photo, experiences, projects, tech };


