import { useContext } from "react";
import { ShoppContext } from "../contexts/ShoppContext";

export function useShoppContext() {
  return useContext(ShoppContext)
}