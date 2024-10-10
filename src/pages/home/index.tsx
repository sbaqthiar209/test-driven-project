import { Box, TextField, Typography ,Button} from "@mui/material";
import styles from "./home.module.scss";
import React, { useEffect } from 'react';

const StringCalculator = () => {
  const [inputString,setInputString]= React.useState<string>("");
  const handleInputChange = (newValue: string) => {
    setInputString(newValue)
  };
  return (
    <>
      <Box className={styles.calculatorContainer}>
        <Typography variant="body1" title={"Help text"}>Type text below</Typography>
        <TextField
          variant="outlined"
          value={inputString}
          onChange={(e) =>
            handleInputChange((e.target as HTMLInputElement).value)
          }
          inputProps={{
            "data-testid":"input-element"
          }}
        />
        <Button variant="contained">Add</Button>
      </Box>
    </>
  );
};
export default StringCalculator;
