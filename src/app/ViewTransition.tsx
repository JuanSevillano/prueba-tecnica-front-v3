import { Box } from "@material-ui/core";
import Login from "pages/Login";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { useTransition, animated as a, config } from "react-spring";
import styled from "styled-components";
import useRouter from "utils/useRouter";
import { RouteI } from "./Routes";


const StyledView = styled(Box)`
${({ theme }) => `
        width: 100%;
        height: 100%;
        overflow: hidden;
        .wrapper {
        display: flex;
        width: 100%; 
        height: 100%;
    }
`}`

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
        <a.div className="wrapper" key={key} style={props}>
            <Switch location={item}>
                {
                    isAuth && routes.map(page => (
                        <Route
                            exact
                            key={page.url}
                            path={page.url}
                            component={page.view}
                        />
                    ))
                }
                {
                    !isAuth && <Login />
                }
            </Switch>
        </a.div>
    ));

    return <StyledView>{views}</StyledView>
}


export default ViewTransition