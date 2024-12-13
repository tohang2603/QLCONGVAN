import React, { useState } from 'react';
import ButtonLink from './ButtonLink';

const ButtonSearch = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    return (
        <div className="mb-8">
            <input
                type="text"
                className="p-2 border rounded mb-2"
                placeholder="Nhập số công văn, mô tả hoặc tiêu đề..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <ButtonLink className="bg-blue-500 p-5 rounded ml-4" href={`tim-kiem-cong-van?search=${searchKeyword}`}>
                Tìm kiếm
            </ButtonLink>
        </div>
    );
};

export default ButtonSearch;
