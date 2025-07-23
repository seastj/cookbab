import styled from "@emotion/styled";
import React from "react";
import Search from "../../images/mdi--search.svg";

// 스타일시트
const OnemealTitleDiv = styled.div`
  text-align: center;
  margin: 50px auto;
  width: 100%;
`;
const OnemealTitle = styled.p`
  font-weight: bold;
  font-size: 31px;
  color: #ef4444;
`;
const OnemealSubTitle = styled.p`
  font-size: 16px;
  color: #8f8f8f;
`;
const OnemealInput = styled.input`
  width: 473px;
  height: 50px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
`;
const OnemealCateWrap = styled.div`
  width: 1353px;
  margin: 0 auto;
  display: flex;
`;

function Onemeal() {
  // js자리

  // jsx자리
  return (
    <div>
      <header></header>
      <main>
        <OnemealTitleDiv>
          <OnemealTitle>나의 한끼모음</OnemealTitle>
          <OnemealSubTitle>
            지금까지 만든 나의 소중한 한끼들을 둘러보세요.
          </OnemealSubTitle>
        </OnemealTitleDiv>
        <OnemealCateWrap>
          <div>
            <OnemealInput type="text" />
            <img src="Search" alt="검색" />
          </div>
          <div>
            <div>전체</div>
            <div>최신순</div>
            <div>조리시간순</div>
          </div>
        </OnemealCateWrap>
        <div>
          <ul>
            <li>
              <div>
                <img src="" alt="" />
                <div>1시간</div>
              </div>
              <p>요리명</p>
              <p>2025-10-22</p>
              <div></div>
            </li>
          </ul>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Onemeal;
