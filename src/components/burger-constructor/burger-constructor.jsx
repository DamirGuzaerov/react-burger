import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import burgerConstructorStyles from './burger-constructor.module.css'
import {useEffect, useState} from "react";
import ConstructorItems from "./constructor-items/constructor-items";

const BurgerConstructor = ({ingredients}) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(ingredients.reduce((acc, curr) => {
            console.log(acc)
            return acc + curr.price
        }, 0))
    }, [ingredients])

    return (
        <section className={burgerConstructorStyles['burger-constructor']}>
            <ol className={`${burgerConstructorStyles.list} pl-4`}>
                <li className={'pl-8'}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
                    />
                </li>
                <li className={`${burgerConstructorStyles['sub-list']}`}>
                    <ConstructorItems ingredients={ingredients}/>
                </li>
                <li className={'pl-8'}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
                    />
                </li>
            </ol>
            <div className={`${burgerConstructorStyles.order} pt-10`}>
                <div className={`${burgerConstructorStyles['total-price']} pr-10`}>
                    <span className={'text text_type_digits-medium pr-1'}>
                        {totalPrice}
                    </span>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <Button htmlType="button" type="primary" size="medium">
                <span className={'text text_type_main-default'}>
                    Оформить заказ
                </span>
                </Button>
            </div>
        </section>)
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "price": PropTypes.number.isRequired,
        "image": PropTypes.string.isRequired,
    }))
}

export default BurgerConstructor