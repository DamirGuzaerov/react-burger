import {useDispatch} from "react-redux";
import {deleteIngredient} from "../../../services/slices/constructor/constructor";
import constructorItemStyles from "./constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IConstructorIngredient, IDraggable} from "../../../utils/types";
import {useDrag, useDrop} from "react-dnd";
import {useRef} from "react";

interface IConstructorItemProps {
		ingredient: IConstructorIngredient,
		index: number,
		handleMove: (fromIndex: number, toIndex: number) => void
}

const ConstructorItem = ({ingredient, index, handleMove}: IConstructorItemProps): JSX.Element => {
		const dispatch = useDispatch()
		const ref = useRef<HTMLDivElement>(null)

		const [{isDragging}, dragRef] = useDrag({
				type: 'sortable-ingredient',
				item: {...ingredient, index: index},
				collect: monitor => ({
						isDragging: monitor.isDragging(),
				})
		})

		const [, dropRef] = useDrop({
				accept: 'sortable-ingredient',
				hover(item: IDraggable, monitor) {
						if (!ref.current) return;
						const dragIndex = item.index
						const hoverIndex = index
						if (dragIndex === hoverIndex) return;

						const hoverBoundingRect = ref.current?.getBoundingClientRect()
						const hoverMiddleY =
								(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
						const clientOffset = monitor.getClientOffset()
						const hoverClientY = clientOffset!.y - hoverBoundingRect.top
						if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

						if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

						handleMove(dragIndex, hoverIndex)
						item.index = hoverIndex
				},
		})

		const handleClose = (key: string) => {
				dispatch(deleteIngredient(key))
		}

		dragRef(dropRef(ref));

		return (
				<div className={constructorItemStyles.item} ref={ref}>
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

export default ConstructorItem
