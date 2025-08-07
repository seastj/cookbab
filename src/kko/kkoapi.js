const rest_api_key = process.env.REACT_APP_KKO_LOGIN_REST_API_KEY;
const redirect_uri = "http://localhost:3000/member/kko";
const auth_code_path = "https://kauth.kakao.com/oauth/authorize";
const kko_user_api = "https://kapi.kakao.com/v2/user/me";

export const getKakaoLoginLink = () => {
  return `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
};

const access_token_url = "https://kauth.kakao.com/oauth/token";
export const getAccessToken = async authCode => {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,
    code: authCode,
  });

  const response = await fetch(access_token_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error("Access Token 요청 실패: " + JSON.stringify(errorData));
  }
  const data = await response.json();
  return data.access_token;
};

export const getMemberWithAccessToken = async accessToken => {
  const response = await fetch(kko_user_api, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error("사용자 정보 요청 실패: " + JSON.stringify(errorData));
  }
  const userData = await response.json();
  return userData;
};
