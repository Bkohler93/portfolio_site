// components
import MuiNextLink from "../components/MNLink";
import { Container, Stack, Typography } from "@mui/material";

const Footer = ({ navLinks }) => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: (theme) => theme.palette.backgrounds.bot,
          minHeight: "73px",
          minWidth: "100%",
          display: "flex",
          position: "relative",
          bottom: 0,
          margin: 0,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            // backgroundColor: (theme) => theme.palette.backgrounds.bot,
            alignItems: `center`,
            flexGrow: 1,
            padding: 0,
          }}
        >
          <Typography component="body1">© 2021 Brett Kohler</Typography>
          <Stack direction="row" spacing={4}>
            {navLinks.map(({ title, path }, i) => (
              <MuiNextLink
                key={`${title}${i}`}
                href={path}
                sx={{ opacity: 1, textDecoration: `none` }}
                className="nav-link"
              >
                {title}
              </MuiNextLink>
            ))}
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
