import styled from "styled-components";
import WriteButton from "../common/write_button";
import Item from "./item";

const ContentsDiv = styled.div`
  margin-top: 110px;
`;

function Contents() {
  return (
    <>
      <ContentsDiv className="w-full grid grid-cols-1">
        <div className="place-self-center">
          <h1 className="text-4xl font-extrabold text-center">
            등록한 맛집 리스트
          </h1>
          <Item />
          <Item />
          <Item />
          <Item />
          <WriteButton />
        </div>
      </ContentsDiv>
    </>
  );
}

export default Contents;
