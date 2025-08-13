import React, { useContext, useState } from "react";
import UserSummaryInfo from "../../components/UserSummaryInfo";
import styled from "@emotion/styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import userimg from "../../images/backbanner.jpg";
import medalicon from "../../images/foodicon.svg";
import arrow from "../../images/arrow.svg";
import arrowfill from "../../images/arrow-filled.svg";
import logouticon from "../../images/exit-light.svg";
import questioncircled from "../../images/question-mark-circled.svg";
import UserEditModal from "../../components/modal/usereditmodal/UserEditModal";
import { useNavigate } from "react-router-dom";
import CustomerServiceModal from "../../components/modal/customerservicemodal/CustomerServiceModal";
import {
  LoginDispatchContext,
  LoginStateContext,
} from "../../contexts/LoginContext";
import { medalIconMap, medalList } from "../../data/medalList";

const UserWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 30px;
  justify-content: space-between;
`;
const UserInfoLeft = styled.div`
  display: flex;
  gap: 15px;
`;
const InfoLeftImg = styled.div`
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-radius: 55px;
  &img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InfoLeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InfoLeftTextTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #424242;
`;
const InfoLeftTextEmail = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #8f8f8f;
`;
const InfoLeftTextintro = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #8f8f8f;
`;
const InfoLeftTextdate = styled.p``;
const InfoRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoRightBt = styled.button`
  display: block;
  width: 140px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: #ef4444;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
`;
const UserSummaryInfoWrap = styled.div``;

const UserMedalWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 30px;
`;
const MedalTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0f0f0f;
`;
const MedalContents = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 100px;
`;
const Medalitem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const Medalitemicon = styled.div`
  /* background: linear-gradient(to bottom, #ef4444, #f37373); */
  width: 85px;
  height: 85px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const MedalitemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const MedalContentsArrow = styled.div`
  display: flex;
  width: 74px;
  height: 74px;
  border-radius: 37px;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`;
const UserMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserMenu = styled.div`
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const UserMenuLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const UserMenuLeftIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserMenuLeftText = styled.p``;
const UserMenuRight = styled.div`
  width: 12px;
  height: 12px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function User() {
  // 정보불러오기
  const user = useContext(LoginStateContext);
  const dispatch = useContext(LoginDispatchContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const [userEdit, setUserEdit] = useState(false);
  const openEdit = () => setUserEdit(true);
  const closeEdit = () => setUserEdit(false);

  const [userCs, setUserCs] = useState(false);
  const openCs = () => setUserCs(true);
  const closeCs = () => setUserCs(false);

  return (
    <>
      <Header />
      <UserWrap>
        <UserInfo>
          <UserInfoLeft>
            <InfoLeftImg>
              <img src={user?.profileImage || userimg} alt="userimg" />
            </InfoLeftImg>
            <InfoLeftText>
              <InfoLeftTextTitle>
                {user?.nickName ? `${user.nickName} 요리사님` : "요리사님"}
              </InfoLeftTextTitle>
              <InfoLeftTextEmail>{user?.email || ""}</InfoLeftTextEmail>
              <InfoLeftTextintro>{user?.introduction || ""}</InfoLeftTextintro>
              <InfoLeftTextdate>
                {user?.joinDate ? `${user.joinDate} 부터 요리 시작!` : ""}
              </InfoLeftTextdate>
            </InfoLeftText>
          </UserInfoLeft>
          <InfoRight>
            {userEdit && <UserEditModal closeEdit={closeEdit} />}
            <InfoRightBt onClick={openEdit}>프로필 수정</InfoRightBt>
          </InfoRight>
        </UserInfo>
        <UserSummaryInfoWrap>
          <UserSummaryInfo />
        </UserSummaryInfoWrap>
        <UserMedalWrap id="userMedalWrap">
          <MedalTitle>나의 훈장</MedalTitle>
          <MedalContents>
            {medalList
              .filter(
                (medal, index, self) =>
                  self.findIndex(m => m.type === medal.type) === index,
              )
              .slice(0, 5)
              .map(medal => {
                const MedalIconComponent = medalIconMap[medal.id];
                return (
                  <Medalitem key={medal.id}>
                    <Medalitemicon>
                      {MedalIconComponent ? (
                        <MedalIconComponent />
                      ) : (
                        <img src={medalicon} alt="medalicon" />
                      )}
                    </Medalitemicon>
                    <MedalitemTitle>{medal.name}</MedalitemTitle>
                  </Medalitem>
                );
              })}
            {/* <MedalContentsArrow>
              <img src={arrow} alt="arrow" />
            </MedalContentsArrow> */}
          </MedalContents>
        </UserMedalWrap>
        <UserMenuWrap>
          {userCs && <CustomerServiceModal closeCs={closeCs} />}
          <UserMenu onClick={openCs}>
            <UserMenuLeft>
              <UserMenuLeftIcon>
                <img src={questioncircled} alt="고객센터" />
              </UserMenuLeftIcon>
              <UserMenuLeftText>고객센터</UserMenuLeftText>
            </UserMenuLeft>
            <UserMenuRight>
              <img src={arrowfill} alt="바로가기" />
            </UserMenuRight>
          </UserMenu>
          <UserMenu onClick={handleLogout}>
            <UserMenuLeft>
              <UserMenuLeftIcon>
                <img src={logouticon} alt="로그아웃" />
              </UserMenuLeftIcon>
              <UserMenuLeftText>로그아웃</UserMenuLeftText>
            </UserMenuLeft>
            <UserMenuRight>
              <img src={arrowfill} alt="바로가기" />
            </UserMenuRight>
          </UserMenu>
        </UserMenuWrap>
      </UserWrap>
      <Footer />
    </>
  );
}

export default User;
