import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MealsetBase from "../../components/MealsetBase";
import CameraPlus from "../../images/camera-plus.svg";
import PlusMore from "../../images/more_bt.svg";
import { SetBoxMinusBox, SetBoxNumMiuWrap, SetBoxWrap } from "./Mealset.styles";
import Minus from "../../images/minus.svg";
import {
  SetBox,
  SetBoxCancelButton,
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
  SetBoxPictureBox,
  SetBoxPictureBoxTitleWrap,
  SetBoxPlusBox,
  SetBoxRegistration,
  SetBoxRegistrationButton,
  SetBoxSelect,
  SetBoxSubTitle,
  SetBoxTagSpan,
  SetBoxTagWrap,
  SetBoxTextWrap,
} from "./MealsetEdit.styles";
import {
  CookDispatchContext,
  CookStateContext,
} from "../../contexts/cook/CookInfoContext";

function MealsetEdit() {
  // js 자리

  // 취소버튼
  const navigate = useNavigate();
  const BackButton = () => {
    navigate(`/onemeal/view/${id}`);
  };

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

  // 난이도
  const [level, setLevel] = useState();
  const onLevelClick = selectedLevel => {
    setLevel(selectedLevel);
  };

  // 해시태그들
  const [ingredientInput, setIngredientInput] = useState("");
  const [userTags, setUserTags] = useState([]);

  //태그 추가
  const onIngredientInputChange = e => {
    setIngredientInput(e.target.value);
  };
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

  // 태그 삭제
  const removeTag = tagToRemove => {
    setUserTags(userTags.filter(tag => tag !== tagToRemove));
  };

  //조리단계
  const [cookSteps, setCookSteps] = useState([""]);
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

  // 사진추가
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
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

  // 데이터 연동
  const { id } = useParams();
  const cooks = useContext(CookStateContext) || [];
  const { editCook } = useContext(CookDispatchContext);
  const [cookName, setCookName] = useState("");
  useEffect(() => {
    if (id && cooks.length > 0) {
      const found = cooks.find(cook => String(cook.id) === String(id));
      if (found) {
        setCookName(found.cookName || "");
        setCategory(found.category || "");
        setCookTime(found.cookTime || "");
        setLevel(found.level || "");
        setUserTags(found.userTags || []);
        setCookSteps(found.cookSteps || [""]);
        setImageUrl(found.imageUrl || null);
      } else {
        alert("존재하지 않는 글입니다.");
        navigate("/onemeal");
      }
    }
  }, [id, cooks, navigate]);

  // 검사
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
    const found = cooks.find(cook => String(cook.id) === String(id));
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    if (window.confirm("정말 수정하시겠습니까?")) {
      const updatedCook = {
        id,
        userId: found.userId,
        nickname: found.nickname,
        createdAt: found.createdAt,
        cookName,
        category,
        cookTime,
        level,
        userTags,
        cookSteps,
        imageUrl,
      };
      editCook(updatedCook);
      alert("글이 수정되었습니다!");
      navigate(`/onemeal/view/${id}`);
    }
  };

  // --- 새로고침 방지 ---
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main>
        <MealsetBase />
        <SetBoxWrap>
          <SetBox onSubmit={handleSubmit}>
            <SetBoxDetailWrap>
              <SetBoxFoodPictureWrap>
                <SetBOxMainTitle>요리사진</SetBOxMainTitle>
                <SetBoxPictureBox>
                  <SetBoxPictureBoxTitleWrap onClick={onPictureBoxClick}>
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
              {/* right */}
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
                  {/* 사용자가 입력한 내용 */}
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
                <SetBoxRegistrationButton onClick={finishRegisterClick}>
                  수정완료
                </SetBoxRegistrationButton>
                <SetBoxCancelButton onClick={BackButton}>
                  취소
                </SetBoxCancelButton>
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
