import styled from "@emotion/styled";
import React from "react";
import logo from "../images/cookbab_logo.png";
import { Link } from "react-router-dom";

const HomeHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 100px;
  align-items: center;
  padding: 0 80px;
  font-size: 20px;
  color: #757575;
  border: 1px solid #c2c2c2;
`;
const HeaderLeft = styled.div`
  display: flex;
  gap: 70px;
`;

const HeaderLeftMealSet = styled.div`
  :hover {
    color: #ef4444;
    font-weight: bold;
    cursor: pointer;
  }
`;
const HeaderLeftOneMeal = styled.div`
  :hover {
    color: #ef4444;
    font-weight: bold;
    cursor: pointer;
  }
`;
const HeaderLeftMealTotal = styled.div`
  :hover {
    color: #ef4444;
    font-weight: bold;
    cursor: pointer;
  }
`;

const HeaderMid = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 80px;
`;
const HomeLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeaderRight = styled.div``;
const HeaderUser = styled.div`
  :hover {
    color: #ef4444;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HomeHeader>
      <HeaderLeft>
        <HeaderLeftMealSet>
          <Link to="/Mealset"></Link>밥상차리기
        </HeaderLeftMealSet>
        <HeaderLeftOneMeal>한끼모음</HeaderLeftOneMeal>
        <HeaderLeftMealTotal>밥상여정</HeaderLeftMealTotal>
      </HeaderLeft>
      <HeaderMid>
        <HomeLogo src={logo} alt="logo" />
      </HeaderMid>
      <HeaderRight>
        <HeaderUser>마이페이지</HeaderUser>
      </HeaderRight>
    </HomeHeader>
  );
}

export default Header;
