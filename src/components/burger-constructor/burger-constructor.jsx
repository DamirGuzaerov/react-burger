import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import burgerConstructorStyles from './burger-constructor.module.css'
import {useEffect, useState} from "react";
import ConstructorItems from "./constructor-items/constructor-items";
import {ingredientType} from "../../utils/types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useDisclosure} from "../../utils/hooks/useDisclosure";
import {useDispatch, useSelector} from "react-redux";
import ripple from '../../images/ripple.svg'
import {useDrop} from "react-dnd";
import {addIngredient} from "../../services/slices/constructor";

const BurgerConstructor = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const {isOpen, open, close} = useDisclosure(false)
    const {bun, ingredients} = useSelector(state => state.burger_constructor)
    const dispatch = useDispatch()

    const [{isOver},dropRef] = useDrop({
        accept: 'ingredient',
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        drop(item){
            dispatch(addIngredient(item))
        }
    })

    useEffect(() => {
        setTotalPrice(ingredients.reduce((acc, curr) => {
            return acc + curr.price
        }, 0))
    }, [ingredients])

    return (
        <>
            <section
                ref={dropRef}
                className={burgerConstructorStyles['burger-constructor']}>
                <ol className={`${burgerConstructorStyles.list} pl-4`}>
                    <li className={'pl-8'}>
                        {bun ? <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={`${bun.image}`}
                        /> : <ConstructorElement
                            type="top"
                            isLocked={true}
                            price={0}
                            text={'Перетащите булочку сюда (верх)'}
                            thumbnail={ripple}/>}
                    </li>
                    <li className={`${burgerConstructorStyles['sub-list']} ${isOver? burgerConstructorStyles['drag-over']: ''}`}>
                        <ConstructorItems ingredients={ingredients.filter(el => el.type !== 'bun')}/>
                    </li>
                    <li className={'pl-8'}>
                        {bun ? <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={`${bun.image}`}
                        /> : <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            price={0}
                            text={'Перетащите булочку сюда (верх)'}
                            thumbnail={ripple}/>}
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