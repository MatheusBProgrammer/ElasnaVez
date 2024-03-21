import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import TimeLine from "./pages/TimeLine";
import WelcomePage from "./pages/WelcomePage";
import { useRef } from "react";

function App() {
  const refs = {
    welcomeRef: useRef(null),
    homeRef: useRef(null),
    timelineRef: useRef(null),
    quizRef: useRef(null),
  };

  return (
    <>
      <Navbar scrollToRef={refs} />
      <div ref={refs.welcomeRef}>
        <WelcomePage />
      </div>
      <div ref={refs.homeRef}>
        <Home />
      </div>
      <div ref={refs.timelineRef}>
        <TimeLine />
      </div>
      <div ref={refs.quizRef}>
        <QuizPage />
      </div>
    </>
  );
}

export default App;
