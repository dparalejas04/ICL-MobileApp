// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse32Icon(props: Ellipse32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 211"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M196.652 105.376c0 56.953-43.594 102.877-97.076 102.877-53.482 0-97.076-45.924-97.076-102.877C2.5 48.424 46.094 2.5 99.576 2.5c53.482 0 97.076 45.924 97.076 102.876z"
        }
        stroke={"currentColor"}
        strokeWidth={"5"}
      ></path>
    </svg>
  );
}

export default Ellipse32Icon;
/* prettier-ignore-end */
