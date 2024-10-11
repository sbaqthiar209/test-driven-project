import { Box, TextField, Typography, Button } from "@mui/material";
import styles from "./home.module.scss";
import React from "react";

const StringCalculator = () => {
  const [inputString, setInputString] = React.useState<string>("");
  const [helptext, setHelptext] = React.useState<string>(
    "Please type the string"
  );
  const handleInputChange = (newValue: string) => {
    setInputString(newValue);
  };
  let result = 0,delimeter="";
  const addValue = (newChar: string[]) => {
    const characterToCheck = newChar[0];
    if (newChar.length === 0) {
      return result;
    }
    result = result + (isNaN(Number(characterToCheck)) ? 0 : Number(characterToCheck));
    newChar.shift();
    addValue(newChar);
    return result;
  };
  const addFromString = (newValueToAdd: string) => {
    if (newValueToAdd === "") {
      return;
    }
    if (newValueToAdd.startsWith("//")) {
      delimeter = newValueToAdd[2];
      newValueToAdd = newValueToAdd.replaceAll(`//${delimeter}`, "");
    }
    const delimeterToUse = delimeter ? delimeter :",";
    let cleanedArray = newValueToAdd.replaceAll("\\n", delimeterToUse).split(delimeterToUse);
    const finalValue = addValue(cleanedArray);
    if (finalValue) {
      setInputString(`${finalValue}`);
      setHelptext("Sum is");
    } else {
      setHelptext("Invalid Input String");
    }
  };
  return (
    <>
      <Box className={styles.calculatorContainer}>
        <Typography variant="body1" title={"Help text"}>
          {helptext}
        </Typography>
        <TextField
          variant="outlined"
          value={inputString}
          onChange={(e) =>
            handleInputChange((e.target as HTMLInputElement).value)
          }
          inputProps={{
            "data-testid": "input-element",
          }}
        />
        <Button
          variant="contained"
          onClick={() => addFromString(inputString)}
          data-testid="add-button"
        >
          Add
        </Button>
      </Box>
    </>
  );
};
export default StringCalculator;
