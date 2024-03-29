import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_VUEJS from "../../assets/img/skills/vuejs-logo.png";
import L_ANGULAR from "../../assets/img/skills/angular-logo.png";
//import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
//import L_EXPRESS from "../../assets/img/skills/express.svg";
//import L_DJANGO from "../../assets/img/skills/django.svg";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_MYSQL from "../../assets/img/skills/mysql_logo.png";
//import L_DYNAMODB from "../../assets/img/skills/dynamodb_logo.png";
import L_REACT_NATIVE from "../../assets/img/skills/React_Native_Logo.png";
//import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_FLUTTER from "../../assets/img/skills/flutter_logo.png";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_JAVA from "../../assets/img/skills/Java_logo.png";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_SPRINGBOOT from "../../assets/img/skills/spring_logo.png";
import L_CSHARP from "../../assets/img/skills/c_sharp.png";

export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
    {
      link: "https://vuejs.org/",
      imgAltText: "Vuejs",
      imgSrc: L_VUEJS,
      skillName: "Vue JS",
    },
    {
      link: "https://angular.io/",
      imgAltText: "Angular",
      imgSrc: L_ANGULAR,
      skillName: "Angular",
    },
    {
      link: "https://sass-lang.com/",
      imgAltText: "Sass",
      imgSrc: L_SASS,
      skillName: "Sass",
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },

    // {
    //   link: "https://react-bootstrap.github.io/",
    //   imgAltText: "React Bootstrap",
    //   imgSrc: L_REACT_BOOTSTRAP,
    //   skillName: "React Bootstrap",
    // },
    {
      link: "https://styled-components.com/",
      imgAltText: "styled-components",
      imgSrc: L_STYLED_COMPONENTS,
      skillName: "styled-components",
    },
  ],

  backend: [
    {
      link: "https://spring.io/projects/spring-boot",
      imgAltText: "Spring Boot",
      imgSrc: L_SPRINGBOOT,
      skillName: "Spring Boot",
    },
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Node.js",
      imgSrc: L_NODE_JS,
      skillName: "Node.js",
    },
    // {
    //   link: "https://expressjs.com/",
    //   imgAltText: "Express",
    //   imgSrc: L_EXPRESS,
    //   skillName: "Express",
    // },
    // {
    //   link: "https://www.djangoproject.com/",
    //   imgAltText: "Django",
    //   imgSrc: L_DJANGO,
    //   skillName: "Django",
    // },
    {
      link: "https://flask.palletsprojects.com/",
      imgAltText: "Flask",
      imgSrc: L_FLASK,
      skillName: "Flask",
    },
  ],
  hostingPlatforms: [
    // {
    //   link: "https://www.heroku.com/",
    //   imgAltText: "Heroku",
    //   imgSrc: L_HEROKU,
    //   skillName: "Heroku",
    // },
    {
      link: "https://pages.github.com/",
      imgAltText: "GitHub Pages",
      imgSrc: L_GITHUB_PAGES,
      skillName: "GitHub Pages",
    },
  ],
  programmingLanguages: [
    {
      link: "https://www.java.com/",
      imgAltText: "Java",
      imgSrc: L_JAVA,
      skillName: "Java",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://www.typescriptlang.org/",
      imgAltText: "TypeScript",
      imgSrc: L_TYPESCRIPT,
      skillName: "TypeScript",
    },
    {
      link: "https://www.python.org/",
      imgAltText: "Python",
      imgSrc: L_PYTHON,
      skillName: "Python",
    },
    {
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      imgAltText: "C#",
      imgSrc: L_CSHARP,
      skillName: "C#",
    },
  ],
  databases: [
    {
      link: "https://www.mysql.com/",
      imgAltText: "MYSQL",
      imgSrc: L_MYSQL,
      skillName: "MY-SQL",
    },
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: L_MONGODB,
      skillName: "MongoDB",
    },
    // {
    //   link: "https://aws.amazon.com/dynamodb/",
    //   imgAltText: "DynamoDB",
    //   imgSrc: L_DYNAMODB,
    //   skillName: "DynamoDB",
    // },
  ],
  mobileDev: [
    {
      link: "https://reactnative.dev/",
      imgAltText: "Rnative",
      imgSrc: L_REACT_NATIVE,
      skillName: "React Native",
    },
    {
      link: "https://www.flutter.com/",
      imgAltText: "Flutter",
      imgSrc: L_FLUTTER,
      skillName: "Flutter",
    },
  ],
};
