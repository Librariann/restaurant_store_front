import styled from "styled-components";
import Search from "./main/search";
import { useRouter } from "next/router";

type Props = {
  searchBool?: boolean;
};

const NavComponent = styled.nav`
  background-color: #a5d6a7;
`;

function NavBar({ searchBool = true }: Props) {
  const router = useRouter();
  const logout = () => {
    alert("logout!");
  };
  return (
    <NavComponent className="flex justify-around items-center w-full h-12">
      <div
        className="text-white text-2xl font-extrabold"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      {searchBool && <Search />}
      <div
        className="mr-[5%] text-white text-2xl font-extrabold"
        onClick={logout}
      >
        Logout
      </div>
    </NavComponent>
  );
}

export default NavBar;
