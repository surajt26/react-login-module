import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import LoginProtected from './components/LoginProtected';
import ProtectedRoute from './components/ProtectedRoute';
import Spinner from './components/Spinner';
import IdleTimer from './components/IdleTimer';

const LoginPage = lazy(() => import('./components/LoginPage'));
const AdminPage = lazy(() => import('./components/AdminPage'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));

function App() {

  // Status useState for store user loggedIn and did user logout
  const [status, setStatus] = useState(() => {

    const token = sessionStorage.getItem('token');
    if (!token) {
      return ({ loggedIn: false, didLogout: false })
    } else {
      return ({ loggedIn: true, didLogout: false })
    };
  });

  return (<>
    {/* IdleTimer to manage auto logout system  */}
    <IdleTimer
      loggedIn={status.loggedIn}
      didLogout={status.didLogout}
      setStatus={setStatus}
    />
    <Routes>

      {/* Login Page */}
      <Route path='/' element={
        <Suspense fallback={<Spinner />} >
          <LoginProtected loggedIn={status.loggedIn} >
            <LoginPage setStatus={setStatus} />
          </LoginProtected>
        </Suspense>
      } />

      {/* Admin Page */}
      <Route path='/admin' element={
        <Suspense fallback={<Spinner />} >
          <ProtectedRoute loggedIn={status.loggedIn} >
            <AdminPage setStatus={setStatus} />
          </ProtectedRoute>
        </Suspense>
      } />

      {/* Error Page */}
      <Route path='*' element={
        <Suspense fallback={<Spinner />} >
          <ErrorPage />
        </Suspense>
      } />
    </Routes>
  </>)
}

export default App;