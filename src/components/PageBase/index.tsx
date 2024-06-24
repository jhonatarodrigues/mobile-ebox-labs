import React from "react";  
import { BaseGradient } from "../BaseGradient";
import { Base } from "./styles";


export const PageBase = ({children}: {children: JSX.Element}) => {

  return (
      <Base>
        {children}
      </Base>
  );
}

export default PageBase;