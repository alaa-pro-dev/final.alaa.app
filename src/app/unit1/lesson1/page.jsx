export default function LessonOne() {
  return (
    <main className="container mx-auto p-8 max-w-4xl" dir="rtl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700">الدرس الأول: البنية التشريحية وأعضاء التصفية</h1>
        <p className="text-slate-500 mt-2">مادة العلوم - الجهاز البولي</p>
      </header>

      {/* قسم أهداف الدرس */}
      <section className="bg-blue-50 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
        <h3 className="text-lg font-bold mb-3 border-b border-blue-200 pb-2 text-blue-800">أهداف الدرس:</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>أن يتعرف الطالب على مفهوم الإخراج وأنواع الفضلات.</li>
          <li>أن يحدد المكونات الرئيسية للجهاز البولي وموقعها في الجسم.</li>
          <li>أن يدرك الدور المحوري لـ "النفرونات" في عملية الفلترة.</li>
        </ul>
      </section>

      <article className="prose lg:prose-xl max-w-none">
        <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b-2 border-slate-100 pb-2">شرح الدرس العلمي المنظم</h3>
        
        {/* قسم الصورة التوضيحية */}
        <div className="mb-8 bg-white p-4 rounded-2xl shadow-md border border-slate-200">
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
            <img 
              src="/images/5.jpg"
              alt="رسم توضيحي للجهاز البولي"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-3 italic">
            رسم توضيحي يوضح البنية التشريحية للجهاز البولي وأعضاء التصفية
          </p>
        </div>

        {/* أولاً: مفهوم الإخراج */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
          <h4 className="text-xl font-bold text-blue-700 mb-3 underline decoration-blue-200 underline-offset-8">أولاً: مفهوم الإخراج</h4>
          <p className="text-lg text-slate-700 leading-relaxed">
            هو عملية حيوية يتخلص بها الجسم من الفضلات الناتجة عن احتراق الغذاء (الهدم) داخل الخلايا.
          </p>
          <div className="mt-3 p-3 bg-red-50 border-r-4 border-red-500 text-red-700 text-sm italic">
            <strong>تحذير:</strong> تراكم هذه الفضلات يؤدي إلى تسمم الأنسجة وتوقف أعضاء الجسم.
          </div>
        </div>

        {/* ثانياً: أنواع الفضلات */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
          <h4 className="text-xl font-bold text-blue-700 mb-4 underline decoration-blue-200 underline-offset-8">ثانياً: أنواع الفضلات</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="font-bold text-slate-800 block mb-1">فضلات غازية:</span>
              <p className="text-sm">مثل (CO2) وبخار الماء، وتطردها الرئتان.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <span className="font-bold text-amber-800 block mb-1">فضلات صلبة:</span>
              <p className="text-sm">البراز (لا يعتبر إخراجاً لأنه بقايا طعام لم تهضم ولم تمر عبر الخلايا).</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg">
              <span className="font-bold text-emerald-800 block mb-1">فضلات سائلة:</span>
              <p className="text-sm">العرق (عبر الجلد)، والبول (عبر الجهاز البولي).</p>
            </div>
          </div>
        </div>

        {/* ثالثاً: تشريح الجهاز البولي */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
          <h4 className="text-xl font-bold text-blue-700 mb-4 underline decoration-blue-200 underline-offset-8">ثالثاً: تشريح الجهاز البولي</h4>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50/50 rounded-xl border-r-4 border-blue-600">
              <span className="font-bold text-blue-700 text-lg block mb-1">1. الكليتان:</span> 
              تُقعان في الجهة الظهرية، تشبهان حبة الفاصوليا، وتعتبران "الفلتر" الرئيسي للدم.
            </div>

            <div className="p-4 bg-blue-50/50 rounded-xl border-r-4 border-blue-600">
              <span className="font-bold text-blue-700 text-lg block mb-1">2. الحالبان:</span> 
              أنبوبان ينقلان البول بانتظام من الكلية إلى المثانة.
            </div>

            <div className="p-4 bg-blue-50/50 rounded-xl border-r-4 border-blue-600">
              <span className="font-bold text-blue-700 text-lg block mb-1">3. المثانة البولية:</span> 
              كيس عضلي مرن يختزن البول، وبها عضلة تحكم (عاصرة).
            </div>

            <div className="p-4 bg-indigo-50 rounded-xl border-r-4 border-indigo-600">
              <span className="font-bold text-indigo-700 text-lg block mb-1">4. النفرونات:</span> 
              يوجد مليون وحدة ترشيح مجهرية داخل كل كلية، وهي المسؤولة عن استخلاص البول.
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}