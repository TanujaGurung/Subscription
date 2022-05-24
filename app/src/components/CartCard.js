import  React,{useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import datas from "../datas/data";
import TabsPro from "./TabsPro";
import { Link, Router } from "react-router-dom";
import StripeContainer from "./StripeContainer";

export default function CartCard() {
    const [showItem, setShowItem] = useState(false);
  return ( 
            <Box>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 30 }}
                      color="text.primary"
                      gutterBottom
                    >
                      {datas[0].plan}
                    </Typography>

                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$5.00</h3>
          <Button variant="contained" sx={{width:"100%"}} onClick={() => setShowItem(true)}>
            Make Payment
            </Button> 
        </>
      )}
                 
                  </CardActions>
                </React.Fragment>
              </Card>
            </Box>
       
  );
}

