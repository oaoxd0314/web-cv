import Mainpost from "../img/Smart-City.jpg";
import Me from "../img/me1.png";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import CodeIcon from "@material-ui/icons/Code";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

const data = {
  sections: [
    { id: "0", title: "Technology", url: "/Technology" },
    { id: "1", title: "Design", url: "/Design" },
    { id: "2", title: "Culture", url: "/Culture" },
    { id: "3", title: "Business", url: "/Business" },
    { id: "4", title: "Politics", url: "/Politics" },
    { id: "5", title: "Opinion", url: "/Opinion" },
    { id: "6", title: "Science", url: "/Science" },
    { id: "7", title: "Health", url: "/Health" },
    { id: "8", title: "Style", url: "/Style" },
    { id: "9", title: "Travel", url: "/Travel" },
  ],
  mainimg: {
    title: "Hi,我是 Chris ",
    description:
      "喜歡接觸新事物，擅長面對困難，雖然常常遭遇挫折，但目前還沒放棄過。",
    image: Mainpost,
    imgText: "main image description",
    linkText: " ",
  },

  aboutme: {
    title: "About Me",
    post:
      "曾就讀於國⽴⾼雄科技⼤學訊理系，對於前端頁面設計、資料庫及API串接和MVC、第三⽅Farmwork⼀定程度的了解。期望透過磨練讓自己成長，所以接觸了像是flutte、python-flask等等。未來希望能夠學習演算法⾛向後端、⼈⼯智慧等⽅⾯，有過豐富的活動企劃經驗，也曾拍攝多⽀宣傳影片。",

    img: Me,
    social: [
      {
        id: "0",
        name: "GitHub",
        icon: GitHubIcon,
        href: "https://github.com/oaoxd0314",
      },
      { id: "1", name: "EMail", icon: EmailIcon, href: "#" },
      {
        id: "2",
        name: "Facebook",
        icon: FacebookIcon,
        href: "https://www.facebook.com/superstaniy",
      },
    ],
  },
  project: [
    {
      id: "0",
      title: "Wadon 高科資訊平台",
      description: "code by flutter ok 吧",
      install: "write done how to start this project",
      image: "https://source.unsplash.com/random",
      url: "https://github.com/oaoxd0314/wadon_main",
    },
    {
      id: "1",
      title: "flask-practice",
      description: "udemy course practice",
      install: "write done how to start this project",
      image: "https://source.unsplash.com/random",
      url: "https://github.com/oaoxd0314/flask-practice",
    },
    {
      id: "2",
      title: "MyWebCV",
      description: "this code open soucre",
      install: "write done how to start this project",
      image: "https://source.unsplash.com/random",
      url: "https://github.com/oaoxd0314/web-cv",
    },
  ],

  experience: [
    {
      id: 0,
      year: "2016 Sep",
      title: "國立高雄科技大學",
      subtitle: "開始就讀",
      icon: SchoolIcon,
      post: "於2016年就讀國立高雄科技大學資訊管理系(原高雄應用科技大學)",
    },
    {
      id: 1,
      year: "2017 Dec - 2018 Dec",
      title: "資訊管理系學會",
      subtitle: "任職期間",
      icon: BusinessCenterIcon,
      post:
        "在此期間累積多次舉辦多次中小型活動的經驗，包括企劃書撰寫、場地布置、經費估算、流程設計、團隊合作和解決問題等等",
    },
    {
      id: 2,
      year: "2018 Jun - 2019 May",
      title: "專題競賽",
      subtitle: "wadon",
      icon: CodeIcon,
      post:
        "採用flutter做跨系統的專案，此專案旨在設計一個資訊流通的平台，讓高科大的活動資訊能夠更容易舉辦和執行。",
    },
    {
      id: 3,
      year: "2020 Jun",
      title: "國立高雄科技大學",
      subtitle: "畢業",
      icon: FlightTakeoffIcon,
      post:
        "於2020年畢業於國立高雄科技大學，熟悉前端網頁架構、撰寫以及部分後端設計和資料庫鑽寫連結。",
    },
  ],

  footer: {
    title: "Chris's Blog",
    description: "Ever tried. Ever Fail. Try Again. Fail Again. Fail Better.",
  },

  titles: { title: "Showprojecr" },
};

export default data;
