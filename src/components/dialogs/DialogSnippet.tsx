const DialogSnippet = ({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    isOpen && (
      <>
        <div
          className=" fixed h-screen w-screen bg-black bg-opacity-15
        z-[10000]
        "
          onClick={onClose}
        ></div>
        <div
          className="flex flex-col fixed top-[50%] left-[50%]
        translate-x-[-50%] translate-y-[-50%]
        z-[10001]
        "
        >
          {children}
        </div>
      </>
    )
  );
};

export default DialogSnippet;
