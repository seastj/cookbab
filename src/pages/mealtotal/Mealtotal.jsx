import styled from "@emotion/styled";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MonthCookGraph from "../../components/MonthCookGraph";
import Calendar from "react-calendar";
import CategoryGraph from "../../components/CategoryGraph";
import TierGraph from "../../components/TierGraph";
import CookTimeGraph from "../../components/CookTimeGraph";
import ParamsGraph from "../../components/ParamsGraph";
import LevelCookGraph from "../../components/LevelCookGraph";
import UserSummaryInfo from "../../components/UserSummaryInfo";

const MealTotalWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const UserInfoWrap = styled.div`
  border: 0.5px solid #dbdbdb;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const UserInfoName = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #424242;
`;
const UserInfoEmail = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #8f8f8f;
`;
const UserInfoDate = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: #292929;
`;

const UserSummaryInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const UserSummaryTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #8e0c0c;
`;

const UserPerformanceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const UserPerformanceTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #8e0c0c;
`;
const ChartsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 25px;
  font-weight: bold;
  color: #ef4444;
`;
const ChartsFirstLine = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
const ChartsCalendar = styled.div`
  border: 1px solid #dbdbdb;
  width: 40%;
  min-height: 400px;
  padding: 15px;

  border-radius: 4px;
`;
const ChartsMonthCook = styled.div`
  border: 1px solid #dbdbdb;
  width: 60%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;
const ChartsRestLine = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const ChartsCategoryCook = styled.div`
  border: 1px solid #dbdbdb;
  padding: 15px;
  height: 500px;
  border-radius: 4px;
`;
const ChartsTierCook = styled.div`
  border: 1px solid #dbdbdb;
  padding: 15px;
  height: 500px;
  border-radius: 4px;
`;
const ChartsCookTime = styled.div`
  border: 1px solid #dbdbdb;
  padding: 15px;
  height: 500px;
  border-radius: 4px;
`;
const ChartsParams = styled.div`
  border: 1px solid #dbdbdb;
  padding: 15px;
  height: 500px;
  border-radius: 4px;
`;

function Mealtotal() {
  return (
    <>
      <Header />
      <MealTotalWrap>
        <UserInfoWrap>
          <UserInfo>
            <UserInfoName>이름 요리사님</UserInfoName>
            <UserInfoEmail>asdfghjjkla@gmail.com</UserInfoEmail>
          </UserInfo>
          <UserInfoDate>2025-06-15 부터 요리 시작</UserInfoDate>
        </UserInfoWrap>
        <UserSummaryInfoWrap>
          <UserSummaryTitle>이름님의 여정</UserSummaryTitle>
          <UserSummaryInfo />
        </UserSummaryInfoWrap>
        <UserPerformanceWrap>
          <UserPerformanceTitle>이름님의 성과</UserPerformanceTitle>
          <ChartsWrap>
            <ChartsFirstLine>
              <ChartsCalendar>
                이름님의 캘린더
                <Calendar />
              </ChartsCalendar>
              <ChartsMonthCook>
                월별 요리 기록 <MonthCookGraph />
              </ChartsMonthCook>
            </ChartsFirstLine>
            <ChartsRestLine>
              <ChartsCategoryCook>
                카테고리별 분포
                <CategoryGraph />
              </ChartsCategoryCook>
              <ChartsTierCook>
                난이도별 요리 수<TierGraph />
              </ChartsTierCook>
              <ChartsCookTime>
                요리 시간 분포
                <CookTimeGraph />
              </ChartsCookTime>
              <ChartsParams>
                자주 사용하는 재료
                <LevelCookGraph />
              </ChartsParams>
            </ChartsRestLine>
          </ChartsWrap>
        </UserPerformanceWrap>
      </MealTotalWrap>
      <Footer />
    </>
  );
}

export default Mealtotal;
