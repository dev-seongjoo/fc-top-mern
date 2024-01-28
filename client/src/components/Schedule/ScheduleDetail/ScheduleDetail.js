import { useContext, useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import KakaoMap from "../../KakaoMap/KakaoMap";
import Vote from "../../Vote/Vote";
import VoteResult from "../../Vote/VoteResult/VoteResult";
import { AuthContext } from "../../../contexts/AuthContext";

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const ScheduleDetail = () => {
  const { userRole } = useContext(AuthContext); // 사용자 역할 정보 가져오기

  const [isLoading, setIsLoading] = useState(true);
  const [schedule, setSchedule] = useState({});
  const [locationAddress, setLocationAddress] = useState([]);
  const [voteResult, setVoteResult] = useState(false);

  const { match } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataDetail = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(`${SERVER_BASE_URL}/schedule/${match}`);
        if (result === null) {
          console.log("데이터가 존재하지 않습니다.");
          return;
        }
        setSchedule(result.data);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataDetail();
  }, []);

  let serverTime = new Date(schedule.DATE);
  let matchTime = new Date(serverTime.getTime() + 9 * 60 * 60 * 1000);

  const year = matchTime.getFullYear();
  const month = matchTime.getMonth() + 1;
  const day = matchTime.getDate();
  const hour = matchTime.getHours();
  const duration = +schedule.DURATION;

  const currentTime = new Date();
  const voteEnabled =
    currentTime.getTime() <
    matchTime.getTime() - schedule.CHECK_LATE * 60 * 1000 - 30 * 60 * 1000;

  matchTime = `${year}년 ${month}월 ${day}일 ${hour}시 - ${hour + duration}시`;
  const checkLate = `오전 ${hour - 1}시 ${60 - schedule.CHECK_LATE}분 이후`;

  const onAddressUpdate = (newAddress) => {
    setLocationAddress(newAddress);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("주소가 클립보드에 복사되었습니다.");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleVoteResultClick = () => {
    setVoteResult(!voteResult);
  };

  const handleDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        const response = await axios.delete(
          `${SERVER_BASE_URL}/schedule/${match}`
        );
        console.log(response.data);
        navigate("/schedule");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      {!isLoading && (
        <>
          <S.Title>경기 일정</S.Title>
          <S.HorizontalLine />
          <S.Container>
            <S.LabelWrapper>
              <S.Label>일시</S.Label>
              <S.InfoBox>{matchTime}</S.InfoBox>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>지각 체크</S.Label>
              <S.InfoBox>{checkLate}</S.InfoBox>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>장소</S.Label>
              <S.InfoBox>
                {schedule.LOCATION === "직접 입력"
                  ? schedule.CUSTOM_LOCATION
                  : schedule.LOCATION}
              </S.InfoBox>
              <KakaoMap
                position={schedule.LOCATION_POSITION}
                onAddressUpdate={onAddressUpdate}
              />

              {locationAddress[0] === "" ? (
                ""
              ) : (
                <>
                  <S.AddrWrapper>
                    <S.AddrLabel>도로명 주소</S.AddrLabel>
                    <S.CopyBtn onClick={() => handleCopy(locationAddress[0])}>
                      복사하기
                    </S.CopyBtn>
                  </S.AddrWrapper>
                  <S.RoadAddr>{locationAddress[0]}</S.RoadAddr>
                </>
              )}
              <S.AddrWrapper>
                <S.AddrLabel>지번 주소</S.AddrLabel>
                <S.CopyBtn onClick={() => handleCopy(locationAddress[1])}>
                  복사하기
                </S.CopyBtn>
              </S.AddrWrapper>
              <S.LotAddr>{locationAddress[1]}</S.LotAddr>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>상대</S.Label>
              <S.InfoBox>{schedule.OPPONENT}</S.InfoBox>
            </S.LabelWrapper>
            {schedule.NOTES && (
              <S.LabelWrapper>
                <S.Label>기타 사항</S.Label>
                <S.InfoBox>{schedule.NOTES}</S.InfoBox>
              </S.LabelWrapper>
            )}
            <S.LabelWrapper>
              <S.VoteWrapper>
                <S.Label>투표</S.Label>
                <S.VoteResult onClick={handleVoteResultClick}>
                  {voteResult ? "닫기" : "자세히 보기"}
                </S.VoteResult>
              </S.VoteWrapper>
              {voteResult ? (
                <VoteResult />
              ) : voteEnabled ? (
                <Vote />
              ) : (
                <S.InfoBox>투표가 종료되었습니다.</S.InfoBox>
              )}
            </S.LabelWrapper>
            <S.BtnWrapper>
              {userRole === "COACH" && (
                <S.RecordBtn to={`/schedule/recordsetting/${match}`}>
                  기록
                </S.RecordBtn>
              )}
              {userRole === "MASTER" || userRole === "CAPTAIN" ? (
                <>
                  <S.UpdateBtn to={`/schedule/update/${match}`}>
                    수정
                  </S.UpdateBtn>
                  <S.DeleteBtn onClick={handleDelete}>삭제</S.DeleteBtn>
                </>
              ) : null}
            </S.BtnWrapper>
          </S.Container>
        </>
      )}
      {isLoading && <S.Title>로딩 중...</S.Title>}
    </>
  );
};

export default ScheduleDetail;
