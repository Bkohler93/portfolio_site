import {
  Grid,
  Container,
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Container
        sx={{
          boxShadow: 4,
          minWidth: "100%",
          minHeight: "40px",
          backgroundColor: (theme) => theme.palette.backgrounds.top,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container sx={{ padding: "40px 0 40px 0" }}>
          <Grid
            container
            maxWidth="lg"
            direction={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            }}
            className="flex-centered"
            sx={{
              padding: `40px 0 40px 0`,
            }}
          >
            <Grid item xs={12} md={7} lg={8}>
              <Typography
                variant="h1"
                sx={{
                  textAlign: { xs: `center`, md: `left` },
                  fontWeight: `bolder`,
                  margin: { md: `0 0 40px 0` },
                }}
              >
                Hi, I'm Brett
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: `center`, sm: `left` },
                }}
              >
                {" "}
                I study computer science at Oregon State University. Outside of
                class I like to create web and mobile applications.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} lg={4} className="flex-centered">
              <Box
                sx={{
                  height: "300px",
                  borderRadius: "50%",
                  boxShadow: 5,
                }}
                component="img"
                src="portrait.png"
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container
        sx={{
          boxShadow: 1,
          minWidth: "100%",
          minHeight: "40px",
          backgroundColor: (theme) => theme.palette.backgrounds.mid,
        }}
      >
        <Container>
          <Grid
            container
            maxWidth="lg"
            sx={{
              padding: "40px 0 20px 0",
            }}
          >
            <Grid item xs={12}>
              <Divider
                sx={{
                  textTransform: "uppercase",
                  color: (theme) => theme.palette.fonts.divider,
                  marginBottom: "20px",
                }}
              >
                Some of my latest work
              </Divider>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              className="flex-centered"
              sx={{ padding: "5px" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="card-scatchat.png"
                  alt="mobile application screenshot"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Twitter-like mobile app
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: (theme) => theme.palette.fonts.divider }}
                  >
                    Side Project
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              className="flex-centered"
              sx={{ padding: "5px" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="card-scatchat.png"
                  alt="mobile application screenshot"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Twitter-like mobile app
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: (theme) => theme.palette.fonts.divider }}
                  >
                    Side Project
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              className="flex-centered"
              sx={{ padding: "5px" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="card-scatchat.png"
                  alt="mobile application screenshot"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Twitter-like mobile app
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: (theme) => theme.palette.fonts.divider }}
                  >
                    Side Project
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Homepage;
