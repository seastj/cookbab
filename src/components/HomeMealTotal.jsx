import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import megaphonegray from "../images/megaphone_gray.svg";
import morebt from "../images/more_bt.svg";
import LevelCookGraph from "./LevelCookGraph";
import MonthCookGraph from "./MonthCookGraph";
import MemberMessage from "./randommessage/MemberMessage";

const MealTotalWrap = styled.div``;
const MealTotalContent = styled.div`
  width: 1365px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  gap: 20px;
`;
const MonthCookData = styled.div`
  display: block;
`;
const MonthCookDataTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin-bottom: 30px;

  & p {
    font-weight: bold;
    font-size: 31px;
    color: #8e0c0c;
    cursor: pointer;
  }
`;
const MonthCookDataMore = styled.div`
  cursor: pointer;
`;
const MonthCookDataGraph = styled.div`
  width: 450px;
  height: 480px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
const MonthLevelCook = styled.div``;
const MonthLevelCookTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin-bottom: 30px;

  & p {
    font-weight: bold;
    font-size: 31px;
    color: #8e0c0c;
    cursor: pointer;
  }
`;
const MonthLevelCookMore = styled.div``;
const MonthLevelCookGraph = styled.div`
  width: 450px;
  height: 480px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
const MyMedal = styled.div``;
const MyMedalContent = styled.div`
  width: 450px;
  height: 480px;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  justify-content: center; /* 세로축 중앙 정렬 */
  align-items: center;
`;
const MyMedalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin-bottom: 30px;

  & p {
    font-weight: bold;
    font-size: 31px;
    color: #8e0c0c;
  }
`;
const MyMedalMore = styled.div``;
const MyMedalList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;
const MyMedalListItem = styled.div`
  display: block;
  /* padding-bottom: 15px; */
`;
const MyMedalBox = styled.div`
  width: 85px;
  height: 85px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #ef4444 0%, #f37373 100%);

  border-radius: 30px;
`;
const MyMedalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MyMedalName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  font-size: 16px;
  font-weight: bold;
`;
const MyMedalPlusBt = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50%, 50%);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;
const MyMedalComment = styled.div`
  margin-top: 30px;
  display: flex;
  font-size: 20px;
  font-weight: normal;
  color: #8f8f8f;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const MegaphoneImg = styled.img`
  height: 24px;
  width: 24px;
`;
function HomeMealTotal() {
  return (
    <MealTotalWrap>
      <MealTotalContent>
        {/* 월별 요리 기록 */}
        <MonthCookData>
          <MonthCookDataTitle>
            <HashLink to="/Mealtotal#chartsMonthCook">
              <p>월별 요리 기록</p>
            </HashLink>
            <MonthCookDataMore>
              <Link to="/Mealtotal#chartsMonthCook">
                <img src={morebt} alt="이미지" />
              </Link>
            </MonthCookDataMore>
          </MonthCookDataTitle>
          <MonthCookDataGraph>
            <MonthCookGraph />
          </MonthCookDataGraph>
        </MonthCookData>
        {/* 이번 달 자주사용한 식재료 */}
        <MonthLevelCook>
          <MonthLevelCookTitle>
            <HashLink to="/Mealtotal#monthLevelCook">
              <p>이번 달 자주 사용한 식재료</p>
            </HashLink>
            <MonthLevelCookMore>
              <Link to="/Mealtotal#monthLevelCook">
                <img src={morebt} alt="이미지" />
              </Link>
            </MonthLevelCookMore>
          </MonthLevelCookTitle>
          <MonthLevelCookGraph>
            <LevelCookGraph />
          </MonthLevelCookGraph>
        </MonthLevelCook>
        {/* 나의 훈장 */}
        <MyMedal>
          <MyMedalTitle>
            <HashLink to="/user#userMedalWrap">
              <p>나의 훈장</p>
            </HashLink>
            <MyMedalMore>
              <HashLink to="/user#userMedalWrap">
                <img src={morebt} alt="이미지" />
              </HashLink>
            </MyMedalMore>
          </MyMedalTitle>
          <MyMedalContent>
            <MyMedalList>
              <MyMedalListItem>
                <MyMedalBox>
                  <MyMedalIcon>medal</MyMedalIcon>
                </MyMedalBox>
                <MyMedalName>요리 초보자</MyMedalName>
              </MyMedalListItem>
              <MyMedalListItem>
                <MyMedalBox>
                  <MyMedalIcon>medal</MyMedalIcon>
                </MyMedalBox>
                <MyMedalName>요리 숙련자</MyMedalName>
              </MyMedalListItem>
              <MyMedalListItem>
                <MyMedalBox>
                  <MyMedalIcon>medal</MyMedalIcon>
                </MyMedalBox>
                <MyMedalName>요리의 달인</MyMedalName>
              </MyMedalListItem>
              <MyMedalListItem>
                <MyMedalBox>
                  <MyMedalIcon>medal</MyMedalIcon>
                </MyMedalBox>
                <MyMedalName>청결 초보</MyMedalName>
              </MyMedalListItem>
              <MyMedalListItem>
                <MyMedalBox>
                  <MyMedalIcon>medal</MyMedalIcon>
                </MyMedalBox>
                <MyMedalName>재료부자</MyMedalName>
              </MyMedalListItem>
              <HashLink to="/user#userMedalWrap">
                <MyMedalPlusBt>
                  <img src={morebt} alt="morebt" />
                </MyMedalPlusBt>
              </HashLink>
            </MyMedalList>
            {/* 랜덤멘트 */}
            <MyMedalComment>
              <MegaphoneImg src={megaphonegray} alt="megaphone" />
              <MemberMessage />
            </MyMedalComment>
          </MyMedalContent>
        </MyMedal>
      </MealTotalContent>
    </MealTotalWrap>
  );
}

export default HomeMealTotal;
