import React, { ReactNode } from "react";
import { StyleContainer } from "./style";

const Container = ({ children }: { children: ReactNode }) => {
  return <StyleContainer>{children}</StyleContainer>;
};

export default Container;
