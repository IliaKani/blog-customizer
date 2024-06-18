import { useEffect, useCallback } from "react";

type TUseClose = {
  isOpen: boolean;
  onClose: () => void;
  rootRef: React.RefObject<HTMLElement>;
};

export function useClose({isOpen, onClose, rootRef}: TUseClose) {
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const { target } = event;
    const isOutsideClick =
      target instanceof Node && // check that this is a `DOM` element
      rootRef.current &&
      !rootRef.current.contains(target);  // we check that they clicked on an element that is not inside our block
    if (isOutsideClick) {
      onClose();
    }
  }, [onClose, rootRef]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return; // stop the effect if closed

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    //  be sure to remove handlers in the `clean-up` function
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // be sure to monitor `isOpen` so that it only works when opening, and not during any redrawing of the component
  }, [isOpen, handleEscape, handleClickOutside]);
}