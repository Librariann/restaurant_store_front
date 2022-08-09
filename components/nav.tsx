import Image from "next/image";
import styled from "styled-components";

const NavComponent = styled.nav`
  background-color: #a5d6a7;
`;

const Input = styled.input`
  ::placeholder {
    color: #898989;
    font-size: 16px;
  }
`;

const Wrapping = styled.div`
  position: relative;
  top: 6px;
  left: 9px;
  display: inline-block;
`;

function Nav() {
  return (
    <NavComponent className="grid grid-cols-3 w-full h-12">
      <div></div> {/* 디자인을 위한 div */}
      <div className="place-self-center">
        <Input
          className="w-80 pl-2 h-8 rounded-full"
          type="text"
          placeholder="해시태그 검색 ex) 고기 생선"
        />
        <Wrapping>
          <Image
            src="/mg_icon.png"
            alt="search icon"
            width={24}
            height={24}
            layout="intrinsic"
          />
        </Wrapping>
      </div>
      <div className="place-self-end text-white text-2xl font-extrabold mb-2 mr-10">
        Logout
      </div>
    </NavComponent>
  );
}

export default Nav;
