import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../kko/kkoapi";
import { LoginDispatchContext } from "../../contexts/LoginContext";

function AfterKko() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useContext(LoginDispatchContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchKakaoUser() {
      const code = searchParams.get("code");
      if (!code) {
        navigate("/"); // 인가 코드 없으면 메인 등으로 이동
        return;
      }
      try {
        const accessToken = await getAccessToken(code);
        const userData = await getMemberWithAccessToken(accessToken);

        const kakaoAccount = userData.kakao_account || {};
        const profile = kakaoAccount.profile || {};

        dispatch({
          type: "LOGIN",
          payload: {
            provider: "kakao",
            email: kakaoAccount.email || "",
            nickname: profile.nickname || "",
            profileImage: profile.thumbnail_image_url || "",
          },
        });

        navigate("/user/join");
      } catch (error) {
        alert("카카오 로그인 실패: " + error.message);
        navigate("/user/guest");
      } finally {
        setLoading(false);
      }
    }
    fetchKakaoUser();
  }, [dispatch, navigate, searchParams]);

  if (loading) return <div>카카오 로그인 처리 중...</div>;
  return null;
}

export default AfterKko;
