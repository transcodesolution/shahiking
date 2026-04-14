export function getAvatarStyle(index, activeIndex, total) {
  let diff = index - activeIndex;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  const absDiff = Math.abs(diff);

  let size = 60;
  if (absDiff === 0) size = 100;
  else if (absDiff === 1) size = 90;
  else if (absDiff === 2) size = 80;
  else if (absDiff === 3) size = 70;

  const gapMap = [0, 130, 120, 110, 100];

  let translateX = 0;
  for (let i = 1; i <= absDiff; i++) {
    translateX += gapMap[i] || 60;
  }

  if (diff < 0) translateX *= -1;

  return { size, translateX, absDiff };
}