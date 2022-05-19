import { useContext } from "react";
import CounterContext from "../Context";

const CtxPage1 = () => {
  const { state } = useContext(CounterContext);
  return (
    <>
      <h1>CtxPage1</h1>
      <div>state: {state}</div>
    </>
  );
};

export default CtxPage1;
