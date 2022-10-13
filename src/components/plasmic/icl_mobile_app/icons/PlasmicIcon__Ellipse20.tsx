// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse20Icon(props: Ellipse20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 108"}
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
        d={"M.524.373A99.576 99.576 0 0075.53 107.205l24.046-96.63L.524.374z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse20Icon;
/* prettier-ignore-end */
