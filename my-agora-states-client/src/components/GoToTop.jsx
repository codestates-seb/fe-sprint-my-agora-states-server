import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { GOTOTOP_VALUE } from 'utils/contants/motionValue.js';

const ARROW_ICON_URL = `${process.env.PUBLIC_URL}/assets/arrow_top.png`;

function GoToTop() {
  const [scrollY, setScrollY] = useState(0);
  const [showing, setShowing] = useState(false);

  const checkScollY = () => {
    setScrollY(window.scrollY);

    setTimeout(() => {
      scrollY > 400 ? setShowing(true) : setShowing(false);
    }, 500);
  };

  const handleClick = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useLayoutEffect(() => {
    const detect = () => window.addEventListener('scroll', checkScollY);

    detect();

    return () => window.removeEventListener('scroll', checkScollY);
  });

  const { initial, animate, whileHover, transition, exit } = GOTOTOP_VALUE;

  return (
    <AnimatePresence>
      {showing && (
        <Button
          type="button"
          iconUrl={ARROW_ICON_URL}
          onClick={handleClick}
          initial={initial}
          animate={animate}
          whileHover={whileHover}
          transition={transition}
          exit={exit}
        />
      )}
    </AnimatePresence>
  );
}

const Button = styled(motion.button)`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  width: 3rem;
  height: 3rem;
  background: center / cover no-repeat ${({ iconUrl }) => `url(${iconUrl})`};
  border-radius: 50%;
  box-shadow: 0.125rem 0.125rem 0.3125rem 0 rgba(50, 50, 50, 0.4);
  cursor: pointer;
`;

export default GoToTop;
