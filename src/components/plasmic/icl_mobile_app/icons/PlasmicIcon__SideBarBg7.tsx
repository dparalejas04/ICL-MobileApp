// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SideBarBg7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SideBarBg7Icon(props: SideBarBg7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 182 25"}
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

      <g filter={"url(#CFlBBx20Ha)"}>
        <path d={"M181.568 0H0v24.183h181.568V0z"} fill={"currentColor"}></path>
      </g>

      <defs>
        <filter
          id={"CFlBBx20Ha"}
          x={"-20"}
          y={"-20"}
          width={"221.568"}
          height={"64.183"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feGaussianBlur
            in={"BackgroundImageFix"}
            stdDeviation={"10"}
          ></feGaussianBlur>

          <feComposite
            in2={"SourceAlpha"}
            operator={"in"}
            result={"effect1_backgroundBlur_572_81303"}
          ></feComposite>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_backgroundBlur_572_81303"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default SideBarBg7Icon;
/* prettier-ignore-end */
