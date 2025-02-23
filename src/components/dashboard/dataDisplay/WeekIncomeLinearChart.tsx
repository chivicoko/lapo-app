"use client";

import ButtonNeutral from '@/components/button/ButtonNeutral';
import { ChartData } from '@/utils/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';


interface WeekIncomeLinearChartProps {
  data: ChartData[];
}

const WeekIncomeLinearChart: React.FC<WeekIncomeLinearChartProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChartExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${isExpanded ? 'fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-2 z-50' : 'w-full h-[17rem] bg-white rounded-radius-12 py-2 px-3'} transition-all duration-300 ease-in-out`}>
      <div className={`${isExpanded ? 'bg-white w-[95%] h-[97%] md:w-[80%] md:h-[90%] p-4 sm:p-7 md:p-10 rounded-xl' : 'w-full h-full'} `}>
        <div className="flex items-center justify-between gap-4">
          <h3 className='text-textGrayDarker pt-2 pb-4'>This Week&apos;s Income</h3>
          {!isExpanded ?
            <ButtonNeutral
              classes='rounded-radius-4'
              onClick={toggleChartExpansion}
              icon1={<div className="relative size-[20px]"><Image src="/icons/maximize-2.svg" fill alt="expansion icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>}
            />
            :
            <button onClick={toggleChartExpansion} title='Reduce to normal screen view' className="p-2 rounded-full text-3xl hover:text-red-700 transform hover:rotate-90 transition-all duration-300 ease-in-out">
              &times;
            </button>
          }
        </div>
        
        <div className="relative w-full h-full flex items-center justify-center pb-4">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={data}>
              <XAxis dataKey="Day" tick={{ fontSize: 12, fill: '#072635' }} axisLine={{ stroke: '#e2e2e2' }} tickLine={{ stroke: 'transparent' }} />
              <YAxis tick={{ fontSize: 12, fill: '#072635' }} axisLine={{ stroke: 'transparent' }} tickLine={{ stroke: 'transparent' }} />
              <CartesianGrid vertical={false} stroke="#e5e7eb" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Income"
                stroke="#4DAF01"
                strokeWidth={2}
                dot={<Dot fill="#8C6FE6" />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
};

export default WeekIncomeLinearChart;
