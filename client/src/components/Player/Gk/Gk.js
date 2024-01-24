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

const Gk = () => {
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
  ];

  return (
    <>
      <Title>GK</Title>
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

export default Gk;
