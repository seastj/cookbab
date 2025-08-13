function getKoreaDateString(date = new Date()) {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const kst = new Date(utc + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

function isYesterday(dateString) {
  if (!dateString) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKST = getKoreaDateString(yesterday);
  return dateString === yesterdayKST;
}

export function onLogin(loggedInUser) {
  if (!loggedInUser) return;

  let user = loggedInUser;

  const today = getKoreaDateString();

  if (!user.lastLoginDate || user.lastLoginDate !== today) {
    if (isYesterday(user.lastLoginDate)) {
      user.loginStreak = (user.loginStreak || 0) + 1;
    } else {
      user.loginStreak = 1;
    }
    user.lastLoginDate = today;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const idx = users.findIndex(u => u.userId === user.userId);
  if (idx !== -1) {
    users[idx] = user;
  } else {
    users.push(user);
  }
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("user", JSON.stringify(user));
}

export function onPost() {}
