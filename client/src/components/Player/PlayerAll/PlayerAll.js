import {
  Container,
  EngName,
  KorName,
  Num,
  Title,
  Position,
  ProfileImg,
  ProfileImgContainer,
  CardFront,
  CardBack,
  Card,
  CardContainer,
  BackProfileInfo,
  CardBackContainer,
  Opacity,
} from "./styled";

import bk from "../../../assets/bk.png";

const PlayerAll = () => {
  const dummyData = [
    {
      id: 1,
      num: 11,
      korName: "김성주",
      engName: "KIM SEONGJOO",
      position: "CAM",
      age: 31,
      birth: "1993/12/14",
      foot: "right",
      enrollment: "2019/1/1",
    },
    {
      id: 2,
      num: 1,
      korName: "손흥민",
      engName: "SON Heung-min",
      position: "LW",
      age: 29,
      birth: "1992/07/08",
      foot: "right",
      enrollment: "2010/1/1",
    },
    {
      id: 3,
      num: 2,
      korName: "이강인",
      engName: "LEE Kang-in",
      position: "CAM",
      age: 20,
      birth: "2001/02/19",
      foot: "left",
      enrollment: "2017/1/1",
    },
    {
      id: 4,
      num: 3,
      korName: "황희찬",
      engName: "HWANG Hee-chan",
      position: "CF",
      age: 25,
      birth: "1996/01/26",
      foot: "left",
      enrollment: "2015/1/1",
    },
    {
      id: 5,
      num: 4,
      korName: "김민재",
      engName: "KIM Min-jae",
      position: "CB",
      age: 25,
      birth: "1996/11/15",
      foot: "right",
      enrollment: "2017/1/1",
    },
    {
      id: 6,
      num: 5,
      korName: "박주호",
      engName: "PARK Joo-ho",
      position: "LB",
      age: 35,
      birth: "1987/01/16",
      foot: "left",
      enrollment: "2008/1/1",
    },
    {
      id: 7,
      num: 6,
      korName: "이용",
      engName: "LEE Yong",
      position: "RB",
      age: 34,
      birth: "1988/12/24",
      foot: "right",
      enrollment: "2010/1/1",
    },
    {
      id: 8,
      num: 7,
      korName: "홍철",
      engName: "HONG Chul",
      position: "LB",
      age: 28,
      birth: "1995/02/17",
      foot: "left",
      enrollment: "2018/1/1",
    },
    {
      id: 9,
      num: 8,
      korName: "구자철",
      engName: "KOO Ja-cheol",
      position: "CAM",
      age: 33,
      birth: "1989/02/27",
      foot: "right",
      enrollment: "2008/1/1",
    },
    {
      id: 10,
      num: 9,
      korName: "이재성",
      engName: "LEE Jae-sung",
      position: "CAM",
      age: 28,
      birth: "1992/08/10",
      foot: "right",
      enrollment: "2013/1/1",
    },
    {
      id: 11,
      num: 11,
      korName: "김성주",
      engName: "KIM SEONGJOO",
      position: "CAM",
      age: 31,
      birth: "1993/12/14",
      foot: "right",
      enrollment: "2019/1/1",
    },
    {
      id: 12,
      num: 1,
      korName: "손흥민",
      engName: "SON Heung-min",
      position: "CF",
      age: 29,
      birth: "1992/07/08",
      foot: "right",
      enrollment: "2010/1/1",
    },
    {
      id: 13,
      num: 2,
      korName: "이강인",
      engName: "LEE Kang-in",
      position: "AM",
      age: 20,
      birth: "2001/02/19",
      foot: "left",
      enrollment: "2017/1/1",
    },
    {
      id: 14,
      num: 3,
      korName: "황희찬",
      engName: "HWANG Hee-chan",
      position: "CF",
      age: 25,
      birth: "1996/01/26",
      foot: "left",
      enrollment: "2015/1/1",
    },
    {
      id: 15,
      num: 4,
      korName: "김민재",
      engName: "KIM Min-jae",
      position: "CB",
      age: 25,
      birth: "1996/11/15",
      foot: "right",
      enrollment: "2017/1/1",
    },
    {
      id: 16,
      num: 5,
      korName: "박주호",
      engName: "PARK Joo-ho",
      position: "LB",
      age: 35,
      birth: "1987/01/16",
      foot: "left",
      enrollment: "2008/1/1",
    },
    {
      id: 17,
      num: 6,
      korName: "이용",
      engName: "LEE Yong",
      position: "RB",
      age: 34,
      birth: "1988/12/24",
      foot: "right",
      enrollment: "2010/1/1",
    },
    {
      id: 18,
      num: 7,
      korName: "홍철",
      engName: "HONG Chul",
      position: "LB",
      age: 28,
      birth: "1995/02/17",
      foot: "left",
      enrollment: "2018/1/1",
    },
    {
      id: 19,
      num: 8,
      korName: "구자철",
      engName: "KOO Ja-cheol",
      position: "CM",
      age: 33,
      birth: "1989/02/27",
      foot: "right",
      enrollment: "2008/1/1",
    },
    {
      id: 20,
      num: 9,
      korName: "이재성",
      engName: "LEE Jae-sung",
      position: "CM",
      age: 28,
      birth: "1992/08/10",
      foot: "right",
      enrollment: "2013/1/1",
    },
  ];

  return (
    <>
      <Title>ALL</Title>
      <Container>
        {dummyData.map((data) => (
          <CardContainer key={data.id}>
            <Card>
              <CardFront>
                <Num>{data.num}</Num>
                <KorName>{data.korName}</KorName>
                <EngName>{data.engName}</EngName>
                <Position>{data.position}</Position>
                <ProfileImgContainer>
                  <ProfileImg src={bk} />
                </ProfileImgContainer>
              </CardFront>
              <CardBack>
                <Opacity>
                  <CardBackContainer>
                    <BackProfileInfo>이름: {data.korName}</BackProfileInfo>
                    <BackProfileInfo>나이: {data.age}</BackProfileInfo>
                    <BackProfileInfo>생년월일: {data.birth}</BackProfileInfo>
                    <BackProfileInfo>주발: {data.foot}</BackProfileInfo>
                    <BackProfileInfo>
                      입단 일자: {data.enrollment}
                    </BackProfileInfo>
                    <BackProfileInfo>MT 참가 횟수: 3번</BackProfileInfo>
                    <BackProfileInfo>작년 MT 참가 여부: 불참</BackProfileInfo>
                    <BackProfileInfo>현재 회원 등급: 비회원</BackProfileInfo>
                  </CardBackContainer>
                </Opacity>
              </CardBack>
            </Card>
          </CardContainer>
        ))}
      </Container>
    </>
  );
};

export default PlayerAll;
