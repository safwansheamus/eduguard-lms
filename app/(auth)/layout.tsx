import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex overflow-hidden" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/safwansheamus/eduguard-lms/main/public/bg2.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-opacity-75">
        <br></br>
        <h2 className="text-5xl font-bold mb-4">EduGuard-LMS</h2>
        <p className="text-lg text-gray-700 text-center font-semibold">Tingkatkan Keamanan Digital Anda dengan Pengetahuan Berkualitas Tinggi! Dapatkan Akses Penuh ke Pembelajaran Cybersecurity dengan Harga yang Terjangkau! Kami yakin bahwa perlindungan online yang handal tak harus memberatkan dompet Anda.</p>
      </div>

      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <div className="p-8 bg-transparent">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
