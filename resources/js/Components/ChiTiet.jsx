import React from 'react';
import ChiTietCongVan from './ChiTietCongVan';

const ChiTietCongVan = () => {
    const idCongVan = 1; // Thay bằng ID thực tế (có thể lấy từ URL nếu cần)

    return (
        <div>
            <ChiTietCongVan id={idCongVan} />
        </div>
    );
};

export default ChiTietCongVan;
