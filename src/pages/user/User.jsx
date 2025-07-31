import React from "react";
import UserSummaryInfo from "../../components/UserSummaryInfo";

function User() {
  return (
    <div>
      <div>
        <div>
          <div>이미지</div>
          <div>
            <p>이름 요리사님</p>
            <p>qwer13@gmail.com</p>
            <p>소개글</p>
            <p>2025-06-15 부터 요리 시작</p>
          </div>
        </div>
        <div>프로필 수정</div>
      </div>
      <UserSummaryInfo />
      <div>
        <div>획득한 훈장 종류</div>
        <div>
          <div>
            <div>아이콘</div>
            <div>성실요리사</div>
          </div>
          <div>화살표</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default User;
