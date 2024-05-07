import React from "react";
import styled from "styled-components";
import figma from "./images/figma.png";
import front from "./images/front.png";
import back from "./images/back.png";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Body>
        <Rectangle380></Rectangle380>
        <Rectangle436 />
        <SideText>react1 homework</SideText>
        <BigText>🫳아기사자를 응원해요🫳</BigText>
        <Line></Line>
        <SelectText>트랙을 선택해주세요.</SelectText>
        <PartNameDesign>기획&디자인</PartNameDesign>
        <DesignImg src={figma} />
        <FrontImg src={front} />
        <BackImg src={back} />
        <PartNameFront>프론트엔드</PartNameFront>
        <PartNameBack>백엔드</PartNameBack>
        <Text>아기사자를 응원합니다!</Text>
        <Button>모달 만들기</Button>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  background-color: #d8e4ec;
  width: 1920px;
  height: 1080px;
  display: flex;
`;

const Rectangle380 = styled.div`
  top: 215px;
  left: 583px;
  background: #ffffff;
  width: 754px;
  height: 471px;
  position: absolute;
  gap: 0px;
  opacity: 0px;
  box-shadow: 0px 5px 15px 0px #00000040;
  border-radius: 20px;
`;

const Rectangle436 = styled.div`
  width: 754px;
  height: 84px;
  background: #ffffff;
  top: 756px;
  left: 583px;
  position: absolute;
  gap: 0px;
  border-radius: 40px;
  opacity: 0px;
  box-shadow: 0px 5px 15px 0px #00000040;
`;

const Text = styled.div`
  top: 786px;
  left: 870px;
  width: 184px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  position: absolute;
  color: #81a7d3;
`;

const Button = styled.div`
  width: 110px;
  height: 27px;
  top: 600px;
  left: 880px;
  padding: 8px 32px 8px 26px;
  position: absolute;
  gap: 10px;
  border-radius: 27px;
  background-color: #81a7d3;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.87px;
  text-align: center;
  color: #ffffff;
`;

const BigText = styled.div`
  width: 400px;
  height: 42px;
  top: 293px;
  left: 770px;
  font-family: Pretendard;
  font-size: 35px;
  font-weight: 600;
  line-height: 41.77px;
  text-align: center;
  color: #333333;
  position: absolute;
`;

const SideText = styled.div`
  width: 223px;
  height: 16px;
  top: 268px;
  left: 847px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 300;
  line-height: 17.9px;
  text-align: center;
  color: #333333;
  position: absolute;
`;

const Line = styled.div`
  width: 641px;
  height: 0px;
  top: 381px;
  left: 639px;
  gap: 0px;
  border: 1.5px 0px 0px 0px;
  opacity: 0px;
  border: 1.5px solid #d7d7d7;
  position: absolute;
`;

const SelectText = styled.div`
  width: 183px;
  height: 26px;
  top: 426px;
  left: 714px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 600;
  line-height: 26.25px;
  text-align: left;
  color: #414141;
  position: absolute;
`;

const PartNameDesign = styled.div`
  width: 75px;
  height: 18px;
  top: 553px;
  left: 774px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  color: #414141;
  position: absolute;
`;

const DesignImg = styled.img`
  width: 60px;
  height: 60px;
  top: 476px;
  left: 784px;
  gap: 0px;
  opacity: 0px;
  box-shadow: 0px 4px 4px 0px #00000040;
  position: absolute;
  border-radius: 30px;
`;

const FrontImg = styled.img`
  width: 60px;
  height: 60px;
  top: 476px;
  left: 949px;
  gap: 0px;
  opacity: 0px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px #00000040;
  position: absolute;
`;

const BackImg = styled.img`
  width: 60px;
  height: 60px;
  top: 476px;
  left: 1104px;
  gap: 0px;
  opacity: 0px;
  box-shadow: 0px 4px 4px 0px #00000040;
  position: absolute;
  border-radius: 30px;
`;

const PartNameFront = styled.div`
  width: 65px;
  height: 18px;
  top: 553px;
  left: 944px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  color: #414141;
  position: absolute;
`;

const PartNameBack = styled.div`
  width: 39px;
  height: 18px;
  top: 553px;
  left: 1113px;
  gap: 0px;
  opacity: 0px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  color: #414141;
  position: absolute;
`;
