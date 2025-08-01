import styled from "@emotion/styled";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import guestimg from "../../images/question.svg";
import googleicon from "../../images/google_logo.svg";
import kakaoicon from "../../images/kakao_logo.svg";
import arrow from "../../images/arrow-filled.svg";
import megaphongray from "../../images/megaphone_gray.svg";

const UserGuestWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 300px;
`;
const GuestInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const GuestInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 30px;
`;
const GuestInfoLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const GuestInfoLeftImg = styled.div`
  background-color: #d9d9d9;
  width: 110px;
  height: 110px;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  &img {
    width: 25px;
    height: 25px;
  }
`;
const GuestInfoLeftText = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #424242;
`;
const GuestInfoRight = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const RightLoginBt = styled.button`
  display: flex;
  width: 140px;
  height: 50px;
  background-color: #ef4444;
  border: none;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
const RightJoinBt = styled.button`
  display: flex;
  width: 140px;
  height: 50px;
  background-color: #8f8f8f;
  border: none;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
const IdHubWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const IdHub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
`;
const IdHubInner = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: normal;
  color: #0f0f0f;
`;
const IdHubIcon = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const IdHubText = styled.p``;
const HubArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 16px;
    height: 16px;
    object-fit: cover;
  }
`;
const JoinCommentWrap = styled.p`
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  gap: 20px;
`;
const JoinComment = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #424242;
`;

function UserGuest() {
  return (
    <>
      <Header />
      <UserGuestWrap>
        <GuestInfoWrap>
          <GuestInfo>
            <GuestInfoLeft>
              <GuestInfoLeftImg>
                <img src={guestimg} alt="guest" />
              </GuestInfoLeftImg>
              <GuestInfoLeftText>Guest</GuestInfoLeftText>
            </GuestInfoLeft>
            <GuestInfoRight>
              <RightLoginBt>로그인</RightLoginBt>
              <RightJoinBt>회원가입</RightJoinBt>
            </GuestInfoRight>
          </GuestInfo>
          <IdHubWrap>
            <IdHub>
              <IdHubInner>
                <IdHubIcon>
                  <img src={googleicon} alt="Google" />
                </IdHubIcon>
                <IdHubText>Google 계정 연결</IdHubText>
              </IdHubInner>
              <HubArrow>
                <img src={arrow} alt="move" />
              </HubArrow>
            </IdHub>
            <IdHub>
              <IdHubInner>
                <IdHubIcon>
                  <img src={kakaoicon} alt="Kakao" />
                </IdHubIcon>
                <IdHubText>Kakao 계정 연결</IdHubText>
              </IdHubInner>
              <HubArrow>
                <img src={arrow} alt="move" />
              </HubArrow>
            </IdHub>
          </IdHubWrap>
        </GuestInfoWrap>
        <JoinCommentWrap>
          <IdHubIcon>
            <img src={megaphongray} alt="joinmegaphone" />
          </IdHubIcon>
          <JoinComment>가입 권유 문구</JoinComment>
        </JoinCommentWrap>
      </UserGuestWrap>
      <Footer />
    </>
  );
}

export default UserGuest;
