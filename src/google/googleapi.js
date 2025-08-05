//확인
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_KEY;
//확인
const GOOGLE_REDIRECT_URI = "http://localhost:3000/member/google";
// 구글 로그인시 활용
export const getGoogleLoginLink = () => {
  //확인
  window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;
};

export const getGoogleToken = async code => {
  //확인
  const REST_API_KEY = GOOGLE_CLIENT_ID;
  //확인
  const REDIRECT_URI = GOOGLE_REDIRECT_URI;
  //확인
  const SECRET_KEY = process.env.REACT_APP_GOOGLE_SECRET_KEY;
  const response = await fetch(
    //확인
    `https://oauth2.googleapis.com/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&client_secret=${SECRET_KEY}&code=${code}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    },
  );
  return response.json();
};

export const getGoogleUserInfo = async accessToken => {
  try {
    const response = await fetch(
      //확인
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        method: "GET",
        headers: {
          //확인
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Google user info");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching Google user info:", error);
    return null;
  }
};
