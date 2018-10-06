import React from 'react'
import styled from 'react-emotion'

const BodyCopy = styled.div`
  background: #2d112b;
  min-height: 100vh;
  max-width: 40rem;
  padding: 2rem;
  margin: 0 auto;
  color: #fedcc8;
  text-align: left;
`
const BodyCopyColumns = styled.div`
  margin-bottom: 4rem;
  column-count: 2;
  column-gap: 2rem;
  @media only screen and (max-width: 600px) {
    column-count: 1;
  }
`
const BodyCopyParagraph = styled.div`
  margin-bottom: 4rem;
`

const Body = () => (
  <BodyCopy>
    <h2>Lorem ipsum dolor sit amet</h2>
    <BodyCopyColumns>
      <p>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </BodyCopyColumns>
    <h2>Lorem ipsum dolor sit amet</h2>
    <BodyCopyParagraph>
      <p>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Scelerisque in dictum non consectetur a erat nam at. Faucibus et
        molestie ac feugiat sed. Id consectetur purus ut faucibus pulvinar
        elementum. Volutpat diam ut venenatis tellus in metus vulputate eu.
        Neque laoreet suspendisse interdum consectetur libero id faucibus. Vitae
        justo eget magna fermentum iaculis eu non diam. Aliquam ut porttitor leo
        a diam. Sapien eget mi proin sed libero. Non diam phasellus vestibulum
        lorem sed risus ultricies. Amet mauris commodo quis imperdiet massa. Non
        odio euismod lacinia at quis risus sed.
      </p>
      <p>
        Dapibus ultrices in iaculis nunc sed augue lacus. Ultrices vitae auctor
        eu augue. Cras sed felis eget velit aliquet sagittis id consectetur.
        Porttitor lacus luctus accumsan tortor posuere ac ut consequat. At risus
        viverra adipiscing at in tellus. Amet mattis vulputate enim nulla
        aliquet porttitor lacus luctus. Magnis dis parturient montes nascetur
        ridiculus mus mauris vitae. Non sodales neque sodales ut etiam sit.
      </p>
    </BodyCopyParagraph>
  </BodyCopy>
)

export default Body
