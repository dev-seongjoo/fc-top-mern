import * as S from "./styled";
import FutureMatch from "../FutureMatch/FutureMatch";
import PastMatch from "../PastMatch/PastMatch";
import PersonalRank from "../PersonalRank/PersonalRank";

const Notice = () => {
  return (
    <>
      <PastMatch />
      <FutureMatch />
      <PersonalRank />
    </>
  );
};

export default Notice;
