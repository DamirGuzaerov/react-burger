import PropTypes from "prop-types";
import ingredientDetailStyles from "./ingredient-detail.module.css";

const IngredientDetail = ({title, value}) => {
    return (
        <div className={`${ingredientDetailStyles['ingredient-detail']} text_color_inactive`}>
            <span className={'text text_type_main-default'} title={title}>{title}</span>
            <span className={'text text_type_digits-default'}>{value}</span>
        </div>
    )
}

IngredientDetail.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
}

export default IngredientDetail