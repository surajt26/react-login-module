import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';

const LoginPage = lazy(() => import('./components/LoginPage'));

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<p>Loading...</p>}>
          <LoginPage />
        </Suspense>
      } />
    </Routes>
  )
}

export default App;