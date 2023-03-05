import {useState} from "react";

export const useDisclosure = (initialState = false, { onOpen, onClose } = {}) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = () => {
        setIsOpen(true);
        if (typeof onOpen === "function") {
            onOpen();
        }
    };

    const close = () => {
        setIsOpen(false);
        if (typeof onClose === "function") {
            onClose();
        }
    };

    const toggle = () => {
        isOpen ? close() : open();
    };

    return { isOpen, toggle, open, close };
};