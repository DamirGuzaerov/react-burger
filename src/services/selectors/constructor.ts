import {BUNS_COUNT} from "../../utils/constants";
import {RootState} from "../store";

export const getItemsCount = (state: RootState, props: {id: string, type: string}) =>
    props.type === 'bun' ?
        state.burgerConstructor.bun && state.burgerConstructor.bun._id === props.id ?
            BUNS_COUNT :
            null :
        state.burgerConstructor.ingredients.filter(el => el._id === props.id).length