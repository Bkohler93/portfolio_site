import { Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <Grid
        container
        className="flex-centered"
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Typography>Content is under development.</Typography>
      </Grid>
    </>
  );
}
