import { useEffect, useState, useCallback } from "react";
import css from "./BackDropModal.module.css";
import clsx from "clsx";

const BackDropModal = ({ children, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  const closeModal = useCallback(() => {
    setIsActive(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleEscapePress = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscapePress);
    document.body.style.overflow = "hidden";

    setIsActive(true);

    return () => {
      window.removeEventListener("keydown", handleEscapePress);
      document.body.style.overflow = "";
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={clsx(css.backdrop, { [css.active]: isActive })}
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
};

export default BackDropModal;
