import { useEffect, useState } from "react";

function SignupMessage() {
  const [message, setMessage] = useState("");

  const signupMessages = [
    "지금 가입하고 특별한 요리 여정을 시작하세요!",
    "회원가입으로 나만의 레시피를 기록해보세요.",
    "요리 실력을 쑥쑥 키우는 첫걸음, 회원가입!",
    "회원이 되어 더 많은 혜택을 누려보세요.",
    "나만의 요리 훈장을 모으고 싶다면 지금 가입!",
    "매일매일 새로운 도전, 회원가입으로 함께해요.",
    "요리 초보도, 달인도 모두 환영합니다! 회원가입하고 시작하세요.",
    "나만의 요리 기록, 회원가입으로 쉽게 관리하세요.",
    "당신만의 요리 스타일을 만들어가는 첫걸음, 회원가입.",
    "회원가입하면 나만의 요리 분석 리포트를 받아볼 수 있어요.",
    "쉽고 빠른 회원가입으로 요리 여정을 시작하세요!",
    "요리 실력을 체계적으로 관리하는 가장 좋은 방법, 회원가입.",
    "오늘도 요리를 즐기고 싶다면 지금 가입하세요!",
    "가입하고 특별한 셰프의 길에 함께하세요.",
    "회원가입으로 요리 실력도, 즐거움도 두 배로!",
  ];
  useEffect(() => {
    const random = Math.floor(Math.random() * signupMessages.length);
    setMessage(signupMessages[random]);
  }, []);

  return <p>{message}</p>;
}

export default SignupMessage;
