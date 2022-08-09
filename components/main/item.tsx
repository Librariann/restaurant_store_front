import Image from "next/image";
import styled from "styled-components";

const HashTag = styled.li`
  font-size: 18px;
  color: #9a9a9a;
`;

const Address = styled.li`
  font-size: 16px;
  color: #b3b3b3;
  margin-bottom: 18px;
`;

const Date = styled.li`
  font-size: 16px;
  color: #b3b3b3;
  margin-bottom: 18px;
`;

function Item() {
  const onClickTest = () => console.log("test");
  return (
    <div className="mt-16 md:flex">
      <div>
        <Image
          src="/suage.jpeg"
          width={486}
          height={322}
          alt="search icon"
          layout="intrinsic"
        />
      </div>
      <div className="ml-8 mt-6">
        <ul>
          <li className="flex mb-2">
            <div className="font-bold text-4xl w-72">Suage</div>
            <div onClick={onClickTest}>...</div>
          </li>
          <HashTag className="flex mb-6">
            <div className="mr-1">#일본식</div>
            <div>#스프카레</div>
          </HashTag>
          <li className="w-80 mb-6 font-medium text-xl">
            일본식 스프카레의 정석 양 많고 맛있음 다음에 또 오고 싶을 정도의
            맛집
          </li>
          <Address>서울특별시 마포구 와우산로29라길 7</Address>
          <Date>2022/01/01 12:12:12</Date>
          <li>* * * * *</li>
        </ul>
      </div>
    </div>
  );
}

export default Item;
