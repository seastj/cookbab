import React from "react";
import failIcon from "../images/fail_icon.svg";
import megaphone from "../images/megaphone.svg";
import success_w from "../images/success_white.svg";
import styled from "@emotion/styled";

const HomeWeek = styled.div`
  background-color: #f5f5f5;
  height: 520px;
`;
const WeekWrap = styled.div`
  width: 1365px;
  margin: 0 auto;
  padding-top: 60px;
`;
const WeekTitle = styled.p`
  font-weight: bold;
  font-size: 31px;
  color: #8e0c0c;

  padding-bottom: 60px;
`;
const WeekInner = styled.div`
  display: flex;
`;
const Calender = styled.div`
  position: relative;
  justify-content: center;
  width: 820px;
  display: flex;
  height: 250px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 50px 0px;
  margin: 0 auto;
  gap: 25px;
  flex-shrink: 0;
`;
const CalenderContent = styled.div`
  display: block;
`;
const WeekDayOfWeek = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  margin-bottom: 10px;
`;
const CalenderFail = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  color: #c2c2c2;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;
const CalenderFailComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CalenderFailIcon = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;
const CalenderSuccess = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  border: none;
  background-color: #f37373;
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const CalenderSuccessComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CalenderSuccessIcon = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;
const WeekCommentWrap = styled.div`
  display: block;
  padding-left: 30px;
`;
const WeekCommentBox = styled.div`
  position: relative;
  align-items: center;
  justify-content: left;
  display: inline-flex;
  word-break: break-word;
  background-color: #f37373;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  gap: 8px;
`;
const WeekCommentArrow = styled.div`
  position: absolute;
  top: 50%;
  left: -5px;
  width: 30px;
  height: 30px;
  transform: translateY(-50%) rotate(45deg);
  background-color: #f37373;
`;
const WeekCommentIcon = styled.div`
  display: flex;
  z-index: 1;
`;
const WeekComment = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  padding: 15px;
`;

function HomeWeekCook() {
  return (
    <HomeWeek>
      <WeekWrap>
        <WeekTitle>일주일 요리여정</WeekTitle>
        <WeekInner>
          <Calender>
            <CalenderContent>
              <WeekDayOfWeek>월</WeekDayOfWeek>
              <CalenderFail>
                <CalenderFailComment>실패</CalenderFailComment>
                <CalenderFailIcon>
                  <img src={failIcon} alt="failIcon" />
                </CalenderFailIcon>
              </CalenderFail>
            </CalenderContent>
            <CalenderContent>
              <WeekDayOfWeek>화</WeekDayOfWeek>
              <CalenderFail>
                <CalenderFailComment>실패</CalenderFailComment>
                <CalenderFailIcon>
                  <img src={failIcon} alt="failIcon " />
                </CalenderFailIcon>
              </CalenderFail>
            </CalenderContent>
            <CalenderContent>
              <WeekDayOfWeek>수</WeekDayOfWeek>
              <CalenderFail>
                <CalenderFailComment>실패</CalenderFailComment>
                <CalenderFailIcon>
                  <img src={failIcon} alt="failIcon " />
                </CalenderFailIcon>
              </CalenderFail>
            </CalenderContent>
            <CalenderContent>
              <WeekDayOfWeek>목</WeekDayOfWeek>
              <CalenderSuccess>
                <CalenderSuccessComment>성공</CalenderSuccessComment>
                <CalenderSuccessIcon>
                  <img src={success_w} alt="success" />
                </CalenderSuccessIcon>
              </CalenderSuccess>
            </CalenderContent>
            <CalenderContent>
              <WeekDayOfWeek>금</WeekDayOfWeek>
              <CalenderSuccess>
                <CalenderSuccessComment>성공</CalenderSuccessComment>
                <CalenderSuccessIcon>
                  <img src={success_w} alt="failIcon " />
                </CalenderSuccessIcon>
              </CalenderSuccess>
            </CalenderContent>
            <CalenderContent>
              <WeekDayOfWeek style={{ color: "red" }}>토</WeekDayOfWeek>
              <CalenderFail>
                <CalenderFailComment>실패</CalenderFailComment>
                <CalenderFailIcon>
                  <img src={failIcon} alt="failIcon " />
                </CalenderFailIcon>
              </CalenderFail>
            </CalenderContent>
            <CalenderContent>
              <WeekDayOfWeek style={{ color: "red" }}>일</WeekDayOfWeek>
              <CalenderFail>
                <CalenderFailComment>실패</CalenderFailComment>
                <CalenderFailIcon>
                  <img src={failIcon} alt="failIcon " />
                </CalenderFailIcon>
              </CalenderFail>
            </CalenderContent>
          </Calender>
          <WeekCommentWrap>
            <WeekCommentBox>
              <WeekCommentArrow />
              <WeekCommentIcon>
                <img src={megaphone} alt="megaphone" />
              </WeekCommentIcon>
              <WeekComment>
                3 일을 출석하셨군요! 전보다 더 출석하셨어요! <br />
                우리 조금 만 더 힘내볼까요?
              </WeekComment>
            </WeekCommentBox>
            <WeekCommentBox>
              <WeekCommentArrow />
              <WeekCommentIcon>
                <img src={megaphone} alt="megaphone" />
              </WeekCommentIcon>
              <WeekComment>다음주는 볶음밥 도전 ?</WeekComment>
            </WeekCommentBox>
          </WeekCommentWrap>
        </WeekInner>
      </WeekWrap>
    </HomeWeek>
  );
}

export default HomeWeekCook;
