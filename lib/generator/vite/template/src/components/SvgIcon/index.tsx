import React from "react";

import { isString } from "lodash-es";

interface PropsType {
  name: string;
  color?: string;
  size?: string | { w: string; h: string };
  style?: React.CSSProperties;
}

const SvgIcon: React.FC<PropsType> = ({ name, color, size, style }) => {
  const symbolId = `#icon-${name}`;
  let svgW = "1em";
  let svgH = "1em";

  if (isString(size)) {
    svgW = size;
    svgH = size;
  } else {
    svgW = size?.w ?? svgW;
    svgH = size?.h ?? svgW;
  }

  return (
    <svg className="svg-icon" aria-hidden="true" width={svgW} height={svgH} style={style}>
      <use href={symbolId} color={color} />
    </svg>
  );
};

export default SvgIcon;
