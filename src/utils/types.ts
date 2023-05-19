export interface IStringParams {
		[key: string]: string | undefined;
}
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

export interface IOrder {
		ingredients: string[],
		_id: string,
		status: string,
		number: number,
		createdAt: string,
		updatedAt: string
}

export interface IUser extends IStringParams{
	email: string;
	name: string | undefined;
	password: string | undefined;
}

