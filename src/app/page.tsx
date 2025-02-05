import DashboardChart from '@/components/dashboard/DashboardChart';
import DashboardCard from '@/components/dashboard/DashboardCard';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Activity, Battery, Zap } from 'lucide-react';

const mockChartData = [
  { timestamp: '00:00', value: 400 },
  { timestamp: '03:00', value: 300 },
  { timestamp: '06:00', value: 600 },
  { timestamp: '09:00', value: 800 },
  { timestamp: '12:00', value: 500 },
  { timestamp: '15:00', value: 700 },
  { timestamp: '18:00', value: 900 },
  { timestamp: '21:00', value: 600 },
];

export default function Home() {
  return (
    <main className="p-8">
      <DashboardHeader 
        title="Energy Dashboard" 
        subtitle="Monitor your energy consumption in real-time"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard
          title="Current Usage"
          value="2.4 kW"
          icon={<Activity className="w-6 h-6" />}
          description="Real-time consumption"
        />
        <DashboardCard
          title="Battery Level"
          value="85%"
          icon={<Battery className="w-6 h-6" />}
          description="Storage capacity"
        />
        <DashboardCard
          title="Total Consumption"
          value="45.2 kWh"
          icon={<Zap className="w-6 h-6" />}
          description="Today's usage"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <DashboardChart 
          data={mockChartData}
          title="Energy Consumption Over Time"
        />
      </div>
    </main>
  );
}
