// 난이도별 횟수 집계
export const countLevels = (cooks, userId) => {
  const counts = {};

  cooks.forEach(cook => {
    if (userId && cook.userId !== userId) return;

    const level = cook.level || "미지정";
    counts[level] = (counts[level] || 0) + 1;
  });

  return counts;
};
