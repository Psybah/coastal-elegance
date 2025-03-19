import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { useBooking } from '../../context/BookingContext';

interface DateTimePickerProps {
  type: 'pickup' | 'return';
  error?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ type, error }) => {
  const { state, dispatch } = useBooking();

  // Generate time slots in 15-minute intervals
  const generateTimeOptions = () => {
    const options = [];
    const startHour = 6; // 6 AM
    const endHour = 22; // 10 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = setHours(setMinutes(new Date(), minute), hour);
        options.push(time);
      }
    }
    
    return options;
  };

  const handleDateChange = (date: Date) => {
    if (type === 'pickup') {
      dispatch({ type: 'SET_DATE', date });
    } else {
      dispatch({ type: 'SET_RETURN_DATE', date });
    }
  };

  const handleTimeChange = (time: Date) => {
    if (type === 'pickup') {
      dispatch({ type: 'SET_TIME', time });
    } else {
      dispatch({ type: 'SET_RETURN_TIME', time });
    }
  };

  const selectedDate = type === 'pickup' ? state.date : state.returnDate;
  const selectedTime = type === 'pickup' ? state.time : state.returnTime;
  const minDate = type === 'pickup' ? new Date() : state.date;
  const maxDate = addDays(new Date(), 30);
  const label = type === 'pickup' ? 'Pickup' : 'Return';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor={`${type}-date`} className="block text-sm font-medium text-gray-700 mb-1">
          {label} Date
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
          <DatePicker
            id={`${type}-date`}
            selected={selectedDate || undefined}
            onChange={handleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            dateFormat="MMMM d, yyyy"
            placeholderText={`Select ${label.toLowerCase()} date`}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
      <div>
        <label htmlFor={`${type}-time`} className="block text-sm font-medium text-gray-700 mb-1">
          {label} Time
        </label>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
          <DatePicker
            id={`${type}-time`}
            selected={selectedTime || undefined}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            includeTimes={generateTimeOptions()}
            dateFormat="h:mm aa"
            className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholderText={`Select ${label.toLowerCase()} time`}
          />
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;