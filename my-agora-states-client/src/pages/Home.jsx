import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  QuestionForm,
  Discussions,
  ColorMode,
  GoToTop,
  Alert,
} from 'components';
import { FLOATING_MOTION_VALUE } from 'utils/contants/motionValue.js';

function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { initial, animate, transition } = FLOATING_MOTION_VALUE;

  return (
    <>
      <ColorMode />
      <motion.div initial={initial} animate={animate} transition={transition}>
        <PageTitle>My Agora States</PageTitle>
        <QuestionForm isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
        <Discussions isSuccess={isSuccess} />
        <GoToTop />
        {isSuccess && <Alert />}
      </motion.div>
    </>
  );
}

const PageTitle = styled.h1`
  width: 33.75rem;
  padding: 2rem 0;
  margin: 0 auto;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  ${({ theme }) => theme.pageTitle};
`;

export default Home;
