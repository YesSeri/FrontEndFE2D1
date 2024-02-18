import React, { useState } from 'react';

function BasketItem({ item, onQuantityChange, onGiftWrapChange, onRecurringOrderChange, onRemove }) {
    const [quantity, setQuantity] = useState(item.quantity);
    const [giftWrap, setGiftWrap] = useState(false);
    const [recurringOrder, setRecurringOrder] = useState('none');
    const [showRecurringOptions, setShowRecurringOptions] = useState(false);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        onQuantityChange(item.id, newQuantity);
    };

    const handleRemove = () => {
        onRemove(item.id);
    };

    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        handleQuantityChange(newQuantity);
    };

    const decrementQuantity = () => {
        const newQuantity = quantity - 1 > 0 ? quantity - 1 : 0;
        handleQuantityChange(newQuantity);
    };

    const toggleGiftWrap = () => {
        setGiftWrap(!giftWrap);
        onGiftWrapChange(!giftWrap);
    };

    const toggleRecurringOptions = () => {
        setShowRecurringOptions(!showRecurringOptions);
        let a;
        if (showRecurringOptions) {
            a = setRecurringOrder('none');
        }
        setRecurringOrder(a)
    };

    const handleRecurringOrderChange = (e) => {
        setRecurringOrder(e.target.value);
    };


    return (
        <div className="basket-item">
            <div className="basket-item-details">
                <div className="item-name-and-quantity">
                    <p className="basket-item-name">{item.name}</p>
                    <div className="quantity-control">
                        <button onClick={decrementQuantity}>-</button>
                        <input
                            type="number"
                            min="0"
                            value={quantity}
                            onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 0)}
                        />
                        <button onClick={incrementQuantity}>+</button>

                    </div>

                </div>
                <p className="item-price">{item.price * quantity},-</p>
            </div>
            <div className="basket-item-options">
                <div className="item-options">
                    <label className="gift-wrap">
                        <input
                            type="checkbox"
                            checked={giftWrap}
                            onChange={toggleGiftWrap}
                        />
                        Gift Wrap?
                    </label>
                </div>
                <label>
                    <input
                        type="checkbox"
                        checked={showRecurringOptions}
                        onChange={toggleRecurringOptions}
                    />
                    Recurring Order
                </label>
                {showRecurringOptions && (
                    <select value={recurringOrder} onChange={handleRecurringOrderChange}>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Biweekly</option>
                    </select>
                )}
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default BasketItem;