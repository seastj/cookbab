import React, { useContext, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import Back from "../../images/arrow.svg";
import CameraPlus from "../../images/camera-plus.svg";
import MealsetBase from "../../components/MealsetBase";
import PlusMore from "../../images/more_bt.svg";
import Minus from "../../images/minus.svg";
import {
  SetBox,
  SetBoxBackArrow,
  SetBoxCookNameInput,
  SetBoxCookStepsNumber,
  SetBoxCookStepsTextarea,
  SetBoxCookStepWrap,
  SetBoxDetailWrap,
  SetBoxFoodPictureWrap,
  SetBoxLevelButtonLi,
  SetBoxLevelButtonUl,
  SetBoxLevelButtonWrap,
  SetBOxMainTitle,
  SetBoxMinusBox,
  SetBoxNumMiuWrap,
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
import { useNavigate, useParams } from "react-router-dom";
import { CookDispatchContext } from "../../contexts/cook/CookInfoContext";

function Mealset() {
  // js 자리

  // 뒤로가기
  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/");
  };
  //view로 이동
  const RegistrationButton = newId => {
    navigate(`/onemeal/view/${newId}`);
  };

  // 요리명
  const [cookName, setCookName] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [userTags, setUserTags] = useState([]);
  const [cookSteps, setCookSteps] = useState([""]);
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const { addCook } = useContext(CookDispatchContext);

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
  const times = [
    "10분 미만",
    "10~30분",
    "30~60분",
    "1~2시간",
    "2~3시간",
    "3시간이상",
  ];

  // 난이도

  const onLevelClick = selectedLevel => {
    setLevel(selectedLevel);
  };

  // 해시태그들

  // 인풋의 값 변경 핸들러
  const onIngredientInputChange = e => {
    setIngredientInput(e.target.value);
  };

  // Enter(혹은 ,) 키를 눌렀을 때 태그 추가
  const onIngredientInputKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = ingredientInput.trim();
      if (newTag && !userTags.includes(newTag)) {
        setUserTags(prev => [...prev, newTag]);
      }
      setIngredientInput("");
    }
  };

  // 태그 삭제 함수(필요시)
  const removeTag = tagToRemove => {
    setUserTags(userTags.filter(tag => tag !== tagToRemove));
  };

  //조리단계

  const onCookStepChange = (index, value) => {
    const newSteps = [...cookSteps];
    newSteps[index] = value;
    setCookSteps(newSteps);
  };
  // 새 조리단계 추가
  const onAddCookStep = () => {
    setCookSteps([...cookSteps, ""]);
  };
  // 조리단계 삭제
  const onRemoveCookStep = idx => {
    setCookSteps(steps => steps.filter((_, i) => i !== idx));
  };
  // 새로고침방지
  const handleSubmit = e => {
    e.preventDefault();
  };

  // 사진추가

  // 클릭하면 숨겨진 파일 선택창 열기
  const onPictureBoxClick = () => {
    fileInputRef.current.click();
  };
  // 파일 선택 후 미리보기 생성
  const onFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // base64 이미지 URL
      };
      reader.readAsDataURL(file);
    }
  };

  // 모든 데이터 정보 검사 함수
  const dataFinishValid = () => {
    if (!imageUrl) return "요리사진을 추가해주세요.";
    if (!cookName || cookName.trim() === "") return "요리 이름을 입력해주세요.";
    if (!category || category.trim() === "") return "카테고리를 선택해주세요.";
    if (!cookTime || cookTime.trim() === "") return "조리시간을 선택해주세요.";
    if (!level || level.trim() === "") return "난이도를 선택해주세요.";
    if (userTags.length === 0) return "재료를 1개 이상 입력해주세요.";
    if (cookSteps.length === 0) return "만드는 순서를 1단계 이상 입력해주세요.";
    for (const step of cookSteps) {
      if (!step || step.trim() === "")
        return "만드는 순서에 빈칸이 있습니다. 모두 작성해주세요.";
    }
    return null;
  };
  const finishRegisterClick = () => {
    const errorMessage = dataFinishValid();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    if (window.confirm("정말 등록하시겠습니까?")) {
      const newId = addCook({
        imageUrl,
        cookName,
        category,
        cookTime,
        level,
        userTags,
        cookSteps,
      });
      if (newId) {
        navigate(`/onemeal/view/${newId}`);
      } else {
        alert("글 등록에 실패했습니다.");
      }
    }
  };

  // jsx 자리
  return (
    <>
      <Header />
      <main>
        <MealsetBase />
        <SetBoxWrap>
          <SetBoxBackArrow onClick={BackButton}>
            <img src={Back} alt="이전" />
          </SetBoxBackArrow>
          <SetBox onSubmit={handleSubmit}>
            <SetBoxDetailWrap>
              <SetBoxFoodPictureWrap>
                <SetBOxMainTitle>요리사진</SetBOxMainTitle>
                <SetBoxPictureBox onClick={onPictureBoxClick}>
                  <SetBoxPictureBoxTitleWrap>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="선택된 사진"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <>
                        <img src={CameraPlus} alt="사진추가" />
                        <p>클릭해 사진을 추가해 하세요.</p>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={onFileChange}
                    />
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
                    value={cookName || ""}
                    onChange={e => setCookName(e.target.value)}
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
                      {["쉬움", "보통", "어려움"].map(item =>
                        level === item ? (
                          <SetBoxLevelButtonLi
                            key={item}
                            onClick={() => onLevelClick(item)}
                            style={{
                              backgroundColor: "#f37373",
                              color: "#fff",
                              border: "none",
                            }}
                          >
                            {item}
                          </SetBoxLevelButtonLi>
                        ) : (
                          <SetBoxLevelButtonLi
                            key={item}
                            onClick={() => onLevelClick(item)}
                            style={{
                              backgroundColor: "#fff",
                              color: "#a8a8a8",
                              border: "1px solid #a8a8a8",
                            }}
                          >
                            {item}
                          </SetBoxLevelButtonLi>
                        ),
                      )}
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
                  value={ingredientInput}
                  onChange={onIngredientInputChange}
                  onKeyDown={onIngredientInputKeyDown}
                />
                <SetBoxTagWrap>
                  {userTags.map((item, index) => (
                    <SetBoxTagSpan
                      key={index}
                      onClick={() => removeTag(item)}
                      style={{ cursor: "pointer" }}
                    >
                      #{item}
                    </SetBoxTagSpan>
                  ))}
                </SetBoxTagWrap>
                <SetBoxCookStepWrap>
                  <SetBoxSubTitle>만드는 순서</SetBoxSubTitle>
                  {cookSteps.map((step, index) => (
                    <div key={index} style={{ marginBottom: 20 }}>
                      <SetBoxNumMiuWrap>
                        <SetBoxCookStepsNumber>
                          {index + 1}
                        </SetBoxCookStepsNumber>
                        {index > 0 && (
                          <SetBoxMinusBox
                            type="button"
                            onClick={() => onRemoveCookStep(index)}
                          >
                            <img src={Minus} alt="빼기" />
                          </SetBoxMinusBox>
                        )}
                      </SetBoxNumMiuWrap>
                      <SetBoxCookStepsTextarea
                        value={step}
                        onChange={e => onCookStepChange(index, e.target.value)}
                        placeholder="단계를 설명해주세요."
                        rows={3}
                      />
                    </div>
                  ))}
                  <SetBoxPlusBox onClick={onAddCookStep}>
                    <img src={PlusMore} alt="추가" />
                  </SetBoxPlusBox>
                </SetBoxCookStepWrap>
              </SetBoxTextWrap>
              <SetBoxRegistration>
                <SetBoxRegistrationText
                  type="submit"
                  onClick={finishRegisterClick}
                >
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
