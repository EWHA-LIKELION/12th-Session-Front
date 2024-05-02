import React from "react";

const Name = ({ name, nth, isFE }) => {
  const style = {
    backgroundColor: "black",
    color: "orange",
  };
  return (
    <>
      {isFE ? (
        <div style={style}>
          {nth}기 프론트엔드 {name}입니다.
        </div>
      ) : null}
    </>
  );
};
Name.defaultProps = {
  name: "변지혜",
};
export default Name;
