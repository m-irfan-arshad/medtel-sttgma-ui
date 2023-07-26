"use client"
import React, { useState } from 'react';
import FractureLocationSelect from './FractureLocationSelect';
import FractureTypeSelect from './FractureTypeSelect';

export default function FractureForm() {
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div>
      <FractureLocationSelect onSelect={setSelectedLocation} />
      <FractureTypeSelect selectedLocation={selectedLocation} />
    </div>
  );
}
