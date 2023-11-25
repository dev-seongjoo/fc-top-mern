import * as S from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VoteResult = () => {
  const [list, setList] = useState({
    attendance: [],
    absence: [],
    noVote: [],
  });

  const { match } = useParams();

  useEffect(() => {
    const fetchVote = async () => {
      try {
        const voteResult = await axios.get(
          `http://localhost:4000/voteresult/${match}`
        );

        setList((prevList) => ({
          ...prevList,
          attendance: voteResult.data.attendanceList,
          absence: voteResult.data.absenceList,
          noVote: voteResult.data.noVoteList,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchVote();
  }, []);

  return (
    <>
      <S.ListWrapper>
        <S.ListLabel>참석 ({list.attendance.length}명)</S.ListLabel>
        {list.attendance.map((attendance, index) => (
          <S.List key={index}>{attendance}</S.List>
        ))}
      </S.ListWrapper>
      <S.ListWrapper>
        <S.ListLabel>불참석 ({list.absence.length}명)</S.ListLabel>
        {list.absence.map((absence, index) => (
          <S.List key={index}>{absence}</S.List>
        ))}
      </S.ListWrapper>
      <S.ListWrapper>
        <S.ListLabel>미투표인원 ({list.noVote.length}명)</S.ListLabel>
        {list.noVote.map((noVote, index) => (
          <S.List key={index}>{noVote}</S.List>
        ))}
      </S.ListWrapper>
    </>
  );
};

export default VoteResult;
