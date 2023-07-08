import React from "react";
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default function Subscribe() {
  return (
    <Section>
      <div className="content">
        <h1>Contact Us Anytime 24/7</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <div className="input-container">
          <input type="text" placeholder="Enter Email" />
          <BsFillArrowRightCircleFill className="btn_arrow" color="#e22020" />
        </div>
      </div>
      
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 10rem;
  margin-bottom: 5rem;
  .image {
    img {
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    /* width: 50%; */
    h2 {
      font-size: 4rem;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
    }
    .input-container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      gap: 1rem;
      border: 1px solid #c4c4c4;
      border-radius: 3rem;
      input {
        border: none;
        &:focus {
          outline: none;
        }
        padding-left: 2rem;
        padding-right: 5rem;
        font-size: 1.3rem;
      }
      svg {
        color: #2d69fd;
        font-size: 3rem;
      }
    }
  }
  .btn_arrow{
    cursor:pointer;
  }
  .btn_arrow:hover{
    color:#ff7070;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 0 2rem;
    gap: 2rem;
    margin-bottom: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 80vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 2rem;
      }
      p {
        line-height: 1.4rem;
      }
      .input-container {
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        
        input {
          padding-left: -.4rem;
          padding-right: .1rem;
          font-size: 1.3rem;
        }
      }
    }
  }
`;
