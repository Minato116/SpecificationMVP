import React from "react";
import Typewriter from "typewriter-effect";

const TypeEffect = ({ string }) => {
  return (
    <>
      <Typewriter
        options={{
          strings: string,
          autoStart: true,
          loop: true,
        }}
      />
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(string)
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(100)
            .deleteAll()
            .autoStart(true)
            .loop(true)
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      /> */}
    </>
  );
};

export default TypeEffect;
