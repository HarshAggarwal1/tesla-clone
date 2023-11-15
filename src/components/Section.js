import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal';

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade direction='up'>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade direction='up'>
          <ButtonGroup>
            <LeftButton>
              {props.leftBtnText}
            </LeftButton>
            { props.rightBtnText &&
              <RightButton>
                {props.rightBtnText}
              </RightButton>
            }
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
    </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    &:hover {
      opacity: 1;
    }
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
    &:hover {
      opacity: 0.8;
    }
`

const DownArrow = styled.img`
    display: ${`flex-inline`};
    aling-items: center;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div``