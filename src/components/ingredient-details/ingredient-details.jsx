import ingredientDetailsStyles from './ingredient-details.module.css'
import {ingredientType} from "../../utils/types";
import IngredientDetail from "./ingredient-detail/ingredient-detail";

const IngredientDetails = ({ingredient}) => {
    return (
        <div className={ingredientDetailsStyles.container}>
            <img
                src={ingredient.image_large}
                alt={ingredient.name}
                className={'mb-2'}
            />
            <h2 className={'text text_type_main-medium mb-8'}>
                {ingredient.name}
            </h2>
            <ul className={ingredientDetailsStyles['ingredient-details']}>
                <li className={ingredientDetailsStyles['ingredient-detail']}>
                    <IngredientDetail title={'Калории, калл'} value={ingredient.calories}/>
                </li>
                <li className={ingredientDetailsStyles['ingredient-detail']}>
                    <IngredientDetail title={'Белки,г'} value={ingredient.proteins}/>
                </li>
                <li className={ingredientDetailsStyles['ingredient-detail']}>
                    <IngredientDetail title={'Жиры,г'} value={ingredient.fat}/>
                </li>
                <li className={ingredientDetailsStyles['ingredient-detail']}>
                    <IngredientDetail title={'Углеводы,г'} value={ingredient.carbohydrates}/>
                </li>
            </ul>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredient: ingredientType
}

export default IngredientDetails