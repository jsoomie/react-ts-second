type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="QuestionContainer">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p>{atob(question)}</p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={userAnswer}
              value={atob(answer)}
              onClick={callback}
            >
              {atob(answer)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
