import Home from "./AmazonClone/Home.js"
import Header from "./AmazonClone/Header.js";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./AmazonClone/CheckOut.js";
import StateProvider from "./AmazonClone/StateProvider.js";
import { SignInPage } from "./AmazonClone/SignInPage.js";
import { Returns } from "./AmazonClone/Returns.js";
function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Checkout" element={<CheckOut/>}/>
        <Route path='useState' element={<StateProvider/>}/>
        <Route path="signIn" element={<SignInPage/>}/>
        <Route path="returns" element={<Returns/>}/>
      </Routes>
    </div>
  );
}

export default App;
