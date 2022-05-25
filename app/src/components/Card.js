import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import datas from "../datas/data";
import TabsPro from "./TabsPro";

export default function OutlinedCard() {
  return (
    <Grid container spacing={2}>
      {datas.map((el, id) => {
        return (
          <Grid item xs={12} md={4} key={id}>
            <Box>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 30 }}
                      color="text.primary"
                      gutterBottom
                    >
                      {el.plan}
                    </Typography>

                    <TabsPro el={el} id={id}/>
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
                  </CardActions>
                </React.Fragment>
              </Card>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
