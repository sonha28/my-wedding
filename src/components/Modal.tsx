import React, { useState } from 'react';

interface IPVCBModalProps {
  open: boolean;
  className?: string;
  children: React.ReactNode;
}
const Modal = ({ open, className, children }: IPVCBModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {open ? (
        <div className="relative">
          <div className="fixed inset-0 items-center justify-center w-full h-full overflow-y-scroll flex flex-col">
            <div className="fixed top-0 left-0 right-0 w-screen h-screen bg-neutral-900 opacity-80" />
            <div
              className={`z-50 overflow-y-auto fixed rounded-xl bg-white focus:outline-none ${className}`}
            >
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
