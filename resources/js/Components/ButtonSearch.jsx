import React, { useState } from 'react';
import ButtonLink from './ButtonLink'; // Assuming ButtonLink is a separate component

const ButtonSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div> {/* Thêm container với các class Tailwind */}
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-lg w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out text-gray-800 placeholder-gray-400"
        placeholder="Tìm kiếm số công văn, mô tả, hoặc tiêu đề..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <ButtonLink
        className=" ml-6 px1 py-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-150 ease-in-out hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        href={`tim-kiem-cong-van?search=${searchKeyword}`}
      >
        <span className="text-base">Tìm kiếm</span>
      </ButtonLink>
    </div>
  );
};

export default ButtonSearch;