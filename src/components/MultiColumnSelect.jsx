import React from 'react';
import Select, { components } from 'react-select';

// Sample data for options
const options = [
  { value: 'apple', label: 'Apple', category: 'Fruit' },
  { value: 'banana', label: 'Banana', category: 'Fruit' },
  { value: 'carrot', label: 'Carrot', category: 'Vegetable' },
  { value: 'potato', label: 'Potato', category: 'Vegetable' },
  // Add more options as needed
];

// Custom Option component to create a multi-column layout
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{props.data.label}</span>
        <span style={{ marginLeft: '20px', opacity: 0.7 }}>{props.data.category}</span>
      </div>
    </components.Option>
  );
};

function MultiColumnSelect() {
  return (
    <Select
      options={options}
      components={{ Option: CustomOption }} // Use custom Option component
      placeholder="Select an item..."
      styles={{
        option: (provided) => ({
          ...provided,
          display: 'flex',
          justifyContent: 'space-between',
        }),
        menu: (provided) => ({
          ...provided,
          minWidth: '300px', // Adjust width as needed
        }),
      }}
    />
  );
}

export default MultiColumnSelect;
