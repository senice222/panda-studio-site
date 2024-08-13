import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import s from './Cursor.module.scss';

const Cursor = () => {
  const cursorElement = document.querySelector('#cursor');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentItem, setCurrentItem] = useState({ text: '', position: 'top' });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setShowCursor(true);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', () => setShowCursor(false));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', () => setShowCursor(false));
    };
  }, []);

  return createPortal(
    <AnimatePresence>
      {showCursor && (
        <motion.div
          initial="initial"
          exit="exit"
          animate={{
            WebkitMaskPosition: `${mousePosition.x - 20 / 2}px ${mousePosition.y - 20 / 2}px`,
            WebkitMaskSize: `${20}px`,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          custom={{ mousePosition, hovered: currentItem, size: 20 }}
          className={s.cursor}
          style={{ top: mousePosition.y, left: mousePosition.x }}
        >
          <AnimatePresence>
            {currentItem?.text && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={s.followerText}
                data-position={currentItem.position ?? 'top'}
              >
                {currentItem.text}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    cursorElement
  );
}

export default Cursor;
