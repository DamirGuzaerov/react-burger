import ingredientDetailsStyles from './ingredient-details.module.css'
import IngredientDetail from "./ingredient-detail/ingredient-detail";
import {useParams} from "react-router-dom";
import {getIngredientById} from "../../services/selectors/ingredients";
import {useAppSelector} from "../../utils/hooks/useAppSelector";

const IngredientDetails = (): JSX.Element => {
    const {id} = useParams()
    const ingredient = useAppSelector(state => getIngredientById(state, id))
    return (
        <div>
            {ingredient && (<div className={`${ingredientDetailsStyles.container}`}>
                <img
                    src={ingredient.image_large}
                    alt={ingredient.name}
                    className={'mb-2'}
                />
                <h2 className={'text text_type_main-medium mb-8'} data-testid='ingredient_details-name'>
                    {ingredient.name}
                </h2>
                <ul className={ingredientDetailsStyles['ingredient-details']}>
                    <li className={ingredientDetailsStyles['ingredient-detail']} data-testid='ingredient_details-calories'>
                        <IngredientDetail title={'Калории,калл'} value={ingredient.calories}/>
                    </li>
                    <li className={ingredientDetailsStyles['ingredient-detail']} data-testid='ingredient_details-proteins'>
                        <IngredientDetail title={'Белки,г'} value={ingredient.proteins}  />
                    </li>
                    <li className={ingredientDetailsStyles['ingredient-detail']} data-testid='ingredient_details-fat'>
                        <IngredientDetail title={'Жиры,г'} value={ingredient.fat}  />
                    </li>
                    <li className={ingredientDetailsStyles['ingredient-detail']} data-testid='ingredient_details-carbohydrates'>
                        <IngredientDetail title={'Углеводы,г'} value={ingredient.carbohydrates} />
                    </li>
                </ul>
            </div>)}
        </div>
    )
}

export default IngredientDetails