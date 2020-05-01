import React from "react";
import Introduction from "./component/Introduction";
import { makeStyles } from "@material-ui/core/styles";
import Aboutme from "./component/Aboutme";
import Experience from "./component/Experience";

import Footer from "./component/Footer";
import Header from "./component/Header";
import { Container, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Mainpost from "./img/Smart-City.jpg";
import Me from "./img/me1.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import Showprojecr from "./component/Showprojecr";
import CV from "./img/CV.pdf";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(4),
  },
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainimg = {
  title: "Hi,我是 Chris ",
  description:
    "喜歡接觸新事物，擅長面對困難，雖然常常遭遇挫折，但目前還沒放棄過。",
  image: Mainpost,
  imgText: "main image description",
  linkText: " ",
};

const aboutme = {
  title: "About Me",
  post:
    "曾就讀於國⽴⾼雄科技⼤學訊理系，對於前端頁面設計、資料庫及API串接和MVC、第三⽅Farmwork⼀定程度的了解。期望透過磨練讓自己成長，所以接觸了像是flutte、python-flask等等。未來希望能夠學習演算法⾛向後端、⼈⼯智慧等⽅⾯，有過豐富的活動企劃經驗，也曾拍攝多⽀宣傳影片。",

  img: Me,
  social: [
    { name: "GitHub", icon: GitHubIcon, href: "https://github.com/oaoxd0314" },
    { name: "EMail", icon: EmailIcon, href: "#" },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/superstaniy",
    },
  ],
};
const project = [
  {
    title: "Wadon 高科資訊平台",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    url: "https://github.com/oaoxd0314/wadon_main",
  },
  {
    title: "flask-practice",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    url: "https://github.com/oaoxd0314/flask-practice",
  },
  {
    title: "MyWebCV",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    url: "https://github.com/oaoxd0314/Chris-s-Web",
  },
];

const experience = [
  {
    year: "2016 Sep",
    title: "國立高雄科技大學",
    subtitle: "開始就讀",
    post: "#EmojiEventsIcon",
  },
  {
    year: "2017 Dec - 2018 Dec",
    title: "資訊管理系學會",
    subtitle: "任職期間",
    post: "#HowToRegIcon",
  },
  {
    year: "2018 Jun - 2019 May",
    title: "專題競賽",
    subtitle: "wadon",
    post: "#CodeIcon",
  },
  {
    year: "2020 Jun",
    title: "國立高雄科技大學",
    subtitle: "畢業",
    post: "#FlightTakeoffIcon",
  },
];

const footer = {
  title: "Chris's Blog",
  description: "Ever tried. Ever Fail. Try Again. Fail Again. Fail Better.",
};

const titles = { title: "Showprojecr" };

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Web CV" sections={sections} />
        <main>
          <Introduction post={mainimg} CV={CV} />
          <Grid container>
            <Aboutme
              title={aboutme.title}
              post={aboutme.post}
              img={aboutme.img}
              social={aboutme.social}
            />
          </Grid>
          <Grid container className={classes.mainGrid}>
            <Experience title="Experience" posts={experience} />
          </Grid>
          <h2 align="left" className={classes.mainGrid}>
            {titles.title}
          </h2>
          <Grid container spacing={4}>
            {project.map((post) => (
              <Showprojecr key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer post={footer} />
    </>
  );
}
