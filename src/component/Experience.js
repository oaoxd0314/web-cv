import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Timeline, Event } from "react-timeline-scribble";
import { Icon } from "@material-ui/core";

export default function Experience(props) {
  const { title, posts } = props;
  return (
    <>
      <Typography component="h1" variant="h5" align="left">
        {title}
      </Typography>
      <Container align="center" >

        {posts.map((posts) => (
          <Timeline >
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
