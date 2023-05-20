import modalOverlayStyles from "./modal-overlay.module.css"
import {useModalClose} from "../../utils/hooks/useModalClose";
import {ReactNode, useRef} from "react";

interface IModalOverlayProps {
		handleClose: () => void,
		children: ReactNode | null
}

const ModalOverlay = ({children, handleClose}: IModalOverlayProps): JSX.Element => {
		const modalOverlayRef = useRef(null)

		useModalClose(modalOverlayRef, handleClose)

		return (
				<div
						ref={modalOverlayRef}
						className={modalOverlayStyles.overlay}>
						{children}
				</div>
		)
}

export default ModalOverlay