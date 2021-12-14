import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProjectCard({ description, category, previewImg }) {
  return (
    <Grid item xs={12} md={4} className="flex-centered" sx={{ padding: "5px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={previewImg.src}
          alt={previewImg.alt}
          priority="true"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {description}
          </Typography>
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
