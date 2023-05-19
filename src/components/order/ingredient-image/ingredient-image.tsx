import styles from "./ingredient-image.module.css";
import {ImgHTMLAttributes} from "react";

interface IIngredientImageProps extends ImgHTMLAttributes<HTMLImageElement> {
		opacity?: number,
		remaining?: number,
		src: string
}

export const IngredientImage = ({opacity = 1, remaining = 0, src, ...props}: IIngredientImageProps) => {
		return (
				<>
						{remaining > 0 && <span
                className={`${styles['ingredients-counter']} text text_type_main-default`}>+{remaining}
						</span>}
						<img className={`${styles.image} ${styles['image-last']}`} {...props} src={src} style={{opacity: opacity}} alt={'ingredientImage'}/>
				</>
		)
}