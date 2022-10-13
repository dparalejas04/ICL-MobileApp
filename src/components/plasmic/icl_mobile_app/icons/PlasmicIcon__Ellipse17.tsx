// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse17Icon(props: Ellipse17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 101 141"}
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
          "M91.143 140.963a99.569 99.569 0 00-6.753-95.15A99.576 99.576 0 00.722 0L.576 99.576l90.567 41.387z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse17Icon;
/* prettier-ignore-end */
