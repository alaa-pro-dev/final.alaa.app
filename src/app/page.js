import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* قسم الترحيب (Hero Section) */}
      <section className="bg-linear-to-b from-blue-700 to-blue-500 py-20 px-4">
        <div className="container mx-auto text-center">
          
          {/* تم التأكيد على اللون الأبيض الصريح للعنوان */}
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in text-white!">
            مرحباً بك في المنصة التعليمية
          </h1>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-white">
            منصتك المتكاملة لتعلم مادة العلوم بأسلوب تفاعلي ومبسط. استكشف الدروس، شاهد التوضيحات، واختبر معلوماتك.
          </p>

          <div className="flex justify-center gap-4">
            <Link 
              href="/units" 
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-100 transition-all active:scale-95"
            >
              ابدأ التعلم الآن
            </Link>
            
            {/* تعديل زر تعرف علينا لضمان ظهور النص دائماً */}
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 active:bg-blue-50 active:text-blue-800"
            >
              تعرف علينا
            </Link>
          </div>
        </div>
      </section>

      {/* باقي الكود */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-800">ماذا نقدم لك؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4 text-blue-600">📚</div>
              <h3 className="text-xl font-bold mb-3">منصة منظمة</h3>
              <p className="text-slate-600">محتوى تعليمي مفصل يغطي منهج الصف الثاني الإعدادي بدقة.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4 text-blue-600">📝</div>
              <h3 className="text-xl font-bold mb-3">اختبارات تفاعلية</h3>
              <p className="text-slate-600">بنك أسئلة شامل "اختر الإجابة الصحيحة" لتقييم مستواك فوراً.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4 text-blue-600">🔍</div>
              <h3 className="text-xl font-bold mb-3">شرح مبسط</h3>
              <p className="text-slate-600">تبسيط المفاهيم المعقدة مثل آلية عمل النفرونات وتنقية الدم.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-950 text-blue-200 py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="font-bold mb-2">منصة العلوم التفاعلية</p>
          <p className="text-sm opacity-70">© 2026 جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </main>
  );
}