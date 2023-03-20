import orderDetailsStyles from './order-details.module.css'
import orderAcceptedImage from '../../images/orderAcceptedImage.png'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clearConstructor} from "../../services/slices/constructor";

const OrderDetails = () => {
    const orderDetails = useSelector(state => state.order.orderDetails)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(orderDetails)
            dispatch(clearConstructor())
    },[dispatch, orderDetails])
    return (
        <div className={orderDetailsStyles.container}>
            <h1 className={`${orderDetailsStyles['order-id']} text text_type_digits-large mb-8 pt-4`}>{orderDetails && orderDetails.order.number}</h1>
            <span className={'text text_type_main-default'}>Идентификатор заказа</span>
            <img
                className={'pt-15 mb-15'}
                src={orderAcceptedImage}
                alt="Order accepted"/>
            <span className={'text text_type_main-small mb-2'}>Ваш заказ начали готовить</span>
            <span className={'text  text_type_main-small text_color_inactive mb-15'}>Дождитесь готовности на орбитальной станции</span>
        </div>
    )
}

export default OrderDetails