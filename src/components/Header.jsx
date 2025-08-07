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
    font-weight: bold;
    cursor: pointer;
  }
`;
const HeaderLeftOneMeal = styled.div`
  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
const HeaderLeftMealTotal = styled.div`
  :hover {
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
    font-weight: bold;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HomeHeader>
      <HeaderLeft>
        <HeaderLeftMealSet>
          <Link to="/Mealset" className="link">
            밥상차리기
          </Link>
        </HeaderLeftMealSet>
        <HeaderLeftOneMeal>
          <Link to="/Onemeal" className="link">
            한끼모음
          </Link>
        </HeaderLeftOneMeal>
        <HeaderLeftMealTotal>
          <Link to="/Mealtotal" className="link">
            밥상여정
          </Link>
        </HeaderLeftMealTotal>
      </HeaderLeft>
      <HeaderMid>
        <Link to="/ " className="link">
          <HomeLogo src={logo} alt="logo" />
        </Link>
      </HeaderMid>
      <HeaderRight>
        <HeaderUser>
          <Link to="/mypage" className="link">
            마이페이지
          </Link>
        </HeaderUser>
      </HeaderRight>
    </HomeHeader>
  );
}

export default Header;
