import { useState } from "react";
import "./customerservicemodal.css";
import ButtonSubmit from "../../buttons/ButtonSubmit";
import ButtonCancle from "../../buttons/ButtonCancle";

function CustomerServiceModal({ closeCs }) {
  const categories = [
    "회원가입/로그인",
    "정보 수정/탈퇴",
    "서비스 이용 문의",
    "오류/버그 신고",
    "제안/피드백",
    "기타",
  ];
  const [category, setCategory] = useState();
  const [content, setContent] = useState();

  const handleSubmit = () => {
    if (!content) {
      alert("문의할 내용이 없습니다.");
      return;
    }
    alert("문의가 접수되었습니다.");
    closeCs();
  };

  return (
    <div className="overlay">
      <div className="user_cs_wrap">
        <div className="user_cs">
          <p className="cs_title">고객센터</p>
          <div className="cs_category">
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">문의 종류</option>
              {categories.map(option => (
                <option
                  className="cs_category_list"
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
          <textarea
            className="cs_text"
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="문의 내용"
          />
          <div className="cs_bts">
            <ButtonSubmit
              className="cs_submit_bt"
              label="보내기"
              onClick={handleSubmit}
            />
            <ButtonCancle
              className="cs_cancle_bt"
              label="취소"
              onClick={closeCs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerServiceModal;
