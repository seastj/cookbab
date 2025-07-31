import React from "react";
import ChefHat from "../images/chefhat.svg";
import styled from "@emotion/styled";

const SetTitleWrap = styled.div`
  text-align: center;
  margin: 0px auto;
  width: 100%;
  padding-top: 93px;
`;
const SetTitleBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 5px;
  img {
    height: 31px;
  }
  p {
    font-weight: bold;
    font-size: 31px;
    color: #ef4444;
  }
`;
const SetSubTitle = styled.p`
  font-size: 16px;
  color: #8f8f8f;
  margin-bottom: 10px;
`;

function MealsetBase() {
  return (
    <div>
      <SetTitleWrap>
        <SetTitleBox>
          <img src={ChefHat} alt="요리" />
          <p>오늘의 요리 기록하기</p>
        </SetTitleBox>
        <SetSubTitle>새로운 요리 경험을 기록해보세요!</SetSubTitle>
      </SetTitleWrap>
    </div>
  );
}

export default MealsetBase;
