'use client'

import React, { useState, useEffect } from 'react';
import WeatherDashboard from '@/components/WeatherDashboard';

interface WeatherData {
  Date: string;
  'Max Deg.C': number;
  'Min Deg.C': number;
  'Humidity (%)': number;
  'Wind Speed (m/s)': number;
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {

    const mockData: WeatherData[] = [
      { Date: '2024-09-06', 'Max Deg.C': 33, 'Min Deg.C': 25, 'Humidity (%)': 77.1, 'Wind Speed (m/s)': 5.3 },
      { Date: '2024-09-07', 'Max Deg.C': 30, 'Min Deg.C': 25, 'Humidity (%)': 88.0, 'Wind Speed (m/s)': 3.1 },
      { Date: '2024-09-08', 'Max Deg.C': 31, 'Min Deg.C': 24, 'Humidity (%)': 85.0, 'Wind Speed (m/s)': 4.2 },
      { Date: '2024-09-09', 'Max Deg.C': 32, 'Min Deg.C': 26, 'Humidity (%)': 79.0, 'Wind Speed (m/s)': 3.8 },
      { Date: '2024-09-10', 'Max Deg.C': 29, 'Min Deg.C': 23, 'Humidity (%)': 82.0, 'Wind Speed (m/s)': 4.5 },
      { Date: '2024-09-11', 'Max Deg.C': 28, 'Min Deg.C': 22, 'Humidity (%)': 86.0, 'Wind Speed (m/s)': 3.9 },
      { Date: '2024-09-12', 'Max Deg.C': 30, 'Min Deg.C': 24, 'Humidity (%)': 80.0, 'Wind Speed (m/s)': 4.1 },
      { Date: '2024-09-13', 'Max Deg.C': 31, 'Min Deg.C': 25, 'Humidity (%)': 78.0, 'Wind Speed (m/s)': 3.7 },
    ];
    setWeatherData(mockData);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <WeatherDashboard data={weatherData} />
      </div>
    </main>
  );
}