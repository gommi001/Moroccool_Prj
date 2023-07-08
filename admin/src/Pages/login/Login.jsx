import {React, useContext, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';



const theme = createTheme();

export default function AdminLogin() {
  
   //LOGIN WITH DATABASE
 
   const [credentials, setCredentials] = useState({
    username:undefined,
    password:undefined
  })

  const navigate = useNavigate();

  const {loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e)=>{
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick =async e=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/auth/login", credentials)
      //
      if(res.data.isAdmin){
        dispatch({type:"LOGIN_SUCCESS", payload: res.data.details})
        navigate("/")
      }
      else{
        dispatch({type:"LOGIN_FAIL", payload: {message:"You are not allowed !"}})
      }
      //
    }catch(err){
      dispatch({type:"LOGIN_FAIL", payload: err.response.data})
    }
  }


  // CALLS OUT  ENDS HERE

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin's Space
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Log In
            </Button>
            {error && <Alert severity="info">{error.message}</Alert>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}