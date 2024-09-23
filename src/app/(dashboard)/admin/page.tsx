import AttendanceChart from '@/components/AttendanceChart';
import CountCharts from '@/components/CountCharts';
import UserCards from '@/components/UserCards';
import React from 'react';
import FinanceChart from '@/components/FinanceChart';
import EventCalender from '@/components/EventCalender';
import Announcement from '@/components/Announcements';

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* left side  */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
        {/* middle charts  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts  */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />
          </div>
          {/* attendance chart  */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom charts  */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right  */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default page;
