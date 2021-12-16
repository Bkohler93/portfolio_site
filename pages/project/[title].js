import { Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";

import React from "react";
import useFetchProject from "../../src/hooks/useFetchProject";

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
            height: "100vh",
            width: "100vw",
            backgroundColor: (theme) => theme.palette.backgrounds.mid,
          }}
        >
          <Grid
            container
            item
            xs={12}
            maxWidth="lg"
            sx={{
              height: "100%",
              p: "90px 0 0 0",
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
            </Grid>
            <Typography component="h2">Under development...</Typography>
            <Typography component="p">Check back later to see more!</Typography>
          </Grid>
        </Grid>
      </>
    );
  }
}
