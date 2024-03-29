import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background-color: white;
    background-size: cover;
    color: #000;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #efefef;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
      </Container>
    </Jumbo>
  </Styles>
)