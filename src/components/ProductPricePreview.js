import React from 'react';
import CurrencyFormat from 'react-currency-format';
import 'styles/ProductPricePreview.sass'

const ProductPricePreview = ({price, freeShipping}) => {
    const useDecimal = !Number.isInteger(price);

    return (
        <div className='product-price-preview'>
            <div className='formatted-price' >
                <CurrencyFormat
                    value={price}
                    displayType='text'
                    thousandSeparator='.'
                    decimalSeparator=','
                    decimalScale={ useDecimal ? 2 : 0 }
                    fixedDecimalScale={ true }
                    prefix='$'
                />
            </div>
            {freeShipping &&
                <img alt='free shipping' src='/img/ic_shipping.png' />
            }
        </div>
    );
};


export default ProductPricePreview;