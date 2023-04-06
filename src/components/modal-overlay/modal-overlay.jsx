import PropTypes from "prop-types";
import modalOverlayStyles from "./modal-overlay.module.css"
import {useModalClose} from "../../utils/hooks/useModalClose";
import {useRef} from "react";

const ModalOverlay = ({children, handleClose}) => {
    const modalOverlayRef = useRef(null)

    console.log(handleClose)
    useModalClose(modalOverlayRef, handleClose)

    return (
        <div
            ref={modalOverlayRef}
            className={modalOverlayStyles.overlay}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func,
}

export default ModalOverlay