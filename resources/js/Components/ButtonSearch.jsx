import React, { useState } from 'react';
import ButtonIcon from './ButtonIcon';
import { router } from '@inertiajs/react';
const ButtonSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className='grid grid-cols-6'> {/* Thêm container với các class Tailwind */}
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-lg col-span-5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out text-gray-800 placeholder-gray-400"
        placeholder="Tìm kiếm số công văn, mô tả, hoặc tiêu đề..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <ButtonIcon
        className=" ml-6 px1 py-0 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        onClick={() => router.get(`tim-kiem-cong-van?search=${searchKeyword}`)}
      >
        <ion-icon name="search-outline"></ion-icon>
      </ButtonIcon>
    </div>
  );
};

export default ButtonSearch;