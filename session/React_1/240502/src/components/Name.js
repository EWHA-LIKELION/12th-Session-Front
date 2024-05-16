import React from "react";

//const Name = () => {
//  return <div>안녕하세요 저는 아기사자 남선우입니다.</div>;
//};
//export default Name;

const Name = ({ name, nth, isFE }) => {
  return (
    <>
      {isFE ? (
        <div>
          {nth}기 프론트엔드 {name}입니다!
        </div>
      ) : null}
    </>
  );
};
export default Name;
