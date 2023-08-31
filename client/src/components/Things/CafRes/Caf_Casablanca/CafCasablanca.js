import * as React from 'react';
import Navbar from '../../../../components/navbar/Navbar'
import HeroDes from '../../../../components/heroDes/HeroDes'
import useFetch from '../../../../hooks/useFetch'
import SearchItem from '../../../../components/searchitem/SearchItem'
import CafItems from '../../../../components/cafItems/CafItems'
import Recommend from '../../../../components/Recommend'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'
import CafeCards from '../../../../components/cafeCards/CafeCards'
import { CircularProgress } from '@mui/material';


const CafCasablanca = ({item}) => {


  const { data, loading, error, reFetch } = useFetch("/cafes?cities=casablanca")

  return (
    <div className='casablanca'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        city="Cafe & Restaurant in Casablanca"
      />    
          
      <CafeCards
        city='casablanca'
        destination='Casablanca'     
      />
           
           
      <FilterCafe
        destination='casablanca'
      />

      <FooterBanner/>
      <Foot/>
    </div>
  )
}

export default CafCasablanca