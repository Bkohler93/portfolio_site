import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import MuiNextLink from "../components/MNLink";

export default function ProjectPreviewCard({
  title,
  description,
  category,
  previewImg,
}) {
  return (
    <Grid
      item
      xs={12}
      md={4}
      className="flex-centered"
      sx={{ padding: { lg: "5px", xs: "20px 0 20px 0" } }}
    >
      <Card sx={{ maxWidth: 900 }}>
        <MuiNextLink href={"/project/" + title}>
          <CardMedia
            component="img"
            image={previewImg.src}
            alt={previewImg.alt}
            priority="true"
            sx={{
              maxHeight: "200px",
            }}
          />
        </MuiNextLink>
        <CardContent>
          <MuiNextLink
            sx={{
              textDecoration: "none",
            }}
            href={"/project/" + title}
          >
            <Typography gutterBottom variant="h6" component="div">
              {description}
            </Typography>
          </MuiNextLink>
          <Typography
            variant="body2"
            sx={{ color: (theme) => theme.palette.fonts.divider }}
          >
            {category}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
