import * as S from "./styled";

const PastMatch = () => {
  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>지난 경기</S.Title>
        <S.SearchBtn>자세히 보기</S.SearchBtn>
      </S.TitleRow>
      <S.Date>2023.07.08(토)</S.Date>
      <S.ScoreGroup>
        <S.HomeTeamGroup>
          <S.HomeTeam>FC TOP</S.HomeTeam>
          <S.HomeScore>2</S.HomeScore>
        </S.HomeTeamGroup>
        <S.Versus>VS</S.Versus>
        <S.AwayTeamGroup>
          <S.AwayTeam>R.egend FC</S.AwayTeam>
          <S.AwayScore>0</S.AwayScore>
        </S.AwayTeamGroup>
      </S.ScoreGroup>
    </S.Container>
  );
};

export default PastMatch;
