import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Timeline, Event } from "react-timeline-scribble";
import data from "../../../data/data";

export default class Experience extends React.Component {
  render() {
    return (
      <>
        <Typography variant="h4" align="left">
          Experience
        </Typography>
        <Container align="center">
          {data.experience.map((posts) => (
            <Timeline key={posts.id}>
              <Event
                interval={posts.year}
                title={posts.title}
                subtitle={posts.subtitle}
              >
                <Typography>{posts.post}</Typography>
              </Event>
            </Timeline>
          ))}
        </Container>
      </>
    );
  }
}
