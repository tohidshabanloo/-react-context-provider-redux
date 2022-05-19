import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CounterContext from "./Context";
import CtxHeader from "./CtxHeader";
import CtxHome from "./Pages/CtxHome";
import CtxPage1 from "./Pages/CtxPage1";

const ContextApiRoutes = () => {
  const [state, setState] = useState("");
  return (
    <CounterContext.Provider value={{ state, setState }}>
      <CtxHeader />
      <Routes>
        <Route index element={<CtxHome />} />
        <Route path="page1" element={<CtxPage1 />} />
      </Routes>
    </CounterContext.Provider>
  );
};

export default ContextApiRoutes;
