import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import Back from "../../images/arrow.svg";
import MealsetBase from "../../components/MealsetBase";
import { useState } from "react";
import Clock from "../../images/clock.svg";
import FoodIcon from "../../images/foodicon.svg";
import { useNavigate } from "react-router-dom";
import {
  SetBox,
  SetBoxBackArrow,
  SetBoxCookCate,
  SetBoxCookName,
  SetBoxCookStepsNumber,
  SetBoxCookStepsTextarea,
  SetBoxDetailWrap,
  SetBoxFoodPictureWrap,
  SetBoxLevelButtonLi,
  SetBoxLevelButtonUl,
  SetBoxLevelButtonWrap,
  SetBoxLevelWrap,
  SetBoxPictureBox,
  SetBoxRegistration,
  SetBoxRegistrationAdd,
  SetBoxRegistrationDelete,
  SetBoxSubTitle,
  SetBoxTagSpan,
  SetBoxTagWrap,
  SetBoxTextWrap,
  SetBoxWrap,
} from "./OnemealView.styles";

function OnemealView() {
  // js 자리
  // 뒤로가기
  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/onemeal");
  };
  //등록하기클릭시 view 로 이동
  const EditButton = () => {
    navigate("/mealset/edit");
  };
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
          <SetBoxBackArrow onClick={BackButton}>
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
              <SetBoxRegistrationAdd onClick={EditButton}>
                수정하기
              </SetBoxRegistrationAdd>
            </SetBoxRegistration>
          </SetBox>
        </SetBoxWrap>
      </main>
      <Footer />
    </div>
  );
}

export default OnemealView;
