import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Banner.scss";

function Banner() {
  const ref = useRef();
  const [state, setState] = useState(false);
  const { scrollY } = useScroll();

  /** 스크롤 값이 0이 아니면 state값 변환. */
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.current) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, [scrollY]);

  /** absBtn 클릭 시 스크롤 이동 */
  const onClick = () => {
    console.log(window.innerHeight);
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  /***** motion variants *****/
  // wrapper 생성 및 opacity
  const wrapperVariants = {
    initial: {
      opacity: 0,
    },
    start: {
      opacity: 0.7,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0 },
  };
  // 스크롤 다운 버튼 생성 및 삭제 animation
  const absBtnVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opaity: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  //스크롤 다운 버튼 움직임
  const absBtnMoving = {
    initial: {
      y: 0,
      translateX: "-50%",
    },
    animate: {
      y: -20,
      transition: {
        repeat: Infinity,
        duration: 0.7,
        repeatType: "reverse",
      },
    },
  };

  return (
    <>
      <section className="banner">
        <div className="bannerContainer" ref={ref}>
          <AnimatePresence>
            {state && <motion.div className="wrapper" variants={wrapperVariants} initial="initial" animate="start" exit="exit"></motion.div>}
          </AnimatePresence>
          <div className="box">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 },
              }}
              className="title"
            >
              My Agora States
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.7 },
              }}
              className="sub"
            >
              답변을 확인하세요
            </motion.div>
            <AnimatePresence>
              {!state && (
                <motion.div className="moveBox" variants={absBtnMoving} initial="initial" animate="animate" exit="exit">
                  <motion.div className="absBtn" onClick={onClick} variants={absBtnVariants} initial="initial" animate="animate" exit="exit">
                    ▼
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div id="BannerDivider"></div>
    </>
  );
}

export default Banner;
