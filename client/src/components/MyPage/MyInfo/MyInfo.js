import React from "react";
import * as S from "./styled";

const MyInfo = () => {
  return (
    <S.Container>
      <S.Title>김성주님의 TOP</S.Title>
      <S.CardGroup>
        <S.TitleRow>
          <S.CardTitle>김성주님의 출석</S.CardTitle>
          <S.CardSearch>자세히 보기</S.CardSearch>
        </S.TitleRow>
        <S.Card>
          <S.Info>
            <S.Year>2023 시즌</S.Year>
            <S.InfoAttendanceGroup>
              <S.InfoContent>
                <S.InfoTitle>출석 현황</S.InfoTitle>
                <S.InfoDetailGroup>
                  <S.InfoDetail>
                    <S.InfoDetailKey>참석:</S.InfoDetailKey>
                    18회
                  </S.InfoDetail>
                  <S.InfoDetail>
                    <S.InfoDetailKey>무단지각:</S.InfoDetailKey>
                    2회
                  </S.InfoDetail>
                  <S.InfoDetail>
                    <S.InfoDetailKey>무단결석:</S.InfoDetailKey>
                    0회
                  </S.InfoDetail>
                  <S.InfoDetail>
                    <S.InfoDetailKey>결석:</S.InfoDetailKey>
                    0회
                  </S.InfoDetail>
                </S.InfoDetailGroup>
              </S.InfoContent>
              <S.InfoContent>
                <S.InfoTitle>출석 점수</S.InfoTitle>
                <S.InfoBigChar>52점</S.InfoBigChar>
              </S.InfoContent>
            </S.InfoAttendanceGroup>
          </S.Info>
        </S.Card>
      </S.CardGroup>
      <S.CardGroup>
        <S.TitleRow>
          <S.CardTitle>김성주님의 경기 기록</S.CardTitle>
          <S.CardSearch>자세히 보기</S.CardSearch>
        </S.TitleRow>
        <S.Card>
          <S.Info>
            <S.Year>2023 시즌</S.Year>
            <S.InfoRecordGroup>
              <S.InfoContent>
                <S.InfoTitle>출전</S.InfoTitle>
                <S.InfoBigChar>30경기</S.InfoBigChar>
              </S.InfoContent>
              <S.InfoContent>
                <S.InfoTitle>득점</S.InfoTitle>
                <S.InfoBigChar>5골</S.InfoBigChar>
              </S.InfoContent>
              <S.InfoContent>
                <S.InfoTitle>도움</S.InfoTitle>
                <S.InfoBigChar>5도움</S.InfoBigChar>
              </S.InfoContent>
            </S.InfoRecordGroup>
          </S.Info>
        </S.Card>
      </S.CardGroup>
    </S.Container>
  );
};

export default MyInfo;
