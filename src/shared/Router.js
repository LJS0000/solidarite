import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage.jsx"
import DetailPage from "../pages/DetailPage.jsx"


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/:id" element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;