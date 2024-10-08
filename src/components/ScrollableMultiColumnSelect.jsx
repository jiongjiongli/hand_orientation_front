import React, {useState} from 'react';
import Select, { components } from 'react-select';
import './ScrollableMultiColumnSelect.css'; // Import the CSS file for styling


const getSubstring = (input, seperator) => {
  // Find the position of the first seperator
  const dotIndex = input.indexOf(seperator);

  // If seperator is found, extract substring up to that point
  if (dotIndex !== -1) {
    return input.slice(0, dotIndex);
  }

  // If no seperator is found, return the original string
  return input;
};

// Custom Option component to create a multi-column layout
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div className="option-container">
        <span>{props.data.step}</span>
        <span>{getSubstring(props.data.start_time, '.')}</span>
        <span>{getSubstring(props.data.end_time, '.')}</span>
      </div>
    </components.Option>
  );
};

// Custom MenuList component to make the menu always visible
const CustomMenuList = (props) => {
  return (
    <components.MenuList {...props} className="menu-list">
      {props.children}
    </components.MenuList>
  );
};

function EmptyComponent() {
    return <></>;
}

function ScrollableMultiColumnSelect( {options, handleChange} ) {
  const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option
  const handleSelectChange = (option) => {
    setSelectedOption(option); // Update state with the selected option
    handleChange(option); // Call parent handler if needed
  };

  return (
    <div style={{
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}>
        <h3>Topics</h3>
        <div className="option-container option-header">
          <span>{'Topic'}</span>
          <span>{'Start Time'}</span>
          <span>{'End Time'}</span>
        </div>

        <div style={{
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          // border: '1px solid red',
          boxSizing: 'border-box',
          margin: '0',
          padding: '0',
        }}>
          <Select
            options={options}
            value={selectedOption} // Pass the selected option
            onChange={handleSelectChange}
            maxMenuHeight={207}
            minMenuHeight={207}
            noOptionsMessage={() => 'No options available'} // Custom message
            isMulti={false}
            isSearchable={false} // Disable search bar
            menuIsOpen={true} // Keep the menu always open
            menuShouldScrollIntoView={false}
            // components={{ Option: CustomOption, MenuList: CustomMenuList }} // Use custom Option component
            // components={{ Option: CustomOption}}
            components={{
              Option: CustomOption,
              Control: EmptyComponent
            }} // Use custom Option component
            placeholder={"Select an item..."}
            styles={{
              menu: (provided, state) => ({
                 ...provided,
                 marginTop: 0,
                 marginBottom: 0,
              }),
            }}
          />
        </div>

    </div>
  );
}

export default ScrollableMultiColumnSelect;
