import { Grid, Container, Typography } from "@mui/material";
import { Card, CardHeader, CardContent, CardMedia } from "@mui/material";
import { Image } from "next/image";
import projects from "../src/projectData";
import React from "react";
import ProjectCard from "../components/ProjectCard.js";

const ProjectPage = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        backgroundColor: (theme) => theme.palette.backgrounds.mid,
        m: 0,
        p: 0,
        display: "flex",
      }}
      className="flex-centered full-width"
    >
      <Grid
        container
        maxWidth="lg"
        sx={{
          p: "90px 0 0 0",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            textAlign: { xs: `center`, md: `left` },
            fontWeight: `bolder`,
            margin: { md: `0 0 40px 0`, xs: `30px 0 0 0` },
            width: "100%",
          }}
        >
          Projects
        </Typography>
        <Grid container item direction="column">
          <Grid item xs={12}>
            {projects.map((project, i) => (
              <ProjectCard
                title={project.title}
                imgs={project.imgs}
                info={project.info}
                key={i}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectPage;
