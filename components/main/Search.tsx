import styled from "styled-components";
import Image from "next/image";

const Input = styled.input`
  ::placeholder {
    color: #898989;
    font-size: 16px;
  }
`;

const Wrapping = styled.div`
  display: inline-block;
`;

function Search() {
  return (
    <>
      <div className="flex">
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
    </>
  );
}

export default Search;
