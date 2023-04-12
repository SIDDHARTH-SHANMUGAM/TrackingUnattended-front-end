import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Card from './Card';

function Home() {
  return (
    <Container>
        <Navbar/>
        <Main>
          <Card
            imageUrl = {"/child1.jpg"}
            type = {"Missing"}
            name = {"sample1"}
            age = {7}
            gender = {"male"}
          />
          <Card
            imageUrl = {"/child1.jpg"}
            type = {"Missing"}
            name = {"sample1"}
            age = {7}
            gender = {"male"}
          />
          <Card
            imageUrl = {"/child1.jpg"}
            type = {"Missing"}
            name = {"sample1"}
            age = {7}
            gender = {"male"}
          />
          <Card/>
          <Card/>
        </Main>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background-color: rgb(234,237,237);
`;

const Main = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: grid;
    justify-content: center;
    place-items: center;
    width: 100%;

    grid-auto-rows: 380px;
    grid-template-columns: repeat(4, 300px);
    grid-gap: 20px;

    @media only screen and  (min-Width: 1600px){
      grid-template-columns: repeat(6, 15%);
    }
    @media only screen and  (mix-width: 1200px), (max-Width: 1600px){
      grid-template-columns: repeat(5, 18%);
    }
    @media only screen and  (mix-width: 1026px), (max-Width: 1200px){
      grid-template-columns: repeat(4, 23%);
    }
    @media only screen and  (mix-width: 801px), (max-Width: 1025px){
      grid-template-columns: repeat(3, 28%);
    }
    @media only screen and  (mix-width: 561px), (max-Width: 800px){
      grid-template-columns: repeat(2, 40%);
    }
    @media only screen and (max-width: 560px) {
      grid-template-columns: repeat(1, 60%);
    }
`;

export default Home
