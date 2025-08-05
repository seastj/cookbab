import React, { useEffect, useState } from "react";
import mdisearch from "../../images/mdisearch.svg";
import Header from "../../components/Header";
import item1 from "../../images/oneitem1.jpg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
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

function Onemeal() {
  // js자리

  // 전체 음식 관리 변수
  const [foodPost, setFoodPost] = useState([
    {
      id: 1,
      name: "김치볶음밥",
      date: "2025-07-21",
      cookTime: "10분 미만",
      tags: ["스팸", "김치", "다진마늘"],
    },
    {
      id: 2,
      name: "샐러드",
      date: "2025-06-21",
      cookTime: "1시간 미만",
      tags: ["스팸", "김치", "다진마늘"],
    },
    {
      id: 3,
      name: "된장찌개",
      date: "2025-05-15",
      cookTime: "30~60분",
      tags: ["된장", "두부", "양파"],
    },
    {
      id: 4,
      name: "불고기",
      date: "2025-03-10",
      cookTime: "1시간~2시간",
      tags: ["소고기", "간장", "마늘"],
    },
    {
      id: 5,
      name: "비빔밥",
      date: "2025-07-01",
      cookTime: "10분 미만",
      tags: ["밥", "고추장", "나물"],
    },
    {
      id: 6,
      name: "카레라이스",
      date: "2025-06-05",
      cookTime: "30~60분",
      tags: ["카레", "감자", "당근"],
    },
    {
      id: 7,
      name: "파스타",
      date: "2025-04-20",
      cookTime: "10~30분",
      tags: ["스파게티", "토마토", "바질"],
    },
    {
      id: 8,
      name: "떡볶이",
      date: "2025-05-30",
      cookTime: "10~30분",
      tags: ["떡", "고추장", "오뎅"],
    },
    {
      id: 9,
      name: "호박죽",
      date: "2025-07-10",
      cookTime: "30분 이하",
      tags: ["호박", "쌀", "설탕"],
    },
    {
      id: 10,
      name: "닭갈비",
      date: "2025-03-25",
      cookTime: "1시간~2시간",
      tags: ["닭", "고추장", "양배추"],
    },
  ]);

  // 카테고리 버튼
  const [sortedFoodPost, setSortedFoodPost] = useState(foodPost);
  const [activeCategory, setActiveCategory] = useState("전체");
  const navigate = useNavigate();

  const onCategoryClick = category => {
    setActiveCategory(category);
    if (category === "전체") {
      setSortedFoodPost(foodPost);
    } else if (category === "최신순") {
      const sorted = [...foodPost].sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
      setSortedFoodPost(sorted);
    } else if (category === "조리시간순") {
      const cookTimeOrder = {
        "10분": 1,
        "10~30분": 2,
        "30~60분": 3,
        "1시간": 4,
        "1시간~2시간": 5,
        "2시간~3시간": 6,
        "3시간이상": 7,
      };
      const sorted = [...foodPost].sort(
        (a, b) => cookTimeOrder[a.cookTime] - cookTimeOrder[b.cookTime],
      );
      setSortedFoodPost(sorted);
    }
  };
  useEffect(() => {
    setSortedFoodPost(foodPost);
    setActiveCategory("전체");
  }, [foodPost]);

  // 검색필터 기능
  const [searchText, setSearchText] = useState("");
  const [filteredFoodPost, setFilteredFoodPost] = useState(foodPost);
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredFoodPost(sortedFoodPost);
    } else {
      const filtered = sortedFoodPost.filter(item => {
        const lowerSearch = searchText.toLowerCase();
        const inName = item.name.toLowerCase().includes(lowerSearch);
        const inTags = item.tags.some(tag =>
          tag.toLowerCase().includes(lowerSearch),
        );
        return inName || inTags;
      });
      setFilteredFoodPost(filtered);
    }
  }, [searchText, sortedFoodPost]);
  const renderFoodList = list => {
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
          <OnemealImg src={item1} alt={item.name} />
        </OnemealImgBox>
        <OnemealCookTime>{item.cookTime}</OnemealCookTime>
        <OnemealTextWrap>
          <OnemealBoxTitle>{item.name}</OnemealBoxTitle>
          <OnemealBoxDay>{item.date}</OnemealBoxDay>
          <OnemealItemTagWrap>
            {item.tags.slice(0, 3).map((tag, idx) => (
              <OnemealItemTag key={idx}># {tag}</OnemealItemTag>
            ))}
            {item.tags.length > 3 && (
              <OnemealItemTagPlus>+{item.tags.length - 3}</OnemealItemTagPlus>
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
      <Footer></Footer>
    </div>
  );
}

export default Onemeal;
