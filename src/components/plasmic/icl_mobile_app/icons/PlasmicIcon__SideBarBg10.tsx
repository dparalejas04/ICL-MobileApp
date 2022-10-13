// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SideBarBg10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SideBarBg10Icon(props: SideBarBg10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 199 29"}
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

      <g filter={"url(#gDpkEEVX3wa)"}>
        <path d={"M198.59 0H0v28.842h198.59V0z"} fill={"currentColor"}></path>
      </g>

      <defs>
        <filter
          id={"gDpkEEVX3wa"}
          x={"-20"}
          y={"-20"}
          width={"238.59"}
          height={"68.842"}
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
            result={"effect1_backgroundBlur_573_81751"}
          ></feComposite>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_backgroundBlur_573_81751"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default SideBarBg10Icon;
/* prettier-ignore-end */
