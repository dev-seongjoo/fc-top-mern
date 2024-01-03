import * as S from "./styled";

const FutureMatch = () => {
  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>다음 경기</S.Title>
        <S.SearachBtnGroup>
          <S.SearchBtnLeft className='material-symbols-outlined'>
            arrow_circle_left
          </S.SearchBtnLeft>
          <S.SearchBtnRight className='material-symbols-outlined'>
            arrow_circle_right
          </S.SearchBtnRight>
        </S.SearachBtnGroup>
      </S.TitleRow>
      <S.Date>2024.01.06(토) 07:00</S.Date>
      <S.Location>운정체육공원</S.Location>
      <S.ScoreGroup>
        <S.HomeTeam>FC TOP</S.HomeTeam>
        <S.Versus>VS</S.Versus>
        <S.AwayTeam>FC TOP</S.AwayTeam>
        <S.VotingBtn>투표</S.VotingBtn>
      </S.ScoreGroup>
    </S.Container>
  );
};

export default FutureMatch;
