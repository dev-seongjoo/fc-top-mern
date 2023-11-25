import styled from "styled-components";
import uniform from "../../../assets/uniform.png";

export const Title = styled.div`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2em;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FormationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  border: 3px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option``;

export const StartingLineup = styled.div`
  position: relative;
  width: 100%;
  height: 133.33%;
  overflow: hidden;
`;

export const Field = styled.img`
  width: 100%;
  height: 100%;
`;

export const Player = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: url(${uniform}) no-repeat center center/cover;

  &:hover {
    cursor: pointer;
  }
`;

export const PlayerInfoWrapper = styled.div`
  position: absolute;
  top: 100%;
  width: 50px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.8rem;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const PlayerInfo = styled.div``;

export const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  transform: translateX(${(props) => (props.sideOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  overflow: auto;
`;

export const SideBarHead = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid white;
`;

export const SideBarHeadContent = styled.div`
  width: 33.33%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
`;

export const PlayerList = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid white;
  display: flex;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    background-color: transparent;
  }
`;

export const PlayerListContent = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const SaveBtn = styled.button`
  width: 300px;
  height: 50px;
  border: 3px solid black;
  background-color: transparent;
  margin: 50px 0;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: transparent;
  }
`;
