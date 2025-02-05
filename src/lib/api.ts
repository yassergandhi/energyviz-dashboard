import { DataPoint } from './types/dashboard';

export const fetchEnergyData = async (): Promise<DataPoint[]> => {
  // Simulación de llamada a API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { timestamp: '00:00', value: 400 },
        { timestamp: '03:00', value: 300 },
        { timestamp: '06:00', value: 600 },
        { timestamp: '09:00', value: 800 },
        { timestamp: '12:00', value: 500 },
      ]);
    }, 1000);
  });
};
