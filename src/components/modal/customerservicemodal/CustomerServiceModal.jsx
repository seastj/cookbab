import { useState } from "react";
import "./customerservicemodal.css";

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
                <option className="cs_category_list"key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="cs_text">문의 내용</div>
          <div className="cs_bts">
            <div className="cs_submit_bt" onClick={closeCs}>
              보내기
            </div>
            <div className="cs_cancle_bt">취소</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerServiceModal;
