import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import MuiNextLink from "../components/MNLink";

export default function TechCard({
  title,
  description,
  category,
  previewImg,
  length,
  URL,
}) {
  return (
    <Grid
      item
      xs={12}
      md={3}
      className="flex-centered"
      sx={{
        padding: { lg: "5px", xs: "20px 0 20px 0" },
      }}
    >
      <Card sx={{ maxWidth: 900, height: 350 }}>
        <a href={URL} target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            image={previewImg.src}
            alt={previewImg.alt}
            priority="true"
            sx={{
              height: "200px",
              objectFit: "contain",
              padding: "15px",
            }}
          />
        </a>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
