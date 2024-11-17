import React, { useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeOutlet from './pages/customer/HomeOutlet';
import LoginPage from './pages/customer/LoginPage';
import RegisterPage from './pages/customer/RegisterPage';
// import { TitleProvider } from './components/TitleContent';
import HomePage from './pages/customer/LandingPage';
import AboutPage from './pages/customer/AboutPage';
import ContactPage from './pages/customer/ContactPage';
import { NetworkStatusProvider } from './pages/network/NetworkStatusProvider';
import NetworkAwareComponent from './pages/network/NetworkAwareComponent';
import AdminDashboard from './pages/admin/AdminDashboard';

// Define the router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeOutlet />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact-us',
        element: <ContactPage />,
      },
      {
        path: 'admin',
        element: <AdminDashboard />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    function checkCookieAccess() {
      try {
        sessionStorage.setItem('test', 'test');
        sessionStorage.removeItem('test');
      } catch (error) {
        if (error instanceof DOMException && (error.code === 18 || error.name === 'SecurityError')) {
          showCookieAlert();
        }
      }
    }

    function showCookieAlert() {
      const alertDiv = document.createElement('div');
      alertDiv.innerHTML = `
     <div style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 400px; background: #ff6b6b; color: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); padding: 15px 20px; text-align: center; z-index: 9999; font-family: 'Arial', sans-serif;">
    <p style="margin: 0; font-size: 16px; line-height: 1.4;">
        🍪 This site requires cookies to function correctly. Please enable cookies in your browser settings.
    </p>
    <button style="margin-top: 10px; background: white; color: #ff6b6b; border: none; padding: 8px 15px; border-radius: 5px; font-size: 14px; cursor: pointer; transition: background 0.3s ease;"
        onclick="this.parentElement.style.display='none'">
        Got it!
    </button>
</div>
      `;
      document.body.appendChild(alertDiv);
    }

    checkCookieAccess();
  }, []);

  return (
    <NetworkStatusProvider>
      <NetworkAwareComponent>
        <RouterProvider router={router} />
      </NetworkAwareComponent>
    </NetworkStatusProvider>
  )
};

export default App;
