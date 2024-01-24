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

import sonny from "../../../assets/sonny.png";

const Fw = () => {
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
  ];

  return (
    <>
      <Title>FW</Title>
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
                  <ProfileImg src={sonny} />
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

export default Fw;
