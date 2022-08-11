import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input";

const Button = styled.button`
  margin: 40px auto;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
`;

const Wrapping = styled.div`
  margin-top: 50px;
`;

const H4 = styled.h4`
  font-size: 20px;
`;

const TextArea = styled.textarea`
  border: 1px solid #cecece;
  width: 400px;
  height: 100px;
`;

function InsertForm() {
  const [hashTag, setHashTag] = useState("");
  const [hashTagList, setHashTagList] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashTag(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const blank_pattern = /^\s+|\s+$/g;
    if (e.code === "Space") {
      if (hashTag.replace(blank_pattern, "") !== "") {
        setHashTagList((preValue) => {
          return [...preValue, hashTag];
        });
      } else {
        alert("1자 이상 입력해주세요");
      }
      setHashTag("");
    }
  };

  const onSubmit = () => {
    console.log("onSubmit");
  };

  return (
    <Wrapping className="mt-20 grid grid-rows-1 justify-center">
      <h1 className="text-4xl font-extrabold text-center">맛집 등록</h1>

      {/* 가게명 */}
      <Wrapping>
        <H4>가게명</H4>
        <Input type="text" placeholder="가게명을 입력해주세요" />
      </Wrapping>

      {/* 가게설명 */}
      <Wrapping>
        <H4>가게설명</H4>
        <TextArea placeholder="가게설명을 입력해주세요" />
      </Wrapping>

      {/* 음식 이미지 등록 */}
      <Wrapping>
        <H4>음식 이미지 등록</H4>
        <Input type="file" accept="image/gif, image/jpeg, image/png" />
      </Wrapping>

      {/* HashTag */}
      <Wrapping>
        <H4>HashTag 입력</H4>
        <Input
          type="text"
          placeholder="#은 제외하고 입력해주세요"
          onChange={onChange}
          onKeyUp={handleKeyPress}
          value={hashTag}
        />
        <div className="text-red-600">등록시 스페이스바로 등록</div>
        {hashTagList.length > 0 &&
          hashTagList.map((item: string, index: number) => {
            return <span key={index}>#{item}</span>;
          })}
      </Wrapping>

      {/* Submit Button */}
      <Button onClick={onSubmit}>전송</Button>
    </Wrapping>
  );
}

export default InsertForm;
