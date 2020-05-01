import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Timeline, Event } from "react-timeline-scribble";


export default function Experience(props) {
  const { title, posts } = props;
  return (
    <>
      <Typography component="h1" variant="h5" align="left">
        {title}
      </Typography>
      <Container>
        {posts.map((posts) => (
          <Timeline>
            <Event
              interval={posts.year}
              title={posts.title}
              subtitle={posts.subtitle}
            >
<Typography>
  {posts.post}
</Typography>
                

            </Event>
          </Timeline>
        ))}
      </Container>
    </>
  );
}
