import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/component";
import { ThemeContext } from "../../contexts/ThemeProvider";
import classNames from "classnames";
import { ReviewForm } from "../ReviewForm/component";

export const ModalReviewForm = ({ titleOpen, btnStyles }) => {
  const [showModal, setShowModal] = useState(false);
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <Button
        className={classNames(`btn-primary-${theme}`, btnStyles)}
        title={titleOpen}
        onClick={() => {
          setShowModal(true);
        }}
      />

      {showModal &&
        createPortal(
          <div className="modal">
            <ReviewForm
              onClose={() => {
                setShowModal(false);
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
};
