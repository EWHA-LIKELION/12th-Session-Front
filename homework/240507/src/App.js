import { useState } from "react";
import styled from "styled-components";

// components
import Modal from "./components/Modal";

// images
import designLogo from "./images/design.png";
import frontLogo from "./images/front.png";
import backLogo from "./images/back.png";

const BabyLionList = {
  "기획 & 디자인": [
    { id: 1, name: "김가을", major: "융합콘텐츠학과" },
    { id: 2, name: "김도연", major: "초등교육과" },
    { id: 3, name: "백지원", major: "경영학부" },
    { id: 4, name: "유하은", major: "융합콘텐츠학과" },
    { id: 5, name: "장예원", major: "영어영문학부" },
    { id: 6, name: "최예은", major: "서양화과" },
  ],
  프론트엔드: [
    { id: 7, name: "김민서", major: "교육공학과" },
    { id: 8, name: "김예원", major: "컴퓨터공학과" },
    { id: 9, name: "김채연", major: "사이버보안학과" },
    { id: 10, name: "남선우", major: "사회복지학과" },
    { id: 11, name: "서하은", major: "컴퓨터공학과" },
    { id: 12, name: "송유선", major: "초등교육과" },
  ],
  백엔드: [
    { id: 13, name: "김민솔", major: "인공지능학과" },
    { id: 14, name: "박민서", major: "컴퓨터공학과" },
    { id: 15, name: "유지민", major: "휴먼기계바이오공학부" },
    { id: 16, name: "이라령", major: "컴퓨터공학과" },
    { id: 17, name: "이정은", major: "수학과" },
    { id: 18, name: "황지은", major: "컴퓨터공학과" },
  ],
};

function App() {
  const [modal, setModal] = useState(false);
  const [track, setTrack] = useState("");
  const [trackData, setTrackData] = useState([]);
  //선택된 사용자 ID를 위한 state 선언
  const [selectedLionId, setSelectedlionId] = useState([]);

  const selectedLionName =
    trackData.find((lion) => lion.id === selectedLionId)?.name || "";
  //trackData.find를 활용해서 선택한 사용자 ID와 list의 id가 일치하는 item을 찾습니다.
  //그리고 그 item.name이 선택되기 위한 코드를 작성해봅시다 ! (map 함수 도는 방식과 유사함)

  // 트랙 선택을 위한 함수
  const selectTrack = (selectedTrack) => {
    setTrack(selectedTrack);
    setTrackData(BabyLionList[selectedTrack]);
    setSelectedlionId(null);
    //트랙을 선택했을 때 선택된 사용자 ID 초기화하는 setState 함수 필요
  };

  return (
    <Wrapper>
      <BackgroundModal>
        <Title>
          <p className="h1">react1 homework</p>
          <p className="h2">🫳아기사자를 응원해요🫳</p>
          <div className="Line"></div>
        </Title>

        <TrackOption>
          <p>트랙을 선택해주세요.</p>
          <div className="chooseTrack">
            <TrackBtn onClick={() => selectTrack("기획 & 디자인")}>
              <img src={designLogo} alt="기획디자인" />
              <span>기획디자인</span>
            </TrackBtn>
            <TrackBtn onClick={() => selectTrack("프론트엔드")}>
              <img src={frontLogo} alt="프론트엔드" />
              <span>프론트엔드</span>
            </TrackBtn>
            <TrackBtn onClick={() => selectTrack("백엔드")}>
              <img src={backLogo} alt="백엔드" />
              <span>백엔드</span>
            </TrackBtn>
          </div>
        </TrackOption>

        <OpenBtn onClick={() => setModal(true)}>모달 만들기</OpenBtn>
        {modal && (
          <Modal
            setModal={setModal}
            track={track}
            dataList={BabyLionList[track]}
            selectedLionId={selectedLionId}
            setSelectedlionId={setSelectedlionId}
            //dataList를 여기서 props로 전달해서 보내주는 것으로 수정했습니다!
            //그리고 Modal에서 사용자를 선택하기 위해
            //1. 사용자 ID와 2. 이를 선택할 수 있는 함수를 props로 보내줍시다.
          />
        )}
      </BackgroundModal>
      <Cheering>
        {track} {selectedLionName} 아가사자를 응원합니다!
      </Cheering>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  background-color: #d8e4ec;
  font-family: "Pretendard";
  white-space: nowrap;
`;

const BackgroundModal = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  font-family: "Pretendard";

  @media (max-width: 1100px) {
    width: 60%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1.5px solid #d7d7d7;

  .h1 {
    font-weight: 300;
    font-size: 15px;
    margin-bottom: 0;
  }

  .h2 {
    font-weight: 600;
    font-size: 2rem;
    margin-top: 10px;
  }
`;

const TrackOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-family: "Pretendard";
    font-style: normal;
    color: #414141;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
  }

  .chooseTrack {
    background-color: transparent;
    border: none;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const TrackBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: transparent;
  border: none;
`;

const OpenBtn = styled.button`
  padding: 0.5rem 2rem;
  font-family: "Pretendard";
  color: #ffffff;
  background: #81a7d3;
  border-radius: 1.3rem;
  border: none;
  font-size: 20px;
  margin-top: 5%;
`;

const Cheering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 24px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);

  background: #ffffff;
  color: #81a7d3;
  font-family: "Pretendard";

  @media (max-width: 1100px) {
    width: 60%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }
`;
