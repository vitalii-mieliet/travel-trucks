import HomeImage1x from "@/assets/images/hero-1x.jpg";
import HomeImage2x from "@/assets/images/hero-2x.jpg";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `image-set(
      url(${HomeImage1x}) 1x,
      url(${HomeImage2x}) 2x
    )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="1440px" disableGutters>
        <Box>
          <Typography variant="h1" component="h1" mb={2}>
            Campers of your dreams
          </Typography>
          <Typography variant="h6" component="p" mb={5}>
            You can find everything you want in our catalog
          </Typography>
          <Button variant="contained" component={Link} to="/catalog">
            View Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
