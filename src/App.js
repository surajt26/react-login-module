import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import Spinner from './components/Spinner';

const LoginPage = lazy(() => import('./components/LoginPage'));
const AdminPage = lazy(() => import('./components/AdminPage'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<Spinner />}>
          <LoginPage />
        </Suspense>
      } />
      <Route path='/admin' element={
        <Suspense fallback={<Spinner />}>
          <AdminPage />
        </Suspense>
      } />
      <Route path='*' element={
        <Suspense fallback={<Spinner />}>
          <ErrorPage />
        </Suspense>
      } />
    </Routes>
  )
}

export default App;