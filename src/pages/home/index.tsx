import { Box } from "@mui/material";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <Box className={styles.homeContainer} data-testid="home-banner">
        Test Page
      </Box>
    </>
  );
};
export default Home;
