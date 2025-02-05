# EnergyViz (an Energy Visualization Dashboard)

## Overview

The EnergyViz is a web application built with Next.js and Recharts that allows users to monitor and analyze their energy consumption in real-time. The dashboard provides visual representations of energy usage over time and displays key metrics related to energy consumption.

## Features

- **Real-time Data Visualization:** Interactive charts displaying energy consumption trends.
- **Dashboard Cards:** Quick overview of current usage, battery level, and total consumption.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Mock Data Integration:** Simulated API calls to fetch energy data.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) - A React framework for server-rendered applications.
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Recharts](https://recharts.org/) - A composable charting library built on React components.
  - [Lucide React](https://lucide.dev/) - A collection of icons for React applications.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.

- **Development Tools:**
  - Node.js
  - npm
  - TypeScript

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Use

1. Clone the repository:
   ```bash
   - Replace `https://github.com/yourusername/energyviz-dashboard.git` with the actual URL of your GitHub repository.
   git clone https://github.com/yourusername/energyviz-dashboard.git
   cd energyviz-dashboard
2. Install dependencies:
   npm install
   npm run dev


## Project Structure

```
energyviz-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Main layout component
│   │   └── page.tsx         # Home page component
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── DashboardCard.tsx   # Card component for dashboard metrics
│   │   │   ├── DashboardChart.tsx   # Chart component for energy data
│   │   │   └── DashboardHeader.tsx  # Header component for the dashboard
│   │   └── ui/
│   │       └── Card.tsx          # Generic card component
│   ├── lib/
│   │   ├── types/
│   │   │   └── dashboard.ts       # TypeScript interfaces for data
│   │   ├── utils.ts               # Utility functions
│   │   └── api.ts                 # Mock API calls
│   └── styles/
│       └── globals.css            # Global styles
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project documentation
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Developer

Developed by Yasser Gandhi Hernández Esquivel (https://github.com/yassergandhi) - [My GitHub Profile](https://github.com/yassergandhi)
