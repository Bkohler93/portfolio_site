// components
import { styled } from "@mui/system";
import MuiNextLink from "../components/MNLink";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import BackToTop from "./BackToTop";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Fab,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

const Footer = ({ navLinks }) => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: (theme) => theme.palette.backgrounds.bot,
          minHeight: "73px",
          minWidth: "100%",
          display: "flex",
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
