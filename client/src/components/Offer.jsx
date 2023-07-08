import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";



export default function Tours() {
  const data = [
    {
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Santorini, Oia Greece",
      price: 2000,
      reviews: "5k Reviews",
    },
    {
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Lighthouse, Bellwood",
      price: 4000,
      reviews: "5k Reviews",
    },
    {
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Riverfront, Japan",
      price: 3000,
      reviews: "5k Reviews",
    },
  ];
  return (
    <Section id="tour">
      <h2>Cafe & Restaurant of the Week</h2>
      <img src='' alt="ellipse" className="ellipse" />
      <div className="tours">
        {data.map(({ image, title, price, reviews }, index) => {
          return (
            <div className="tour" key={title}>
              <div className="image">
                <img src={image} alt="tour" />
                
              </div>
              <div className="info">
                <div className="details">
                  <h4>{title}</h4>
                  <div className="price-details">
                    <span className="price">${price}</span>
                    <div className="reviews">
                      <div className="stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </div>
                    </div>
                  </div>
                </div>
                <button>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;
  .ellipse {
    position: absolute;
    top: -20rem;
    height: 30rem;
  }
  h2 {
    text-align: center;
    transform: translateY(-150px);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .tours {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .tour {
      position: relative;
      &:nth-of-type(2) {
        transform: translateY(-130px);
      }
      .image {
        img {
          height: 25rem;
        }
      }
      .info {
        position: absolute;
        bottom: -30px;
        right: 0;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        button {
          padding: 0.5rem 0.7rem;
          background-color: var(--primary-color);
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .price-details {
            display: flex;
            gap: 1rem;
            .price {
              color: var(--primary-color);
              font-weight: bolder;
            }
            .reviews {
              display: flex;
              gap: 0.5rem;
              .stars {
                svg {
                  color: #ffc01e;
                }
              }
              .review {
                color: var(--secondary-text);
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 2rem;
    .ellipse {
      display: none;
    }
    h2 {
      transform: translateY(0px);
      font-size: 2rem;
    }
    .tours {
      flex-direction: column;
      gap: 5rem;
      .tour {
        &:nth-of-type(2) {
          transform: translateY(0);
        }
        button {
          display: none !important;
        }
        .image {
          img {
            max-inline-size: 100%;
            block-size: auto;
          }
          .vectors {
            display: none;
          }
        }
      }
    }
  }
`;