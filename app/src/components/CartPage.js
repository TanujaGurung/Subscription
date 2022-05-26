import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useSelector } from "react-redux";
import { selectAmount} from '../features/amountSlice';
import StripeContainer from "./StripeContainer";
import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const CartPage = (props) => {
  const amount = useSelector(selectAmount);
  // const location = useLocation();
  // const state = location.state;
  // console.log(state);
  const [showItem, setShowItem] = useState(false);
  const [showButton, setShowButton] = useState(false);
 
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const handleSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    setShowButton(true);
  };

  const initialValues = {
    fullname: "",
    username: "",
    email: "",
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div className="register-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
                <label>Full Name</label>
                <Field name="fullname" type="text" className="form-control" />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username"> Username </label>
                <Field name="username" type="text" className="form-control" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"> Email </label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ display: showButton ? "none" : "block" }}
                >
                  continue
                </button>
              </div>
            </Form>
          </Formik>
          {showButton ? (
            <>
              <h3>${amount}</h3>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => setShowItem(true)}
              >
                Make Payment
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Card variant="outlined">
            <React.Fragment>
              <CardContent>
                <Typography
                  sx={{ fontSize: 30 }}
                  color="text.primary"
                  gutterBottom
                >
                  ${amount}
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
              {showItem ? <StripeContainer /> : <></>}
            </React.Fragment>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CartPage;
