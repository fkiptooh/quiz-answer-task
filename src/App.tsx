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
];
const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = question[currentQuestionIndex];
  return (
    <div>
      <form>
        <h1>{currentQuestion.question}</h1>
        {currentQuestion.choices.map((answer) => (
          <label>
            <input type="checkbox" name="answer" />
            {answer}
          </label>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
