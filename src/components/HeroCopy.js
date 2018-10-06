import React from 'react'
import styled from 'react-emotion'

const HeroCopy = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  h1,
  h2 {
    background: linear-gradient(to bottom, #f14132 0%, #ff7e40 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px rgba(255, 126, 64, 0.4);
    text-align: center;
    span {
      white-space: nowrap;
    }
  }
`

const Hero = () => (
  <HeroCopy>
    <h1>
      The hills <span>are alive</span>
    </h1>
    <h2>with the sound of music</h2>
  </HeroCopy>
)

export default Hero
