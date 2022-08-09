import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  width: 73px;
  height: 73px;
  background-color: #a5d6a7;
  border-radius: 100px;
`;

const Hr = styled.hr`
  width: 70%;
  margin: 0 auto;
  border: 1px solid white;
`;

function WriteButton() {
  const moveWritePage = () => {
    alert("이동 했습니다");
  };
  return (
    <div className="float-right mr-20">
      <Button onClick={moveWritePage}>
        <Hr />
        <Hr className="rotate-90" />
      </Button>
    </div>
  );
}

export default WriteButton;
