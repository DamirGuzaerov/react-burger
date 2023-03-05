import {useState} from "react";

export const useDisclosure = (initialState = false, { onOpen, onClose } = {}) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = (...args) => {
        setIsOpen(true);
        if (typeof onOpen === "function") {
            onOpen(...args);
        }
    };

    const close = (...args) => {
        setIsOpen(false);
        if (typeof onClose === "function") {
            onClose(...args);
        }
    };

    const toggle = () => {
        isOpen ? close() : open();
    };

    return { isOpen, toggle, open, close };
};