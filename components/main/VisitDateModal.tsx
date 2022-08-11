import styled from "styled-components";

const Modal = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  border: 1px solid #000;
`;

function VisitDateModal() {
  return (
    <Modal>
      <div>Hello World!</div>
    </Modal>
  );
}

export default VisitDateModal;
