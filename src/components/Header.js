// components
import { styled } from "@mui/system";
import MuiNextLink from "../components/MNLink";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Link,
  Stack,
} from "@mui/material";

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
              p: 0,
            }}
          >
            <IconButton edge="start" aria-label="home">
              <MuiNextLink activeClassName="active" href="/">
                <Box
                  component="img"
                  src="/longLogo.png"
                  alt="logo"
                  sx={{
                    display: { xs: `none`, md: `inline` },
                  }}
                />
                <Box
                  component="img"
                  src="/shortLogo.png"
                  alt="logo"
                  sx={{ display: { xs: `inline`, md: `none` } }}
                />
              </MuiNextLink>
            </IconButton>

            <Navbar navLinks={navLinks} />

            <Stack direction="row" spacing={4}>
              <Link href="https://www.linkedin.com/in/brett-kohler-32ba59227/">
                <Box
                  component="img"
                  src="/linkedin-32px.png"
                  alt="logo"
                  sx={{
                    display: { xs: `none`, md: `inline` },
                  }}
                />
              </Link>
              <Link href="https://github.com/Bkohler93">
                <Box
                  component="img"
                  src="/GitHub-Mark-Light-32px.png"
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
    </>
  );
};

export default Header;
