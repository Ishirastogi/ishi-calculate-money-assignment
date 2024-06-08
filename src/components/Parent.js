import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

export default function Parent() {
  const [money, setMoney] = useState(0);
  function decrease500() {
    setMoney(money - 500);
  }

  function increase1000() {
    setMoney(money + 1000);
  }
  return (
    <div>
      <h1>Parent</h1>
      <h2>Money={money}</h2>
      <Child1 increase1000={increase1000} />
      <Child2 decrease500={decrease500} />
    </div>
  );
}
