import { Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import useFetchProject from "../../src/hooks/useFetchProject";
import TechCard from "../../src/components/TechCard";

// DATA
import projects from "../../src/projectData";

export default function Project() {
  const router = useRouter();
  const { title } = router.query;
  const project = useFetchProject(title);

  if (!project) {
    return (
      <Grid
        container
        className="flex-centered"
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Typography>No project with that name exists.</Typography>
      </Grid>
    );
  } else {
    return (
      <>
        <Grid
          container
          className="flex-centered"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            direction="column"
            maxWidth="lg"
            sx={{
              p: { xs: "100px 40px 100px 40px", lg: "100px 0 100px 0" },
            }}
          >
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  textAlign: { xs: `center`, md: `left` },
                  fontWeight: `bolder`,
                  margin: { md: `0 0 40px 0` },
                }}
              >
                {project.title}
              </Typography>
              {project.longDescription.map((description, i) => (
                <Typography
                  key={i}
                  component="p"
                  sx={{
                    margin: "20px",
                  }}
                >
                  {description}
                </Typography>
              ))}
              <Grid
                container
                direction={"row"}
                maxWidth="100vw"
                sx={{
                  padding: "40px 0 20px 0",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {project.longTechnologyUsed.map((props, i) => (
                  <TechCard
                    key={i}
                    length={project.longTechnologyUsed.length}
                    {...props}
                    // hasURL="true"
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
