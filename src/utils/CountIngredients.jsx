// cooks 배열에서 재료(userTags)별 사용 횟수 집계
export const countIngredients = (cooks, userId) => {
  const counts = {};

  cooks.forEach(cook => {
    if (userId && cook.userId !== userId) return;

    (cook.userTags || []).forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });

  return counts;
};
