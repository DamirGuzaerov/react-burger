import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {ReactNode, useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from './modal.module.css'

interface IModalProps {
		title?: ReactNode,
		onClose: () => void,
		children: ReactNode | null
}

const modalRoot = document.getElementById("react-modals") as Element;
const Modal = ({title, onClose, children}: IModalProps): JSX.Element => {
		useEffect(() => {
				const closeOnEscapeKey = (e: KeyboardEvent) => e.key === "Escape" ? onClose() : null;
				document.body.addEventListener("keydown", closeOnEscapeKey);

				return () => {
						document.body.removeEventListener("keydown", closeOnEscapeKey);
				};
		}, [onClose]);

		return (
				ReactDOM.createPortal(
						<ModalOverlay
								handleClose={onClose}>
								<div className={modalStyles['modal-wrapper']}>
										<header className={modalStyles.header}>
												<div>
														{title}
												</div>
												<div className={modalStyles['close-icon']}>
														<CloseIcon type="primary" onClick={onClose}/>
												</div>
										</header>
										{children}
								</div>
						</ModalOverlay>
						, modalRoot)
		)
}

export default Modal
