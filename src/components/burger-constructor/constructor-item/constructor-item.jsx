import {useDispatch} from "react-redux";
import {deleteIngredient} from "../../../services/slices/constructor";
import constructorItemStyles from "./constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientType} from "../../../utils/types";
import {useDrag, useDrop} from "react-dnd";
import {useRef} from "react";

const ConstructorItem = ({ingredient, index, handleMove}) => {
    const dispatch = useDispatch()
    const ref = useRef()
    const [, dropRef] = useDrop({
        accept: 'sortable-ingredient',
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            handleMove(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [{isDragging}, dragRef] = useDrag({
        type: 'sortable-ingredient',
        item: {...ingredient, index: index},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })


    const handleClose = (key) => {
        dispatch(deleteIngredient(key))
    }
    return (
        <div className={constructorItemStyles.item} ref={dragRef(dropRef(ref))}>
            {
                !isDragging && <>
                    <div className={`${constructorItemStyles.icon} mr-2`}>
                        <DragIcon type="primary"/>
                    </div>
                    <ConstructorElement
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                        handleClose={() => handleClose(ingredient.key)}
                    />
                </>
            }
        </div>
    )
}


ConstructorItem.propTypes = {
    ingredient: PropTypes.shape(ingredientType).isRequired,
    index: PropTypes.number,
    handleMove: PropTypes.func
}

export default ConstructorItem
