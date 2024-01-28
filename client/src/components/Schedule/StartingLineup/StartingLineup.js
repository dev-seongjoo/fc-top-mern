import * as S from "./styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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

const StartingLineup = () => {
  const formations = {
    442: form442,
    433: form433,
    4312: form4312,
    4231: form4231,
    4141: form4141,
    352: form352,
    343: form343,
  };

  const [currentFormation, setCurrentFormation] = useState(442);
  const [sideOpen, setSideOpen] = useState(false);
  const [list, setList] = useState({});
  const [selectedInfo, setSelectedInfo] = useState(["", ""]);
  const [selectedPlayer, setSelectedPlayer] = useState({
    player1: ["", ""],
    player2: ["", ""],
    player3: ["", ""],
    player4: ["", ""],
    player5: ["", ""],
    player6: ["", ""],
    player7: ["", ""],
    player8: ["", ""],
    player9: ["", ""],
    player10: ["", ""],
    player11: ["", ""],
  });

  const { match, quarter } = useParams();
  const navigate = useNavigate();

  const handleFieldClick = () => {
    setSideOpen(false);
  };

  const handlePlayerClick = (num, pos) => {
    setSideOpen(true);
    setSelectedInfo([num, pos]);
  };

  const handlePlayerListClick = (player) => {
    setSideOpen(false);

    const existingPlayer = Object.entries(selectedPlayer).find(
      ([key, value]) => value[0] === player.KOR_NM
    );

    setSelectedPlayer((prevData) => {
      if (existingPlayer) {
        const existingPlayerKey = existingPlayer[0];
        prevData[existingPlayerKey] = ["", ""];
      }

      prevData[`player${selectedInfo[0]}`] = [player.KOR_NM, selectedInfo[1]];

      return { ...prevData };
    });
  };

  const handleFormationChange = (e) => {
    setCurrentFormation(e.target.value);

    setSelectedPlayer({
      player1: ["", ""],
      player2: ["", ""],
      player3: ["", ""],
      player4: ["", ""],
      player5: ["", ""],
      player6: ["", ""],
      player7: ["", ""],
      player8: ["", ""],
      player9: ["", ""],
      player10: ["", ""],
      player11: ["", ""],
    });
  };

  const handleSaveClick = async () => {
    let emptyPositions = [];

    for (let key in selectedPlayer) {
      if (selectedPlayer[key][0] === "") {
        emptyPositions.push(formations[currentFormation][key][2]);
      }
    }

    if (emptyPositions.length > 0) {
      alert(
        `${emptyPositions.join(", ")} 포지션에 선수가 입력되지 않았습니다.`
      );
      return;
    }

    alert("저장 완료되었습니다.");

    await axios.post(`${SERVER_BASE_URL}/starting/${match}/${quarter}`, {
      match,
      quarter,
      selectedPlayer,
      currentFormation,
    });

    navigate(`/schedule/recordsetting/${match}`);
  };

  const findPlayerPosition = (playerName) => {
    const selectedPlayersArray = Object.values(selectedPlayer);
    for (let i = 0; i < selectedPlayersArray.length; i++) {
      if (selectedPlayersArray[i][0] === playerName) {
        return selectedPlayersArray[i][1];
      }
    }
    return "";
  };

  useEffect(() => {
    const fetchVote = async () => {
      try {
        const voteResult = await axios.get(
          `${SERVER_BASE_URL}/voteresult/${match}`
        );
        const playerName = voteResult.data.attendanceList.sort((a, b) =>
          a.localeCompare(b)
        );
        const playerInfoPromises = playerName.map((player) =>
          axios.post(`${SERVER_BASE_URL}/playerInfo`, { player })
        );

        const playerInfos = await Promise.all(playerInfoPromises);

        const newList = playerName.reduce((prevData, player, index) => {
          return { ...prevData, [player]: playerInfos[index].data };
        }, {});

        setList(newList);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVote();
  }, []);

  useEffect(() => {
    const fetchLineup = async () => {
      try {
        const result = await axios.get(
          `${SERVER_BASE_URL}/starting/${match}/${quarter}`
        );
        setCurrentFormation(result.data.formation);

        let newSelectedPlayers = {
          player1: ["", ""],
          player2: ["", ""],
          player3: ["", ""],
          player4: ["", ""],
          player5: ["", ""],
          player6: ["", ""],
          player7: ["", ""],
          player8: ["", ""],
          player9: ["", ""],
          player10: ["", ""],
          player11: ["", ""],
        };

        for (let member of result.data.selectedStartings) {
          for (let key in formations[result.data.formation]) {
            if (formations[result.data.formation][key][2] === member.POSITION) {
              newSelectedPlayers[key] = [member.Player.KOR_NM, member.POSITION];
            }
          }
        }

        setSelectedPlayer(newSelectedPlayers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLineup();
  }, []);

  return (
    <>
      <S.Title>{quarter}Q 선발 명단</S.Title>
      <S.HorizontalLine />
      <S.Container>
        <S.FormationWrapper>
          <S.LabelWrapper>
            <S.Label>포메이션</S.Label>
            <S.Select onChange={handleFormationChange} value={currentFormation}>
              <S.Option value='442'>4-4-2</S.Option>
              <S.Option value='433'>4-3-3</S.Option>
              <S.Option value='4312'>4-3-1-2</S.Option>
              <S.Option value='4231'>4-2-3-1</S.Option>
              <S.Option value='4141'>4-1-4-1</S.Option>
              <S.Option value='352'>3-5-2</S.Option>
              <S.Option value='343'>3-4-3</S.Option>
            </S.Select>
          </S.LabelWrapper>
        </S.FormationWrapper>
        <S.StartingLineup>
          <S.SideBar sideOpen={sideOpen}>
            <S.SideBarHead>
              <S.SideBarHeadContent>현재 포지션</S.SideBarHeadContent>
              <S.SideBarHeadContent>이름</S.SideBarHeadContent>
              <S.SideBarHeadContent>선호 포지션</S.SideBarHeadContent>
            </S.SideBarHead>
            {Object.values(list).map((player, index) => (
              <S.PlayerList
                key={index}
                onClick={() => handlePlayerListClick(player)}
              >
                <S.PlayerListContent>
                  {findPlayerPosition(player.KOR_NM)}
                </S.PlayerListContent>
                <S.PlayerListContent>{player.KOR_NM}</S.PlayerListContent>
                <S.PlayerListContent>
                  {player.POSITION_FIRST}
                </S.PlayerListContent>
              </S.PlayerList>
            ))}
          </S.SideBar>
          <S.Field
            src={field}
            onDragStart={(e) => e.preventDefault()}
            onClick={handleFieldClick}
          />
          {Object.values(formations[currentFormation]).map((player, index) => (
            <S.Player
              key={index}
              top={player[0]}
              left={player[1]}
              onClick={() => {
                if (!sideOpen) {
                  handlePlayerClick(index + 1, player[2]);
                } else {
                  setSideOpen(false);
                }
              }}
            >
              <S.PlayerInfoWrapper>
                <S.PlayerInfo>
                  {selectedPlayer[`player${index + 1}`][0]}
                </S.PlayerInfo>
                <S.PlayerInfo>{player[2]}</S.PlayerInfo>
              </S.PlayerInfoWrapper>
            </S.Player>
          ))}
        </S.StartingLineup>
        <S.SaveBtn onClick={handleSaveClick}>저장하기</S.SaveBtn>
      </S.Container>
    </>
  );
};

export default StartingLineup;
