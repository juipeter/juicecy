import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//หน้าสร้าง owner

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";



const theme = createTheme();

export default function SignUp() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const back = () => {
    localStorage.setItem("token", window.location("/index"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      fullname: data.get("fullname"),
      emailOwner: data.get("emailOwner"),
      phone: data.get("phone"),
      password: data.get("password"),
      home_num: data.get("home_num"),
    };
    fetch("http://localhost:3001/registerowner", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          MySwal.fire({
            html: <i>REGISTER SUCCESS!</i>,
            icon: "success",
          });
          window.location = "/index";
          localStorage.setItem("token", data.token);
        } else {
          alert({ message: "error" });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const backindex =(event) => {
    window.location="/index"
    event.preventDefault('token');
    localStorage.key('token')
    
   }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            สร้างข้อมูลเจ้าของบ้าน
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="emailOwner"
                  label="Email"
                  name="emailOwner"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="phone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <br />
              <br />
              <Grid
                item
                xs={12}
                className="tt"
                style={{ display: "grid", padding: "18px" }}
              >
                <select
                  name="home_num"
                  id="home_num"
                  style={{
                    width: "auto",
                    DISPLAY: "grid",
                    padding: "initial",
                    height: "34PX",
                  }}
                  autoComplete="home_num"
                >
                  <option value="17/01">17/01</option>
                  <option value="17/02">17/02</option>
                  <option value="17/03">17/03</option>
                  <option value="17/04">17/04</option>
                  <option value="17/05">17/05</option>
                  <option value="17/06">17/06</option>
                  <option value="17/07">17/07</option>
                  <option value="17/08">17/08</option>
                </select>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <button  onClick={backindex} type="button" class="btn btn-primary">
                  BACK
                </button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
