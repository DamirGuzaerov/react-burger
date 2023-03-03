import {useEffect} from "react";

export const useModalClose = (ref, close) => {
    useEffect(() => {
        const reference = ref.current;
        const handleOnClick = (event) => {
            if (reference === event.target) {
                close();
            }
        }
        reference?.addEventListener('click', handleOnClick);
        return () => reference?.removeEventListener('click', handleOnClick);
    }, [ref, close]);
}