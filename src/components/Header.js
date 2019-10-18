import React from 'react'
import logo from '../assets/logo-white.png'
import styled from '@emotion/styled'

const TopBar = styled.div`
  background-color: #222;
  //height: 150px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    height: 80px;
  }
`

function Header() {
  return (
    <TopBar>
      <img src={logo} className="redux-logo img-fluid" alt="logo" />
    </TopBar>
  )
}

export default Header
