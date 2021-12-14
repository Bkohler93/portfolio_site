import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <Grid
        component="section"
        container
        sx={{
          position: `relative`,
          top: 0,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: -100,
        }}
      >
        <Image
          src="/hero-img-compressed.png"
          alt="background-image"
          layout="fill"
          objectFit="cover"
          priority={true}
          loading="eager"
        />
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          position: "absolute",
          top: 60,
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          maxWidth="lg"
          sx={{
            height: "90vh",
            margin: "auto",
            paddingTop: "100px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: { xs: `center`, md: `left` },
              fontWeight: `bold`,
              margin: { md: `0 0 40px 0` },
            }}
            gutterBottom
          >
            Contact
          </Typography>
          <Typography
            component="p"
            variant="h4"
            sx={{
              mb: 10,
              mt: 5,
              textAlign: { xs: `center`, md: `left` },
            }}
          >
            Email: brettkohler93@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactPage;
