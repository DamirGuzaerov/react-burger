import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import burgerConstructorStyles from './burger-constructor.module.css'
import {useEffect, useState} from "react";
import ConstructorItems from "./constructor-items/constructor-items";
import {ingredientType} from "../../utils/types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useDisclosure} from "../../utils/hooks/useDisclosure";
import {useSelector} from "react-redux";

const BurgerConstructor = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const {isOpen, open, close} = useDisclosure(false)
    const {bun, ingredients} = useSelector(state => state.burger_constructor)
    useEffect(() => {
        setTotalPrice(ingredients.reduce((acc, curr) => {
            return acc + curr.price
        }, 0))
    }, [ingredients])

    return (
        <>
            <section className={burgerConstructorStyles['burger-constructor']}>
                <ol className={`${burgerConstructorStyles.list} pl-4`}>
                    <li className={'pl-8'}>
                        {bun && <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={`${bun.image}`}
                        />}
                    </li>
                    <li className={`${burgerConstructorStyles['sub-list']}`}>
                        <ConstructorItems ingredients={ingredients.filter(el => el.type !== 'bun')}/>
                    </li>
                    <li className={'pl-8'}>
                        {bun && <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bun.name} (низ)`}
                            price={bun.price}
                            thumbnail={`${bun.image}`}
                        />}
                    </li>
                </ol>
                <div className={`${burgerConstructorStyles.order} pt-10`}>
                    <div className={`${burgerConstructorStyles['total-price']} pr-10`}>
                    <span className={'text text_type_digits-medium pr-1'}>
                        {totalPrice}
                    </span>
                        <CurrencyIcon type={'primary'}/>
                    </div>
                    <Button
                        htmlType="button"
                        type="primary"
                        size="medium"
                        onClick={open}
                    >
                <span className={'text text_type_main-default'}>
                    Оформить заказ
                </span>
                    </Button>
                </div>
            </section>
            {isOpen &&
                <Modal
                    handleClose={close}>
                    <OrderDetails/>
                </Modal>}
        </>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
}

export default BurgerConstructor