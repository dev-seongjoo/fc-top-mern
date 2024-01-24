import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import field from "../../../assets/field.png";
import {
  form442,
  form433,
  form4312,
  form4231,
  form4141,
  form352,
  form343,
} from "../../../utils/formations";

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const ScheduleRecordSetting = () => {
  const [schedule, setSchedule] = useState({});
  const [quarter, setQuarter] = useState(0);
  const [quarterRecord, setQuarterRecord] = useState({
    "1Q": false,
    "2Q": false,
    "3Q": false,
    "4Q": false,
    "5Q": false,
    "6Q": false,
  });
  const [currentFormation, setCurrentFormation] = useState(null);

  const { match } = useParams();

  const navigate = useNavigate();

  const formations = {
    442: form442,
    433: form433,
    4312: form4312,
    4231: form4231,
    4141: form4141,
    352: form352,
    343: form343,
  };

  const handleRecordBtnClick = () => {
    if (currentFormation === null) {
      alert("선발 명단을 작성해주세요.");
      navigate(`/schedule/recordsetting/${match}`);
    } else {
      navigate(`/schedule/record/${match}/${quarter}`);
    }
  };

  const fetchDataDetail = async () => {
    try {
      const selectedMatch = await axios.get(
        `${SERVER_BASE_URL}/schedule/${match}`
      );

      setSchedule(selectedMatch.data);

      const quarterRecords = await axios.get(
        `${SERVER_BASE_URL}/record/check/${match}`
      );

      const updatedQuarterRecord = { ...quarterRecord };

      quarterRecords.data.map((record) => {
        updatedQuarterRecord[`${record.QUARTER}Q`] = record.RECORD;
      });

      setQuarterRecord(updatedQuarterRecord);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataDetail();
  }, []);

  const fetchQuarter = async () => {
    if (quarter !== 0) {
      try {
        const selectedQuarter = await axios.get(
          `${SERVER_BASE_URL}/starting/${match}/${quarter}`
        );
        if (selectedQuarter) {
          setCurrentFormation(selectedQuarter.data.formation);
        }
      } catch (err) {
        console.error(err);
        setCurrentFormation(null);
      }
    }
  };

  useEffect(() => {
    fetchQuarter(quarter);
  }, [quarter]);

  let date = new Date(schedule.DATE);
  let matchDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const year = matchDate.getFullYear();
  const month = matchDate.getMonth() + 1;
  const day = matchDate.getDate();
  const hour = matchDate.getHours();
  const duration = +schedule.DURATION;
  matchDate = `${year}년 ${month}월 ${day}일 오전 ${hour}시 - ${
    hour + duration
  }시`;

  return (
    <>
      <S.Title>기록 설정</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.LabelWrapper>
          <S.Label>일시</S.Label>
          <S.InfoBox>{matchDate}</S.InfoBox>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label>상대</S.Label>
          <S.InfoBox>{schedule.OPPONENT}</S.InfoBox>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label>쿼터</S.Label>
          <S.Select
            onChange={(e) => setQuarter(e.target.value)}
            value={quarter}
          >
            <S.Option value='0' disabled={true}>
              쿼터를 선택해주세요.
            </S.Option>
            <S.Option value='1' disabled={quarterRecord["1Q"]}>
              1Q
            </S.Option>
            <S.Option value='2' disabled={quarterRecord["2Q"]}>
              2Q
            </S.Option>
            <S.Option value='3' disabled={quarterRecord["3Q"]}>
              3Q
            </S.Option>
            <S.Option value='4' disabled={quarterRecord["4Q"]}>
              4Q
            </S.Option>
            <S.Option value='5' disabled={quarterRecord["5Q"]}>
              5Q
            </S.Option>
            <S.Option value='6' disabled={quarterRecord["6Q"]}>
              6Q
            </S.Option>
          </S.Select>
        </S.LabelWrapper>
        {quarter !== 0 && (
          <>
            <S.LabelWrapper>
              <S.StartingWrapper>
                <S.Label>선발 명단</S.Label>
                <S.StartingLineupSetupWrapper>
                  <S.StartingLineupSetup
                    to={`/schedule/startingLineup/${match}/${quarter}`}
                  >
                    작성하기
                  </S.StartingLineupSetup>
                  <S.StartingLineupSetupBtn className='material-symbols-outlined'>
                    edit
                  </S.StartingLineupSetupBtn>
                </S.StartingLineupSetupWrapper>
              </S.StartingWrapper>
              <S.StartingLineup>
                <S.Field src={field} onDragStart={(e) => e.preventDefault()} />
                {formations[currentFormation] &&
                  Object.values(formations[currentFormation]).map(
                    (player, index) => (
                      <S.Player
                        key={index}
                        top={player[0]}
                        left={player[1]}
                      ></S.Player>
                    )
                  )}
              </S.StartingLineup>
            </S.LabelWrapper>
            <S.RecordBtn onClick={handleRecordBtnClick}>기록</S.RecordBtn>
          </>
        )}
      </S.Container>
    </>
  );
};

export default ScheduleRecordSetting;
