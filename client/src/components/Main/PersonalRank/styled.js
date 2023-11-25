import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  border-bottom: 1px solid white;
  background-color: black;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SearachBtnGroup = styled.div``;

export const SearchBtnLeft = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 5px;
`;
export const SearchBtnRight = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const SubTitle = styled.div`
  margin-bottom: 30px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const TheadTr = styled.tr`
  height: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.7);
  background-color: transparent;
`;

export const RankTh = styled.th`
  width: 33.33%;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;

export const NameTh = styled.th`
  width: 33.33%;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;

export const PointTh = styled.th`
  width: 33.33%;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;

export const Tbody = styled.tbody``;

export const TbodyTr = styled.tr`
  height: 55px;
`;

export const BlackTr = styled.tr`
  height: 10px;
`;

export const RankTd = styled.th`
  width: 33.33%;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;

export const NameTd = styled.th`
  width: 33.33%;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;

export const PointTd = styled.th`
  width: 33.33%;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
`;
