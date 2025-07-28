import styled from "@emotion/styled";
import React from "react";
import mdisearch from "../../images/mdisearch.svg";
import Header from "../../components/Header";
import item1 from "../../images/oneitem1.jpg";

// 스타일시트
const OnemealTitleWrap = styled.div`
  text-align: center;
  margin: 93px auto;
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
  padding-left: 40px;
  font-size: 16px;
`;
const OnemealCateWrap = styled.div`
  position: relative;
  width: 1353px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const OnemealInputWrap = styled.div`
  position: relative;
  margin-bottom: 37px;
`;
const OnemealInputImg = styled.img`
  position: absolute;
  left: 10px;
  top: 13px;
`;
const OnemealClickWrap = styled.div`
  width: 395px;
  height: 54px;
  background-color: #dbdbdb;
  display: flex;
  border-radius: 8px;
  padding: 5px;
  gap: 10px;
`;
const OnemealCateButton = styled.button`
  padding: 10px 30px;
  font-size: 20px;
  background-color: #fff;
  border: none;
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: bold;
  color: #757575;
`;
const OnemealItemWrap = styled.div`
  position: relative;
  width: 1353px;
  margin: 0 auto;
  margin-bottom: 122px;
`;
const OnemealItemUl = styled.ul`
  display: flex;
  gap: 51px;
  flex-wrap: wrap;
`;
const OnemealItemLi = styled.li`
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
  border: 0.5px solid #c2c2c2;
`;
const OnemealImgBox = styled.div`
  width: 300px;
  height: 233px;
  overflow: hidden;
`;
const OnemealImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const OnemealCookTime = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 66px;
  height: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const OnemealTextWrap = styled.div`
  margin: 16px 22px;
`;
const OnemealBoxTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 13px;
`;
const OnemealBoxDay = styled.p`
  font-size: 16px;
  color: #8f8f8f;
  margin-bottom: 19px;
`;
const OnemealItemTagWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const OnemealItemTag = styled.p`
  padding: 8px 10px;
  border: 1px solid #8f8f8f;
  border-radius: 10px;
  font-size: 16px;
`;
const OnemealItemTagPlus = styled.p`
  display: flex;
  align-items: center;
`;

function Onemeal() {
  // js자리

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
      <footer></footer>
    </div>
  );
}

export default Onemeal;
