// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse27Icon(props: Ellipse27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 114"}
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
          "M.524.579C-1.933 25.823 4.301 51.157 18.08 71.927c13.78 20.77 34.18 35.579 57.45 41.707L99.576 11.376.524.58z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse27Icon;
/* prettier-ignore-end */
