import styled from "@emotion/styled";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MonthCookGraph from "../../components/MonthCookGraph";
import Calendar from "react-calendar";

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
const UserSummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const UserSummaryTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #8e0c0c;
`;
const UserSummary = styled.div`
  display: flex;
  gap: 40px;
`;
const UserSummaryItemW = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background-color: #f37373;
`;
const UserSummaryItemTitleW = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
const UserSummaryLevelWrapW = styled.div`
  /* display: flex;
  align-items: flex-end;
  line-height: 1; */
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
`;
const UserSummaryLevelNumW = styled.p`
  display: block;
  font-size: 61px;
  font-weight: bold;
  color: #fff;
`;
const UserSummaryLevelTxtW = styled.p`
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
const UserSummaryCommentW = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #fff;
`;
const UserSummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 20px;
  background-color: #fff;
`;
const UserSummaryItemTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0f0f0f;
`;
const UserSummaryLevelWrap = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
`;
const UserSummaryLevelNum = styled.p`
  display: block;
  font-size: 61px;
  font-weight: bold;
  color: #0f0f0f;
`;
const UserSummaryLevelTxt = styled.p`
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #0f0f0f;
`;
const UserSummaryComment = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #0f0f0f;
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
`;
const ChartsMonthCook = styled.div`
  border: 1px solid #dbdbdb;
  width: 60%;
`;
const ChartsRestLine = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const ChartsTierCook = styled.div`
  border: 1px solid #dbdbdb;
`;
const ChartsCategoryCook = styled.div`
  border: 1px solid #dbdbdb;
`;
const ChartsCookTime = styled.div`
  border: 1px solid #dbdbdb;
`;
const ChartsParams = styled.div`
  border: 1px solid #dbdbdb;
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
        <UserSummaryWrap>
          <UserSummaryTitle>이름님의 여정 요약</UserSummaryTitle>
          <UserSummary>
            <UserSummaryItemW>
              <UserSummaryItemTitleW>나의 요리 레벨</UserSummaryItemTitleW>
              <UserSummaryLevelWrapW>
                <UserSummaryLevelNumW>12</UserSummaryLevelNumW>
                <UserSummaryLevelTxtW>LV</UserSummaryLevelTxtW>
              </UserSummaryLevelWrapW>
              <UserSummaryCommentW>
                다음 레벨까지 42그릇 남았습니다.
              </UserSummaryCommentW>
            </UserSummaryItemW>
            <UserSummaryItem>
              <UserSummaryItemTitle>이번주 요리 횟수</UserSummaryItemTitle>
              <UserSummaryLevelWrap>
                <UserSummaryLevelNum>04</UserSummaryLevelNum>
                <UserSummaryLevelTxt>번</UserSummaryLevelTxt>
              </UserSummaryLevelWrap>
              <UserSummaryComment>
                저번주보다 3번 더 만들었어요.
              </UserSummaryComment>
            </UserSummaryItem>
            <UserSummaryItem>
              <UserSummaryItemTitle>총 요리 횟수</UserSummaryItemTitle>
              <UserSummaryLevelWrap>
                <UserSummaryLevelNum>24</UserSummaryLevelNum>
                <UserSummaryLevelTxt>번</UserSummaryLevelTxt>
              </UserSummaryLevelWrap>
              <UserSummaryComment>
                꾸준히 요리 횟수가 늘어나고 있어요.
              </UserSummaryComment>
            </UserSummaryItem>
            <UserSummaryItem>
              <UserSummaryItemTitle>획득한 훈장수</UserSummaryItemTitle>
              <UserSummaryLevelWrap>
                <UserSummaryLevelNum>12</UserSummaryLevelNum>
                <UserSummaryLevelTxt>개</UserSummaryLevelTxt>
              </UserSummaryLevelWrap>
              <UserSummaryComment>당신은 진정한 셰프예요!</UserSummaryComment>
            </UserSummaryItem>
          </UserSummary>
        </UserSummaryWrap>
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
              <ChartsCategoryCook>카테고리별 분포</ChartsCategoryCook>
              <ChartsTierCook>난이도별 요리 수</ChartsTierCook>
              <ChartsCookTime>요리 시간 분포</ChartsCookTime>
              <ChartsParams>자주 사용하는 재료</ChartsParams>
            </ChartsRestLine>
          </ChartsWrap>
        </UserPerformanceWrap>
      </MealTotalWrap>
      <Footer />
    </>
  );
}

export default Mealtotal;
