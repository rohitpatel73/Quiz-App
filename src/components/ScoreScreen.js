import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function ScoreScreen() {
  const location = useLocation();
  const { score } = location.state || { score: 0 };
  const navigate = useNavigate();

  return (
    <Container className="container">
      <Row>
        <Col>
          <h1>Final Score: {score}</h1>
          <Button onClick={() => navigate('/')} variant="success">
            Try Again
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ScoreScreen;
