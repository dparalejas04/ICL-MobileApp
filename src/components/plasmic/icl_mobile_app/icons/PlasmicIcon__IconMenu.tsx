// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMenuIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMenuIcon(props: IconMenuIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 20"}
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
          "M0 0v2.778h22V0H0zm0 8.25v2.777h22V8.25H0zm0 8.332v2.778h22v-2.778H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconMenuIcon;
/* prettier-ignore-end */
