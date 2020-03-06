import React from "react";
import arrowsDown from "../../img/arrows-down.svg";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const FadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`
  animation: infinite 2s ${FadeInDownAnimation};
`;

const AnimateArrows = () => (
  <FadeInDownDiv>
    <a href="/#">
      <img src={arrowsDown} alt="" />
    </a>
  </FadeInDownDiv>
);

export default AnimateArrows;
