import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import TimeLine from "./pages/TimeLine";
import WelcomePage from "./pages/WelcomePage";
import { useRef } from "react";

function App() {
  const welcomeRef = useRef(null);
  const homeRef = useRef(null);
  const timelineRef = useRef(null);
  const quizRef = useRef(null);
  return (
    <>
      <Navbar scrollToRef={{ welcomeRef, homeRef, timelineRef, quizRef }} />
      <div ref={welcomeRef}>
        <WelcomePage />
      </div>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={timelineRef}>
        <TimeLine />
      </div>
      <div ref={quizRef}>
        <QuizPage />
      </div>
    </>
  );
}

export default App;
