import "./styles.css";
import React, { useState } from "react";

function App() {
  //створення масиву питань,
  //за допомогою isCorrect вказуємо на правильну відповідь як true
  const questions = [
    {
      questionText:
        "Mike _____ down the stairs in order to catch the last bus home.",
      answerOptions: [
        { answerText: "urged", isCorrect: false },
        { answerText: "speed up", isCorrect: false },
        { answerText: "pushed", isCorrect: false },
        { answerText: "hurried", isCorrect: true }
      ]
    },
    {
      questionText:
        "Before he could start applying for jobs, he needed to _____ his resume.",
      answerOptions: [
        { answerText: "back up", isCorrect: false },
        { answerText: "fill in", isCorrect: true },
        { answerText: "inform", isCorrect: false },
        { answerText: "update", isCorrect: false }
      ]
    },
    {
      questionText:
        "She decided she wanted to _____ a few extra pounds and started a diet.",
      answerOptions: [
        { answerText: "throw away", isCorrect: false },
        { answerText: "get rid of", isCorrect: true },
        { answerText: "dispose of", isCorrect: false },
        { answerText: "leave off", isCorrect: false }
      ]
    },
    {
      questionText:
        "He was hungry and asked her if she wanted to _____ a bite.",
      answerOptions: [
        { answerText: "grab", isCorrect: true },
        { answerText: "grasp", isCorrect: false },
        { answerText: "grip", isCorrect: false },
        { answerText: "seize", isCorrect: false }
      ]
    },
    {
      questionText:
        "She _____ him her favorite movie for a week so he could watch it.",
      answerOptions: [
        { answerText: "borrowed", isCorrect: true },
        { answerText: "loaned", isCorrect: false },
        { answerText: "donated", isCorrect: false },
        { answerText: "delivered", isCorrect: false }
      ]
    },
    {
      questionText: "Who is _____ the baby for you?",
      answerOptions: [
        { answerText: "noticing", isCorrect: false },
        { answerText: "minding", isCorrect: true },
        { answerText: "observing", isCorrect: false },
        { answerText: "regarding", isCorrect: false }
      ]
    },
    {
      questionText:
        "It is certainly true that _____ was not one of his aspirations, but after his novel became an international bestseller, he had to adjust to the public attention.",
      answerOptions: [
        { answerText: "rank", isCorrect: false },
        { answerText: "position", isCorrect: false },
        { answerText: "status", isCorrect: false },
        { answerText: "fame", isCorrect: true }
      ]
    },
    {
      questionText:
        "She never had many friends her own age because she could not figure out how to _____ kids her own age.",
      answerOptions: [
        { answerText: "drop in on", isCorrect: false },
        { answerText: "go along", isCorrect: false },
        { answerText: "fit in with", isCorrect: true },
        { answerText: "pretend to be", isCorrect: false }
      ]
    },
    {
      questionText:
        "Not surprisingly, her open and friendly demeanor made it easy for potential new clients to _____ her and ask for assistance.",
      answerOptions: [
        { answerText: "attempt", isCorrect: false },
        { answerText: "draw near", isCorrect: false },
        { answerText: "move toward", isCorrect: false },
        { answerText: "approach", isCorrect: true }
      ]
    },
    {
      questionText:
        "In many less-developed countries, visitors often observe much more _____ on the sides of roads than is typically seen in Europe of the US.",
      answerOptions: [
        { answerText: "fragments", isCorrect: false },
        { answerText: "disorder", isCorrect: false },
        { answerText: "litter", isCorrect: true },
        { answerText: "residues", isCorrect: false }
      ]
    }
  ];
  //створюємо
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="section_score">
          <div>
            Правильних відповідей {score} із {questions.length}
          </div>
          <button className="refresh_btn" onClick={refresh}>
            Спробувати ще раз...
          </button>
        </div>
      ) : (
        <div className="quiz">
          <div className="question_section">
            <div className="question_count">
              <span>Питання {currentQuestion + 1}</span> /{questions.length}
            </div>

            <div className="question_text">
              {questions[currentQuestion].questionText}
            </div>
            <div className="answer_section">
              {questions[currentQuestion].answerOptions.map((item) => (
                <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>
                  {item.answerText}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
