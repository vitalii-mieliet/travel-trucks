// export const scrollToId = (id, yOffset = -100) => {
//   setInterval(() => {
//     const el = document.getElementById(id);
//     if (el) {
//       const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   }, 0);
// };

export const scrollToId = (id, yOffset = -100) => {
  const scroll = () => {
    const el = document.getElementById(id);
    if (!el) {
      // Элемент ещё не в DOM → пробуем в следующем кадре
      requestAnimationFrame(scroll);
      return;
    }
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  scroll();
};
