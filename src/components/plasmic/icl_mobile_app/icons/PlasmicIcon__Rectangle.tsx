// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RectangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RectangleIcon(props: RectangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 12"}
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
          "M3.59 0h14.82c1.249 0 1.701.13 2.158.374.456.244.814.602 1.058 1.058.244.457.374.91.374 2.157v4.322c0 1.248-.13 1.7-.374 2.157a2.544 2.544 0 01-1.058 1.058c-.457.244-.91.374-2.157.374H3.589c-1.248 0-1.7-.13-2.157-.374a2.544 2.544 0 01-1.058-1.058C.13 9.61 0 9.158 0 7.91V3.589c0-1.248.13-1.7.374-2.157A2.544 2.544 0 011.432.374C1.89.13 2.342 0 3.59 0zm0 1c-.988 0-1.332.067-1.686.256a1.54 1.54 0 00-.648.648C1.066 2.258 1 2.602 1 3.589v4.322c0 .987.067 1.331.256 1.685.15.282.366.497.648.648.354.19.698.256 1.685.256h14.822c.986 0 1.331-.066 1.685-.256a1.54 1.54 0 00.648-.648c.19-.354.256-.698.256-1.685V3.589c0-.987-.067-1.331-.256-1.685a1.545 1.545 0 00-.648-.648c-.354-.19-.698-.256-1.685-.256H3.589zM24.5 5.69c0 1.237-1.5 2-1.5 2v-4s1.5.763 1.5 2z"
        }
        fill={"currentColor"}
        fillOpacity={".36"}
      ></path>
    </svg>
  );
}

export default RectangleIcon;
/* prettier-ignore-end */
