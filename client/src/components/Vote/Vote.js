import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import axios from "axios";

const Vote = () => {
  const [vote, setVote] = useState(null);
  const [countVote, setCountVote] = useState({
    total: 0,
    attendance: 0,
    absence: 0,
  });
  const { match } = useParams();

  useEffect(() => {
    const fetchVote = async () => {
      try {
        const votes = await axios.get(`http://localhost:4000/vote/${match}`);

        const playerId = JSON.parse(localStorage.getItem("player"));

        let attendanceCount = 0;
        let absenceCount = 0;

        votes.data.forEach((vote) => {
          if (vote.PLAYER_ID === playerId) {
            setVote(vote.ATTENDANCE);
          }

          if (vote.ATTENDANCE === "참석") {
            attendanceCount++;
          } else {
            absenceCount++;
          }
        });

        setCountVote({
          total: votes.data.length,
          attendance: attendanceCount,
          absence: absenceCount,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchVote();
  }, [vote]);

  const handleVote = async (attendance) => {
    const playerId = JSON.parse(localStorage.getItem("player"));
    if (!playerId) {
      alert("로그인이 필요합니다.");
    }
    try {
      console.log(match, playerId, attendance);
      await axios.post("http://localhost:4000/vote", {
        match,
        playerId,
        attendance,
      });
      setVote(attendance);
    } catch (err) {
      console.error("에러 발생", err);
    }
  };

  return (
    <>
      <S.VoteBox onClick={() => handleVote("참석")} selected={vote === "참석"}>
        참석
      </S.VoteBox>
      <S.VoteBox
        onClick={() => handleVote("불참석")}
        selected={vote === "불참석"}
      >
        불참석
      </S.VoteBox>
    </>
  );
};

export default Vote;
