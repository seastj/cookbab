import styled from "@emotion/styled";
import React from "react";
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
function UserSummaryInfo() {
  return (
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
          <UserSummaryComment>저번주보다 3번 더 만들었어요.</UserSummaryComment>
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
  );
}

export default UserSummaryInfo;
