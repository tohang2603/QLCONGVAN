// File: resources/js/Components/ButtonSearch.jsx

import React, { useState } from 'react';
import ButtonLink from './ButtonLink';

const ButtonSearch = ({ onSearch }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearch = () => {
        onSearch(searchKeyword);
    };

    return (
        <div className="mb-8">
            <input
                type="text"
                className="p-2 border rounded mb-2"
                placeholder="Nhập số công văn, mô tả hoặc tiêu đề..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <ButtonLink className="bg-blue-500 p-5 rounded ml-4" onClick={handleSearch}>
                Tìm kiếm
            </ButtonLink>
        </div>
    );
};

export default ButtonSearch;
