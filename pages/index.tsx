import Contents from "../components/main/contents";
import NavBar from "../components/navBar";
import Seo from "../components/Seo";
import axios from "axios";

function Home() {
  return (
    <>
      <Seo title="main" />
      <NavBar />
      <Contents />
    </>
  );
}

export default Home;
