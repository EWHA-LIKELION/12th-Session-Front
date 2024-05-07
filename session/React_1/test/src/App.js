import React, { useState } from "react";
import Input from "./components/Input";
import Name from "./components/Name";

const lionList = [
  { name: "아기사자", nth: "12", isFE: true },
  { name: "아기사자", nth: "12", isFE: false },
  { name: "아기사자", nth: "12", isFE: true },
];
//데이터셋은 자유롭게 추가 및 변경이 가능합니다! 다양한 데이터를 만들어 띄워보세요 :)

function App() {
  return <Input></Input>;
}

export default App;
