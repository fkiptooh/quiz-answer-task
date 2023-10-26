import { useState } from "react";
import "./App.css";

interface QuestionProps {
  question: string;
  correctAnswer: string;
  choices: string[];
}

const question: QuestionProps[] = [
  {
    question: "What is the color of the sky?",
    correctAnswer: "Blue",
    choices: ["Blue", "Red", "White", "Pink"],
  },
  {
    question: "What is the capital city of Kenya?",
    correctAnswer: "Nairobi",
    choices: ["Mombasa", "Nairobi", "Kericho", "Kisumu"],
  },
  {
    question: "What is the capital city of Uganda?",
    correctAnswer: "Kampala",
    choices: ["Dodoma", "Kigali", "Djbouti", "Kampala"],
  },
];
const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const currentQuestion = question[currentQuestionIndex];

  const isGameOver = currentQuestionIndex === question.length;

  const handleReset = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const Quiz = () => {
    return (
      <>
        <h1>{currentQuestion.question}</h1>
        <form className="form-quiz" onSubmit={handleSubmit}>
          {currentQuestion.choices.map((answer) => (
            <label key={answer}>
              <input
                type="radio"
                name="answer"
                checked={answer === selectedAnswer}
                onChange={() => setSelectedAnswer(answer)}
              />
              {answer}
            </label>
          ))}

          <button>Submit</button>
        </form>
      </>
    );
  };

  const ScoreCard = () => {
    const wrongAttemps = question.length - score;
    return (
      <div className="form-quiz">
        Your got {score} correct, you got {wrongAttemps} questions wrong{" "}
        <button onClick={handleReset}>Try again</button>
      </div>
    );
  };
  return <div>{isGameOver ? <ScoreCard /> : <Quiz />} </div>;
};

export default App;
