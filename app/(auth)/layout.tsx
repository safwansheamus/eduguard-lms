import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex" style={{ backgroundImage: 'url("https://tse3.mm.bing.net/th?id=OIP.QeIei0obzoLOyKr7SE-QwgHaEK&pid=Api&P=0&h=180")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-opacity-75">
        <h2 className="text-3xl font-bold mb-4">Selamat Datang!</h2>
        <p className="text-lg text-gray-700 text-center">Nikmati pengalaman istimewa dengan layanan kami.</p>
      </div>

      <div className="w-90 flex items-center justify-end">
        <div className="p-8 bg-white rounded-md shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
