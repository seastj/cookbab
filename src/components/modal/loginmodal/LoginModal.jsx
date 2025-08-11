import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDispatchContext } from "../../../contexts/LoginContext";
import logo from "../../../images/cookbab_logo.png";
import ButtonCancle from "../../buttons/ButtonCancle";
import ButtonSubmit from "../../buttons/ButtonSubmit";
import "./loginmodal.css";

function LoginModal({ closeLogin }) {
  const initUser = { id: "", pw: "" };
  let userdata = JSON.parse(localStorage.getItem("users")) || [];
  const [user, setUser] = useState(initUser);
  const dispatch = useContext(LoginDispatchContext);
  const navigate = useNavigate();
  const joinNavi = () => navigate("/User/join");
  const homeNavi = () => navigate("/");

  const handleLogin = () => {
    // 입력값이 회원가입 데이터와 일치하는지 확인
    const foundUser = userdata.find(
      u => u.userId === user.id && u.userPass === user.pw,
    );
    if (foundUser) {
      // 로그인 성공 처리: Context 로그인 상태 업데이트
      dispatch({
        type: "LOGIN",
        payload: {
          isLogin: true,
          userId: foundUser.userId,
          userPass: foundUser.userPass,
          email: foundUser.email,
          nickName: foundUser.nickName,
          introduction: foundUser.introduction,
          profileImage: foundUser.profileImage,
          passwordConfirm: foundUser.passwordConfirm,
          profileImage: foundUser.profileImage,
          provider: foundUser.provider || null,
        },
      });
      alert("로그인 성공!");
      closeLogin(); // 모달 닫기
      navigate("/user");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <div
      className="overlay"
      onMouseDown={e => e.target === e.currentTarget && closeLogin()}
    >
      <div className="loginwrap">
        <div className="logoimg" onClick={homeNavi}>
          <img src={logo} alt="logo" />
        </div>
        <div className="logintitle">로그인</div>
        <form className="user_login">
          <div className="loginid">
            <label>아이디</label>
            <input
              name="id"
              value={user.id}
              type="text"
              placeholder="아이디를 입력해주세요."
              onChange={e => setUser({ ...user, id: e.target.value })}
            />
          </div>
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
            <ButtonSubmit
              type="submit"
              onClick={handleLogin}
              label={"로그인"}
            />
            <ButtonCancle onClick={joinNavi} label={"회원가입"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
