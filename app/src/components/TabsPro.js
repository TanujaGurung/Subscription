import React from "react";
import { Link } from "react-router-dom";

import { Typography, Box, Button } from "@mui/material";
import { Tabs, Tab } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { incrementByAmount } from "../features/amountSlice";

function TabsPro(props) {
  const [value, setValue] = React.useState(0);
  const [amount, setAmount] = React.useState(props.el.monthly);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (value === 1) {
      setAmount(props.el.monthly);
    }
    if (value === 0) {
      setAmount(props.el.yearly);
    }
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>
    );
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="monthly" />
        <Tab label="yearly" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography fontSize="30px">${props.el.monthly} </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography fontSize="30px">${props.el.yearly} </Typography>
      </TabPanel>
      <Link
        to={`/cart/${props.id}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          {" "}
          Join{" "}
        </Button>
      </Link>
    </>
  );
}
export default TabsPro;
