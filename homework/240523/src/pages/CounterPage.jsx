import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementTen, decrementTen, reset } from "../redux/counterSlice";
//----------------------------------------------------
//위 두 줄 주석 풀어주시면 됩니다.
//redux 사용할 때 import 해와야 하는 값들 잊지 마세요‼️

const CounterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //----------------------------------------------------
  //윗줄 주석 풀어주세요!
  //navigate를 가져오는 것처럼, dispatch 역시 hook을 사용할 수 있도록 정의해줍니다.
  
 
  const count = useSelector((state) => state.counter.value);
  //----------------------------------------------------
  //redux store에서는 selctor를 활용해 저장된 상태 값을 가져오는데요!
  //이 때 state의 ??의 ??에 접근해 가져와야 하는데, 어떻게 해야할까요?
  //hint ✉️ : session 폴더의 PartPage 코드를 참고해보세요

  return (
    <Wrapper>
      <ContentContainer>
        {/* 아래 버튼들에 들어가있는 주석 처리 풀어주세요! (드래그하고 ctrl + /) */}
        {/* ---------------------------------------------------------------- */}
        {<button onClick={() => dispatch(increment())}>+</button>}
        {<button onClick={() => dispatch(incrementTen())}>+10</button>}
        {/* ---------------------------------------------------------------- */}
        {/* action인 increment를 dispatch 함수를 써서 reducer로 보내줍니다. 
        그러면 reducer에서는 increment가 이름인 action일 때의 함수를 실행하게 됩니다! */}
        <CountDisplay>{count}</CountDisplay>
        {<button onClick={() => dispatch(decrement())}>-</button>}
        {<button onClick={() => dispatch(decrementTen())}>-10</button>}

      </ContentContainer>
      <ButtonContainer>
        {<Button onClick={() => dispatch(reset())}>Reset</Button>}
        <Button onClick={() => navigate("/")}>홈으로</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default CounterPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  gap: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;

  button {
    padding: 5px 10px;
    font-size: 1.5rem;
    border: none;
    background-color: #e4e4e4;
    color: black;
  }
`;

const CountDisplay = styled.span`
  font-size: 1.5rem;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 1.2rem;
  border: none;
  background-color: #e4e4e4;
  color: black;
  border-radius: 10px;
`;
