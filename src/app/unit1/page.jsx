export default function UnitOne() {
  const lessons = [
    { id: 1, title: "تركيب الجهاز البولي ووظائفه", path: "/unit1/lesson1" },
    { id: 2, title: "آلية تنقية الدم وصحة الجهاز", path: "/unit1/lesson2" }
  ];

  return (
    <main className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">الوحدة الأولى: الجهاز البولي</h2>
      <div className="space-y-4">
        {lessons.map(lesson => (
          <a key={lesson.id} href={lesson.path} 
             className="block p-4 bg-white rounded-lg border-r-4 border-blue-500 shadow-sm hover:bg-blue-50 transition">
            <span className="font-bold ml-2">الدرس {lesson.id}:</span> {lesson.title}
          </a>
        ))}
      </div>
    </main>
  );
}