import styled from "@emotion/styled";
import React, { useContext } from "react";
import { CookStateContext } from "../contexts/cook/CookInfoContext";
import MemberMessage from "../components/randommessage/MemberMessage";
import { LoginStateContext } from "../contexts/LoginContext";
const UserSummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
function UserSummaryInfo() {
  const cooks = useContext(CookStateContext);
  const user = useContext(LoginStateContext);

  const userCooks = cooks?.filter(cook => cook.userId === user?.userId) || [];

  const cookCount = userCooks.length;
  const displayedNumber =
    cookCount === 0 ? 0 : Math.floor((cookCount - 1) / 6) + 1;

  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const dayOfWeek = today.getDay();
  const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const monday = new Date(today);
  monday.setHours(0, 0, 0, 0);
  monday.setDate(today.getDate() - diffToMonday);

  const weeklyCooks = userCooks.filter(cook => {
    const cookDate = new Date(cook.createdAt);
    return cookDate >= monday && cookDate <= today;
  });

  const totalCooks = cookCount;
  const medalCount = user?.medals?.length || 0;

  return (
    <UserSummaryWrap>
      <UserSummary>
        <UserSummaryItemW>
          <UserSummaryItemTitleW>나의 요리 레벨</UserSummaryItemTitleW>
          <UserSummaryLevelWrapW>
            <UserSummaryLevelNumW>{displayedNumber}</UserSummaryLevelNumW>
            <UserSummaryLevelTxtW>LV</UserSummaryLevelTxtW>
          </UserSummaryLevelWrapW>
          <UserSummaryCommentW>
            <MemberMessage />
          </UserSummaryCommentW>
        </UserSummaryItemW>
        <UserSummaryItem>
          <UserSummaryItemTitle>이번주 요리 횟수</UserSummaryItemTitle>
          <UserSummaryLevelWrap>
            <UserSummaryLevelNum>{weeklyCooks.length}</UserSummaryLevelNum>
            <UserSummaryLevelTxt>번</UserSummaryLevelTxt>
          </UserSummaryLevelWrap>
          <UserSummaryComment>
            <MemberMessage />
          </UserSummaryComment>
        </UserSummaryItem>
        <UserSummaryItem>
          <UserSummaryItemTitle>총 요리 횟수</UserSummaryItemTitle>
          <UserSummaryLevelWrap>
            <UserSummaryLevelNum>{totalCooks}</UserSummaryLevelNum>
            <UserSummaryLevelTxt>번</UserSummaryLevelTxt>
          </UserSummaryLevelWrap>
          <UserSummaryComment>
            <MemberMessage />
          </UserSummaryComment>
        </UserSummaryItem>
        <UserSummaryItem>
          <UserSummaryItemTitle>획득한 훈장수</UserSummaryItemTitle>
          <UserSummaryLevelWrap>
            <UserSummaryLevelNum>{medalCount}</UserSummaryLevelNum>
            <UserSummaryLevelTxt>개</UserSummaryLevelTxt>
          </UserSummaryLevelWrap>
          <UserSummaryComment>
            <MemberMessage />
          </UserSummaryComment>
        </UserSummaryItem>
      </UserSummary>
    </UserSummaryWrap>
  );
}

export default UserSummaryInfo;
