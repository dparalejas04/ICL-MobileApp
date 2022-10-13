// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse30Icon(props: Ellipse30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 101 150"}
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
          "M91.143 149.175c6.927-16.041 9.939-33.666 8.759-51.258-1.18-17.593-6.513-34.59-15.512-49.436C75.392 33.636 63.017 21.42 48.4 12.948 33.781 4.478 17.388.026.722 0L.576 105.376l90.567 43.799z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse30Icon;
/* prettier-ignore-end */
