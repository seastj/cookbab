import "./loginmodal.css";
import logo from "../../../images/cookbab_logo.png";
import { useContext, useState } from "react";
import ButtonSubmit from "../../buttons/ButtonSubmit";
import ButtonCancle from "../../buttons/ButtonCancle";
import { useNavigate } from "react-router-dom";
import {
  LoginStateContext,
  LoginDispatchContext,
} from "../../../contexts/LoginContext";

function LoginModal({ closeLogin }) {
  const initUser = { id: "", pw: "" };
  const userdata = JSON.parse(localStorage.getItem("userInfo")) || {};
  const [user, setUser] = useState(initUser);
  const dispatch = useContext(LoginDispatchContext);
  const navigate = useNavigate();
  const joinNavi = () => navigate("/User/join");
  const homeNavi = () => navigate("/");

  const handleLogin = () => {
    // 입력값이 회원가입 데이터와 일치하는지 확인
    if (user.id === userdata.id && user.pw === userdata.pw) {
      // 로그인 성공 처리: Context 로그인 상태 업데이트
      dispatch({
        type: "LOGIN",
        payload: {
          isLogin: true,
          id: userdata.id,
          email: userdata.email,
          nickname: userdata.nickname,
          profileImage: userdata.profileImage,
          // pw는 보통 저장하지 않음
        },
      });
      alert("로그인 성공!");
      closeLogin(); // 모달 닫기
      navigate("/user"); // 마이페이지로 이동
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="overlay" onClick={closeLogin}>
      <div className="loginwrap" onClick={e => e.stopPropagation()}>
        <div className="logoimg" onClick={homeNavi}>
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
        <form className="loginpw">
          <label>비밀번호</label>
          <input
            name="pw"
            value={user.pw}
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={e => setUser({ ...user, pw: e.target.value })}
          />
        </form>
        <div className="loginbts">
          <ButtonSubmit type="submit" onClick={handleLogin} label={"로그인"} />
          <ButtonCancle onClick={joinNavi} label={"회원가입"} />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
