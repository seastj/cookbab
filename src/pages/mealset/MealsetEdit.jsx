import styled from "@emotion/styled";
import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Back from "../../images/arrow.svg";
import CameraPlus from "../../images/camera-plus.svg";
import MealsetBase from "../../components/MealsetBase";
import PlusMore from "../../images/more_bt.svg";

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
  width: 1240px;

  background-color: #fff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 82px;
`;
const SetBoxDetailWrap = styled.div`
  position: relative;
  width: 600px;
  padding: 48px 92px;
`;
const SetBoxFoodPictureWrap = styled.div`
  margin-bottom: 60px;
`;
const SetBOxMainTitle = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: #8e0c0c;
  margin-bottom: 30px;
`;
const SetBoxPictureBox = styled.div`
  position: relative;
  background-color: #d9d9d9;
  width: 473px;
  height: 242px;
  border-radius: 20px;
  cursor: pointer;
`;
const SetBoxPictureBoxTitleWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 100%;
  text-align: center;
  img {
    width: 41px;
  }
  p {
    font-size: 20px;
    color: #5c5c5c;
  }
`;
const SetBoxSubTitle = styled.p`
  position: relative;
  font-size: 20px;
  color: #0f0f0f;
  margin-bottom: 19px;
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
`;
const SetBoxSelect = styled.select`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  padding: 0px 20px;
  font-size: 16px;
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
  cursor: pointer;
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
const SetBoxPlusBox = styled.div`
  position: absolute;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 25px;
  }
`;

const SetBoxRegistration = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  gap: 23px;
`;
const SetBoxRegistrationButton = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  width: 225px;
  height: 50px;
  background-color: #ef4444;
  border-radius: 12px;
  cursor: pointer;
  border: none;
`;
const SetBoxCancelButton = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  width: 225px;
  height: 50px;
  background-color: #8f8f8f;
  border-radius: 12px;
  cursor: pointer;
  border: none;
`;

function MealsetEdit() {
  // js 자리
  //  카테고리
  const categories = [
    "한식",
    "중식",
    "일식",
    "양식",
    "야식",
    "다이어트",
    "기타",
  ];
  const [category, setCategory] = useState();
  // 조리시간
  const times = [
    "10분 미만",
    "10~30분",
    "30~60분",
    "1시간~2시간",
    "2시간~3시간",
    "3시간이상",
  ];
  const [cookTime, setCookTime] = useState();

  // 해시태그들
  const [userTags, setUserTags] = useState([]);
  //조리단계
  const [text, setText] = useState();
  return (
    <>
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
                <SetBOxMainTitle>요리사진</SetBOxMainTitle>
                <SetBoxPictureBox>
                  <SetBoxPictureBoxTitleWrap>
                    <img src={CameraPlus} alt="사진추가" />
                    <p>클릭해 사진을 추가해 하세요.</p>
                  </SetBoxPictureBoxTitleWrap>
                </SetBoxPictureBox>
              </SetBoxFoodPictureWrap>
              <div>
                <SetBOxMainTitle>기본정보</SetBOxMainTitle>
                <SetBoxTextWrap>
                  <SetBoxSubTitle>요리 이름</SetBoxSubTitle>
                  <SetBoxCookNameInput
                    type="text"
                    placeholder="예: 김치볶음밥"
                  />
                </SetBoxTextWrap>
                <SetBoxTextWrap>
                  <SetBoxSubTitle>카테고리</SetBoxSubTitle>
                  <SetBoxSelect
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value="">선택하세요</option>
                    {categories.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SetBoxSelect>
                </SetBoxTextWrap>
                <SetBoxTextWrap>
                  <SetBoxSubTitle>조리시간</SetBoxSubTitle>
                  <SetBoxSelect
                    value={cookTime}
                    onChange={e => setCookTime(e.target.value)}
                  >
                    <option value="">선택하세요</option>
                    {times.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SetBoxSelect>
                </SetBoxTextWrap>
                <div>
                  <SetBoxSubTitle>난이도</SetBoxSubTitle>
                  <SetBoxLevelButtonWrap>
                    <SetBoxLevelButtonUl>
                      <SetBoxLevelButtonLi>쉬움</SetBoxLevelButtonLi>
                      <SetBoxLevelButtonLi>보통</SetBoxLevelButtonLi>
                      <SetBoxLevelButtonLi>어려움</SetBoxLevelButtonLi>
                    </SetBoxLevelButtonUl>
                  </SetBoxLevelButtonWrap>
                </div>
              </div>
            </SetBoxDetailWrap>
            <SetBoxDetailWrap>
              {/* right */}
              <SetBOxMainTitle>상세 정보</SetBOxMainTitle>
              <SetBoxTextWrap>
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
                  <SetBoxPlusBox>
                    <img src={PlusMore} alt="추가" />
                  </SetBoxPlusBox>
                </div>
              </SetBoxTextWrap>
              <SetBoxRegistration>
                <SetBoxRegistrationButton>수정완료</SetBoxRegistrationButton>
                <SetBoxCancelButton>취소</SetBoxCancelButton>
              </SetBoxRegistration>
            </SetBoxDetailWrap>
          </SetBox>
        </SetBoxWrap>
      </main>
      <Footer />
    </>
  );
}

export default MealsetEdit;
