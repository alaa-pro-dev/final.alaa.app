export default function LessonTwo() {
  const healthyHabits = [
    { title: "الماء", desc: "شرب 3 لترات يومياً يمنع ترسب الحصوات." },
    { title: "الغذاء", desc: "تجنب الإفراط في الموالح والأطعمة الحريفة والمشروبات الغازية." },
    { title: "العادات", desc: "عدم حبس البول لفترات طويلة للحفاظ على مرونة المثانة." },
    { title: "الوقاية", desc: "تجنب المياه الملوثة (الترع) لمنع الإصابة بالبلهارسيا التي تدمر جدار المثانة." }
  ];

  return (
    <main className="container mx-auto p-8 max-w-4xl" dir="rtl">
      {/* رأس الصفحة */}
      <header className="mb-10 text-center md:text-right">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">الدرس الثاني: فسيولوجيا الترشيح وطرق الحماية الصحية</h1>
        <div className="h-1 w-24 bg-orange-400 rounded"></div>
      </header>

      {/* أهداف الدرس */}
      <section className="bg-linear-to-l from-blue-50 to-white p-6 rounded-2xl mb-10 border-r-8 border-blue-600 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-blue-900">🎯 أهداف الدرس:</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
          <li>أن يشرح الطالب مسار الدم داخل الكلية (الدورة الكلوية).</li>
          <li>أن يستنتج المكونات الكيميائية للبول الطبيعي.</li>
          <li>أن يطبق العادات الصحية السليمة للحفاظ على سلامة الكليتين والمثانة.</li>
        </ul>
      </section>

      <div className="space-y-10">
        
        {/* أولاً: آلية عمل الكلية مع مخطط الدورة الدموية */}
        <section>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            أولاً: آلية عمل الكلية
          </h3>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">●</span>
                  <p>يدخل الدم غير النقي عبر <strong>الشريان الكلوي</strong>.</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">●</span>
                  <p>تقوم <strong>النفرونات</strong> بفلترة السموم مع الحفاظ على البروتينات وكريات الدم.</p>
                </li>
                <li className="flex gap-3 text-blue-700 font-bold">
                  <span className="text-blue-500">●</span>
                  <p>يعود الدم النقي عبر <strong>الوريد الكلوي</strong> إلى الدورة الدموية.</p>
                </li>
              </ul>

              {/* الكود المخصص لصورة مخطط الدورة الدموية */}
              <div className="relative group overflow-hidden rounded-2xl border-2 border-blue-100 shadow-inner bg-slate-50">
                <img 
                  src="/images/6.png" 
                  alt="مخطط الدورة الدموية الكلوية" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 inset-x-0 bg-blue-600/80 text-white text-xs text-center py-2 font-bold">
                   مخطط توضيحي: مسار الدم داخل الكلية
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ثانياً: الكيمياء الحيوية للبول */}
        <section>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            ثانياً: الكيمياء الحيوية للبول
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-3">مكونات البول:</h4>
              <div className="space-y-2">
                <div className="flex justify-between bg-white p-2 rounded shadow-sm">
                  <span>ماء</span> <span className="font-bold text-emerald-600">95%</span>
                </div>
                <div className="flex justify-between bg-white p-2 rounded shadow-sm">
                  <span>يوريا وحمض بوليك</span> <span className="font-bold text-emerald-600">2%</span>
                </div>
                <div className="flex justify-between bg-white p-2 rounded shadow-sm">
                  <span>أملاح زائدة</span> <span className="font-bold text-emerald-600">3%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center">
              <p className="text-lg leading-relaxed text-slate-700 italic">
                تعمل الكلية على تنظيم <strong>"الضغط الاسموزي"</strong> للحفاظ على توازن الماء والأملاح.
              </p>
            </div>
          </div>
        </section>

        {/* ثالثاً: دستور الصحة الكلوية */}
        <section className="pb-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
            ثالثاً: دستور الصحة الكلوية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthyHabits.map((habit, index) => (
              <div key={index} className="p-4 bg-white rounded-xl border-r-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-1">{habit.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{habit.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}