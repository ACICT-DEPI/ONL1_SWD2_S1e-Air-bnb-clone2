

import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RootLayout from './routes/RootLayout';
import ErrorPage from './error-page';
import { WishListProvider } from './routes/WishListContext'; // تأكد من المسار الصحيح
import './index.css'; 


import About from './routes/About';
import HomePage from './routes/HomePage';
import Login from './routes/Login';
import Register from './routes/Register';
import Product from './routes/Product';
import ProductsList from './routes/ProductsList';
import WomenShop from './routes/WomenShop';
import MenShop from './routes/MenShop';
import KidShop from './routes/KidShop';
import SearchPage from './routes/Search';
import ProfilePage from './routes/ProfilePage';
import Cart from './routes/Cart';
import WishList from './routes/WishList';
import WomenList from './routes/WomenList';
import MenList from './routes/MenList';
import KidsList from './routes/KidsList';
import BabyList from './routes/BabyList';
import SportsList from './routes/SportsList';
import HomeList from './routes/HomeList';
import BabyShop from './routes/BabyShop';
import SportsShop from './routes/SportsShop';
import HomeShop from './routes/HomeShop';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'product/:id', element: <Product /> },
      { path: ':shop/view-all', element: <ProductsList /> },
      { path: 'women', element: <WomenShop /> },
      { path: 'men', element: <MenShop /> },
      { path: 'kids', element: <KidShop /> },
      { path: 'baby', element: <BabyShop /> },
      { path: 'sports', element: <SportsShop /> },
      { path: 'home', element: <HomeShop /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'profilePage', element: <ProfilePage /> },
      { path: 'cart', element: <Cart /> },
      { path: 'wishlist', element: <WishList /> },
      { path: 'women/list', element: <WomenList /> },
      { path: 'men/list', element: <MenList /> },
      { path: 'kids/list', element: <KidsList /> },
      { path: 'baby/list', element: <BabyList /> },
      { path: 'sports/list', element: <SportsList /> },
      { path: 'home/list', element: <HomeList /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <WishListProvider> {/* توفير سياق المفضلة */}
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </WishListProvider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
