export const PORTFOLIO_DATA = {
  profile: {
    name: "Ayan Bhattacharya",
    photo: "../assets/mydata/profile_photo.jpg",
    phone_i: "+91",
    phone: "8918598165",
    mail: "ayanbhattacharya18@gmail.com",
    address: "Kolkata, West Bengal, India",
    socialMedia: [
      {
        name: "facebook",
        link: "https://www.facebook.com/profile.php?id=100010424076735&mibextid=2JQ9oc",
        class: "fa fa-facebook-official fa-lg",
      },
      {
        name: "twitter",
        link: "https://twitter.com/ayanbha56612875",
        class: "fa fa-twitter fa-lg",
      },
      {
        name: "github",
        link: "https://github.com/anefreeinity",
        class: "fa fa-github fa-lg",
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/ayan-bhattacharya-926b21103/",
        class: "fa fa-linkedin fa-lg",
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/ayanbhattacharya18?igsh=MWJvbzdodWllM210dw==",
        class: "fa fa-instagram fa-lg",
      },
    ],
  },
  about: {
    header: "I'm Ayan Bhattacharya, a FullStack Developer and Problem Solver.",
    discription: `Since my childhood, I've harbored a fascination for the realms of science and technology. 
      I pursued a bachelor's degree in electronics and instrumentation, discovering that virtually and 
      physically implementing ideas becomes possible with software tools and technology. As I navigate 
      this world, I find immense joy in learning and applying various techniques throughout my career.`,
    skills: [
      {
        name: "DOTNET CORE",
        percentage: "85%",
      },
      {
        name: "ANGULAR",
        percentage: "90%",
      },
      {
        name: "MERN STACK",
        percentage: "70%",
      },
      {
        name: "DSA & PROBLEM SOLVING",
        percentage: "90%",
      },
    ],
  },
  services: [
    {
      header: "",
      discription: "",
      logo: "",
    },
  ],
  projects: [
    {
      name: "ANEFreeInIty",
      photo:
        "https://pbs.twimg.com/media/GGEL9bVbEAAAXtK?format=jpg&name=large",
      description: `Use this credentials to test the system.\n*UserId: "user@123"\n *Password: "password"\n%\n
      "My project, 'ANEFreeInIty,' serves as a comprehensive implementation of my learning journey. It features multiple tabs, each offering distinct functionalities:"\n%\n
      1.HOME: Utilizes the My Anime List API to fetch anime data, enabling users to browse and search for anime. Authenticated users can also watch anime.\n
      2.MUSIC: Integrates the Spotify API to display songs categorized under various playlists. Users can enjoy free music previews.\n
      3.CANVAS: Currently a work in progress, this tab focuses on implementing mathematical functions and scientific concepts using Canvas and ThreeJS.\n
      4.PROFILE: Implements a backend API using Node.js and Express, with a MongoDB database hosted on different platforms. JSON Web Token (JWT) authentication is implemented for secure access.\n%\n
      *User Tab: Allows users to access, update, and delete their data.\n
      *Admin: Provides access to admin-specific data for users with admin credentials.\n
      *SuperAdmin: Reserved for users with superadmin credentials, offering functionalities to generate new users, and update or delete user details.\n%\n
      This project showcases a diverse range of skills and technologies, demonstrating my proficiency in full-stack development and API integration.
      (Note: Some functionalities may not work in mobile view)
      `,
      hostLink: "https://anefreeinity.vercel.app/",
      repoLink: null,
    },
    {
      name: "ANEFreeInIty music",
      photo:
        "https://pbs.twimg.com/media/GGEL9TMbUAA6Wx-?format=jpg&name=large",
      description: `Use this credentials to test the system.\n%\n*UserId: "user@123"\n *Password: "password" \n%\nSame as 'ANEFreeInIty'.`,
      hostLink: "https://anefreeinity.vercel.app/",
      repoLink: null,
    },
    {
      name: "ANEFreeInIty AI",
      photo:
        "https://pbs.twimg.com/media/GGEL9OlaAAAeRIb?format=jpg&name=large",
      description: `
      I have developed a vector library using C++ as a DLL (Dynamic Link Library) and exposed its 
      functionality through a .NET API. The library allows users to create and manipulate vectors, 
      performing various mathematical operations. The data is stored in a SQL-based database.\n%\n

      The user interface enables users to create multiple vectors and perform operations such as addition, 
      subtraction, scalar multiplication and linear combination. All calculations are processed in the backend using the C++ DLL, 
      ensuring efficient and accurate computations.
      (Note: Some functionalities may not work in mobile view)
      `,
      hostLink: null,
      repoLink: "https://github.com/anefreeinity-org/ANEFreeInIty-AI",
    },
    {
      name: "ANEFreeInIty Three",
      photo:
        "https://pbs.twimg.com/media/GGEL9GQa0AA2wfx?format=jpg&name=large",
      description: `
      This project utilizes React and Three.js to create an interactive 3D scene. The scene includes a panel 
      that can be rotated, allowing users to view and read labels. By clicking on elements, users can select 
      them. Once selected, users can interact with the elements further, such as enabling additional options.\n%\n

      A unique feature is the ability to select multiple elements by checking a 'select to drag' option, 
      which allows users to hold and drag to select multiple elements. This selection is temporary and can 
      be undone by deselecting the option, ensuring flexibility and ease of use.\n%\n

      Additionally, the project includes a waterflow animation feature. Users can enable this feature to 
      enjoy a realistic water flow animation, including dripping water through nozzles that were previously 
      selected. This feature adds a dynamic and visually engaging element to the scene.
      (Note: Some functionalities may not work in mobile view)
      `,
      hostLink: "https://anefreeinity-three.netlify.app/",
      repoLink: null,
      //"https://github.com/anefreeinity/three-js"
    },
  ],
  workExperiences: [
    {
      timeline: "Mar 2022 - May 2022",
      title: "Internship, Analyst",
      description: `Successfully completed a 60-day full-stack internship, 
      wherein I extensively utilized Core Java, Hibernate, JPA, and Spring Boot for backend development.
      Additionally, I leveraged PL/SQL for database management and Angular for frontend development. 
      Upon completion of the internship, I actively contributed to the creation of a comprehensive 
      full-stack application.`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
    },
    {
      timeline: "Aug 2022 - Present",
      title: "Associate Software Engineer",
      description: `I have been employed as a full-stack developer, where my responsibilities include 
      developing intricate webpages using Angular for the frontend, constructing web APIs using 
      .NET Core, and managing databases using PostgreSQL. Additionally, I have implemented unit test 
      cases for both frontend and backend components.`,
      logo: "https://cdn.worldvectorlogo.com/logos/johnson-controls-logo-1.svg",
    },
  ],
  statistic: {
    finishedProjects: 3,
    awardsWon: 2,
    companies: 2,
    bugFixed: 17,
  },
};

export const TABS = [
  "about",
  "services",
  "projects",
  "work",
  "statistics",
  "contact",
];
