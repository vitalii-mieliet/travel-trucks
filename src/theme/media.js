import { BREAKPOINTS } from "./breakpoints";

export const mediaTo = (bp) => `@media (max-width:${BREAKPOINTS[bp]}px)`;

export const mediaFrom = (bp) => `@media (min-width:${BREAKPOINTS[bp]}px)`;
