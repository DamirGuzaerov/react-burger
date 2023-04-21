import {useState} from "react";

interface IDisclosureHandlers {
		onOpen?: (...args: any[]) => void,
		onClose?: (...args: any[]) => void
}

export const useDisclosure = (initialState = false, {onOpen, onClose}: IDisclosureHandlers = {} ) => {
		const [isOpen, setIsOpen] = useState(initialState);

		const open = (...args: any[]) => {
				setIsOpen(true);
				if (typeof onOpen === "function") {
						onOpen(...args);
				}
		};

		const close = (...args: any[]) => {
				setIsOpen(false);
				if (typeof onClose === "function") {
						onClose(...args);
				}
		};

		const toggle = () => {
				isOpen ? close() : open();
		};

		return {isOpen, toggle, open, close};
};