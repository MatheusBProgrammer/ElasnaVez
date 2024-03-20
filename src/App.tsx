import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import TimeLine from "./pages/TimeLine";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <Navbar />
      <WelcomePage />
      <Home />
      <TimeLine />
      <QuizPage />
    </>
  );
}

export default App;
