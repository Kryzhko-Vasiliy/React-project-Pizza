import React from 'react';
import { useState } from 'react';

export default function Categories({ items, onClick }) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    return (
        <div>
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {items.map((name, index) => (
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
