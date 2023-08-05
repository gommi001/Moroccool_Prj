import React from 'react';
import Navbar from '../../../../components/navbar/Navbaryy';
import HeroDes from '../../../../components/heroDes/HeroDes';
import useFetch from '../../../../hooks/useFetch';
import SearchItem from '../../../../components/searchitem/SearchItem';
import CafItems from '../../../../components/cafItems/CafItems';
import Recommend from '../../../../components/Recommend';
import FilterCafe from '../../../../components/FilterCafe';
import FooterBanner from '../../../../components/footbanner/FooterBanner';
import Foot from '../../../../components/foot/Footer';

const CafCasablanca = ({ item }) => {
  const { data, loading, error, reFetch } = useFetch('/cafes?city=casablanca');

  return (
    <div className="casablanca">
      <Navbar />
      <HeroDes
        image="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        city="Cafe & Restaurant in Casablanca"
      />

      {/* {loading ? (
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

export default CafCasablanca;
