import React, { Component } from "react";
import Sketch from "../threejs/SceneManager";


export default function ThreeContainer() {
  const threeRootElement = React.useRef(null);
  React.useEffect(() => {
    Sketch(threeRootElement.current);
  }, []);

  return (
      <div style={{height:""}} className={"h-screen overflow-hidden"}>
        <div style={{height:"100%"}} ref={threeRootElement} />
      </div>
  );
}
