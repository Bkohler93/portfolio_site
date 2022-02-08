const projects = [
  {
    title: "Twitter-like Mobile App",
    description: "Twitter-like mobile app",
    category: "Side Project",
    previewImg: {
      src: "/card-scatchat.png",
      alt: "mobile application screenshot",
    },
    imgs: [
      {
        src: "/scatChatCreate_sized.png",
        alt: "create twitter-like mobile app screenshot",
      },
      {
        src: "/scatChatHomescreen_sized.png",
        alt: "twitter-like mobile app homescreen screenshot",
      },
    ],
    info: [
      {
        title: "Overview",
        data: "A mobile application where users can anonymously share their thoughts and feelings, but only while “taking care of business”.",
      },
      {
        title: "Written In...",
        data: "Javascript",
      },
      {
        title: "Technology Used",
        data: [
          "React Native",
          "Tiny Yolov2 Object Detection Model",
          ".NET 6",
          "ML.NET",
          "PostgreSQL",
        ],
      },
    ],
    longDescription: [
      "This app uses object detection to create an initial authorization screen for users. Users can only login when they take a picture of an identifying object or symbol, proving that they are in that location. This concept enables users to feel connected to other users in similar situations. When people are doing things they often have inspiring ideas or just a funny thought, and this app can be where people can share those ideas to people who are in a similar experience, at a similar location, as themselves. To accomplish this, I used the open source and cross-platform machine learning framework ML.NET to run Tiny Yolov2, an object detection model.",
      "Another necessary choice for this app is to allow users to post anonymously. They will see feedback on how much others have enjoyed their content, but the author field of posts are filled with whatever the creator wanted. This allows users to fully express themselves with no care about being credited for a post.",
      "This leads to the last essential feature, the reporting feature. Users can report posts for a few different reasons, and posts can quickly be taken down if subsequent reports are filed against a post. Because the app utilizes anonymity, some users will try to abuse that, and quick action will need to be taken to ensure a positive experience for users.",
    ],
    longTechnologyUsed: [
      {
        title: "React Native",
        URL: "https://reactnative.dev",
        previewImg: {
          src: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
          alt: "React Native image",
        },
        description:
          "Open-source UI software framework. Used to develop the front end application in Javascript.",
      },
      {
        title: "Tiny Yolov2 ODM",
        URL: "https://github.com/onnx/models/tree/master/vision/object_detection_segmentation/tiny-yolov2",
        previewImg: {
          src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          alt: "Github Reference",
        },
        description:
          "A real-time neural network for object detection that detects 20 different classes.",
      },
      {
        title: ".NET 6",
        URL: "https://dotnet.microsoft.com/en-us/",
        previewImg: {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/800px-.NET_Logo.svg.png",
          alt: ".NET 6 Logo",
        },
        description:
          "Open-source developer platform used to create the backend API.",
      },
      {
        title: "ML.NET",
        URL: "https://dotnet.microsoft.com/en-us/apps/machinelearning-ai/ml-dotnet",
        previewImg: {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mldotnet.svg/1200px-Mldotnet.svg.png",
          alt: "ML.NET logo",
        },
        description:
          "An open source machine learning framework used to run the object detection model.",
      },
      {
        title: "PostgreSQL",
        URL: "https://www.postgresql.org/",
        previewImg: {
          src: "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
          alt: "PostgreSql logo",
        },
        description:
          "Open Source relational database management system used to store user and post data.",
      },
    ],
  },
  {
    title: "One-Time Pad Encryption",
    description: "Message encryption software",
    category: "School Assignment",
    previewImg: {
      src: "/OTP_prev.png",
      alt: "UNIX terminal screenshot",
    },
    imgs: [],
    info: [
      {
        title: "Overview",
        data: "A UNIX application where users can encrypt or decrypt messages",
      },
      {
        title: "Written In...",
        data: "C",
      },
      {
        title: "Topics Used",
        data: ["Inter-Process Communication", "Multithreading"],
      },
    ],
    longDescription: [
      "This application consists of five small programs that encrypt and decrypt information. ",
      "The first program is a key generator that generates a random key consisting of upper-case letters (A-Z) and spaces. Then there are two backend services, one for sending encrypted messages and one for receiving encrypted messages. Additionally there are two interface programs for users to receive encrypted messages, and one to send encrypted messages.",
    ],
    longTechnologyUsed: [
      {
        title: "C",
        URL: "https://en.cppreference.com/w/c/language",
        previewImg: {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
          alt: "C language logo",
        },
        description:
          "General-purpose language. Utilized multithreading and socket libraries.",
      },
    ],
  },
  {
    title: "King of Space",
    description: "Online multiplayer game",
    category: "School Assignment",
    previewImg: {
      src: "/KoS_prev.png",
      alt: "video game screenshot",
    },
    imgs: [
      {
        src: "/KoS_gameplay.png",
        alt: "video game screenshot",
      },
    ],
    info: [
      {
        title: "Overview",
        data: "An HTML online multiplayer game where players fight to rule the galaxy",
      },
      {
        title: "Written In...",
        data: ["Javascript", "HTML", "CSS"],
      },
      {
        title: "Technology Used",
        data: ["HTML Canvas", "NodeJS"],
      },
    ],
    longDescription: [
      "This web application is an online multiplayer game where users control a spaceship and fly around space to hunt down other players. This uses the HTML canvas element as the area where the game is rendered, and a backend api written with Node.js controls player state and logic.",
      "Socket.io is used here for communication between the server and players, as well as a live chat feature for players to communicate with one another during play.",
      "MongoDB is utilized for storing high scores and a leaderboard page is available for users to check how their score ranks against others.",
      "This project was completed for a school assignment, and the server fails to server greater than five players at once.",
    ],
    longTechnologyUsed: [
      {
        title: "Node.Js",
        URL: "https://nodejs.org/en/docs/",
        previewImg: {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
          alt: "NodeJs logo",
        },
        description:
          "Open source development platform for executing JavaScript code server-side.",
      },
    ],
  },
];

export default projects;
