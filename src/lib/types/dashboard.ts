export interface DataPoint {
  timestamp: string;
  value: number;
}

export interface ChartData {
  data: DataPoint[];
  title: string;
}

export interface CardData {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
}
