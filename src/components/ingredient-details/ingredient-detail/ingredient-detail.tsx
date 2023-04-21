import ingredientDetailStyles from "./ingredient-detail.module.css";

interface IIngredientDetailProps {
    title: string,
    value: number
}
const IngredientDetail = ({title, value}: IIngredientDetailProps): JSX.Element => {
    return (
        <div className={`${ingredientDetailStyles['ingredient-detail']} text_color_inactive`}>
            <span className={'text text_type_main-default'} title={title}>{title}</span>
            <span className={'text text_type_digits-default'}>{value}</span>
        </div>
    )
}

export default IngredientDetail