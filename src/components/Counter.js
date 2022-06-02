import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
   // setCount(count + 1);

      console.log(`Before setState' :${count}`)

      setCount((count)=>count +1)
      setCount((count)=>count +1)
      console.log(`After setState':${count}`)

  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
