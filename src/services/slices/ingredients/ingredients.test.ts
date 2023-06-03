import reducer, {IIngredientsSlice} from './ingredients'
import {getBurgerIngredients} from "../../thunks/ingredients/ingredients";
import {ingredientsMock} from "../../../mocks/ingredients-mock";

describe('Redux ingredients reducer', () => {
		const initialState: IIngredientsSlice = {
				ingredients: [],
				ingredientsRequested: false,
				ingredientsSucceed: false,
				ingredientsFailed: false,
		}

		it('should set fetching true when ingredient list is pending', function () {
				const action = {type: getBurgerIngredients.pending.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, ingredientsRequested: true});
		});

		it('should set fetching false and success when ingredient list is fulfilled', function () {
				const action = {type: getBurgerIngredients.fulfilled.type, payload: {data: ingredientsMock}};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, ingredients: ingredientsMock, ingredientsRequested: false, ingredientsSucceed: true});
		});

		it('should set fetching false and failed true when ingredient list is rejected', function () {
				const action = {type: getBurgerIngredients.rejected.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, ingredientsRequested: false, ingredientsFailed: true});
		});
})