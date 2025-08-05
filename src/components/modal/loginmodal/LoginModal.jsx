import "./loginmodal.css";
import logo from "../../../images/cookbab_logo.png";
import { useState } from "react";
import ButtonSubmit from "../../buttons/ButtonSubmit";
import ButtonCancle from "../../buttons/ButtonCancle";

function LoginModal({ closeLogin }) {
  const initUser = { id: "", pw: "" };
  const [user, setUser] = useState(initUser);

  return (
    <div className="overlay" onClick={closeLogin}>
      <div className="loginwrap" onClick={e => e.stopPropagation()}>
        <div className="logoimg">
          <img src={logo} alt="logo" />
        </div>
        <div className="logintitle">로그인</div>
        <form className="loginid">
          <label>아이디</label>
          <input
            name="id"
            value={user.id}
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={e => setUser({ ...user, id: e.target.value })}
          />
        </form>
        <div className="loginpw">
          <label>비밀번호</label>
          <input
            name="pw"
            value={user.pw}
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={e => setUser({ ...user, pw: e.target.value })}
          />
        </div>
        <div className="loginbts">
          <ButtonSubmit label={"로그인"} />
          <ButtonCancle label={"회원가입"} />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
