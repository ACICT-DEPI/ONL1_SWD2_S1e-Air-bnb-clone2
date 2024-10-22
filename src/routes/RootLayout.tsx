// RootLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar} from '../components/navbar/Navbar'; // استيراد الـ Navbar
import Footer from '../components/Footer'; // استيراد الفوتر الخاص بك

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar /> {/* استخدام الـ Navbar */}

      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet /> {/* عرض المحتوى الديناميكي */}
      </main>

      <Footer /> {/* الفوتر الخاص بك */}
    </div>
  );
};

export default RootLayout;
