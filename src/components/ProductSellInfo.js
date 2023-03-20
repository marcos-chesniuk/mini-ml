import React from 'react';
import CurrencyFormat from 'react-currency-format';
import 'styles/ProductSellInfo.sass';

const ProductSellInfo = ({ product }) => {
    const condition = {
        'new': 'Nuevo',
        'used': 'Usado'
    };

    const useDecimal = !Number.isInteger(product.price);

    return (
        <div className='product-sell-info'>
            <div className='product-condition-ammount'>
                <span>
                    {condition[product.condition]} - {product.sold_quantity} vendidos
                </span>
            </div>
            <div className='product-title'>
                <span>
                    {product.title}
                </span>
            </div>
            <div className='product-price'>
                <CurrencyFormat
                    value={product.price}
                    displayType='text'
                    thousandSeparator='.'
                    decimalSeparator=','
                    decimalScale={ useDecimal ? 2 : 0 }
                    fixedDecimalScale={ true }
                    prefix='$'
                />
            </div>
            <button className='buy-button'>Comprar</button>
        </div>
    );
};


export default ProductSellInfo;