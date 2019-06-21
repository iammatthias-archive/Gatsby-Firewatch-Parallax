import React from 'react'
import styled from 'react-emotion'
import BodyCopy from '../components/BodyCopy'

const Parallax = styled.div`
  perspective: 100px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const ParallaxLayer = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  @media only screen and (max-width: 900px) {
    left: -20%;
    width: 150%;
  }
  @media only screen and (max-width: 900px) {
    left: -50%;
    width: 200%;
  }
  @media only screen and (max-width: 600px) {
    left: -100%;
    width: 300%;
  }
  &:nth-child(1) {
    transform: translateZ(-300px) scale(4);
  }
  &:nth-child(2) {
    transform: translateZ(-250px) scale(3.5);
  }
  &:nth-child(3) {
    transform: translateZ(-200px) scale(3);
  }
  &:nth-child(4) {
    transform: translateZ(-150px) scale(2.5);
  }
  &:nth-child(5) {
    transform: translateZ(-100px) scale(2);
  }
  &:nth-child(6) {
    transform: translateZ(-50px) scale(1.5);
  }
  &:nth-child(7) {
    transform: translateZ(0px) scale(1);
  }
  img {
    display: block;
    position: absolute;
    bottom: 0;
  }
`
const ParallaxCover = styled.div`
  transform: translateZ(0px) scale(1);
  background: #2d112b;

  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`

const Plx = () => (
  <Parallax>
    <ParallaxLayer>
      <img
        src="https://sam.beckham.io/images/articles/firewatch/layer_0.png"
        alt="layer 0"
      />
    </ParallaxLayer>
    <ParallaxLayer>
      <img
        src="https://sam.beckham.io/images/articles/firewatch/layer_1.png"
        alt="layer 1"
      />
    </ParallaxLayer>
    <ParallaxLayer>
      <img
        src="https://sam.beckham.io/images/articles/firewatch/layer_2.png"
        alt="layer 2"
      />
    </ParallaxLayer>
    <ParallaxLayer>
      <img
        src="https://sam.beckham.io/images/articles/firewatch/layer_3.png"
        alt="layer 3"
      />
    </ParallaxLayer>
    <ParallaxLayer>
      <img
        src="https://sam.beckham.io/images/articles/firewatch/layer_4.png"
        alt="layer 4"
      />
    </ParallaxLayer>
    <ParallaxLayer>
      <img
        src="https://sam.beckham.io/images/articles/firewatch/layer_5.png"
        alt="layer 5"
      />
    </ParallaxLayer>
    <ParallaxLayer>
      <img
        src="https://sam.beckham.io/images/articles/firewatch/layer_6.png"
        alt="layer 6"
      />
    </ParallaxLayer>
    <ParallaxCover>
      <BodyCopy />
    </ParallaxCover>
  </Parallax>
)

export default Plx
