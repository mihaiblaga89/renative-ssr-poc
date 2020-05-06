export const opacity = {
  from: { opacity: 0 },
  to: { opacity: 1 },
};

export const color = {
  from: { color: 'blue' },
  to: { color: `red` },
};

export const slideUp = {
  from: {
    transform: `translate3d(0,60px,0)`,
  },
  to: {
    transform: `translate3d(0,0,0)`,
  },
};

export const slideDown = {
  from: {
    transform: `translate3d(0,-60px,0)`,
  },
  to: {
    transform: `translate3d(0,0,0)`,
  },
};

export const scaleUp = {
  from: {
    height: `0%`,
  },
  to: {
    height: `100%`,
  },
};

export const scaleDownHeight = {
  from: {
    marginBottom: `60px`,
  },
  to: {
    marginBottom: `0px`,
  },
};

export const transitionMarginBottom = {
  from: {
    marginBottom: `20vh`,
  },
  to: {
    marginBottom: `0vh`,
  },
};

export const scaleX = {
  from: {
    transform: `scaleX(0)`,
  },
  to: {
    transform: `scaleX(1)`,
  },
};

export const rotation = {
  from: {
    transform: `rotate3d(0, 0, 1, 47deg)`,
  },
  to: {
    transform: `rotate3d(0, 0, 1, 0deg)`,
  },
};
