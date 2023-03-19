import {BUNS_COUNT} from "../../utils/constants";

export const getItemsCount = (state, props) =>
    props.type === 'bun' ?
        state.burger_constructor.bun && state.burger_constructor.bun._id === props.id ?
            BUNS_COUNT :
            null :
        state.burger_constructor.ingredients.filter(el => el._id === props.id).length