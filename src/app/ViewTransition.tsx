import Login from "pages/Login";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { useTransition, animated as a, config } from "react-spring";
import useRouter from "utils/useRouter";
import { RouteI } from "./Routes";

interface ViewTransitionI {
    routes: Array<RouteI>,
    isAuth: boolean
}

const ViewTransition: FC<ViewTransitionI> = ({ routes, isAuth }) => {


    const { location } = useRouter();

    const transitions = useTransition(location, (location) => location.pathname, {
        from: { position: 'absolute', opacity: 0, transform: 'translate3d(0, 100vh, 0)' },
        enter: { position: 'relative', opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { position: 'absolute', opacity: 0, transform: 'translate3d(0, -20vh, 0)' },
        config: config.slow
    });

    const views = transitions.map(({ item, props, key }) => (
        <a.div key={key} style={props}>
            <Switch location={item}>
                {
                    routes.map(page => (
                        <Route
                            exact
                            key={page.url}
                            path={page.url}
                            component={page.view}
                        />
                    ))
                }
                {
                    !isAuth ? <Route path='/' exact component={Login} /> : null
                }
            </Switch>
        </a.div>
    ));

    return <>{views}</>
}


export default ViewTransition