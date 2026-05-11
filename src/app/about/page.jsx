import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* هيدر بسيط للصفحة */}
      <nav className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* تم تعديل اللون هنا إلى أزرق فاتح وواضح (Blue 400) */}
          <h1 className="text-xl font-black text-blue-400">منصة العلوم</h1>
          
          {/* رابط العودة باللون الأبيض الناصع مع ضمان عدم الاختفاء عند الضغط */}
          <Link 
            href="/" 
            className="text-white font-bold transition-all underline-offset-4 hover:underline hover:text-sky-200 active:text-white"
          >
            العودة للرئيسية
          </Link>
          
        </div>
      </nav>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center underline decoration-sky-400 underline-offset-8">
              حول المنصة
            </h2>
            
            <p className="text-xl text-slate-700 leading-relaxed text-center mb-10">
              تم إنشاء هذه المنصة لتكون رفيق الطالب في رحلة استكشاف مادة العلوم. نحن نؤمن أن التعليم يجب أن يكون ممتعاً وبصرياً، لذا ركزنا على تبسيط المعلومات الصعبة وتحويلها إلى تجربة تفاعلية تهدف لمساعدة طلاب الصف الثاني الإعدادي على التفوق والتميز الدراسي.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-sky-50 p-6 rounded-2xl border-r-4 border-sky-400">
                <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center gap-2">
                  <span>🚀</span> رؤيتنا
                </h3>
                <p className="text-slate-700">تطوير مهارات البحث والتفكير العلمي لدى الطلاب باستخدام أحدث الوسائل التقنية التفاعلية.</p>
              </div>

              <div className="bg-sky-50 p-6 rounded-2xl border-r-4 border-sky-400">
                <h3 className="text-xl font-bold text-sky-800 mb-4 flex items-center gap-2">
                  <span>🎯</span> أهدافنا
                </h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• تغطية شاملة لمنهج العلوم.</li>
                  <li>• توفير بيئة تعليمية سهلة الاستخدام.</li>
                  <li>• تحديث مستمر لبنك الأسئلة والاختبارات.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
                <Link 
                  href="/" 
                  className="inline-block bg-sky-500 text-white font-black py-3 px-10 rounded-full hover:bg-sky-600 transition-all shadow-md active:scale-95 active:bg-sky-700"
                >
                  ابدأ رحلتك التعليمية
                </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 text-sm">
        <p>© 2026 منصة العلوم التفاعلية - جميع الحقوق محفوظة</p>
      </footer>
    </main>
  );
}