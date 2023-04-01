import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const Protected = ({onlyAuth = true, element}) => {
    const isAuthChecked = useSelector(store => store.user.isAuthChecked);
    const user = useSelector(store => store.user.user);
    const location = useLocation();

    if (!isAuthChecked) {
        return null;
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
export const OnlyUnAuth = (props) => <Protected onlyAuth={false} {...props} />