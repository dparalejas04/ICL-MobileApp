// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse19Icon(props: Ellipse19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 91"}
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
        d={"M56.553.774A99.576 99.576 0 00.49 80.707l99.086 9.869L56.553.774z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse19Icon;
/* prettier-ignore-end */
