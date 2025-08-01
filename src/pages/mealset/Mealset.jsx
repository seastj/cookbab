import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import Back from "../../images/arrow.svg";
import CameraPlus from "../../images/camera-plus.svg";
import MealsetBase from "../../components/MealsetBase";
import PlusMore from "../../images/more_bt.svg";
import {
  SetBox,
  SetBoxBackArrow,
  SetBoxCookNameInput,
  SetBoxCookStepsNumber,
  SetBoxCookStepsTextarea,
  SetBoxDetailWrap,
  SetBoxFoodPictureWrap,
  SetBoxLevelButtonLi,
  SetBoxLevelButtonUl,
  SetBoxLevelButtonWrap,
  SetBOxMainTitle,
  SetBoxPictureBox,
  SetBoxPictureBoxTitleWrap,
  SetBoxPlusBox,
  SetBoxRegistration,
  SetBoxRegistrationText,
  SetBoxSelect,
  SetBoxSubTitle,
  SetBoxTagSpan,
  SetBoxTagWrap,
  SetBoxTextWrap,
  SetBoxWrap,
} from "./Mealset.styles";

function Mealset() {
  // js 자리

  // 요리명
  const [cookName, setCookName] = useState();

  // 종류가 많아서 value=4 미만은 숨김처리
  const categories = [
    "한식",
    "중식",
    "일식",
    "양식",
    "분식",
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

  // 난이도
  const [level, setLevel] = useState();

  // 해시태그들
  const [userTags, setUserTags] = useState([]);
  //조리단계
  const [text, setText] = useState();
  // 새로고침방지
  const handleSubmit = e => {
    e.preventDefault();
  };

// 버튼클릭시 아무내용 없을시


  // jsx 자리
  return (
    <>
      <Header />
      <main>
        <MealsetBase />
        <SetBoxWrap>
          <SetBoxBackArrow>
            <img src={Back} alt="이전" />
          </SetBoxBackArrow>
          <SetBox onSubmit={handleSubmit}>
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
                <SetBoxRegistrationText type="submit">
                  등록하기
                </SetBoxRegistrationText>
              </SetBoxRegistration>
            </SetBoxDetailWrap>
          </SetBox>
        </SetBoxWrap>
      </main>
      <Footer />
    </>
  );
}

export default Mealset;
