import { QuestionCard } from "../components";
import { useState } from "react";
import { fetchData, Difficulty, QuestionState } from "../API";

type AnswerObject = {
  question: string;
  answer: string;
  coorect: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchData(TOTAL_QUESTIONS, Difficulty.EASY));

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
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="nextButton" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}
