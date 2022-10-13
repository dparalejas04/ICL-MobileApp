// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WiFiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WiFiIcon(props: WiFiIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 12"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.7 2.296a8.71 8.71 0 016.003 2.399.31.31 0 00.437-.004l1.166-1.176a.324.324 0 00-.003-.46 10.988 10.988 0 00-15.206 0 .324.324 0 00-.003.46L1.26 4.69a.31.31 0 00.437.004A8.713 8.713 0 017.7 2.296zm-.002 3.828c1.228 0 2.412.456 3.322 1.28a.313.313 0 00.437-.006l1.164-1.176a.325.325 0 00-.004-.463 7.22 7.22 0 00-9.834 0 .325.325 0 00-.005.463l1.164 1.176c.12.12.314.123.437.006a4.948 4.948 0 013.32-1.28zm2.24 2.807a.317.317 0 00-.01-.46 3.45 3.45 0 00-4.456 0 .317.317 0 00-.01.46l2.015 2.033a.314.314 0 00.447 0L9.938 8.93z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WiFiIcon;
/* prettier-ignore-end */
