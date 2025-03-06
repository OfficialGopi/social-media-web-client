const DialogSnippet = ({
  children,
  isOpen,
  onClose,
  bgOpacity = 0.5,
  zIndex = 10000,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  bgOpacity?: number;
  zIndex?: number;
}) => {
  return (
    isOpen && (
      <>
        <div
          style={{
            opacity: bgOpacity,
            zIndex: zIndex,
          }}
          className="fixed left-0 top-0 h-screen w-screen bg-black"
          onClick={onClose}
        ></div>
        <div
          style={{
            zIndex: zIndex + 1,
          }}
          className="flex flex-col fixed top-[50%] left-[50%]
        translate-x-[-50%] translate-y-[-50%]"
        >
          {children}
        </div>
      </>
    )
  );
};

export default DialogSnippet;
