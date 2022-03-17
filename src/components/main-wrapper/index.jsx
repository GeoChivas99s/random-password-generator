import React from 'react'
import styled from 'styled-components';


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
  return (
    <MainWrapper>{children}</MainWrapper>
  )
}

export default Main;