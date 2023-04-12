import axios from '../axios';
import React, { useState } from 'react'
import styled from 'styled-components'

function Add() {

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");

  const addCase = (e) =>{
    e.preventDefault();

    axios.post('/case/add', {name, age, gender}).then(()=> {
      setName('');
      setAge();
      setGender('');
    }).catch((error)=> alert(error.message))
  }

  return (
    <Container>
      <InputContainer>
        <p>Name</p>
        <input 
          type='text' 
          placeholder='Name of victim '
          onChange={(e)=> setName(e.target.value)}
          value={name}
        ></input>
      </InputContainer>
      <InputContainer>
        <p>age</p>
        <input 
          type='number' 
          placeholder='Age of victim '
          onChange={(e)=> setAge(e.target.value)}
          value={age}
        ></input>
      </InputContainer>
      <InputContainer>
        <p>gender</p>
        <input 
          type='text' 
          placeholder='Gender of victim'
          onChange={(e)=> setGender(e.target.value)}
          value={gender}
        ></input>
      </InputContainer>

      <Button onClick={addCase}> Add </Button>
    </Container>
  )
}

const Container = styled.div``;

const InputContainer = styled.div``;

const Button = styled.div``;

export default Add
