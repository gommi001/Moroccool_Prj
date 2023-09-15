import React from 'react'
import './eventpage.scss'
import useFetch from '../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar';



function EventPage() {

  const { id } = useParams();
  const { data, loading, error } = useFetch(`/events/find/${id}`);


  return (

    
    <div class="container" style={{ marginTop: '120px' }}>
      {/* <Navbar/> */}
      <section class="detail">
        <div class="detail__card card">
              <h2>{data.title}</h2>
          <div class="detail__card-content">
            <img src={data.photo} alt="" class="detail__card-img" />
            <div class="detail__card-data">
              <h5>Location: <span>{data.location}</span></h5>
              <h5>Date: <span>{data.date}</span></h5> {/* Added date */}
              <h5>Type: <span>{data.type}</span></h5> {/* Added type */}
              <div class="detail__card-title">
                <h4>Description</h4>
                <h5>Prix : <span>{data.price} MAD</span></h5>
              </div>
              <p class="detail__card-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or an omised words which don't look even slightly
                believable. If you are goingse a passage of Lorem Ipsum, you need
                to be sure there isn't anything embarrassing
              </p>             
            </div>
          </div>
        </div>
      </section>

    </div>



  )
}

export default EventPage