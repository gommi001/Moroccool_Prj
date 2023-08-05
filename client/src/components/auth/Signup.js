import {React, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import axios from 'axios';


const theme = createTheme();

export default function SignInSide() {

  const [info, setInfo] = useState({});

  const handleChange = event =>{
    setInfo(prev =>({...prev,[event.target.id] : event.target.value}))
  };

  const navigate = useNavigate()

  const handleClick =async (event) =>{
    event.preventDefault();
    const data= new FormData()
    try{ 
      const newUser = {
      ...info,    
    };
    const response = await axios.post("/auth/register", newUser)
    console.log('Data sent successfully:', response.data);

    }catch(err){
      console.log(err)
    }
    navigate("/login")
  }
 
  return (
    <ThemeProvider theme={theme}>
      <Link to='/login'>
        <NavigateBeforeIcon 
            style={{
              position:'absolute',
              backgroundColor:'white',
              borderRadius:'50%',
              left:0,
              top:30,
              marginLeft:40,
              cursor:'pointer',
              color:'red',
            }}
            fontSize='large'
        />
      </Link>

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>            
            <Box component="form" noValidate  sx={{ mt: 1 }}>

            <form>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username" 
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                id="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="city"
                label="Your City"
                type="select"
                id="city"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Your Phone"
                type="tel"
                id="phone"
                autoFocus
                onChange={handleChange}
              />
              
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
              >
                Register
              </Button>
              </form>
              <Grid container>
                <Grid item xs>
                  <a href="#" variant="body2">
                    Forgot password?
                  </a>
                </Grid>
                <Grid item>
                  <a href="/login" variant="body2">
                    {"You already have an account? Login"}
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}