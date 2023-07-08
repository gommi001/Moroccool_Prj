import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Recommend from './Recommend';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
    <h1 className='heading'>
        Find Exclusive Offers
    </h1>
    <Box sx={{width:'90%',marginLeft:'5%', backgroundColor:'transparent'}}>
      <AppBar position="static">
        <Tabs
        TabIndicatorProps={{style: {background:'red'}}}
        sx={{backgroundColor:'#e22020'}}
          value={value}
         
          onChange={handleChange}
          textColor="inherit"
          variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="full width tabs example"
        >
          <Tab sx={{":hover": {backgroundColor: "transparent",}}} label="All" {...a11yProps(0)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Recommended" {...a11yProps(1)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Restaurants" {...a11yProps(2)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Espace Enfants" {...a11yProps(3)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Espace Etudiants" {...a11yProps(4)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Espace Couple" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Recommend/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Recommend/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
    </>
  );
}