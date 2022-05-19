import { Link } from "react-router-dom";
import { useContext } from "react";
import CounterContext from "./Context";

const CtxHeader = () => {
  const { state } = useContext(CounterContext);
  return (
    <>
      <span>Context Api: </span>
      <Link to="/ctx">Home</Link> | <Link to="/ctx/page1">Page1</Link>
      <hr />
      <button onClick={state}>CLICK ME</button>
    </>
  );
};

export default CtxHeader;
