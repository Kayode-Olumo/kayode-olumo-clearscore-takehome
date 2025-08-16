export const BREAKPOINTS = {
    small: 375,
    medium: 768,
    large: 1024,
    xlarge: 1280,
  } as const;
  
  export type DSBreakpoint = keyof typeof BREAKPOINTS;
  
  export const MEDIA = {
    small:  `(min-width: ${BREAKPOINTS.small}px)`,
    medium: `(min-width: ${BREAKPOINTS.medium}px)`,
    large:  `(min-width: ${BREAKPOINTS.large}px)`,
    xlarge: `(min-width: ${BREAKPOINTS.xlarge}px)`,
  } as const;