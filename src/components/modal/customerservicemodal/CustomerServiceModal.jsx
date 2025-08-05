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
          <textarea type="text" className="cs_text" placeholder="문의 내용" />
          <div className="cs_bts">
            <ButtonSubmit className="cs_submit_bt" label="보내기" />
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
