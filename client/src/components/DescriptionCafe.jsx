import React from "react";
import styled from "styled-components";
export default function Choose() {
  return (
    <Section>
      <div className="imagedesc">
        <img src='https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMG1vcm9jY298ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="choose" />
      </div>
      <div className="content">
        <h3>Why should you Choose Our Restaurant</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 5rem;
  margin-bottom: 5rem;
  
  .imagedesc {
    border-radius: 50px;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 2rem;
    .imagedesc {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 90%;
        border-radius: 1rem;
        border-radius: 10px;
      }
    }
    .content {
      gap: .7rem;
      h2 {
        font-size: 1rem;
      }
      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;