import React, { useState } from "react";
import mdisearch from "../../images/mdisearch.svg";
import Header from "../../components/Header";
import item1 from "../../images/oneitem1.jpg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  OnemealBoxDay,
  OnemealBoxTitle,
  OnemealCateButton,
  OnemealCateWrap,
  OnemealClickWrap,
  OnemealCookTime,
  OnemealImg,
  OnemealImgBox,
  OnemealInput,
  OnemealInputImg,
  OnemealInputWrap,
  OnemealItemLi,
  OnemealItemTag,
  OnemealItemTagPlus,
  OnemealItemTagWrap,
  OnemealItemUl,
  OnemealItemWrap,
  OnemealSubTitle,
  OnemealTextWrap,
  OnemealTitle,
  OnemealTitleWrap,
} from "./Onemeal.styles";

function Onemeal() {
  // js자리
  // 전체 음식 관리 변수
  const [foodList, setFoodList] = useState([]);
  //더미 데이터
  const [foodPost, setFoodPost] = useState([
    {
      id: 1,
      name: "김치볶음밥",
      date: "2025-07-21",
      cookTime: "10분 미만",
      tags: ["스팸", "김치", "다진마늘"],
      number: {},
    },
     {
      id: 2,
      name: "샐러드",
      date: "2025-06-21",
      cookTime: "1시간 미만",
      tags: ["스팸", "김치", "다진마늘"],
      number: {},
    },
  ]);

  // li 클릭시 이동
  const navigate = useNavigate();
  // jsx자리
  return (
    <div>
      <Header>
        <div></div>
      </Header>
      <main>
        <OnemealTitleWrap>
          <OnemealTitle>나의 한끼모음</OnemealTitle>
          <OnemealSubTitle>
            지금까지 만든 나의 소중한 한끼들을 둘러보세요.
          </OnemealSubTitle>
        </OnemealTitleWrap>
        <OnemealCateWrap>
          <OnemealInputWrap>
            <OnemealInput
              type="text"
              placeholder="요리명이나 재료를 검색해주세요."
            />
            <OnemealInputImg src={mdisearch} alt="검색" />
          </OnemealInputWrap>
          <OnemealClickWrap>
            <OnemealCateButton>전체</OnemealCateButton>
            <OnemealCateButton>최신순</OnemealCateButton>
            <OnemealCateButton>조리시간순</OnemealCateButton>
          </OnemealClickWrap>
        </OnemealCateWrap>
        <OnemealItemWrap>
          <OnemealItemUl>
            {/* itemboxs start */}
            <OnemealItemLi>
              <OnemealImgBox>
                <OnemealImg src={item1} alt="샐러드" />
              </OnemealImgBox>
              <OnemealCookTime>1시간</OnemealCookTime>
              <OnemealTextWrap>
                <OnemealBoxTitle>요리명</OnemealBoxTitle>
                <OnemealBoxDay>2025-10-22</OnemealBoxDay>
                <OnemealItemTagWrap>
                  <OnemealItemTag># 파</OnemealItemTag>
                  <OnemealItemTag># 마늘</OnemealItemTag>
                  <OnemealItemTag># 양파</OnemealItemTag>
                  <OnemealItemTagPlus>+3</OnemealItemTagPlus>
                </OnemealItemTagWrap>
              </OnemealTextWrap>
            </OnemealItemLi>
            {/* itemboxs end */}
          </OnemealItemUl>
        </OnemealItemWrap>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Onemeal;
