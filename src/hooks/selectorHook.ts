import { useSelector } from "react-redux";

const useSelectorHook = (feature: string) => () => {
  const state = useSelector((state: { [key: string]: any }) => state[feature]);
  return state;
};

const useUserSelector = useSelectorHook("user");
const useAsideSelector = useSelectorHook("aside");

export { useUserSelector, useAsideSelector };
