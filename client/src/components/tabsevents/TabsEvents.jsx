import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Recommend from '../Recommend';
import './evtabs.scss'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#e22020' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='tabs' sx={{ width: '95%', marginBottom:10 }}>
      
      <h1>Find The Exclusive Events</h1>
      <Box className='boxt' sx={{ borderBottom: 1, borderColor: 'divider', marginTop:5}}>
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example" 
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile>
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Recommended" {...a11yProps(1)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Summer Events" {...a11yProps(2)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Weekly Events" {...a11yProps(2)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Winter Events" {...a11yProps(2)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="VIP Events" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className=''>
      <TabPanel value={value} index={0}>
        <Recommend/>
      </TabPanel>
      </div>
      <div className=''>
      <TabPanel value={value} index={1}>
        <h2>Coming Soon</h2>
      </TabPanel>
      </div>
      <div className=''>
      <TabPanel value={value} index={2}>  
        <Recommend/>
      </TabPanel>
      </div>
      <div className=''>
      <TabPanel value={value} index={3}>
      <h2>Coming Soon</h2>
      </TabPanel>
      </div>
  </Box>
  );
}