import React, { FC, useEffect } from "react";
import AppLayout from "hoc/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { LoadPrevSession } from "store/actions/auth";
import { useHistory } from 'react-router-dom';
import { Routes as routes } from "./Routes";
import ViewTransition from "./ViewTransition";


const App: FC<{}> = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated }: any = useSelector<AppState>(state => state.auth);


  useEffect(() => { dispatch(LoadPrevSession()) }, [dispatch]);


  useEffect(() => {
    if (isAuthenticated) history.push('/users')
  }, [isAuthenticated, history])

  return (

    <AppLayout>
      <ViewTransition
        routes={routes}
        isAuth={isAuthenticated} />
    </AppLayout>

  );
};

export default App;
