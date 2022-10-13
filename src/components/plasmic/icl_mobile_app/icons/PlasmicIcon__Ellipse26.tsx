// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse26Icon(props: Ellipse26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 117 106"}
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
          "M.513 102.36c22.774 6.268 46.909 3.798 68.126-6.97 21.217-10.77 38.144-29.142 47.78-51.86L25.576.375.513 102.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse26Icon;
/* prettier-ignore-end */
