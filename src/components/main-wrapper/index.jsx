import React from 'react'
import styled from 'styled-components';
import { ToastContainer, toast } from "react-toastify";
import MainContent from '../main-content';

const MainWrapper = styled.main`
background-image: linear-gradient( 43deg , #4158d0 0%, #c850c0 46% , #ffcc70 100%);
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
.copyright{
    color:white;
    font-size:12px;
}
.title{
    color:white;
  font-size:45px;
  padding-bottom:10px;
  text-transform:uppercase;
  @media(max-width:776px){
      font-size:40px;
  }
}
`;



function Main() {
    function handleNotify(){
        toast.success("Senha copiada no clipboard", 
     {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
     }
     );
    }
  return (
    <MainWrapper >
        <h1 className='title'>Gerador de Senha </h1>
      <MainContent  handeToast = {()=>handleNotify()}  />
      <p className='copyright'> Developed by @GeoChivas99s</p>
      <ToastContainer/>
    </MainWrapper>)
}

export default Main;