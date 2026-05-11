import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            
            {/* تم تغيير اللون هنا إلى السماوي الفاتح text-sky-400 */}
            <h1 className="text-2xl font-extrabold text-sky-400 mb-4 md:mb-0">
              منصة التعلم التفاعلية
            </h1>

            {/* روابط التنقل مع الحفاظ على تأثير الضغط (Active State) باللون السماوي */}
            <nav className="flex items-center justify-between w-full md:w-auto md:gap-12 text-gray-700 font-black">
              
              <Link 
                href="/" 
                className="hover:text-blue-900 transition-all flex-1 text-center active:text-sky-400 active:scale-95"
              >
                الرئيسية
              </Link>

              <Link 
                href="/units" 
                className="hover:text-blue-900 transition-all flex-1 text-center px-4 active:text-sky-400 active:scale-95"
              >
                الوحدات
              </Link>

              <Link 
                href="/exam" 
                className="hover:text-blue-900 transition-all flex-1 text-center active:text-sky-400 active:scale-95"
              >
                الاختبارات
              </Link>

            </nav>

          </div>
        </header>

        <main className="container mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}