import PROJ_IMAGE_01 from "../../assets/img/projects/project-image-1.jpg";
import PROJ_IMAGE_02 from "../../assets/img/projects/project-image-2.jpg";
import PROJ_IMAGE_03 from "../../assets/img/projects/project-image-3.jpg";
// import PROJ_IMAGE_04 from "../../assets/img/projects/project-image-4.png";
import PROJ_IMAGE_05 from "../../assets/img/projects/fyp.PNG";

export const projects = [
  {
    projectName: "CyberSuccor - Final year project",
    projectimgSrc: PROJ_IMAGE_05,
    projectDescrep:
      "CyberSuccor is an AI-powered Sinhala Cyber Bullying Detection website that uses NLP and DL to identify Cyberbullying content online. By allowing users to input statements or images, it quickly determines if they contain bullying phrases. This innovative tool empowers users to take control of their online experience, ensuring a safe and inclusive environment by identifying offensive or hurtful language. Furthermore, CyberSuccor goes the extra mile by providing recommendations and notifying trusted contacts when a user continuously checks for bullying phrases, strengthening its role in fostering a positive digital community.",
    projectLinks: [
      {
        name: "Demo Video",
        link: "https://youtu.be/RZ9dHKT3s9M",
        type: "youtube",
      },
    ],
  },
  {
    projectName: "BirdO - Bird Recognition App",
    projectimgSrc: PROJ_IMAGE_01,
    projectDescrep:
      "BirdO is a new kind of bird ID tool created for the second year group project. When a user upload an image of an unrecognized bird to BirdO, it find out what bird it is that you most likely encountered in the vicinity of where you saw the bird. BirdO will provide major information about the bird you just encountered.",
    projectLinks: [
      {
        name: "Demo Video",
        link: "https://youtu.be/lKleLLGqytc/",
        type: "youtube",
      },
    ],
  },
  {
    projectName: "Train Ticket Reservation System",
    projectimgSrc: PROJ_IMAGE_02,
    projectDescrep:
      "A train ticket booking system with GUI developed using Java and MongoDB. Major functionalities: book a seat, view all seats, view empty seats, delete booked seats, find a booked seat using customer name, delete a reservation. Part 2: Boarding the customers to the train randomly. Generating a report of customer waitings.",
    projectLinks: [
      {
        name: "Code 1",
        link: "https://github.com/vajithChamuditha-99/Train-Booking-System-01",
        type: "github",
      },
      {
        name: "Code 2",
        link: "https://github.com/vajithChamuditha-99/Train-Booking-System-02",
        type: "github",
      },
    ],
  },
  {
    projectName: "Premier League Management System",
    projectimgSrc: PROJ_IMAGE_03,
    projectDescrep:
      "A football premier league management system with GUI developed using Java and JavaFX. All OOP concepts are used to develop the application. Matches table and Points table are available. Major functionalities: Random match generation, Search matches using date.",
    projectLinks: [
      {
        name: "GitHub",
        link: "https://github.com/vajithChamuditha-99/Primier-league-manager-java-javaFX",
        type: "github",
      },
    ],
  },
  // {
  //   projectName: "Crypto Tracker",
  //   projectimgSrc: PROJ_IMAGE_04,
  //   projectDescrep:
  //     "A cryptocurrency tracker app developed using React Native Expo and Redux. Major functionalities: Track trending cryptocurrencies with their cost and ups and downs in the last 24 hours and 7 days.",
  //   projectLinks: [
  //     {
  //       name: "GitHub",
  //       link: "https://github.com/vajithChamuditha-99/react-native-crypto-tracker",
  //       type: "github",
  //     },
  //   ],
  // },
];
