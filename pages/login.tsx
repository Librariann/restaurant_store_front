import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Input from "../components/Input";

const Button = styled.button`
  background-color: #a5d6a7;
  color: white;
  font-weight: bold;
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  display: inline-block;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className="grid grid-rows-1 justify-center">
      <h1 className="mt-60 font-bold md:text-4xl text-center">LOGIN</h1>
      <Input
        type="text"
        className="mt-14 border md:text-2xl"
        placeholder="Username"
        onChange={onChangeId}
        value={username}
      />
      <Input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        className="mt-3 border md:text-2xl"
        onChange={onChangePw}
        value={password}
      />
      <div>
        <CheckBox className="w-4 mt-3" />
        <span className="ml-1">로그인 상태 유지</span>
      </div>
      <Link href="/">
        <Button className="p-2 mt-7">LOGIN</Button>
      </Link>
      <div>
        <Link href="join">회원가입</Link>
      </div>
    </div>
  );
}

export default Login;
