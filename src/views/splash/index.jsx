import React from 'react';

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styled from 'styled-components';


const SplashWrapper = styled.div`
  
  display:flex;
  justify-content:center;
  width:100%;
  height:100vh;
  align-items:center;
  position:absolute;
  top:0;
  z-index:20;
`;


const Splash = (props) => {
    return (
        <SplashWrapper>
        <ClimbingBoxLoader color="#D87DDD" loading={props.loading}> 
        </ClimbingBoxLoader>
        </SplashWrapper>
    );
}

export default Splash;