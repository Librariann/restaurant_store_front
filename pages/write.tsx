import Input from "../components/Input";
import styled from "styled-components";
import NavBar from "../components/navBar";
import React, { useState } from "react";
import Seo from "../components/Seo";
import InsertForm from "../components/write/InsertForm";

function Write() {
  return (
    <>
      <Seo title="write" />

      {/* 최상단 Navigation */}
      <NavBar searchBool={false} />

      {/* 입력 Form */}
      <InsertForm />
    </>
  );
}
//이름 변경 불가능
//SEO에 최적화 되게 만들고 싶다면 getServerSideProps를 사용 할 것!
// export async function getServerSideProps() {
//   const results = await (await fetch(`http://localhost:3000/api/test`)).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }
export default Write;
