// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCogIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCogIcon(props: IconCogIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M9.803 0L8.407 3.324c-.28.083-.53.223-.782.363L4.3 2.29 2.29 4.301l1.396 3.324c-.14.28-.252.503-.363.782L0 9.803v2.793l3.324 1.397c.111.28.223.503.363.782L2.29 18.1l2.011 2.01 3.324-1.396c.251.112.503.252.782.363L9.803 22.4h2.793l1.397-3.324c.251-.111.53-.223.782-.363L18.1 20.11l2.01-2.011-1.396-3.324c.112-.251.252-.53.363-.782l3.324-1.396V9.803l-3.324-1.396a4.895 4.895 0 00-.363-.782L20.11 4.3l-2.011-2.01-3.324 1.396c-.251-.112-.53-.252-.782-.363L12.597 0H9.803zM11.2 6.983a4.184 4.184 0 014.19 4.19 4.184 4.184 0 01-4.19 4.189 4.184 4.184 0 01-4.19-4.19 4.184 4.184 0 014.19-4.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCogIcon;
/* prettier-ignore-end */
