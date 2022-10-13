// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SideBarBg5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SideBarBg5Icon(props: SideBarBg5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 360 50"}
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

      <path d={"M360 0H0v50h360V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default SideBarBg5Icon;
/* prettier-ignore-end */
