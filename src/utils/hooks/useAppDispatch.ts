import {useDispatch} from "react-redux";
import {AppDispatch} from "../../services/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()