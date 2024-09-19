import Image from 'next/image';
import React from 'react';

const UserCards = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-schoolFitPurple even: bg-schoolFitYellow p-4 flex-1  w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          19/09/2024
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">12,341</h1>
      <h2 className="capitalize text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCards;
