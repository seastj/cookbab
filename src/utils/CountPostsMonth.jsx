export const countPostsMonth = (cooks, userId) => {
  const counts = {};

  cooks.forEach(cook => {
    if (cook.userId !== userId) return;
    if (!cook.createdAt) return;

    const month = cook.createdAt.slice(0, 7);
    counts[month] = (counts[month] || 0) + 1;
  });

  return counts;
};
