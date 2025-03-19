import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { vehicles } from '../../data/fleetData';
import { Vehicle } from '../../types';

interface VehicleSelectorProps {
  error?: string;
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ error }) => {
  const { state, dispatch, calculatePricing } = useBooking();

  const handleVehicleSelect = (vehicle: Vehicle) => {
    if (vehicle.passengers < state.passengers) {
      alert(`This vehicle can only accommodate ${vehicle.passengers} passengers.`);
      return;
    }
    
    dispatch({ type: 'SET_VEHICLE', vehicle });
    calculatePricing();
  };

  // Filter available vehicles
  const availableVehicles = vehicles.filter(vehicle => vehicle.available);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">Select Vehicle</label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {availableVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            onClick={() => handleVehicleSelect(vehicle)}
            className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
              state.selectedVehicle?.id === vehicle.id 
                ? 'border-brand-red ring-2 ring-brand-red ring-opacity-50' 
                : 'border-gray-200'
            } ${
              vehicle.passengers < state.passengers ? 'opacity-50' : ''
            }`}
            role="button"
            aria-pressed={state.selectedVehicle?.id === vehicle.id}
            tabIndex={0}
            aria-label={`Select ${vehicle.name}`}
          >
            <div 
              className="h-32 bg-cover bg-center" 
              style={{ backgroundImage: `url(${vehicle.image})` }}
              aria-hidden="true"
            ></div>
            <div className="p-3">
              <h3 className="font-medium text-brand-brown">{vehicle.name}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Users className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>Max {vehicle.passengers} passengers</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Briefcase className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>From R{vehicle.pricePerDay}/day</span>
              </div>
              <div className="mt-2 text-xs text-green-600 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                <span>{vehicle.energySource}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {availableVehicles.length === 0 && (
        <p className="text-center py-4 text-gray-500">No vehicles available for the selected dates.</p>
      )}
    </div>
  );
};

export default VehicleSelector;