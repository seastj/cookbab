import styled from "@emotion/styled";
import React from "react";

const HomeOneMealMain = styled.div``;
const HomeOneMealWrap = styled.div`
  display: block;
  padding: 40px 150px;
`;
const HomeOneMealTitle = styled.h2`
  font-size: 31px;
  font-weight: bold;
  color: #8e0c0c;
`;
const HomeOneMealBannerWrap = styled.div``;
const HomeOneMealBt = styled.button``;
const HomeOneMealBanner = styled.div``;
const HomeOneMealBannerItem = styled.div``;
const BannerItemImgWrap = styled.div``;
const BannerItemImg = styled.img``;
const BannerItemText = styled.div``;
const BannerItemCookName = styled.p``;
const BannerItemCookDate = styled.p``;
const BannerItemCookMaterial = styled.p``;
const BannerItemCookMaterialItems = styled.p``;
const CookMaterialItem = styled.p``;
const CookMaterialItemPlus = styled.p``;

function HomeOneMeal() {
  return (
    <HomeOneMealMain>
      <HomeOneMealWrap>
        <HomeOneMealTitle>최근 한끼모음집</HomeOneMealTitle>
        <HomeOneMealBannerWrap>
          <HomeOneMealBt>밥상차리기</HomeOneMealBt>
          <HomeOneMealBanner>
            <HomeOneMealBannerItem>
              <BannerItemImgWrap>
                <BannerItemImg src="" alt="" />
              </BannerItemImgWrap>
              <BannerItemText>
                <BannerItemCookName>요리명</BannerItemCookName>
                <BannerItemCookDate>2025-06-21</BannerItemCookDate>
                <BannerItemCookMaterial>
                  <BannerItemCookMaterialItems>
                    <CookMaterialItem>#양파</CookMaterialItem>
                    <CookMaterialItem>#마늘</CookMaterialItem>
                    <CookMaterialItem>#파</CookMaterialItem>
                  </BannerItemCookMaterialItems>
                  <CookMaterialItemPlus>+3</CookMaterialItemPlus>
                </BannerItemCookMaterial>
              </BannerItemText>
            </HomeOneMealBannerItem>
          </HomeOneMealBanner>
        </HomeOneMealBannerWrap>
      </HomeOneMealWrap>
    </HomeOneMealMain>
  );
}

export default HomeOneMeal;
