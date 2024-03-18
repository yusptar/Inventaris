import React from "react";
import { Card, Typography } from "@material-tailwind/react";

interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <Card placeholder color="transparent" shadow={false} className="items-center">
      <Icon className="h-7 w-7 text-gray-900" />
      <Typography placeholder variant="h1" color="blue-gray" className="mb-2 mt-4 text-5xl">
        {count}
      </Typography>
      <Typography placeholder variant="h6" className="mb-2 font-normal text-blue-gray-500">
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;
