import React from 'react'
import styled from "styled-components"
import Section from './Section'
import carInfo from '../constants/carInfo.json'

function Home() {
  return (
    <Container>
      {carInfo.map((item, index) => (
        <Section
          title={item.title}
          description={item.description}
          backgroundImg={item.image}
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
      ))}

    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`