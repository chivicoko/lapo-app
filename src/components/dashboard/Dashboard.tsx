import Image from 'next/image';
import React from 'react'
import Metrics from './Metrics';
import MonthlyIssuanceBarChart from './dataDisplay/MonthlyIssuanceBarChart';
import WeekIncomeLinearChart from './dataDisplay/WeekIncomeLinearChart';
import RecentCardRequestList from './dataDisplay/RecentCardRequestList';
import CardStatusPieChart from './dataDisplay/CardStatusPieChart';
import { WeeksIncome } from '@/utils/data';
import QuickAccessCards from './QuickAccessCards';

const Dashboard = () => {
  return (
    <div className='h-full min-h-full'>
        <div className="flex items-start justify-between gap-4 flex-wrap py-2">
            <div className="flex flex-col text-textGrayDarker gap-1">
                <h2 className='font-semibold'>Hi Nazeer, what would you like to do today?</h2>
                <p className='text-xs'>Last login: 26/11/2024  14:39:58</p>
            </div>
            <button className='border rounded-radius-4 border-customGray text-textGray text-sm py-1 px-3 flex items-center gap-1'>
                <span className="relative size-[14px]">
                    <Image
                        src="/icons/calendar.svg"
                        alt="bell icon"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </span>
                <span>Today</span>
                <span>|</span>
                <span>11 Nov 2024</span>
            </button>
        </div>

        <div className="py-3 px-4 bg-white border border-customGray rounded-radius-8">
            <h4 className='pb-1'>Your Quick Access</h4>
            <QuickAccessCards />
        </div>

        <div>
            <h2 className='font-semibold text-textGrayDarker py-3'>Analytics</h2>
            <Metrics />
        </div>

        <div className="flex items-start flex-col sm:flex-row gap-x-3 flex-wrap py-3">
            <div className="flex-1 w-full space-y-3 py-3">
                <div className='rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
                    <MonthlyIssuanceBarChart/>
                </div>
                <div className='rounded-radius-12 bg-white border border-customGray'>
                    <WeekIncomeLinearChart data={WeeksIncome} />
                </div>
            </div>
            <div className="flex-1 w-full space-y-3 py-3">
                <div className='rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
                    <RecentCardRequestList />
                </div>
                <div className='w-full rounded-radius-12 py-2 px-3 bg-white border border-customGray'>
                    <CardStatusPieChart />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard;