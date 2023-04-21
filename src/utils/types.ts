export interface IDraggable {
		index: number
}

export interface IIngredient {
		"_id": string,
		"name": string,
		"type":string,
		"proteins": number,
		"fat": number,
		"carbohydrates": number,
		"calories": number,
		"price": number,
		"image": string,
		"image_mobile": string,
		"image_large": string,
		"__v": number,
}
export interface IConstructorIngredient extends IIngredient{

		'key': string
}

export interface IOrderDetails {
		order: {
				number: number
		}
}

export interface IUser {
	email: string;
	name: string;
	password?: string;
}