import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import Back from "../../images/arrow.svg";
import MealsetBase from "../../components/MealsetBase";
import { useContext, useEffect, useState } from "react";
import Clock from "../../images/clock.svg";
import FoodIcon from "../../images/foodicon.svg";
import { useNavigate, useParams } from "react-router-dom";
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
import {
  CookDispatchContext,
  CookStateContext,
} from "../../contexts/cook/CookInfoContext";

function OnemealView() {
  // js 자리

  // 뒤로가기
  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/onemeal");
  };

  //데이터연동
  const { id } = useParams();
  const cooks = useContext(CookStateContext) || [];
  const [cookDetail, setCookDetail] = useState(null);

  useEffect(() => {
    if (id) {
      const found = cooks.find(cook => String(cook.id) === String(id));
      if (found) {
        setCookDetail(found);
      } else {
        navigate("/onemeal");
      }
    }
  }, [id, cooks, navigate]);

  //삭제함수
  const { removeCook } = useContext(CookDispatchContext);
  const handleDeleteButton = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      removeCook(id);
      alert("글이 삭제되었습니다.");
      navigate("/onemeal");
    }
  };

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
                  {cookDetail?.imageUrl ? (
                    <img src={cookDetail.imageUrl} alt="요리사진" />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundColor: "#eee",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      사진 없음
                    </div>
                  )}
                </SetBoxPictureBox>
              </SetBoxFoodPictureWrap>
              <div>
                <SetBoxCookName>
                  {cookDetail?.cookName || "요리 이름 없음"}
                </SetBoxCookName>
                <SetBoxTextWrap>
                  <SetBoxCookCate>
                    <img src={FoodIcon} alt="카테고리" />
                    {cookDetail?.category || "카테고리 없음"}
                  </SetBoxCookCate>
                  <SetBoxCookCate>
                    <img src={Clock} alt="조리시간" />
                    {cookDetail?.cookTime || "조리시간 없음"}
                  </SetBoxCookCate>
                </SetBoxTextWrap>
                <SetBoxLevelWrap>
                  <SetBoxSubTitle>난이도</SetBoxSubTitle>
                  <SetBoxLevelButtonWrap>
                    <SetBoxLevelButtonUl>
                      {["쉬움", "보통", "어려움"].map(level => (
                        <SetBoxLevelButtonLi
                          key={level}
                          style={{
                            backgroundColor:
                              cookDetail?.level === level ? "#f37373" : "#fff",
                            color:
                              cookDetail?.level === level ? "#fff" : "#a8a8a8",
                            border:
                              cookDetail?.level === level
                                ? "none"
                                : "1px solid #a8a8a8",
                          }}
                        >
                          {level}
                        </SetBoxLevelButtonLi>
                      ))}
                    </SetBoxLevelButtonUl>
                  </SetBoxLevelButtonWrap>
                </SetBoxLevelWrap>
                <SetBoxSubTitle>재료</SetBoxSubTitle>
                <SetBoxTagWrap>
                  {(cookDetail?.userTags || []).map((tag, idx) => (
                    <SetBoxTagSpan key={idx}>#{tag}</SetBoxTagSpan>
                  ))}
                </SetBoxTagWrap>
              </div>
            </SetBoxDetailWrap>
            <SetBoxDetailWrap>
              <SetBoxTextWrap>
                <div>
                  <SetBoxSubTitle>만드는 순서</SetBoxSubTitle>
                  {(cookDetail?.cookSteps || []).map((step, index) => (
                    <div key={index} style={{ marginBottom: 20 }}>
                      <SetBoxCookStepsNumber>{index + 1}</SetBoxCookStepsNumber>
                      <SetBoxCookStepsTextarea
                        value={step}
                        readOnly
                        rows={3}
                        style={{ resize: "none" }}
                      />
                    </div>
                  ))}
                </div>
              </SetBoxTextWrap>
            </SetBoxDetailWrap>
            <SetBoxRegistration>
              <SetBoxRegistrationDelete onClick={handleDeleteButton}>
                삭제하기
              </SetBoxRegistrationDelete>
              <SetBoxRegistrationAdd
                onClick={() => navigate(`/mealset/edit/${id}`)}
              >
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
