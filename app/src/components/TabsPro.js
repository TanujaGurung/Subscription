import React from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, Router } from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
  }
  
  function TabsPro(props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <>
        {" "}
        <Tabs value={value} onChange={handleChange}>
          <Tab label="monthly" />
          <Tab label="yearly" />
        </Tabs>
        <TabPanel value={value} index={0}>
         <Typography fontSize='30px'>${props.monthly} </Typography> 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Typography fontSize='30px'>${props.yearly} </Typography>
        </TabPanel>
        <Link
          to={{
            pathname: "/cart",
            state: {
                
                monthly : props.monthly,
            }
          }}
          style={{ textDecoration: "none", width:'100%' }}
        >
             <Button variant="contained" sx={{width:"100%"}} >   
            Join
            </Button>
         
            </Link> 
      </>
    );
  }
  export default TabsPro;