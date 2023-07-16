import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ALERT_VALUE } from 'utils/contants/motionValue.js';

function Alert() {
  const { initial, animate, transition } = ALERT_VALUE;

  return (
    <AnimatePresence>
      <SuccessMessage
        initial={initial}
        animate={animate}
        transition={transition}
      >
        🎉&nbsp;&nbsp;질문 등록이 완료되었습니다&nbsp;&nbsp;🎉
      </SuccessMessage>
    </AnimatePresence>
  );
}

const SuccessMessage = styled(motion.p)`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  ${({ theme }) => theme.alert};
`;

export default Alert;
