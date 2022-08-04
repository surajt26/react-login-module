import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';

const LoginPage = lazy(() => import('./components/LoginPage'));
const AdminPage = lazy(() => import('./components/AdminPage'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<p>Loading...</p>}>
          <LoginPage />
        </Suspense>
      } />
      <Route path='/admin' element={
        <Suspense fallback={<p>Loading...</p>}>
          <AdminPage />
        </Suspense>
      } />
      <Route path='*' element={
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorPage />
        </Suspense>
      } />
    </Routes>
  )
}

export default App;