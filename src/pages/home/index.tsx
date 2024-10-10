import { Box, TextField, Typography ,Button} from "@mui/material";
import styles from "./home.module.scss";

const StringCalculator = () => {
  const handleInputChange = (newValue: string) => {
    console.log("newValue is-", newValue);
  };
  return (
    <>
      <Box className={styles.calculatorContainer}>
        <Typography variant="body1" title={"Help text"}>Type text below</Typography>
        <TextField
          variant="outlined"
          onChange={(e) =>
            handleInputChange((e.target as HTMLInputElement).value)
          }
          data-testid={"input-element"}
        />
        <Button variant="contained">Add</Button>
      </Box>
    </>
  );
};
export default StringCalculator;
