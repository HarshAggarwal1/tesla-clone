import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectMiddleMenuOpenOptions } from '../../features/middleMenu/middleMenuOpenOptionsSlice'

function Vehicles() {
  const vehicles = useSelector(selectMiddleMenuOpenOptions)

  return (
    <Container>
      <VehicleOptions >
        {vehicles && vehicles.map((vehicle, index) => (
          <div>
            <VehicleImage key={index} src={`images/vehicle-components/${vehicle}.jpg`} alt={vehicle} />
            <p
              style={{
                textAlign: 'center',
                fontSize: '16px',
                marginTop: '20px',
                fontWeight: '600',
                marginBottom: '5px',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              {vehicle.replace(/_/g, ' ').toUpperCase()}
            </p>
            <a className="VehiclesBuyLink" href="#" 
            style={{ 
              textAlign: 'center', 
              fontSize: '10px', 
              color: '#5c5c5c', 
              fontFamily: 'Roboto, sans-serif' 
              }}
              >
              Order
            </a>
          </div>
        ))}
      </VehicleOptions>
      <VerticalLine></VerticalLine>
      <SideOptions>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Used Cars</a></li>
        <li><a href="#">Demo Drive</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Help Me Choose</a></li>
        <li><a href="#">Compare</a></li>
        <li><a href="#">Fleet</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Roadster</a></li>
      </SideOptions>
    </Container>
  )
}

export default Vehicles

const Container = styled.div`
  padding-top: 150px;
  min-height: 100px;
  overflow: hidden;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  border-radius: 0 0 20px 20px;
  background-color: #FFFFFF;
  animation: animateDownMiddleMenuWithFade 0.65s ease-in-out;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1);
`

const VehicleOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`

const VehicleImage = styled.img`
  height: 75px;
  width: 188px;
`

const SideOptions = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 14px;
  font-weight: 400;
  align-items: start;
`

const VerticalLine = styled.div`
  border-left: 2px solid #d3d3d3;
  height: 300px;
  margin-bottom: 50px;
`