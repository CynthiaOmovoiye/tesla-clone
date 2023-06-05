import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus,setBurgerStatus] = useState(false)
  return (
    <Container>
      <a>
        <img src='/images/logo.svg'/>
      </a>
      <Menu>
       
          <a href='#'>Model X</a>
       
        
          <a href='#'>Model 3</a>
       
      
          <a href='#'>Model S</a>
       
       
          <a href='#'>Model Y</a>
       

      </Menu>
      <RightMenu>
       
          <a href='#'>Shop</a>
        
          <a href='#'>Tesla Account</a>
       <CustomMenu onClick = {()=>setBurgerStatus(true)}/>

      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <ul>
          <CustomIconWrap>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CustomIconWrap>
       
          <li><a href='#'>Model Y</a></li>
          <li><a href='#'>Model S</a></li>
          <li><a href='#'>Model X</a></li>
          <li><a href='#'>Model 3</a></li>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-In</a></li>
          
        </ul>
      </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position: fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform: uppercase;
  margin-right:10px
}
`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
  font-weight:600;
  text-transform: uppercase;
  padding:0 10px;
  flex-wrap:nowrap
}

@media(max-width:768px){
  display:none
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;


`
const BurgerMenu = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index: 100;
padding: 20px;
transform: ${props => props.show? `translateX(0)`:`translateX(100%)`};

ul{
  list-style: none;
 li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);

  a{
    font-weight: 600;
  }
 }
}
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CustomIconWrap = styled.div`
display:flex;
justify-content: flex-end;
`