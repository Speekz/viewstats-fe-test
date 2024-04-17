import React from "react";
import ApplicationShell from "src/components/templates/ApplicationShell";
import { dashboardStats } from "../../src/lib/tests";
import StatsCards from "src/components/Atoms/StatsCard";
import LineChart from "src/components/Molecules/LineChart";

export const metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <ApplicationShell title="Dashboard">
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Last 30 days
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {dashboardStats.map((item) => (
            <StatsCards item={item} key={item.name} />
          ))}
          <LineChart />
        </dl>
      </div>
    </ApplicationShell>
  );
};

export default Dashboard;
