// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
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
          "M3.889 1.556h6.222V0h1.556v1.556h.777A1.556 1.556 0 0114 3.11V14a1.555 1.555 0 01-1.556 1.556H1.556A1.555 1.555 0 010 14V3.111a1.556 1.556 0 011.556-1.555h.777V0H3.89v1.556zm-2.333 3.11V14h10.888V4.667H1.556zM3.11 7h1.556v1.556H3.11V7zm3.111 0h1.556v1.556H6.222V7zm3.111 0h1.556v1.556H9.333V7zm0 3.111h1.556v1.556H9.333V10.11zm-3.11 0h1.555v1.556H6.222V10.11zm-3.112 0h1.556v1.556H3.11V10.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
