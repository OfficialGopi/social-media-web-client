import { useSelector } from "react-redux";

const useSelectorHook = (feature: string) => () => {
  const state = useSelector((state: { [key: string]: any }) => state[feature]);
  return state;
};

const useUserSelector = useSelectorHook("user");
const useSocialDataSelector = useSelectorHook("socialData");
const useDialogSelector = useSelectorHook("dialog");
const usePostsSelector = useSelectorHook("posts");

export {
  useUserSelector,
  useSocialDataSelector,
  useDialogSelector,
  usePostsSelector,
};
