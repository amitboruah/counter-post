// import React,{lazy,Suspense} from "react";
import Post from "./components/Post";
// import Counter from "./components/Counter";

// const Test = lazy(()=>import("./components/Test"))

function App() {
  return (
    <div>
      {/* <Counter/> */}
      <Post />
      {/* <Suspense fallback={<div>please wait...</div>}> 
      <Test title="hi"/>
      </Suspense> */}
    </div>
  );
}

export default App; 
