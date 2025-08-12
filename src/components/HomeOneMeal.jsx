import styled from "@emotion/styled";
import React, { useContext } from "react";
import bab from "../images/oneitem1.jpg";
import morebt from "../images/more_bt.svg";
import { Link, useNavigate } from "react-router-dom";
import { CookStateContext } from "../contexts/cook/CookInfoContext";

const HomeOneMealMain = styled.div`
  width: 1365px;
  height: 770px;
  margin: 0 auto;
`;
const HomeOneMealWrap = styled.div`
  display: block;
  padding-top: 95px;
  padding-bottom: 95px;
`;
const HomeOneMealTitle = styled.h2`
  font-size: 31px;
  padding-left: 210px;
  padding-bottom: 20px;
  font-weight: bold;
  color: #8e0c0c;
`;
const HomeOneMealBannerWrap = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;
const HomeOneMealBt = styled.button`
  width: 200px;
  height: 330px;
  background-color: #8e0c0c;
  font-size: 31px;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
const HomeOneMealBanner = styled.div`
  display: flex;
  gap: 10px;
`;
const MoreBt = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: 2%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.065);
  cursor: pointer;
  & img {
    width: 26px;
    height: 26px;
    object-fit: cover;
  }
`;
const HomeOneMealBannerItem = styled.div`
  position: relative;
  display: block;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  cursor: pointer;
`;
const BannerItemImgWrap = styled.div`
  width: 360px;
  height: 330px;
`;
const BannerItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BannerItemText = styled.div`
  border: 1px solid #c2c2c2;
  border-radius: 0 0 4px 4px;
  padding: 15px;
`;
const BannerItemCookName = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;
const BannerItemCookDate = styled.p`
  font-size: 16px;
  color: #8f8f8f;
  margin-bottom: 10px;
`;
const BannerItemCookMaterial = styled.p`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  gap: 10px;
`;
const BannerItemCookMaterialItems = styled.p`
  display: flex;
  gap: 10px;
`;
const CookMaterialItem = styled.div`
  border: 1px solid #8f8f8f;
  padding: 5px;
  display: flex;
  border-radius: 10px;
`;
const CookMaterialItemPlus = styled.p`
  font-size: 16px;
  color: #8f8f8f;
`;

function HomeOneMeal() {
  // 데이터 연동
  const navigate = useNavigate();
  const cooks = useContext(CookStateContext) || [];

  // 최신순(내림차순) 정렬 후 3개만
  const latestCooks = [...cooks]
    .sort(
      (a, b) =>
        new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date),
    )
    .slice(0, 3);

  return (
    <HomeOneMealMain>
      <HomeOneMealWrap>
        <HomeOneMealTitle>최근 한끼모음집</HomeOneMealTitle>
        <HomeOneMealBannerWrap>
          <Link to="/Mealset">
            <HomeOneMealBt>밥상차리기</HomeOneMealBt>
          </Link>
          <HomeOneMealBanner>
            {latestCooks.length === 0 ? (
              <HomeOneMealBannerItem>
                <BannerItemImgWrap>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#ccc",
                    }}
                  ></div>
                </BannerItemImgWrap>
                <BannerItemText>
                  <BannerItemCookName>
                    등록된 한끼가 없습니다.
                  </BannerItemCookName>
                </BannerItemText>
              </HomeOneMealBannerItem>
            ) : (
              latestCooks.map(cook => (
                <HomeOneMealBannerItem
                  key={cook.id}
                  onClick={() => navigate(`/onemeal/view/${cook.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <BannerItemImgWrap>
                    {cook.imageUrl ? (
                      <BannerItemImg src={cook.imageUrl} alt={cook.cookName} />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "330px",
                          backgroundColor: "#f0f0f0",
                        }}
                      ></div>
                    )}
                  </BannerItemImgWrap>
                  <BannerItemText>
                    <BannerItemCookName>{cook.cookName}</BannerItemCookName>
                    <BannerItemCookDate>
                      {cook.createdAt ? cook.createdAt.substring(0, 10) : "-"}
                    </BannerItemCookDate>
                    <BannerItemCookMaterial>
                      <BannerItemCookMaterialItems>
                        {(cook.userTags || []).slice(0, 3).map((tag, idx) => (
                          <CookMaterialItem key={idx}>#{tag}</CookMaterialItem>
                        ))}
                      </BannerItemCookMaterialItems>
                      {cook.userTags && cook.userTags.length > 3 && (
                        <CookMaterialItemPlus>
                          +{cook.userTags.length - 3}
                        </CookMaterialItemPlus>
                      )}
                    </BannerItemCookMaterial>
                  </BannerItemText>
                </HomeOneMealBannerItem>
              ))
            )}
          </HomeOneMealBanner>
          <Link to="/Onemeal">
            <MoreBt>
              <img src={morebt} alt="more" />
            </MoreBt>
          </Link>
        </HomeOneMealBannerWrap>
      </HomeOneMealWrap>
    </HomeOneMealMain>
  );
}

export default HomeOneMeal;
