import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About'
import Blog from './pages/Blog/Blog';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Maindes from './pages/Destinations/mainDes/Maindes';
import Meknes from './pages/Destinations/Meknes/Meknes';
import Fes from './pages/Destinations/Fes/Fes';
import Marrakech from './pages/Destinations/Marrakech/Marrakech'
import Essaouira from './pages/Destinations/Essaouira/Essaouira'
import Tangier from './pages/Destinations/Tangier/Tangier'
import Rabat from './pages/Destinations/Rabat/Rabat'
import Casablanca from './pages/Destinations/Casablanca/Casablanca'
import Ifrane from './pages/Destinations/Ifrane/Ifrane'
import Assilah from './pages/Destinations/Assilah/Assilah'
import Chefchaouen from './pages/Destinations/Chefchaouen/Chefchaouen'
import ElJadida from './pages/Destinations/Eljadida/ElJadida'
import Kenitra from './pages/Destinations/Kenitra/Kenitra'
import Tetouan from './pages/Destinations/Tetouan/Tetouan'
import Volubilis from './pages/Destinations/Volubilis/Volubilis'
import Agadir from './pages/Destinations/Agadir/Agadir'
import Houceima from './pages/Destinations/Houceima/Houceima'

import CafRes from './pages/Things/CafRes/mainCafRes/CafRes';
import Programs from './pages/Things/Programs/Programs';
import Trip from './pages/Things/Trip/Trip';
import Transport from './pages/Discover/transport/Transport'
import Shopping from './pages/Discover/shopping/Shopping';
import Museums from './pages/Discover/Museums/Museums';
import HistoireCulture from './pages/Discover/histoire/HistoireCulture';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import CafCasablanca from './pages/Things/CafRes/Caf_Casablanca/CafCasablanca'
import CafEssaouira from './pages/Things/CafRes/Caf_Essaouira/CafEssaouira'
import CafFes from './pages/Things/CafRes/Caf_Fes/CafFes'
import CafMarrakech from './pages/Things/CafRes/Caf_Marrakech/CafMarrakech'
import CafMeknes from './pages/Things/CafRes/Caf_Meknes/CafMeknes'
import CafRabat from './pages/Things/CafRes/Caf_Rabat/CafRabat'
import CafTangier from './pages/Things/CafRes/Caf_Tangier/CafTangier'
import CafAgadir from './pages/Things/CafRes/Caf_Agadir/CafAgadir';
import CafHouceima from './pages/Things/CafRes/Caf_Houceima/CafHouceima';
import CafePage from './pages/Things/CafRes/CafePage/CafePage';

import Hotels from './pages/Things/Hotels/mainHotels/Hotels';
import HotelCasablanca from './pages/Things/Hotels/Hot_Casablanca/HotelCasablanca'
import HotelEssaouira from './pages/Things/Hotels/Hot_Essaouira/HotelEssaouira'
import HotelFes from './pages/Things/Hotels/Hot_Fes/HotelFes'
import HotelMarrakech from './pages/Things/Hotels/Hot_Marrakech/HotelMarrakech'
import HotelMeknes from './pages/Things/Hotels/Hot_Meknes/HotelMeknes'
import HotelRabat from './pages/Things/Hotels/Hot_Rabat/HotelRabat'
import HotelTangier from './pages/Things/Hotels/Hot_Tangier/HotelTangier'
import HotelAgadir from './pages/Things/Hotels/Hot_Agadir/HotelAgadir';
import HotelHouceima from './pages/Things/Hotels/Hot_Houceima/HotelHouceima';
import HotelPage from './pages/Things/Hotels/HotelPage/HotelPage';
import SearchHotels from './pages/Things/Hotels/SearchHotels/SearchHotels';
import HotelsByType from './pages/Things/Hotels/HotelsByType/HotelsByType';


import Event from './pages/events/mainEvent/Event';
import EventCasablanca from './pages/events/eventCasablanca/EventCasablanca';
import EventEssaouira from './pages/events/eventEssaouira/EventEssaouira';
import EventFes from './pages/events/eventFes/EventFes';
import EventMarrakech from './pages/events/eventMarrakech/EventMarrakech';
import EventMeknes from './pages/events/eventMeknes/EventMeknes';
import EventRabat from './pages/events/eventRabat/EventRabat';
import EventTangier from './pages/events/eventTangier/EventTangier';
import EventPage from './pages/events/EventPage/EventPage';





