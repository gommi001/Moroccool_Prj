import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import './tabs.scss'




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
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
    <Box className='tabs' sx={{ width: '95%', marginLeft:3 , marginBottom:10 }}>
      
      <h1>Best Plans in this City</h1>
      <Box className='tob' sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Plan 1" {...a11yProps(1)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Plan 2" {...a11yProps(2)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Plan 3" {...a11yProps(2)} />
          <Tab sx={{":hover": {backgroundColor: "transparent"}}} label="Plan 4" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className='tob'>
      <TabPanel value={value} index={0}>
        <h2 style={{}}>Plan pour découvrir l’historique Casablanca </h2>
<h3>Matin</h3>

Commencez votre journée par une visite de la Mosquée Hassan II, l’un des monuments les plus emblématiques de la ville. Ensuite, rendez-vous au Musée de la Fondation Abderrahman Slaoui pour en apprendre davantage sur l’histoire et la culture de Casablanca et du Maroc

<div>
  <br></br>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 7 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{bgcolor:'#ccb167'}}><img style={{width:'100%'}} src='https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/></Item>
          </Grid>           
        ))}
      </Grid>
    </Box>
</div>
<h3>Midi</h3>

Pour déjeuner, dirigez-vous vers le quartier des Habous pour déguster un tajine traditionnel dans l’un des nombreux restaurants locaux.
Après-Midi : 
En après-midi, visitez le marché central pour découvrir les produits locaux et les artisans marocains.

<h3>La nuit</h3> 

Visitez la Mosquée Hassan II : La mosquée est éclairée la nuit et offre une vue magnifique sur l’océan. Des visites guidées sont disponibles.

Dînez dans un restaurant gastronomique : Casablanca est connue pour ses excellents restaurants proposant une cuisine locale et internationale. Vous pouvez essayer des plats tels que le tajine, le couscous, les fruits de mer, ou opter pour une cuisine internationale.

Promenade sur la Corniche : La corniche est l’un des endroits les plus populaires pour une promenade nocturne à Casablanca. Vous pouvez admirer les lumières de la ville et profiter de l’air frais de l’océan
      </TabPanel>
      </div>
      <div className='tob'>
      <TabPanel value={value} index={1}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
      </TabPanel>
      </div>
      <div className='tob'>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
      </div>
      <div className='tob'>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      </div>
  </Box>
  );
}