import React from 'react';
import Navbar from '../../../../components/navbar/Navbaryy';
import HeroDes from '../../../../components/heroDes/HeroDes';
import useFetch from '../../../../hooks/useFetch';
import SearchItem from '../../../../components/searchitem/SearchItem';
import FilterCafe from '../../../../components/FilterCafe';
import FooterBanner from '../../../../components/footbanner/FooterBanner';
import Foot from '../../../../components/foot/Footer';
import './casablancahotel.scss';

const Casablanca = () => {
  const { data, loading, error, reFetch } = useFetch('/hotels?city=casablanca');

  return (
    <div className="casablanca">
      <Navbar />
      <HeroDes
        image="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Hotels in Casablanca"
        arcity=""
      />
      {/*  {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
          )}
        */}
      <FilterCafe />

      <FooterBanner />
      <Foot />
    </div>
  );
};

export default Casablanca;
