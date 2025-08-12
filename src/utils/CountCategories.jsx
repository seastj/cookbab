// cooks 배열에서 userId 조건으로 해당 유저가 등록한 카테고리별 횟수 집계
export const countCategories = (cooks, userId) => {
  const counts = {};

  cooks.forEach(cook => {
    if (userId && cook.userId !== userId) return;

    const category = cook.category || "미지정";
    counts[category] = (counts[category] || 0) + 1;
  });

  return counts;
};
