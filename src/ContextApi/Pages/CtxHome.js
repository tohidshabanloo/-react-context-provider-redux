import { useContext, useEffect } from "react";
import CounterContext from "../Context";

const CtxHome = () => {
  const { setState } = useContext(CounterContext);

  useEffect(() => {
    const log = () => {
      console.log("HI");
    };
    setState(() => log);
  }, [setState]);

  return (
    <>
      <h1>CtxHome</h1>
      {/* <div>state: {state}</div> */}
    </>
  );
};

export default CtxHome;
