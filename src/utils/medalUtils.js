import { medalList } from "./medalList";

function getKoreaDateString(date = new Date()) {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const kst = new Date(utc + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

export function checkMedals() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  const todayStr = getKoreaDateString();
  const today = new Date(todayStr);

  // 가입 경과일 계산
  const joinDate = user.joinDate ? new Date(user.joinDate) : null;
  const joinDays = joinDate
    ? Math.floor((today - joinDate) / (1000 * 60 * 60 * 24))
    : 0;
  user.joinDays = joinDays;

  user.postCount = user.postCount || 0;
  user.loginStreak = user.loginStreak || 0;
  user.postStreak = user.postStreak || 0;

  medalList.forEach(medal => {
    const currentValue = user[medal.type];
    const alreadyHas = user.medals?.some(m => m.id === medal.id);

    if (currentValue >= medal.value && !alreadyHas) {
      user.medals = user.medals || [];
      user.medals.push({
        id: medal.id,
        name: medal.name,
        date: new Date().toISOString(),
      });
      alert(`'${medal.name}' 훈장을 획득했습니다!`);
    }
  });

  localStorage.setItem("user", JSON.stringify(user));
}
