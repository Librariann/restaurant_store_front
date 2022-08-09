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
  display: inline-block;
`;

function Nav() {
  const logout = () => {
    alert("logout!");
  };
  return (
    <NavComponent className="flex justify-around items-center w-full h-12">
      <div></div>
      <div className="ml-[5%] flex">
        <Wrapping className="">
          <Input
            className="sm:w-80 pl-2 h-8 rounded-full"
            type="text"
            placeholder="해시태그 검색 ex) 고기 생선"
          />
        </Wrapping>
        <Wrapping className="">
          <Image
            src="/mg_icon.png"
            alt="search icon"
            width={24}
            height={24}
            layout="intrinsic"
          />
        </Wrapping>
      </div>
      <div
        className="mr-[5%] text-white text-2xl font-extrabold"
        onClick={logout}
      >
        Logout
      </div>
    </NavComponent>
  );
}

export default Nav;
