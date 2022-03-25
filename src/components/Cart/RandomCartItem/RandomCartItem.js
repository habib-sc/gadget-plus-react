import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const RandomCartItem = (props) => {
    const { randomCartItem } = props;
    return (
        <div>
            {Object.keys(randomCartItem).length > 0 &&
                <div className='cart-item'>
                    <img src={randomCartItem?.image} alt="img" />
                    <h4>{randomCartItem?.name}</h4>
                    <button>
                        <TrashIcon></TrashIcon>
                    </button>
                </div>
            }
        </div>
    );
};

export default RandomCartItem;