import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const ScoreBoard = ({ score, lp, recordEvent, results }) => {
  const navigate = useNavigate();
  const { match, quarter } = useParams();

  const [time, setTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const intervalRef = useRef();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const displayMinutes = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        recordEvent(time);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRecording, time]);

  const handleRecording = async () => {
    if (isRecording) {
      const confirmEnd = window.confirm("기록을 종료하시겠습니까?");
      if (confirmEnd) {
        setIsRecorded(true);
        setIsRecording(false);

        await axios.post(`http://localhost:4000/record/${match}/${quarter}`, {
          results,
          time,
        });
        navigate(`/schedule/recordsummary/${match}/${quarter}`);
      }
    } else {
      setIsRecording(true);
    }
  };

  return (
    <>
      <S.Container>
        <S.TimeContainer>
          <S.Time>{`${displayMinutes} : ${displaySeconds}`}</S.Time>
          {isRecorded ? null : (
            <S.RecordingBtn onClick={handleRecording}>
              {!isRecording ? `기록 시작` : `기록 종료`}
            </S.RecordingBtn>
          )}
        </S.TimeContainer>
        <S.HorizontalLine />
        <S.TeamContainer>
          <S.TeamWrapper>
            <S.TeamName>FC TOP</S.TeamName>
            <S.HomeTeamScore>{score}</S.HomeTeamScore>
          </S.TeamWrapper>
          <S.Versus>VS</S.Versus>
          <S.TeamWrapper>
            <S.TeamName>FC ZZZ</S.TeamName>
            <S.AwayTeamScoreWrapper>
              <S.AwayTeamScore>{lp}</S.AwayTeamScore>
            </S.AwayTeamScoreWrapper>
          </S.TeamWrapper>
        </S.TeamContainer>
      </S.Container>
    </>
  );
};

export default ScoreBoard;
