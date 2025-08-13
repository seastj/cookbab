// 조리시간별 횟수 집계
export const countCookTimes = (cooks, userId) => {
  const counts = {};
  const times = [
    "10분 미만",
    "10~30분",
    "30~60분",
    "1~2시간",
    "2~3시간",
    "3시간이상",
  ];

  times.forEach(time => {
    counts[time] = 0;
  });

  cooks.forEach(cook => {
    if (userId && cook.userId !== userId) return;

    const time = cook.cookTime || "미지정";

    if (times.includes(time)) {
      counts[time] += 1;
    } else {
      counts["미지정"] = (counts["미지정"] || 0) + 1;
    }
  });

  return counts;
};
