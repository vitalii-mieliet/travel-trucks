export const mediaTo = (theme, bp) =>
  `@media (max-width:${theme.breakpoints.values[bp]}px)`;

export const mediaFrom = (theme, bp) =>
  `@media (min-width:${theme.breakpoints.values[bp]}px)`;
