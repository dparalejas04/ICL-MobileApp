// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconXLetterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconXLetterIcon(props: IconXLetterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M2.874 0L0 2.874 1.468 4.34l3.628 3.69-3.628 3.628L0 13.065 2.874 16l1.467-1.467 3.69-3.69 3.628 3.69L13.065 16 16 13.065l-1.467-1.406-3.69-3.628 3.69-3.69L16 2.874 13.065 0l-1.406 1.468L8.03 5.096 4.34 1.468 2.874 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconXLetterIcon;
/* prettier-ignore-end */
