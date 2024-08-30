import React from 'react';
import Select from 'react-select';

const options = [
  // { value: 'item1', label: 'Item 1' },
  // { value: 'item2', label: 'Item 2' },
  // { value: 'item3', label: 'Item 3' },
  // { value: 'item4', label: 'Item 4' },
  // { value: 'item5', label: 'Item 5' },
  // More items...
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    display: 'none', // Hide the default control
  }),
  menu: (provided) => ({
    ...provided,
    position: 'static', // Keep the menu always open
    minHeight: '200px',
    maxHeight: '200px', // Set the maximum height for the scrollable area
    overflowY: 'auto', // Enable vertical scrolling
  }),
  container: (provided) => ({
    ...provided,
    width: '100%',
  }),
};

const ScrollableSelect = () => {
  return (
    <div>
      <h3>Topics</h3>
      <Select
        options={options}
        noOptionsMessage={() => 'No options available'} // Custom message
        isMulti={false}
        styles={customStyles}
        menuIsOpen={true} // Keep the menu always open
        components={{
          IndicatorSeparator: () => null, // Remove the dropdown indicator separator
        }}
        placeholder="Select an item..."
      />
    </div>
  );
};

export default ScrollableSelect
