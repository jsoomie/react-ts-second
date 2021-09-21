import { QuestionCard } from "../components";

export default function HomePage() {
  const startTrivia = async () => {
    console.log("Start Trivia Here");
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Check Answers here");
  };

  const nextQuestion = () => {
    console.log("nextQuestion Here");
  };

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="startButton" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading...</p>
      <QuestionCard />
      <button className="nextButton" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}
