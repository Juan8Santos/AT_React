import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import PageExercicio2 from "../pages/pageExercicio2/PageExercicio2";
import PageExercicio3 from "../pages/pageExercicio3/PageExercicio3";
import PageExercicio4 from "../pages/pageExercicio4/PageExercicio4";
import PageExercicio5 from "../pages/pageExercicio5/PageExercicio5";
import PageExercicio6 from "../pages/pageExercicio6/PageExercicio6";
import PageExercicio7 from "../pages/pageExercicio7/PageExercicio7";
import PageExercicio8 from "../pages/pageExercicio8/PageExercicio8";
import PageExercicio9 from "../pages/pageExercicio9/PageExercicio9";
import PageExercicio10 from "../pages/pageExercicio10/PageExercicio10";
import PageExercicio11 from "../pages/pageExercicio11/PageExercicio11";
import PageExercicio12 from "../pages/pageExercicio12/PageExercicio12";
import PageExercicio13 from "../pages/pageExercicio13/PageExercicio13";
import PageExercicio14 from "../pages/pageExercicio14/PageExercicio14";
import PageExercicio15 from "../pages/pageExercicio15/PageExercicio15";
import PageExercicio16 from "../pages/pageExercicio16/PageExercicio16";
import PageExercicio1 from "../pages/pageExercicio1/pageExercicio1";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercicio1" element={<PageExercicio1 />} />
        <Route path="/exercicio2" element={<PageExercicio2 />} />
        <Route path="/exercicio3" element={<PageExercicio3 />} />
        <Route path="/exercicio4" element={<PageExercicio4 />} />
        <Route path="/exercicio5" element={<PageExercicio5 />} />
        <Route path="/exercicio6" element={<PageExercicio6 />} />
        <Route path="/exercicio7" element={<PageExercicio7 />} />
        <Route path="/exercicio8" element={<PageExercicio8 />} />
        <Route path="/exercicio9" element={<PageExercicio9 />} />
        <Route path="/exercicio10" element={<PageExercicio10 />} />
        <Route path="/exercicio11" element={<PageExercicio11 />} />
        <Route path="/exercicio12" element={<PageExercicio12 />} />
        <Route path="/exercicio13" element={<PageExercicio13 />} />
        <Route path="/exercicio14" element={<PageExercicio14 />} />
        <Route path="/exercicio15" element={<PageExercicio15 />} />
        <Route path="/exercicio16" element={<PageExercicio16 />} />
    </Routes>
  );
}