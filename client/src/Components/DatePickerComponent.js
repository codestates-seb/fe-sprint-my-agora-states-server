import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref}>
      {value ? value : "Date"}
    </button>
  ));

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        customInput={<CustomInput />}
      />
      {selectedDate && (
        <p>
          {selectedDate.toISOString().split("T")[0]}에 작성된 글을 검색합니다.
        </p>
      )}
    </div>
  );
};

export default DatePickerComponent;
