import {Navigate, useLocation} from "react-router-dom";
import {ReactElement} from "react";
import {useAppSelector} from "../../utils/hooks/useAppSelector";

interface IProtectedProps {
    onlyAuth?: boolean,
    element: ReactElement
}
const Protected = ({onlyAuth = true, element}: IProtectedProps): JSX.Element => {
    const isAuthChecked = useAppSelector(store => store.user.isAuthChecked);
    const user = useAppSelector(store => store.user.user);
    const location = useLocation();

    if (!isAuthChecked) {
        return <></>;
    }

    if (!onlyAuth && user) {
        const { from } = location.state || { from: { pathname: "/"}};
        return <Navigate to={from}/>
    }

    if (onlyAuth && !user) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    return element;
}

export const OnlyAuth = Protected;
export const OnlyUnAuth = (props: IProtectedProps) => <Protected {...props} onlyAuth={false} />