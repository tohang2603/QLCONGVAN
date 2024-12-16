import React, { useState } from 'react';
import ButtonLink from './ButtonLink'; // Assuming ButtonLink is a separate component

const ButtonSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="flex items-center justify-center w-full max-w-sm mb-8">
      <input
        type="text"
        className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
        placeholder="Nhập số công văn, mô tả hoặc tiêu đề..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <ButtonLink
        className=" px-2 py-2 ml-6 bg-blue-500 text-white rounded-lg transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-size:14px" // Adjust font-size if needed
        href={`tim-kiem-cong-van?search=${searchKeyword}`}
      >
        Tìm kiếm
      </ButtonLink>
    </div>
  );
};

export default ButtonSearch;