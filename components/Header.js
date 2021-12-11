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
} from "@mui/material";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `about`, path: `/about` },
  { title: `projects`, path: `/projects` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
              padding: 0,
            }}
          >
            <IconButton edge="start" aria-label="home">
              <MuiNextLink activeClassName="active" href="/">
                <Box
                  component="img"
                  src="./longLogo.png"
                  alt="logo"
                  sx={{
                    display: { xs: `none`, md: `inline` },
                  }}
                />
                <Box
                  component="img"
                  src="./shortLogo.png"
                  alt="logo"
                  sx={{ display: { xs: `inline`, md: `none` } }}
                />
              </MuiNextLink>
            </IconButton>

            <Navbar navLinks={navLinks} />

            <Stack direction="row" spacing={4}>
              <Link href="https://github.com/Bkohler93">
                <Box
                  component="img"
                  src="./linkedin-32px.png"
                  alt="logo"
                  sx={{
                    display: { xs: `none`, md: `inline` },
                  }}
                />
              </Link>
              <Link href="https://github.com/Bkohler93">
                <Box
                  component="img"
                  src="./GitHub-Mark-Light-32px.png"
                  alt="logo"
                  sx={{ display: { xs: `none`, md: `inline` } }}
                />
              </Link>
            </Stack>
            <SideDrawer navLinks={navLinks} />
          </Container>
        </Toolbar>
      </AppBar>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
