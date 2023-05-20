import {CountedElement, OrderStatus} from "./types";

export function getOrderStatusText(status: OrderStatus): { text: string, color: string } {
		switch(status) {
				case OrderStatus.done:
						return {
								text: 'Выполнен',
								color: 'success',
						};
				case OrderStatus.failed:
						return {
								text: 'Отменено',
								color: 'error',
						};
				default:
						return {
								text: 'Неизвестный статус',
								color: 'default',
						};
		}
}

export function compressArray<T>(array: T[]): CountedElement<T>[] {
		let compressedArray: CountedElement<T>[] = [];

		array.forEach(element => {
				const index = compressedArray.findIndex(item => item.value === element);
				if (index === -1) {
						compressedArray.push({ value: element, count: 1 });
				} else {
						compressedArray[index].count++;
				}
		});

		return compressedArray;
}
