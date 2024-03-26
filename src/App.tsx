import "./App.css";
import Navbar from "./components/layout/Navbar";
import Biography from "./pages/Biography";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Suggestions from "./pages/Suggestions";
import TimeLine from "./pages/TimeLine";
import WelcomePage from "./pages/WelcomePage";
import { useRef } from "react";

function App() {
  const refs = {
    welcomeRef: useRef(null),
    homeRef: useRef(null),
    timelineRef: useRef(null),
    quizRef: useRef(null),
    biography: useRef(null),
    suggestions: useRef(null),
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
      <div ref={refs.biography}>
        <Biography />
      </div>
      <div ref={refs.suggestions}>
        <Suggestions />
      </div>
    </>
  );
}

export default App;
