import { BasketItemProps, RecurringOrder } from "../types/Types"
import { GiftSvg } from "../assets/GiftSvg";


export default function CustomerItem({ item, onGiftWrapChange, onRecurringOrderChange, onQuantityChange, onRemove }: BasketItemProps) {


	return (
		<tr key={item.id}>
			<td align="right">
				{item.name}
			</td>
			<td>{item.price},-</td>
			<td>
				<button className="dec-button"
					onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
				{item.quantity}
				<button className="dec-button" onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
			</td>
			<td>{item.price * item.quantity},-</td>
			<td className="options-cell">

				<label htmlFor={"gift-" + item.id}>
					<GiftSvg isToggled={item.giftWrap} />
					<input
						id={"gift-" + item.id}
						type="checkbox"
						onClick={() => onGiftWrapChange(item.id)}
					/>

				</label>

				<select value={item.recurringOrder} onChange={(e) => onRecurringOrderChange(item.id, parseInt(e.target.value) as RecurringOrder)}>
					<option value={RecurringOrder.Once}>Once</option>
					<option value={RecurringOrder.Daily}>Daily</option>
					<option value={RecurringOrder.Weekly}>Weekly</option>
					<option value={RecurringOrder.Biweekly}>Biweekly</option>
				</select>
				<button onClick={onRemove}>X</button>
			</td>

		</tr >
	);
}
