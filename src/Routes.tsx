import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CardExplain } from "./pages/CardExplain";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>} >
        <Route path="/" element={<Home/>}/>
        <Route path="/cardexplain" element={<CardExplain/>}/>
      </Route>
    </Routes>
  )
}