function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />


          <Route path='/transport' element={ <Transport/> } />
          <Route path='/shopping' element={ <Shopping/> } />
          <Route path='/museums' element={ <Museums/> } />
          <Route path='/culture' element={ <HistoireCulture/> } />


          <Route path='/blog/:id' element={<Blog />} />
          

          <Route path='destination'>
            <Route index element={ <Maindes/> } />
            <Route path='meknes' element={ <Meknes/> } />
            <Route path='fes' element={ <Fes/> } />
            <Route path='marrakech' element={ <Marrakech/> } />
            <Route path='tanger' element={ <Tangier/> } />
            <Route path='rabat' element={ <Rabat/> } />
            <Route path='casablanca' element={ <Casablanca/> } />
            <Route path='essaouira' element={ <Essaouira/> } />
            <Route path='ifrane' element={ <Ifrane/> } />
            <Route path='chefchaouen' element={ <Chefchaouen/> } />
            <Route path='tetouan' element={ <Tetouan/> } />
            <Route path='asilah' element={ <Assilah/> } />
            <Route path='kenitra' element={ <Kenitra/> } />
            <Route path='eljadida' element={ <ElJadida/> } />
            <Route path='volubilis' element={ <Volubilis/> } />
            <Route path='agadir' element={ <Agadir/> } />
            <Route path='alhoceima' element={ <Houceima/> } />
          </Route>


          <Route path='events' >
            <Route index element={ <Event/> }/>
            <Route path='eventcasablanca' element={ <EventCasablanca/> }/>
            <Route path='eventessaouira' element={ <EventEssaouira/> }/>
            <Route path='eventfes' element={ <EventFes/> }/>
            <Route path='eventmarrakech' element={ <EventMarrakech/> }/>
            <Route path='eventmeknes' element={ <EventMeknes/> }/>
            <Route path='eventrabat' element={ <EventRabat/> }/>
            <Route path='eventtangier' element={ <EventTangier/> }/>
            <Route 
                path=':id/' 
                element = { <EventPage/> } />
          </Route>


          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
         

          <Route path='things'>          
            <Route path='hotels' >
              <Route index element={ <Hotels/> }/>
              <Route path='hotelcasablanca' element={ <HotelCasablanca/> }/>
              <Route path='hotelessaouira' element={ <HotelEssaouira/> }/>
              <Route path='hotelfes' element={ <HotelFes/> }/>
              <Route path='hotelmarrakech' element={ <HotelMarrakech/> }/>
              <Route path='hotelmeknes' element={ <HotelMeknes/> }/>
              <Route path='hotelrabat' element={ <HotelRabat/> }/>
              <Route path='hoteltangier' element={ <HotelTangier/> }/>
              <Route path='hotelagadir' element={ <HotelAgadir/> }/>
              <Route path='hotelhouceima' element={ <HotelHouceima/> }/>
              <Route path='hotelsearch' element = { <SearchHotels/> } />
              <Route path='hotelByType' element = { <HotelsByType/> } />
              <Route 
                path=':id/' 
                element = { <HotelPage/> } />
            </Route>


            <Route path='cafes'>
              <Route index element = { <CafRes/> } />
              <Route path='cafecasablanca' element = { <CafCasablanca/> } />
              <Route path='cafeessaouira' element = { <CafEssaouira/> } />
              <Route path='cafefes' element = { <CafFes/> } />
              <Route path='cafemarrakech' element = { <CafMarrakech/> } />
              <Route path='cafemeknes' element = { <CafMeknes/> } />
              <Route path='caferabat' element = { <CafRabat/> } />
              <Route path='cafetangier' element = { <CafTangier/> } />
              <Route path='cafeagadir' element = { <CafAgadir/> } />
              <Route path='cafehouceima' element = { <CafHouceima/> } />
              <Route 
                path=":id/" 
                element = { <CafePage/> } 
              />             
            </Route>


            <Route path='programs' element={ <Programs/> } />
            <Route path='trip' element={ <Trip/> } />
          </Route>


          <Route path='Login' element={ <Login/> } />


          <Route path='about' element={ <About/> } />
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
