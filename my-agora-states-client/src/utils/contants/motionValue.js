export const FLOATING_MOTION_VALUE = {
  initial: { y: '30px', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: 1,
    ease: 'easeOut',
  },
};

export const GOTOTOP_VALUE = {
  initial: { y: '1.25rem', opacity: 0, scale: 0.8 },
  animate: { y: 0, opacity: 1 },
  whileHover: { scale: 1 },
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
  exit: { y: '1.25rem', opacity: 0 },
};

export const ALERT_VALUE = {
  initial: { y: '-6.25rem' },
  animate: { y: ['-6.25rem', '0', '-6.25rem'] },
  transition: {
    duration: 3.5,
    ease: 'easeInOut',
  },
};
