import ingredientItemStyles from './ingredient-item.module.css';
import PropTypes from "prop-types";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {ingredientType} from "../../../utils/types";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import {useDisclosure} from "../../../utils/hooks/useDisclosure";

export const IngredientItem = ({ingredient}) => {
    const [count, setCount] = useState(0)
    const {isOpen, open, close} = useDisclosure(false,
        {
            onOpen: () => setCount(count + 1),
        })
    return (
        <>
            <section
                className={ingredientItemStyles['ingredient-item']}
                onClick={open}
            >
                <img
                    className={'pl-4 pr-4'}
                    src={ingredient.image}
                    alt={ingredient.name}/>
                <div className={`${ingredientItemStyles.price} pt-1 pb-1`}>
                <span className={'text text_type_main-default pr-2'}>
                    {ingredient.price}
                </span>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <span className={`${ingredientItemStyles.name} text text_type_main-small`}>
                {ingredient.name}
            </span>
                {count > 0 &&
                    <Counter count={count} size="default" extraClass={ingredientItemStyles.counter}/>
                }
            </section>
            <Modal
                title={'Детали ингредиента'}
                isOpen={isOpen}
                handleClose={close}>
                <IngredientDetails
                    ingredient={ingredient}/>
            </Modal>
        </>
    )
}

IngredientItem.propTypes = {
    ingredient: PropTypes.shape(ingredientType).isRequired
}