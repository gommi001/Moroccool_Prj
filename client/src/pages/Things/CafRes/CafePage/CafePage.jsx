import React, { useState } from 'react';
import Navbar from '../../../../components/navbar/Navbaryy';
import HeroDes from '../../../../components/heroDes/HeroDes';
import DescriptionCafe from '../../../../components/DescriptionCafe';
import Featured from '../../../../components/featured/Featured';
import Data from '../../../../components/services/Data';
import Test2 from '../../../../components/menu/Test2';
import CafeMenu from '../../../../components/cafemenu/CafeMenu';
import FooterBanner from '../../../../components/footbanner/FooterBanner';
import Foot from '../../../../components/foot/Footer';
import ScrollToTop from '../../../../components/ScrollToTop';
import useFetch from '../../../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';

function CafePage({ item }) {
  const [active, setActive] = useState(1);

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const { data, loading, error } = useFetch(`/cafes/find/${id}`);
  console.log('data tes t', data);

  return (
    <div>
      <Navbar />
      <HeroDes
        image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
        city="Cafe Al Nassim"
        arcity=""
      />

      <CafeMenu />
      <ScrollToTop />
      <DescriptionCafe />
      <Featured />
      <Data />
      <Test2 />

      <FooterBanner />
      <Foot />
    </div>
  );
}

export default CafePage;
