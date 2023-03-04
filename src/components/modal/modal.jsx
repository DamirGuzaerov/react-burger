import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from './modal.module.css'

const modalRoot = document.getElementById("react-modals");
const Modal = ({title, isOpen, handleClose, children}) => {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);

        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    return (
        <>
            {
                isOpen && ReactDOM.createPortal(
                    <ModalOverlay
                        handleClose={handleClose}>
                        <div className={modalStyles['modal-wrapper']}>
                            <header className={modalStyles.header}>
                                <h2 className={'text text_type_main-large'}>
                                    {title}
                                </h2>
                                <div className={modalStyles['close-icon']}>
                                    <CloseIcon type="primary" onClick={handleClose}/>
                                </div>
                            </header>
                            {children}
                        </div>
                    </ModalOverlay>
                    , modalRoot)
            }
        </>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    handleClose: PropTypes.func,
}
export default Modal
