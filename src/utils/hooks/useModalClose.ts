import {RefObject, useEffect} from "react";

export const useModalClose = (ref: RefObject<any>, close: ()=>void) => {
    useEffect(() => {
        const reference = ref.current;
        const handleOnClick = (event: MouseEvent) => {
            if (reference === event.target) {
                close();
            }
        }
        reference?.addEventListener('click', handleOnClick);
        return () => reference?.removeEventListener('click', handleOnClick);
    }, [ref, close]);
}