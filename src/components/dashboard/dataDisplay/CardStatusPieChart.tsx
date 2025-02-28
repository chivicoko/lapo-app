'use client';

import { CardStatusDistribution, PIE_COLORS } from '@/utils/data';
import React, { useState, useEffect } from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';

const CardStatusPieChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className='pt-1'>
      <div className="flex items-center justify-between gap-4">
        <h3 className='text-textGrayDarker'>Card Status Distribution</h3>
      </div>
      
      <div className="relative flex items-center justify-center gap-6 pt-3 pb-1">
        <PieChart width={300} height={250}>
          <Pie
            data={CardStatusDistribution}
            innerRadius={80}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="cards"
          >
            {CardStatusDistribution.map((entry, index) => (
              <Cell key={`cell-${entry.id || index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>

        <div className="absolute top-[130px] -translate-y-1/2 left-1/2 -translate-x-1/2">
          <p className='text-textGray text-sm'>Total Cards</p>
          <p className='text-textGrayDarker text-3xl'>2,450</p>
        </div>
      </div>
    </div>
  );
};

export default CardStatusPieChart;
