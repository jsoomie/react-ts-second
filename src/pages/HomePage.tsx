export default function HomePage() {
  const startTrivia = async () => {
    console.log("Start Trivia Here");
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Check Answers here");
  };

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
