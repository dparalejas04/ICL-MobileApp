// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 22"}
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
          "M22.684 10.907l-2.099-6.438C19.487 1.104 15.963-.765 12.713.3L4.22 3.068C.97 4.134-.774 7.72.333 11.094l2.099 6.438c1.098 3.365 4.622 5.234 7.872 4.17l8.501-2.77c3.242-1.064 4.977-4.659 3.88-8.024zM12.2 2.937c.895-.204 1.683.257 1.895 1.178.23 1.027-.451 1.983-1.46 2.214-.922.203-1.666-.266-1.87-1.187-.22-.983.452-1.984 1.435-2.205zm2.444 12.938c-.797 1.195-1.868 2.373-3.303 2.7-.806.178-1.452-.07-1.647-.929-.266-1.169.222-3.843.46-5.1.054-.39.479-2.604.381-3.012-.035-.159-.159-.292-.336-.256-.832.186-1.47 2.382-1.869 2.47a.31.31 0 01-.354-.23c-.088-.407.655-1.585.868-1.913.753-1.062 1.771-1.975 3.073-2.267.85-.195 1.603.089 1.798.983.159.718-.16 2.772-.257 3.569l-.363 2.674c-.062.363-.178.983-.098 1.346.036.16.16.293.337.257.425-.097 1.204-1.452 1.364-1.815.08-.16.23-.55.433-.594.116-.026.301.071.328.187.07.433-.61 1.594-.815 1.93z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
