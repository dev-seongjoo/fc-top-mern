import * as S from "./styled";

const PersonalRank = () => {
  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>개인 순위</S.Title>
        <S.SearachBtnGroup>
          <S.SearchBtnLeft className='material-symbols-outlined'>
            arrow_circle_left
          </S.SearchBtnLeft>
          <S.SearchBtnRight className='material-symbols-outlined'>
            arrow_circle_right
          </S.SearchBtnRight>
        </S.SearachBtnGroup>
      </S.TitleRow>
      <S.SubTitle>출석</S.SubTitle>
      <S.Table>
        <S.Thead>
          <S.TheadTr>
            <S.RankTh>순위</S.RankTh>
            <S.NameTh>이름</S.NameTh>
            <S.PointTh>점수</S.PointTh>
          </S.TheadTr>
        </S.Thead>
        <S.Tbody>
          <S.BlackTr />
          <S.TbodyTr>
            <S.RankTd>1위</S.RankTd>
            <S.NameTd>김성주</S.NameTd>
            <S.PointTd>99점</S.PointTd>
          </S.TbodyTr>
          <S.TbodyTr>
            <S.RankTd>2위</S.RankTd>
            <S.NameTd>이용혁</S.NameTd>
            <S.PointTd>88점</S.PointTd>
          </S.TbodyTr>
          <S.TbodyTr>
            <S.RankTd>3위</S.RankTd>
            <S.NameTd>최병관</S.NameTd>
            <S.PointTd>77점</S.PointTd>
          </S.TbodyTr>
          <S.TbodyTr>
            <S.RankTd>4위</S.RankTd>
            <S.NameTd>김준경</S.NameTd>
            <S.PointTd>66점</S.PointTd>
          </S.TbodyTr>
          <S.TbodyTr>
            <S.RankTd>5위</S.RankTd>
            <S.NameTd>홍철의</S.NameTd>
            <S.PointTd>55점</S.PointTd>
          </S.TbodyTr>
        </S.Tbody>
      </S.Table>
    </S.Container>
  );
};

export default PersonalRank;
