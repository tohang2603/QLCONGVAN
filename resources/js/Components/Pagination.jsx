import React from 'react';
import { InertiaLink } from '@inertiajs/react';

const Pagination = ({ links }) => {
    if (!links || links.length <= 3) {
        return null; // Không hiển thị phân trang nếu chỉ có trang hiện tại và trang đầu/cuối
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                {links.map((link, index) => (
                    <li key={index} className={`page-item ${link.active ? 'active' : ''} ${link.url === null ? 'disabled' : ''}`}>
                        {link.url ? (
                            <InertiaLink href={link.url} className="page-link">
                                {link.label === '&laquo;' ? 'Previous' : (link.label === '&raquo;' ? 'Next' : link.label)}
                            </InertiaLink>
                        ) : (
                            <span className="page-link">
                                {link.label === '&laquo;' ? 'Previous' : (link.label === '&raquo;' ? 'Next' : link.label)}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;