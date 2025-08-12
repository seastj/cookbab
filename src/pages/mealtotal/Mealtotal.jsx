import styled from "@emotion/styled";
import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MonthCookGraph from "../../components/MonthCookGraph";
import Calendar from "react-calendar";
import CategoryGraph from "../../components/CategoryGraph";
import TierGraph from "../../components/TierGraph";
import CookTimeGraph from "../../components/CookTimeGraph";
import LevelCookGraph from "../../components/LevelCookGraph";
import UserSummaryInfo from "../../components/UserSummaryInfo";
import "../../pages/calendar.css";
import { LoginStateContext } from "../../contexts/LoginContext";
import { CookStateContext } from "../../contexts/cook/CookInfoContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import cooklv1 from "../../images/cooklv1.svg";
import cooklv2 from "../../images/cooklv2.svg";
import cooklv3 from "../../images/cooklv3.svg";
import { countIngredients } from "../../utils/CountIngredients";
import { countCategories } from "../../utils/CountCategories";

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
  display: flex;
  flex-direction: column;
  gap: 20px;

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
  const user = useContext(LoginStateContext);
  const cooks = useContext(CookStateContext) || [];
  const userId = user?.userId;
  const ingredientCounts = countIngredients(cooks, userId);
  const categoryCounts = countCategories(cooks, userId);

  const location = useLocation();
  const navigate = useNavigate();

  const colors = ["#bd1010", "#f7a2a2", "#f37373", "#ef4444", "#eb1515"];
  // Nivo Pie가 사용할 형태로 변환
  const catePieData = Object.entries(categoryCounts).map(
    ([id, value], idx) => ({
      id,
      label: id,
      value,
      color: colors[idx % colors.length],
    }),
  );
  const paramsPieData = Object.entries(ingredientCounts).map(
    ([id, value], idx) => ({
      id,
      label: id,
      value,
      color: colors[idx % colors.length],
    }),
  );

  const toLocalDateString = date => {
    const tzOffset = date.getTimezoneOffset() * 60000;
    return new Date(date - tzOffset).toISOString().slice(0, 10);
  };

  // 시간대 맞추기
  const countPostsByDate = date => {
    const dateStr = toLocalDateString(date);
    return cooks.filter(
      cook => cook.userId === userId && cook.createdAt?.startsWith(dateStr),
    ).length;
  };

  // 날짜별 게시글 개수 계산
  const getImageByCount = count => {
    if (count >= 5) return cooklv3;
    if (count >= 3) return cooklv2;
    if (count >= 1) return cooklv1;
    return null;
  };

  const countPostsMonth = () => {
    const counts = {};

    cooks.forEach(cook => {
      if (cook.userId !== userId) return;
      if (!cook.createdAt) return;

      const month = cook.createdAt.slice(0, 7);
      counts[month] = (counts[month] || 0) + 1;
    });

    return counts;
  };
  const monthlyCounts = countPostsMonth();

  useEffect(() => {
    location.hash &&
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Header />
      <MealTotalWrap>
        <UserInfoWrap>
          <UserInfo>
            <UserInfoName>
              {user?.nickName ? `${user.nickName} ` : "요리사님"}
              요리사님
            </UserInfoName>
            <UserInfoEmail>
              {user?.email ? `${user.email}` : "로그인이 필요한 서비스입니다."}
            </UserInfoEmail>
          </UserInfo>
          <UserInfoDate>
            {user?.joinDate ? `${user.joinDate} 부터 요리 시작!` : ""}
          </UserInfoDate>
        </UserInfoWrap>
        <UserSummaryInfoWrap>
          <UserSummaryTitle>
            {user?.nickName ? `${user.nickName} ` : "요리사님"}님의 여정
          </UserSummaryTitle>
          <UserSummaryInfo />
        </UserSummaryInfoWrap>
        <UserPerformanceWrap>
          <UserPerformanceTitle>
            {user?.nickName ? `${user.nickName} ` : "요리사님"}님의 성과
          </UserPerformanceTitle>
          <ChartsWrap>
            <ChartsFirstLine>
              <ChartsCalendar>
                <Calendar
                  locale="ko-KR"
                  formatDay={(locale, date) => date.getDate()}
                  tileContent={({ date, view }) =>
                    view === "month" &&
                    (() => {
                      const imgSrc = getImageByCount(countPostsByDate(date));
                      return (
                        imgSrc && (
                          <img
                            src={imgSrc}
                            alt="게시글"
                            style={{ width: 20, height: 20, marginTop: 2 }}
                          />
                        )
                      );
                    })()
                  }
                  onClickDay={date =>
                    navigate(
                      `/Onemeal?date=${date.toLocaleDateString("sv-SE")}`,
                    )
                  }
                />
              </ChartsCalendar>
              <ChartsMonthCook id="chartsMonthCook">
                월별 요리 기록
                <MonthCookGraph monthlyCounts={monthlyCounts} />
              </ChartsMonthCook>
            </ChartsFirstLine>
            <ChartsRestLine>
              <ChartsCategoryCook>
                카테고리별 분포
                <CategoryGraph data={catePieData} />
              </ChartsCategoryCook>
              <ChartsTierCook>
                난이도별 요리 수<TierGraph />
              </ChartsTierCook>
              <ChartsCookTime>
                요리 시간 분포
                <CookTimeGraph />
              </ChartsCookTime>
              <ChartsParams id="monthLevelCook">
                자주 사용하는 식재료
                <LevelCookGraph data={paramsPieData} />
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
