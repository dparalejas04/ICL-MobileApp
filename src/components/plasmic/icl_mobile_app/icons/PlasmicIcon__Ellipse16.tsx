// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse16Icon(props: Ellipse16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 200"}
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

      <circle
        cx={"99.576"}
        cy={"99.576"}
        r={"97.076"}
        stroke={"currentColor"}
        strokeWidth={"5"}
      ></circle>
    </svg>
  );
}

export default Ellipse16Icon;
/* prettier-ignore-end */
