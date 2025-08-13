import React, { useContext, useEffect, useState } from "react";
import mdisearch from "../../images/mdisearch.svg";
import Header from "../../components/Header";
import item1 from "../../images/oneitem1.jpg";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import {
  OnemealBoxDay,
  OnemealBoxTitle,
  OnemealCateButton,
  OnemealCateWrap,
  OnemealClickWrap,
  OnemealCookTime,
  OnemealImg,
  OnemealImgBox,
  OnemealInput,
  OnemealInputImg,
  OnemealInputWrap,
  OnemealItemLi,
  OnemealItemTag,
  OnemealItemTagPlus,
  OnemealItemTagWrap,
  OnemealItemUl,
  OnemealItemWrap,
  OnemealSubTitle,
  OnemealTextWrap,
  OnemealTitle,
  OnemealTitleWrap,
} from "./Onemeal.styles";
import { LoginStateContext } from "../../contexts/LoginContext";
import { CookStateContext } from "../../contexts/cook/CookInfoContext";

function Onemeal() {
  // js자리

  // 전체요리 더미데이터
  const [foodPost, setFoodPost] = useState([]);
  const cooks = useContext(CookStateContext) || [];
  const loginUser = useContext(LoginStateContext);
  const userId = loginUser?.userId;
  // 카테고리 버튼
  const [sortedFoodPost, setSortedFoodPost] = useState(foodPost);
  const [activeCategory, setActiveCategory] = useState("전체");
  const navigate = useNavigate();
  const date = new URLSearchParams(useLocation().search).get("date");

  const myCooks = cooks.filter(
    cook =>
      cook.userId === userId && (!date || cook.createdAt?.startsWith(date)),
  );

  const onCategoryClick = category => {
    setActiveCategory(category);
  };
  useEffect(() => {
    let sorted = [...myCooks];

    if (activeCategory === "전체") {
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (activeCategory === "최신순") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (activeCategory === "조리시간순") {
      const cookTimeOrder = {
        "10분": 1,
        "10~30분": 2,
        "30~60분": 3,
        "1시간": 4,
        "1시간~2시간": 5,
        "2시간~3시간": 6,
        "3시간이상": 7,
      };
      sorted.sort(
        (a, b) =>
          (cookTimeOrder[a.cookTime] || 99) - (cookTimeOrder[b.cookTime] || 99),
      );
    }

    setSortedFoodPost(sorted);
  }, [activeCategory, cooks, userId, date]);

  // 검색필터 기능
  const [searchText, setSearchText] = useState("");
  const [filteredFoodPost, setFilteredFoodPost] = useState(foodPost);
  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredFoodPost(sortedFoodPost);
    } else {
      const lower = searchText.toLowerCase();
      const filtered = sortedFoodPost.filter(item => {
        const inName = item.cookName.toLowerCase().includes(lower);
        const inTags = (item.userTags || []).some(tag =>
          tag.toLowerCase().includes(lower),
        );
        return inName || inTags;
      });
      setFilteredFoodPost(filtered);
    }
  }, [searchText, sortedFoodPost]);

  const renderFoodList = list => {
    if (!userId) {
      return alert("로그인 후 이용 가능합니다");
    }
    if (list.length === 0) {
      return <p>검색 결과가 없습니다.</p>;
    }
    return list.map(item => (
      <OnemealItemLi
        key={item.id}
        onClick={() => navigate(`/onemeal/view/${item.id}`)}
        style={{ cursor: "pointer" }}
      >
        <OnemealImgBox>
          <OnemealImg src={item.imageUrl || ""} alt={item.cookName} />
        </OnemealImgBox>
        <OnemealCookTime>{item.cookTime}</OnemealCookTime>
        <OnemealTextWrap>
          <OnemealBoxTitle>{item.cookName}</OnemealBoxTitle>
          <OnemealBoxDay>
            {item.createdAt ? item.createdAt.substring(0, 10) : "-"}
          </OnemealBoxDay>
          <OnemealItemTagWrap>
            {(item.userTags || []).slice(0, 3).map((tag, idx) => (
              <OnemealItemTag key={idx}># {tag}</OnemealItemTag>
            ))}
            {item.userTags && item.userTags.length > 3 && (
              <OnemealItemTagPlus>
                +{item.userTags.length - 3}
              </OnemealItemTagPlus>
            )}
          </OnemealItemTagWrap>
        </OnemealTextWrap>
      </OnemealItemLi>
    ));
  };

  // jsx자리
  return (
    <div>
      <Header>
        <div></div>
      </Header>
      <main>
        <OnemealTitleWrap>
          <OnemealTitle>나의 한끼모음</OnemealTitle>
          <OnemealSubTitle>
            지금까지 만든 나의 소중한 한끼들을 둘러보세요.
          </OnemealSubTitle>
        </OnemealTitleWrap>
        <OnemealCateWrap>
          <OnemealInputWrap>
            <OnemealInput
              type="text"
              placeholder="요리명이나 재료를 검색해주세요."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <OnemealInputImg src={mdisearch} alt="검색" />
          </OnemealInputWrap>
          <OnemealClickWrap>
            {["전체", "최신순", "조리시간순"].map(cate => (
              <OnemealCateButton
                key={cate}
                onClick={() => onCategoryClick(cate)}
                style={{
                  backgroundColor: activeCategory === cate ? "#fff" : "#dbdbdb",
                  color: activeCategory === cate ? "#757575" : "#757575",
                }}
              >
                {cate}
              </OnemealCateButton>
            ))}
          </OnemealClickWrap>
        </OnemealCateWrap>

        <OnemealItemWrap>
          <OnemealItemUl>{renderFoodList(filteredFoodPost)}</OnemealItemUl>
        </OnemealItemWrap>
      </main>
      <Footer />
    </div>
  );
}

export default Onemeal;
