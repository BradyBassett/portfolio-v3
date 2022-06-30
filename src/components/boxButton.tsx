import { Link } from "gatsby";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { IBoxButtonProps } from "../common/interfaces";

const BoxButton = ({ text, scroll, navTo, classes }: IBoxButtonProps) => {
  if (scroll)
    return (
      <a href={navTo} className={classes}>
        {text}
        {scroll && (
          <div className="mx-auto w-1/4">
            <FiChevronDown />
          </div>
        )}
      </a>
    );
  else
    return (
      <Link to={navTo} className={classes}>
        {text}
      </Link>
    );
};

export default BoxButton;
