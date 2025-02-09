import { useDialogSelector } from "./../../hooks/selectorHook";

const NotificationDialog = () => {
  const { isNotificationOpen } = useDialogSelector();
  return (
    <section
      className={`h-full bg-black  duration-500 transition-all   border-r   border-white border-opacity-15 rounded-tr-3xl overflow-hidden rounded-br-2xl absolute z-[5]  top-0 left-0  ${
        isNotificationOpen ? "translate-x-[73px] md:w-[400px]" : "w-0"
      }`}
    >
      <h1 className="font-bold text-2xl p-4">Notification</h1>
    </section>
  );
};

export default NotificationDialog;
