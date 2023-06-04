import reducer, {
		sortIngredients,
		addIngredient,
		deleteIngredient,
		clearConstructor,
		IConstructorSlice
} from './constructor'

describe('Redux constructor reducer', () => {
		const initialState: IConstructorSlice = {
				bun: null,
				ingredients: []
		}

		it('should add bun', function () {
				const testIngredient = {type: 'bun', key: '1'}
				const state = reducer(initialState, addIngredient(testIngredient));

				expect(state).toEqual({...initialState, bun: {type: 'bun', key: '1'}});
		});

		it('should add ingredients', function () {
				const testIngredient = {type: 'main', key: '1'}
				const state = reducer(initialState, addIngredient(testIngredient));

				expect(state).toEqual({...initialState, ingredients: [testIngredient]});
		});

		it('should delete ingredient', function () {
				const testIngredients = [{key: '1',}, {key: '2'}]
				const expectedIngredients = [{key: '2'}]

				const prevState = {...initialState, ingredients: testIngredients}
				const state = reducer(prevState as IConstructorSlice, deleteIngredient('1'));

				expect(state).toEqual({...initialState, ingredients: expectedIngredients});
		});

		it('should sort ingredients', function () {
				const fromIndex = 1
				const toIndex = 2

				const testIngredients = [{key: '1',}, {key: '2'}, {key: '3'}]
				const expectedIngredients = [{key: '1'}, {key: '3'}, {key: '2'}]

				const prevState = {...initialState, ingredients: testIngredients}
				const state = reducer(prevState as IConstructorSlice, sortIngredients({fromIndex, toIndex}));

				expect(state).toEqual({...initialState, ingredients: expectedIngredients});
		});

		it('should clear constructor', function () {
				const prevState = {bun: {key: '1'}, ingredients: [{key: '2',}, {key: '3'}, {key: '4'}]}

				const state = reducer(prevState as IConstructorSlice, clearConstructor());

				expect(state).toEqual({...initialState});
		});
})