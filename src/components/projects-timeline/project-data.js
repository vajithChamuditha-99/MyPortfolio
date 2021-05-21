import PROJ_IMAGE_01 from "../../assets/img/projects/project-image-1.jpg";
import PROJ_IMAGE_02 from "../../assets/img/projects/project-image-2.jpg";
import PROJ_IMAGE_03 from "../../assets/img/projects/project-image-3.jpg";
import PROJ_IMAGE_04 from "../../assets/img/projects/project-image-4.png";


export const projects = {
  projectOne: [
    {
      projectName: "BirdO - Bird Recognition App",
      projectimgSrc: PROJ_IMAGE_01,
      projectDescrep: "BirdO is a new kind of bird ID tool created for the University of Westminster BSc. CS/ BEng. SE second year group project by Team Aurora. When you upload an image of an unrecognized bird to BirdO, it find out what bird it is that you most likely encountered in the vicinity of where you saw the bird. BirdO will provide major information about the bird you just encountered.",
      projectLink: "https://youtu.be/lKleLLGqytc/"
    }
    
  ],

  projectTwo: [
    {
        projectName: "Train Ticket Reservation System ",
        projectimgSrc: PROJ_IMAGE_02,
        projectDescrep: "A train ticket booking system with GUI developed using java and mongodb. Major functionalities; book a seat, view all seats, viee empty seats, delete booked seats, find a booked seat using customer name, delete a reservation. Part 2: Boarding the customers to the train by randomly. Generating a report of customer waitings.",
        projectLink: "https://github.com/vajithChamuditha-99/Train-Booking-System-01",
        projectLinkTwo: "https://github.com/vajithChamuditha-99/Train-Booking-System-02",
    },
  ],
  projectThree: [
    {
        projectName: "Primier League Management System ",
        projectimgSrc: PROJ_IMAGE_03,
        projectDescrep: "A football premier league management system with GUI developed using java and javafx. All OOP concepts are used to develop the application. Matches table, Points table are available. Major functionalities: Random match generation , Search matches using date.",
        projectLink: "https://github.com/vajithChamuditha-99/Primier-league-manager-java-javaFX",

    },
  ],
  projectFour: [
    {
        projectName: "Crypto Tracker",
        projectimgSrc: PROJ_IMAGE_04,
        projectDescrep: "A crypto curruncy tracker app. Developed using react native expo and redux. Major functionalities: Track trending crypto currency with their cost and up and downs in last 24 hours and 7 days.",
        projectLink: "https://github.com/vajithChamuditha-99/react-native-crypto-tracker" ,

    },
  ],

};
