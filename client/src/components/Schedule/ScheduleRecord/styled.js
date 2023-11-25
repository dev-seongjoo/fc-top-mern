import styled from "styled-components";
import uniform from "../../../assets/uniform.png";

export const Title = styled.div`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnGroup = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

export const EventBtn = styled.div`
  width: 33.33%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  &:last-child {
    border-right: none;
  }
`;

export const Notice = styled.div``;

export const NoticeContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: black;
  padding: 5px;
`;

export const DeleteBtn = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 10px;
`;

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
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

export const SideBarBody = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid white;
  display: flex;
`;

export const SideBarBodyContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: 400;
`;
