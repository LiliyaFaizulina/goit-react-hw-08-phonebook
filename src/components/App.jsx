import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { selectIsFetching } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperation';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const VerifyPage = lazy(() => import('../pages/VerifyPage/VerifyPage'));

export const App = () => {
  const isFetching = useSelector(selectIsFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="verify"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <VerifyPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    )
  );
};
