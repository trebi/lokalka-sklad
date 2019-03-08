import React from "react";
import PropTypes from 'prop-types'

const ItemsSection = ({
  item,
  openType,
  list,
  someAvailable,
  dateSelected,
  availableItems,
  handleOpen
}) => {
  if (list.length === 1) return list;
  const availableClass = someAvailable || !dateSelected;
  return (
    <>
      <div
        id={item.type}
        className={`item-select main${availableClass ? "" : " notAvailable"}`}
        onClick={handleOpen}
      >
        {item.name}
        <span className="item-select-number">
          {dateSelected ? `${availableItems} / ${list.length}` : list.length}
        </span>
      </div>
      {item.type === openType && list}
    </>
  );
};

ItemsSection.propTypes = {
  availableItems: PropTypes.bool,
  dateSelected: PropTypes.bool,
  handleOpen: PropTypes.func,
  item: PropTypes.object,
  list: PropTypes.node,
  openType: PropTypes.string,
  someAvailable: PropTypes.bool
}

export default ItemsSection;
