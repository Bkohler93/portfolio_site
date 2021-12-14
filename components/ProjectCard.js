import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Box, Typography, Grid, Button } from "@mui/material";

export default function ProjectCard({ title, imgs, info }) {
  return (
    <Card sx={{ m: 3, p: 6 }}>
      <Typography
        component="h3"
        variant="h3"
        sx={{ textAlign: "center", pb: "40px" }}
      >
        {title}
      </Typography>
      {/* holds images and info */}
      <Box
        sx={{
          display: `flex`,
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* holds just images */}
        <Box
          sx={{
            display: `flex`,
            justifyContent: "center",
            pb: { xs: "30px", md: "50px" },
            maxWidth: "48%",
            marginRight: "10px",
          }}
        >
          {imgs.map((img, i) => {
            return (
              <CardMedia
                component="img"
                image={img.src}
                alt={img.alt}
                sx={{ m: 1 }}
                key={i}
                sx={{
                  borderRadius: "3px",
                }}
              ></CardMedia>
            );
          })}
        </Box>
        {/* holds data */}
        <Grid
          container
          sx={{
            width: { md: "50%", xs: "100%" },
          }}
        >
          {info.map((item, i) => {
            return (
              <Grid item xs={12} md={6} key={i} sx={{ pb: 5 }}>
                <Typography
                  component="h4"
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    pb: "12px",
                  }}
                >
                  {item.title}
                </Typography>
                {Array.isArray(item.data) ? (
                  item.data.map((datum, i) => {
                    return (
                      <Typography
                        component="p"
                        key={i}
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        {datum}
                      </Typography>
                    );
                  })
                ) : (
                  <Typography
                    component="p"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {item.data}
                  </Typography>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <CardActions className="flex-centered">
        <Button size="large" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
