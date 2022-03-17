import React from 'react'
import styled from 'styled-components';


const MainContentWrapper = styled.div`
background:rgba(255, 255, 255, 0.25);
box-shadow:0 8px 32px 0 rgba(31, 38 , 135, 0.37);
backdrop-filter:blur(4px);
-webkit-background-filter:blur(4px);
border-radius:10px;
border:1px solid rgba(255, 255, 255, 0.18);
padding:100px 200px;

.password{
    font-size:60px;
    color:white;
    padding-bottom:20px;
}
.gerar-senha{
    background:white;
    color:black;
    border:none;
    outline:none;
    padding:20px 40px;
    font-size:18px;
}

`


function MainContent() {
  return (
    <MainContentWrapper>
       <div className="password">
           **********************
       </div>
       <button className='gerar-senha'> Gerar senha
            </button>

    </MainContentWrapper>
  )
}

export default MainContent