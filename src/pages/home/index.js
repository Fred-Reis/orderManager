import React, { Fragment, Component } from "react";
import { View } from "react-native";

import { Container } from "./styles";

import styled from 'styled-components';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Cont />
        </Container>
      </Fragment>
    );
  }
}

const Cont = styled.View`
  width: 60%;
  height: 40%;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
`;
