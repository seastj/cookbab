import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import Back from "../../images/arrow.svg";
import MealsetBase from "../../components/MealsetBase";
import { useState } from "react";
import Clock from "../../images/clock.svg";
import FoodIcon from "../../images/foodicon.svg";

const SetBoxWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
const SetBoxBackArrow = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(180deg) translate(50%, 50%);
  }
`;
const SetBox = styled.div`
  position: relative;
  width: 1240px;
  height: 1018px;
  background-color: #fff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 82px;
`;
const SetBoxDetailWrap = styled.div`
  position: relative;
  height: 100%;
  width: 600px;
  padding: 48px 92px;
`;
const SetBoxFoodPictureWrap = styled.div`
  margin-bottom: 25px;
`;

const SetBoxPictureBox = styled.div`
  position: relative;
  background-color: #d9d9d9;
  width: 473px;
  height: 242px;
  border-radius: 20px;
  cursor: pointer;
`;
const SetBoxCookName = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ef4444;
`;

const SetBoxSubTitle = styled.p`
  font-size: 20px;
  color: #0f0f0f;
  margin-bottom: 19px;
  font-weight: bold;
`;
const SetBoxCookNameInput = styled.input`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  padding-left: 20px;
  font-size: 16px;
`;
const SetBoxTextWrap = styled.div`
  margin-bottom: 30px;
  display: flex;
`;
const SetBoxCookCate = styled.div`
  padding-right: 50px;
  display: flex;
  gap: 5px;
  font-size: 20px;
  align-items: center;
  img {
    width: 22px;
  }
`;
const SetBoxLevelWrap = styled.div`
  margin-bottom: 58px;
`;
const SetBoxLevelButtonWrap = styled.div``;
const SetBoxLevelButtonUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const SetBoxLevelButtonLi = styled.li`
  background-color: #fff;
  width: 145px;
  height: 50px;
  border: 1px solid #a8a8a8;
  color: #a8a8a8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  &:hover {
    background-color: #f37373;
    color: #fff;
    border: none;
  }
`;
const SetBoxTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 30px;
`;
const SetBoxTagSpan = styled.span`
  border: 1px solid #8f8f8f;
  padding: 10px 8px;
`;

const SetBoxCookStepsNumber = styled.div`
  background-color: #f37373;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
`;
const SetBoxCookStepsTextarea = styled.textarea`
  width: 473px;
  padding: 20px;
  resize: none;
  border-radius: 10px;
  margin-bottom: 24px;
`;

const SetBoxRegistration = styled.div`
  position: absolute;
  bottom: 78px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 36px;
  cursor: pointer;
`;
const SetBoxRegistrationAdd = styled.button`
  width: 225px;
  height: 50px;
  background-color: #ef4444;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
const SetBoxRegistrationDelete = styled.button`
  width: 225px;
  height: 50px;
  background-color: #8f8f8f;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

function OnemealView() {
  // js 자리

  // 해시태그들
  const [userTags, setUserTags] = useState([]);
  //조리단계
  const [text, setText] = useState();
  // jsx 자리
  return (
    <div>
      <Header />
      <main>
        <MealsetBase />
        <SetBoxWrap>
          <SetBoxBackArrow>
            <img src={Back} alt="이전" />
          </SetBoxBackArrow>
          <SetBox>
            <SetBoxDetailWrap>
              <SetBoxFoodPictureWrap>
                <SetBoxPictureBox>
                  <img src="#" alt="요리사진" />
                </SetBoxPictureBox>
              </SetBoxFoodPictureWrap>
              <div>
                <SetBoxCookName>요리 이름</SetBoxCookName>
                <SetBoxTextWrap>
                  <SetBoxCookCate>
                    <img src={FoodIcon} alt="카테고리" />
                    카테고리
                  </SetBoxCookCate>
                  <SetBoxCookCate>
                    <img src={Clock} alt="조리시간" />
                    조리시간
                  </SetBoxCookCate>
                </SetBoxTextWrap>
                <SetBoxLevelWrap>
                  <SetBoxSubTitle>난이도</SetBoxSubTitle>
                  <SetBoxLevelButtonWrap>
                    <SetBoxLevelButtonUl>
                      <SetBoxLevelButtonLi>쉬움</SetBoxLevelButtonLi>
                      <SetBoxLevelButtonLi>보통</SetBoxLevelButtonLi>
                      <SetBoxLevelButtonLi>어려움</SetBoxLevelButtonLi>
                    </SetBoxLevelButtonUl>
                  </SetBoxLevelButtonWrap>
                </SetBoxLevelWrap>
                <SetBoxSubTitle>재료</SetBoxSubTitle>
                <SetBoxCookNameInput
                  type="text"
                  placeholder="# 재료 입력 후 Enter를 눌러주세요."
                />
                <SetBoxTagWrap>
                  {/* 사용자가 입력한 내용 */}
                  {userTags.map((item, index) => (
                    <SetBoxTagSpan key={index}>#{item}</SetBoxTagSpan>
                  ))}
                </SetBoxTagWrap>
              </div>
            </SetBoxDetailWrap>
            <SetBoxDetailWrap>
              <SetBoxTextWrap>
                <div>
                  <SetBoxSubTitle>만드는 순서</SetBoxSubTitle>
                  <div>
                    <SetBoxCookStepsNumber>1</SetBoxCookStepsNumber>
                    <SetBoxCookStepsTextarea
                      value={text}
                      onChange={e => setText(e.target.value)}
                      placeholder="단계를 설명해주세요."
                      rows={3}
                    />
                  </div>
                </div>
              </SetBoxTextWrap>
            </SetBoxDetailWrap>
            <SetBoxRegistration>
              <SetBoxRegistrationDelete>삭제하기</SetBoxRegistrationDelete>
              <SetBoxRegistrationAdd>등록하기</SetBoxRegistrationAdd>
            </SetBoxRegistration>
          </SetBox>
        </SetBoxWrap>
      </main>
      <Footer />
    </div>
  );
}

export default OnemealView;
