import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../services/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector