export const slideInZoomOut = {
  hidden: {
    opacity: 0,
    scale: 3,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0.3,
    x: '-100%',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};

export const slideInRightDelayed = {
  hidden: {
    opacity: 0,
    x: '-20%',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};

export const fadeInDeepPerspective = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: '-50%',
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};

export const slideBottomLeft = {
  hidden: {
    opacity: 0,
    x: '-100%',
    y: '100%',
    scale: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const slideDown = {
  hidden: {
    y: '-100%',
    opacity: 0,
    zIndex: -3,
  },
  show: {
    y: '0',
    opacity: 1,
    zIndex: -3,
    transition: {
      duration: 0.6,
    },
  },
};

export const slideUp = {
  hidden: {
    y: '40%',
    opacity: 0,
    zIndex: -3,
  },
  show: {
    y: '0',
    opacity: 1,
    zIndex: -3,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};
