import React from "react";
import PropTypes from "prop-types";

export default function KeyFigures({ icon, color, figure, title }) {
  return (
    <div className="flex items-center rounded-md bg-lightGrey p-4 xl:p-8">
      <div
        className={`${color} mr-8 w-[60px] h-[60px] flex justify-center items-center rounded-md`}
      >
        <img src={icon} alt="icon" />
      </div>
      <div>
        <p className="xl:text-xl font-[Roboto-Bold]">{figure}</p>
        <p className="text-mediumGrey text-sm">{title}</p>
      </div>
    </div>
  );
}

KeyFigures.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  figure: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
};
