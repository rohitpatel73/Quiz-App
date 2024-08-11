import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const questions = [
  {
    question: 'What color is the sky on a clear day?',
    options: [
      { answer: 'Blue', isCorrect: true },
      { answer: 'Green', isCorrect: false },
      { answer: 'Red', isCorrect: false },
      { answer: 'Yellow', isCorrect: false }
    ]
  },
  {
    question: 'What is the color of grass?',
    options: [
      { answer: 'Green', isCorrect: true },
      { answer: 'Blue', isCorrect: false },
      { answer: 'Yellow', isCorrect: false },
      { answer: 'Red', isCorrect: false }
    ]
  },
  {
    question: 'What is the color of wood?',
    options: [
      { answer: 'Blue', isCorrect: false },
      { answer: 'Brown', isCorrect: true },
      { answer: 'Green', isCorrect: false },
      { answer: 'Yellow', isCorrect: false }
    ]
  },
  {
    question: 'Which animal says "Meow"?',
    options: [
      { answer: 'Cat', isCorrect: true },
      { answer: 'Dog', isCorrect: false },
      { answer: 'Cow', isCorrect: false },
      { answer: 'Horse', isCorrect: false }
    ]
  },
  {
    question: 'How many legs does a cow have?',
    options: [
      { answer: 'Eight', isCorrect: false },
      { answer: 'Six', isCorrect: false },
      { answer: 'Ten', isCorrect: false },
      { answer: 'four', isCorrect: true }
    ]
  }
];


function QuestionScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/score', { state: { score } });
    }
  };

  return (
    <Container className="container">
      <Row>
      <h2 style={{paddingBottom: "40px"}}>Answer the following...</h2>
        <Col>
          <h1>{questions[currentQuestion].question}</h1>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(option.isCorrect)}
              className="m-2"
              variant="primary"
            >
              {option.answer}
            </Button>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionScreen;
