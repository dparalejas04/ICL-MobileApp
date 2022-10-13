// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse28Icon(props: Ellipse28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 96"}
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
          "M56.553.343c-15.422 7.819-28.681 19.709-38.5 34.525C8.233 49.683 2.185 66.925.49 84.933l99.086 10.443L56.553.343z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse28Icon;
/* prettier-ignore-end */
