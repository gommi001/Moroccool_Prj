import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import HeroDes from '../../../../components/heroDes/HeroDes'
import Selects from '../../../../components/selects/Selects'
import useFetch from '../../../../hooks/useFetch'
import SearchItem from '../../../../components/searchitem/SearchItem'
import FilterCafe from '../../../../components/FilterCafe'
import FooterBanner from '../../../../components/footbanner/FooterBanner'
import Foot from '../../../../components/foot/Footer'


const Fes = () => {

  const { data, loading, error, reFetch } = useFetch("/hotels?city=fes")

  return (
    <div className='fes'>
      <Navbar/>
      <HeroDes
        image="https://images.pexels.com/photos/13429178/pexels-photo-13429178.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Hotels and Riads in Fes"
        arcity=""
      />
        {/*   {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
          )}
        */} 

      <FilterCafe/>
      
      <FooterBanner/>
      <Foot/>
      
    </div>
  )
}

export default Fes