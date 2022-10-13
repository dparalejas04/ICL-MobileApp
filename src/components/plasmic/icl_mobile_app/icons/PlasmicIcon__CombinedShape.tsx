// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CombinedShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CombinedShapeIcon(props: CombinedShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 11"}
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
          "M14.125.966c-.023.116-.023.255-.023.534v7.7c0 .279 0 .418.023.534a1.2 1.2 0 00.943.943c.115.023.255.023.534.023.278 0 .418 0 .534-.023a1.2 1.2 0 00.942-.943c.024-.116.024-.255.024-.534V1.5c0-.279 0-.418-.024-.534a1.2 1.2 0 00-.942-.943C16.02 0 15.88 0 15.602 0c-.28 0-.419 0-.534.023a1.2 1.2 0 00-.943.943zM9.398 3.9c0-.279 0-.418.024-.534a1.2 1.2 0 01.942-.943c.116-.023.256-.023.534-.023.28 0 .419 0 .534.023a1.2 1.2 0 01.943.943c.023.116.023.255.023.534v5.3c0 .279 0 .418-.023.534a1.2 1.2 0 01-.943.943c-.115.023-.255.023-.534.023-.278 0-.418 0-.534-.023a1.2 1.2 0 01-.943-.943c-.023-.116-.023-.255-.023-.534V3.9zM4.823 5.666C4.8 5.782 4.8 5.92 4.8 6.2v3c0 .279 0 .418.023.534a1.2 1.2 0 00.943.943c.116.023.255.023.534.023s.418 0 .534-.023a1.2 1.2 0 00.943-.943C7.8 9.618 7.8 9.48 7.8 9.2v-3c0-.279 0-.418-.023-.534a1.2 1.2 0 00-.943-.943C6.718 4.7 6.58 4.7 6.3 4.7s-.418 0-.534.023a1.2 1.2 0 00-.943.943zm-4.8 2C0 7.782 0 7.92 0 8.2v1c0 .279 0 .418.023.534a1.2 1.2 0 00.943.943c.116.023.255.023.534.023s.418 0 .534-.023a1.2 1.2 0 00.943-.943C3 9.618 3 9.48 3 9.2v-1c0-.279 0-.418-.023-.534a1.2 1.2 0 00-.943-.943C1.918 6.7 1.78 6.7 1.5 6.7s-.418 0-.534.023a1.2 1.2 0 00-.943.943z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CombinedShapeIcon;
/* prettier-ignore-end */
