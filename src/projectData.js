const projects = [
  {
    title: "Scatchat",
    description: "Twitter-like mobile app",
    category: "Side Project",
    previewImg: {
      src: "card-scatchat.png",
      alt: "mobile application screenshot",
    },
    imgs: [
      {
        src: "scatChatCreate_sized.png",
        alt: "create scatchat screenshot",
      },
      {
        src: "scatChatHomescreen_sized.png",
        alt: "scatchat homescreen screenshot",
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
          "Firebase Firestore",
          "Firebase Auth",
          "Tensorflow's Coco-ssd",
          "NodeJS",
        ],
      },
    ],
    longDescription: "",
  },
  {
    title: "One-Time Pad Encryption",
    description: "Message encryption software",
    category: "School Assignment",
    previewImg: {
      src: "OTP_prev.png",
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
  },
  {
    title: "King of Space",
    description: "Online multiplayer game",
    category: "School Assignment",
    previewImg: {
      src: "KoS_prev.png",
      alt: "video game screenshot",
    },
    imgs: [
      {
        src: "KoS_gameplay.png",
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
  },
];

export default projects;
