import { useEffect, useRef, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import KakaoMap from "../../KakaoMap/KakaoMap";
import { addHours } from "date-fns";

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const ScheduleUpdate = () => {
  const navigate = useNavigate();

  const { match } = useParams();

  const opponentRef = useRef(null);
  const customLocationRef = useRef(null);
  const customLocationAddressRef = useRef(null);

  const [isCustomLocation, setIsCustomLocation] = useState(false);
  const [isFocused, setIsFocused] = useState({
    opponent: false,
    notes: false,
    customLocation: false,
    customLocationAddress: false,
  });
  const [locationPosition, setLocationPosition] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    duration: "",
    checkLate: "",
    location: "",
    customLocation: "",
    customLocationAddress: "",
    locationPosition: "",
    opponent: "",
    notes: "",
  });
  const [isMarker, setIsMarker] = useState(true);

  useEffect(() => {
    const fetchDataDetail = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(`${SERVER_BASE_URL}/schedule/${match}`);
        const timestamp = result.data.DATE;
        const date = moment(timestamp).format("YYYY/MM/DD h:mm A");

        setFormData({
          date: date,
          duration: result.data.DURATION,
          checkLate: result.data.CHECK_LATE,
          location: result.data.LOCATION,
          customLocation: result.data.CUSTOM_LOCATION,
          customLocationAddress: result.data.CUSTOM_LOCATION_ADDRESS,
          locationPosition: result.data.LOCATION_POSITION,
          opponent: result.data.OPPONENT,
          notes: result.data.NOTES,
        });

        setLocationPosition(result.data.LOCATION_POSITION);

        if (result.data.LOCATION === "직접 입력") {
          setIsCustomLocation(true);
        }
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      } finally {
        setIsLoading(false); // 데이터를 다 불러왔으므로 로딩 상태를 false로 설정
      }
    };

    fetchDataDetail();
  }, []);

  const handleFormDataChange = async (event) => {
    const { name, value } = event.target;

    if (name === "location") {
      if (value === "직접 입력") {
        setIsCustomLocation(true);
      } else {
        setIsCustomLocation(false);
        setFormData((prevData) => ({
          ...prevData,
          locationPosition: "",
          customLocation: "",
          customLocationAddress: "",
        }));
        setIsMarker(false);

        // 사용자가 선택한 위치의 좌표를 조회합니다.
        const response = await axios.post(
          `${SERVER_BASE_URL}/location/position`,
          { value }
        );

        const position = response.data;

        // 조회한 좌표를 상태로 설정합니다.
        setLocationPosition(position);
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (field) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setIsFocused((prevIsFocused) => ({
      ...prevIsFocused,
      [field]: false,
    }));
  };

  const handleSearchBtnClick = (event) => {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      customLocationAddress: customLocationAddressRef.current.value,
    }));
  };

  const onPositionUpdate = (newPosition) => {
    const La = newPosition.La;
    const Ma = newPosition.Ma;

    setFormData((prevData) => ({
      ...prevData,
      locationPosition: `${Ma}, ${La}`,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (new Date(formData.date).getTime() < Date.now()) {
      alert("날짜가 이미 지났습니다. 다른 날짜를 선택해주세요.");
      return;
    }

    if (formData.opponent === "") {
      alert("상대팀 명을 입력해주세요.");
      opponentRef.current.focus();
      return;
    }

    if (formData.location === "직접 입력") {
      if (formData.customLocation === "") {
        alert("장소를 직접 입력해주세요.");
        customLocationRef.current.focus();
        return;
      }
    }

    if (formData.locationPosition.length === 0) {
      alert("지도에 모일 위치를 표시해주세요.");
      return;
    }

    const adjustedDate = addHours(new Date(formData.date), -9);
    const updatedFormData = {
      ...formData,
      date: adjustedDate,
    };

    const response = await axios.put(
      `${SERVER_BASE_URL}/schedule/${match}`,
      updatedFormData
    );

    navigate(`/schedule/${match}`);
  };

  return (
    <>
      {!isLoading && (
        <form>
          <S.Title>일정 수정</S.Title>
          <S.HorizontalLine />
          <S.Container>
            <S.LabelWrapper>
              <S.Label>시작 일시</S.Label>
              <S.CustomDatePicker
                id='date'
                name='date'
                showTimeSelect
                dateFormat='yyyy/MM/dd h:mm aa'
                selected={moment(formData.date, "YYYY/MM/DD h:mm A").toDate()}
                onChange={(selectedDate) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    date: selectedDate,
                  }))
                }
              />
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label htmlFor='duration'>진행 시간</S.Label>
              <S.Select
                name='duration'
                onChange={handleFormDataChange}
                defaultValue={formData.duration}
              >
                <S.Option value='3'>3시간</S.Option>
                <S.Option value='2'>2시간</S.Option>
              </S.Select>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label htmlFor='checkLate'>지각 체크</S.Label>
              <S.Select
                name='checkLate'
                onChange={handleFormDataChange}
                defaultValue={formData.checkLate}
              >
                <S.Option value='30'>30분 전</S.Option>
                <S.Option value='20'>20분 전</S.Option>
                <S.Option value='10'>10분 전</S.Option>
              </S.Select>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label htmlFor='location'>장소</S.Label>
              <S.Select
                name='location'
                onChange={handleFormDataChange}
                defaultValue={formData.location}
              >
                <S.Option>교하체육공원(1)</S.Option>
                <S.Option>금촌체육공원</S.Option>
                <S.Option>운정건강공원</S.Option>
                <S.Option>운정체육공원</S.Option>
                <S.Option>파주스타디움 보조구장</S.Option>
                <S.Option>씨엠지풋볼</S.Option>
                <S.Option>직접 입력</S.Option>
              </S.Select>
              {isCustomLocation && (
                <>
                  <S.KakaoMapLink
                    href='https://map.kakao.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    카카오맵 바로가기
                  </S.KakaoMapLink>
                  <S.KakaoMapNotice>
                    (위 링크에서 정확한 주소를 검색해주세요.)
                  </S.KakaoMapNotice>
                  <S.CustomLocation>
                    <S.Input
                      name='customLocation'
                      type='text'
                      placeholder={
                        isFocused.customLocation
                          ? ""
                          : "구장 명을 입력해 주세요."
                      }
                      onChange={handleFormDataChange}
                      onFocus={() => handleFocus("customLocation")}
                      onBlur={() => handleBlur("customLocation")}
                      ref={customLocationRef}
                      defaultValue={formData.customLocation}
                    />
                    <S.SearchWrapper>
                      <S.SearchInput
                        type='text'
                        placeholder={
                          isFocused.customLocationAddress
                            ? ""
                            : "주소를 입력해주세요."
                        }
                        onFocus={() => handleFocus("customLocationAddress")}
                        onBlur={() => handleBlur("customLocationAddress")}
                        ref={customLocationAddressRef}
                        defaultValue={formData.customLocationAddress}
                      />
                      <S.SearchBtn onClick={handleSearchBtnClick}>
                        입력
                      </S.SearchBtn>
                    </S.SearchWrapper>
                  </S.CustomLocation>
                </>
              )}
              <KakaoMap
                position={locationPosition}
                search={formData.customLocationAddress}
                width={"300px"}
                height={"300px"}
                margin={"10px 0 0 0"}
                onPositionUpdate={onPositionUpdate}
                isMarker={isMarker}
              />
              {formData.locationPosition.length === 0 ? (
                <S.MapNotice>지도에 모일 위치를 표시해주세요.</S.MapNotice>
              ) : (
                ""
              )}
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label htmlFor='opponent'>상대</S.Label>
              <S.Input
                id='opponent'
                name='opponent'
                type='text'
                placeholder={
                  isFocused.opponent ? "" : "상대팀 명을 입력해 주세요."
                }
                onFocus={() => handleFocus("opponent")}
                onBlur={() => handleBlur("opponent")}
                onChange={handleFormDataChange}
                ref={opponentRef}
                defaultValue={formData.opponent}
              />
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label htmlFor='notes'>기타 사항</S.Label>
              <S.TextArea
                rows={10}
                id='notes'
                name='notes'
                placeholder={
                  isFocused.notes ? "" : "기타 사항을 입력해 주세요."
                }
                onFocus={() => handleFocus("notes")}
                onBlur={() => handleBlur("notes")}
                onChange={handleFormDataChange}
                defaultValue={formData.notes}
              />
            </S.LabelWrapper>
            <S.RegisterBtn onClick={handleUpdate}>일정 수정</S.RegisterBtn>
          </S.Container>
        </form>
      )}
      {isLoading && <S.Title>로딩 중...</S.Title>}
    </>
  );
};

export default ScheduleUpdate;
