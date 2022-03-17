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
`;



function Main({children}) {
    function handleNotify(){
        toast.success("Password copiada no clipboard", 
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
      <MainContent  handeToast = {()=>handleNotify()}  />
      <ToastContainer/>
    </MainWrapper>)
}

export default Main;