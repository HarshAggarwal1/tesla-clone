import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import zIndex from '@mui/material/styles/zIndex';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [middleMenuOpenStatus, setMiddleMenuOpenStatus] = useState(false);
  const cars = useSelector(selectCars);
  // console.log(cars);

  return (
    <Container>
      <a>
        <LogoImage src="/images/logo.svg" alt="logo"/>
      </a>
      <Menu>
        <div>
          {cars && cars.map((car, index) => (
            <MiddleMenuItems key={index} href="#" 
              onMouseEnter={() => {setMiddleMenuOpenStatus(true)}}
              onMouseLeave={() => {setMiddleMenuOpenStatus(false)}}>{car}</MiddleMenuItems>
          ))}
        </div>
        
      <MiddleMenuItemOpen status={middleMenuOpenStatus}>
          <div>
            Helloo!
          </div>
      </MiddleMenuItemOpen>
      </Menu>
      <RightMenu>
        <Globe />
        <TeslaAccount />
        <CustomMenu onClick={() => setBurgerStatus(true)}>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <BurgerNavItems>
          {cars && cars.map((car, index) => (
            <li key={index}><a href="#">{car}</a></li>
          ))}
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Semi</a></li>
          <li><a href="#">Charging</a></li>
          <li><a href="#">Powerwall</a></li>
          <li><a href="#">Commercial Energy</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Test Drive</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Support</a></li>
        </BurgerNavItems>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 2;
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const TeslaAccount = styled(AccountCircleOutlinedIcon)`
  cursor: pointer;
`

const Globe = styled(LanguageOutlinedIcon)`
  cursor: pointer;
`


const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
`

const BurgerNavItems = styled.div`
  padding-top: 20px;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 20px;
`

const MiddleMenuItemOpen = styled.div`
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  height: 100px;
  padding: 10px;
  position: absolute;
  display: ${props => props.status ? 'flex' : 'none'};
  // display: none;
  border-radius: 0 0 10px 10px;
  background-color: rgba(255, 255, 255);
`

const MiddleMenuItems = styled.a`
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, .1);
    border-radius: 15px;
  }
`

const LogoImage = styled.img`
  object-fit: contain;
  z-index: 15;
`