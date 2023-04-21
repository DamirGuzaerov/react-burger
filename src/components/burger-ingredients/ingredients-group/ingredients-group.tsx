import {IngredientItem} from "../ingredient-item/ingredient-item";
import ingredientsGroupStyles from "./ingredients-group.module.css";
import {IIngredient} from "../../../utils/types";
import {forwardRef} from "react";

interface IIngredientGroupProps {
    title: string,
    ingredients: IIngredient[],
    elementsClick: (ingredient: IIngredient) => void
}
const IngredientsGroup = forwardRef<HTMLHeadingElement,IIngredientGroupProps>(({title, ingredients,elementsClick},forwardRef): JSX.Element => {
    return (
        <div className={`${ingredientsGroupStyles['ingredients-group']} pt-10 pb-10`}>
            <h2 className={'text text_type_main-medium'} ref={forwardRef}>
                {title}
            </h2>
            <div className={`${ingredientsGroupStyles['ingredients-list']} pl-4 pr-2 pt-6`}>
                {ingredients.map(el => {
                    return (
                        <IngredientItem
                            click={elementsClick}
                            key={el._id}
                            ingredient={el}
                        />)
                })}
            </div>
        </div>)
})

export default IngredientsGroup