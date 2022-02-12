import { Grid, Typography } from "@mui/material";

/* eslint-disable react/no-unescaped-entities */
const AboutUsPage = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="column"
        maxWidth="lg"
        sx={{
          p: { xs: "100px 40px 100px 40px", lg: "100px 0 100px 0" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: { xs: `center`, md: `left` },
            fontWeight: `bold`,
            margin: { xs: `0 0 60px 0` },
          }}
        >
          About Me
        </Typography>
        <Typography
          component="p"
          variant="h4"
          sx={{
            fontWeight: `bold`,
            pb: "10px",
          }}
        >
          What I'm Doing.
        </Typography>
        <Typography
          component="p"
          sx={{
            p: "20px 0 20px 0",
          }}
        >
          Currently I am learning all that I can about computers and development
          in my coursework at Oregon State University. I am constantly pushing
          myself to gain a deep understanding of concepts covered in class, and
          am always improving my development process and coding skills in
          assignments.
        </Typography>
        <Typography
          component="p"
          className="paragraph"
          sx={{
            p: "0px 0 50px 0",
          }}
        >
          Outside of class I’ve been creating my own applications, challenging
          myself to learn new frameworks in the process. When not pushing keys
          you can find me hanging out with my girlfriend and dog, snowboarding,
          hiking, cooking, or listening to music.
        </Typography>
        <Typography
          component="p"
          variant="h4"
          sx={{
            fontWeight: `bold`,
            pb: "5px",
          }}
        >
          What I've done.
        </Typography>
        <Typography
          component="p"
          sx={{
            p: "20px 0 0px 0",
          }}
        >
          I spent the first part of my professional life in the military, where
          I served as an airborne infantryman in the US Army for five years. The
          majority of my time was spent stationed in Germany where I took part
          in training missions across much of Europe. In my downtime, I decided
          to take an online computer science course, Harvard’s CS50. This course
          is what really sparked my interest in computer science, and helped me
          decide what I wanted to do with my time after the military. In school
          I’ve taken courses in Data Structures, Algorithms, Databases, Software
          Engineering, Web Development, and Operating Systems.
        </Typography>
        <Typography
          component="p"
          className="paragraph"
          sx={{
            p: "20px 0 50px 0",
          }}
        >
          In school I’ve become familiar with writing code in C, C++,
          JavaScript, HTML, CSS, and PHP. Outside of class I’ve taken Udemy
          courses for programming in Python and Java, as well as becoming
          proficient with ReactJS and React Native. I've also familiarized
          myself with the .NET framework by creating a mobile application with
          Xamarin.forms and am in the process of creating a web API with
          Microsoft's Entity Framework Core and PostgreSQL database management
          system.
        </Typography>
        <Typography
          component="p"
          variant="h4"
          sx={{
            fontWeight: `bold`,
            pb: "10px",
          }}
        >
          What I hope to do.
        </Typography>
        <Typography
          component="p"
          sx={{
            p: "20px 0 20px 0",
          }}
        >
          Before finishing my degree I hope to gain industry experience with
          internships and part-time jobs. I love building out projects and
          learning all I can along the way. I hope I can get the opportunity to
          be a valuable asset to your team!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUsPage;
