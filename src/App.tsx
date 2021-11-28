import React, { FC, useEffect } from "react";
import Login from "pages/Login/Login";
import AppLayout from "hoc/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { LoadPrevSession } from "store/actions/auth";


const App: FC<{}> = () => {

  const dispatch = useDispatch();
  const { user, isAuthenticated }: any = useSelector<AppState>(state => state.auth);


  // eslint-disable-next-line
  useEffect(() => { dispatch(LoadPrevSession()) }, []);


  useEffect(() => {
    if (user || isAuthenticated) {
      console.log('Erpa', user, isAuthenticated)
      console.log(user)
      console.log(isAuthenticated)
    }
  }, [user, isAuthenticated])

  return (
 
          <AppLayout>
            <Login />

          </AppLayout>

     
  );
};

export default App;
