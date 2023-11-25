import "../../../App.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../../assets/fc-top.png";

export const Title = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
  padding: 0 30px;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개의 카드 */
  grid-gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardContainer = styled(Link)`
  position: relative;
  width: 100%;
  height: 360px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  perspective: 1000;
  overflow: hidden;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  transform-style: preserve-3d;

  ${CardContainer}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  color: black;
  backface-visibility: hidden;
`;

export const Num = styled.div`
  font-family: "K-league";
  font-size: 4rem;
`;

export const KorName = styled.div`
  margin-top: 15px;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const EngName = styled.div`
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.8rem;
  font-weight: 500;
`;

export const Position = styled.div`
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ProfileImgContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 5px;
`;

export const ProfileImg = styled.img`
  width: 170px;
`;

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* padding: 15px; */
  transform: rotateY(180deg);
  color: white;
  background-image: url(${logo});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  backface-visibility: hidden;
`;

export const Opacity = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const CardBackContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid white;
  border-radius: 15px;
  padding: 15px;
`;

export const BackProfileInfo = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PersonalMatchRecord = styled(Link)`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: transparent;
  text-decoration: none;
`;
