import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from './burger-constructor.module.css'
import {useMemo} from "react";
import ConstructorItems from "./constructor-items/constructor-items";
import Modal from "../modal/modal";
import OrderDetails from "../order/order-details/order-details";
import {useDisclosure} from "../../utils/hooks/useDisclosure";
import ripple from '../../images/ripple.svg'
import loader from '../../images/loader.svg'
import {useDrop} from "react-dnd";
import {addIngredient} from "../../services/slices/constructor/constructor";
import {addOrder} from "../../services/thunks/order/order";
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";

const BurgerConstructor = (): JSX.Element => {
		const {bun, ingredients} = useAppSelector(state => state.burgerConstructor)
		const {requested, failed} = useAppSelector(state => state.orderDetails)
		const dispatch = useAppDispatch()
		const {isOpen, open, close} = useDisclosure(false)
		const handleClick = () => {
				if (bun === null) {
						return
				}
				dispatch(addOrder({bun: bun, ingredients: ingredients}))
				open()
		}

		const totalPrice = useMemo(() => {
				return ingredients.reduce((acc, curr) => {
						return acc + curr.price
				}, bun ? 2 * bun.price : 0)
		}, [ingredients, bun])

		const [{isOver}, dropRef] = useDrop({
				accept: 'ingredient',
				collect: (monitor) => ({
						isOver: monitor.isOver()
				}),
				drop(item) {
						dispatch(addIngredient(item))
				}
		})

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
										<li className={`${burgerConstructorStyles['sub-list']} ${isOver ? burgerConstructorStyles['drag-over'] : ''}`}>
												<ConstructorItems/>
										</li>
										<li className={'pl-8'}>
												{bun ? <ConstructorElement
														type="bottom"
														isLocked={true}
														text={`${bun.name} (низ)`}
														price={bun.price}
														thumbnail={`${bun.image}`}
												/> : <ConstructorElement
														type="bottom"
														isLocked={true}
														price={0}
														text={'Перетащите булочку сюда (низ)'}
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
												disabled={requested}
												onClick={handleClick}
										>
                <span className={'text text_type_main-default'}>
                    Оформить заказ
                </span>
												{requested &&
                            <img className={'button-loader pl-10'} src={loader} alt="loading..."/>}
										</Button>
								</div>
								{failed && <p className={'text text_color_error text_type_main-default'}>Ошибка в заказе</p>}
						</section>
						{isOpen && requested &&
                <Modal
                    onClose={close}>
                    <OrderDetails/>
                </Modal>}
				</>
		)
}

export default BurgerConstructor