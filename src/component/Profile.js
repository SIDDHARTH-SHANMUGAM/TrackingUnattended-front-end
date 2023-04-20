import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Profile() {
  const [image, setImage] = useState('');
  const [rimage, rsetImage] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const data= await axios.get("http://localhost:8000/get-image")
      console.log(data);
      rsetImage(data);
    
  };
    fetchData();
  }, []);


  function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload= ()=>{
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = error => {
      console.log("error ", error);
    };
  }

  async function uploadImage(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/upload", {
        image
      })
    }
    catch(e){
      console.log(e);
    }
  }


  return (
    <Container>
      <input  
        type='file' 
        accept='image/*' 
        onChange={convertToBase64}
      />
      <input type='submit' onClick={uploadImage}/>

      <br/>
      {rimage && rimage?.data.map(
        (rimage) =>(
          <img src={rimage.image} alt='' />
        )
        ) }
    </Container>
  )
}

const Container =styled.div``;

export default Profile;