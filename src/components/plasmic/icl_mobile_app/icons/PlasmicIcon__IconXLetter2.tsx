// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconXLetter2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconXLetter2Icon(props: IconXLetter2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 9v7H2V9H0v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9h-2zm-6 .67l2.59-2.58L14 8.5l-5 5-5-5 1.41-1.41L8 9.67V0h2v9.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconXLetter2Icon;
/* prettier-ignore-end */
