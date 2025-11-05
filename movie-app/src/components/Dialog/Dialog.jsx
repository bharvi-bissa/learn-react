import React from "react";
import ReactDOM from "react-dom";
import {FocusTrap} from "focus-trap-react";
import "./Dialog.css";

/**
 * Dialog component rendered via React Portal.
 * - Uses `ReactDOM.createPortal` to mount outside the normal DOM tree (in `document.body`).
 * - Uses FocusTrap for accessibility (keeps keyboard focus within the dialog).
 * - Accepts `title`, `children`, and `onClose` props.
 */
const Dialog = ({ title, children, onClose }) => {
  // Create portal root dynamically if not present
  const portalRoot =
    document.getElementById("dialog-root") ||
    (() => {
      const root = document.createElement("div");
      root.id = "dialog-root";
      document.body.appendChild(root);
      return root;
    })();

  return ReactDOM.createPortal(
    <div className="dialog-overlay" onClick={onClose}>
      <FocusTrap>
        <div
          className="dialog-box"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside box
        >
          <div className="dialog-header d-flex justify-content-between align-items-center mb-3">
            <h4 className="dialog-title">{title}</h4>
            <button className="btn-close-white" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="dialog-body">{children}</div>
        </div>
      </FocusTrap>
    </div>,
    portalRoot
  );
};

export default Dialog;