import layoutStyles from './main-layout.module.css'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Outlet} from "react-router-dom";
import {AppHeader} from "../../app-header/app-header";

export const MainLayout = () => {
    return (
        <div className={layoutStyles['main-wrapper']}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                {<Outlet/>}
            </DndProvider>
        </div>
    )
}