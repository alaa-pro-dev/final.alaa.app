export default function UnitsPage() {
  const unit1Lessons = [
    { 
      id: 1, 
      title: "البنية التشريحية وأعضاء التصفية", 
      description: "استكشاف مفهوم الإخراج، أنواع الفضلات، والتركيب التشريحي الدقيق للجهاز البولي.",
      path: "/unit1/lesson1",
      icon: "🧬",
      image: "/images/1.jpg"
    },
    { 
      id: 2, 
      title: "فسيولوجيا التشريح وطرق الحماية", 
      description: "شرح آلية عمل الكلية، الكيمياء الحيوية للبول، وأسس دستور الصحة الكلوية.",
      path: "/unit1/lesson2",
      icon: "🧪",
      image: "/images/2.jpg"
    },
  ];

  return (
    <main className="container mx-auto p-8 max-w-6xl" dir="rtl">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 text-indigo-950">وحدات المنهج الدراسي</h2>
        <p className="text-slate-500 font-bold text-lg italic">منهج العلوم - وحدة الإخراج في الإنسان</p>
      </header>
      
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-10">
            {/* لون العلامة الجانبية بنفسجي فاتح */}
            <div className="h-10 w-2.5 bg-indigo-500 rounded-full shadow-md"></div>
            <h3 className="text-2xl font-black text-slate-800">الوحدة الأولى: الإخراج في الإنسان</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {unit1Lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-slate-100 hover:shadow-2xl hover:shadow-indigo-200/50 hover:-translate-y-2 transition-all duration-500"
              >
                {/* صورة الدرس */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={lesson.image} 
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* طبقة تظليل بنفسجية فوق الصورة */}
                  <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 to-transparent"></div>
                  
                  <div className="absolute bottom-6 right-6 text-3xl bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl border border-indigo-50 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {lesson.icon}
                  </div>
                </div>

                {/* محتوى الكارت */}
                <div className="p-8">
                  <h4 className="text-2xl font-black text-indigo-950 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                    الدرس {lesson.id}: {lesson.title} 
                  </h4>
                  <p className="text-slate-600 mb-10 leading-relaxed font-semibold">
                    {lesson.description} 
                  </p>

                  {/* الزر باللون البنفسجي المريح للعين */}
                  <a 
                    href={lesson.path}
                    className="inline-flex items-center justify-center w-full py-4 bg-indigo-500 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all duration-300 gap-3 shadow-lg shadow-indigo-100 group/btn"
                  >
                    ابدأ الدرس الآن
                    <span className="text-2xl group-hover/btn:translate-x-[-8px] transition-transform">←</span>
                  </a>
                </div>

                {/* رقم الدرس الخلفي بالبنفسجي الخفيف جداً */}
                <span className="absolute top-4 left-6 text-7xl font-black text-indigo-500/5 z-0 select-none pointer-events-none">
                  0{lesson.id}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}