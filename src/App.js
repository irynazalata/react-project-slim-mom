import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo.js";
// import UserInfo from "./components/UserInfo/UserInfo";
import "./App.css";
function App() {
  return (
    <>
      <div className="headerContainer">
        <Header />
        {/* <UserInfo /> */}
      </div>
      <div className="bottomVectorOfHeader"></div>
    </>
  );
}

export default App;
