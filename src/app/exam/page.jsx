"use client";
import { useState } from 'react';

export default function ExamPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, q: "العضو المسؤول عن استخلاص البولينا من الدم هو:", options: ["الرئة", "الكلية", "الجلد"], ans: "الكلية" },
    { id: 2, q: "مرض يتسبب في تدمير الشعيرات الدموية بالمثانة:", options: ["البلهارسيا", "الأنفلونزا", "السكر"], ans: "البلهارسيا" },
    { id: 3, q: "تقع الكليتان على جانبي:", options: ["القلب", "المعدة", "العمود الفقري"], ans: "العمود الفقري" },
    { id: 4, q: "أنبوبان رفيعان ينقلان البول من الكلية للمثانة:", options: ["الشرايين", "الحالبان", "الأوردة"], ans: "الحالبان" },
    { id: 5, q: "يتم فلترة الدم داخل الكلية بواسطة أنابيب دقيقة تسمى:", options: ["النفرونات", "الألياف", "المسام"], ans: "النفرونات" }
  ];

  const handleSelect = (questionId, selectedOption) => {
    if (showResult) return; 
    setUserAnswers({ ...userAnswers, [questionId]: selectedOption });
  };

  const calculateScore = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.ans) currentScore++;
    });
    setScore(currentScore);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!examStarted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6" dir="rtl">
        {/* تم تكبير العرض هنا من max-w-md إلى max-w-xl */}
        <div className="max-w-xl w-full bg-white rounded-[3rem] shadow-2xl border-4 border-cyan-100 overflow-hidden transform transition-all hover:scale-[1.02]">
          <div className="bg-linear-to-br from-cyan-500 to-blue-600 p-14 text-center">
            <div className="bg-white/90 w-24 h-24 rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8">
              <span className="text-5xl">✍️</span>
            </div>
            <h1 className="text-4xl font-black mb-4 text-white">جاهز للاختبار؟</h1>
            <p className="text-cyan-50 text-lg font-medium">مراجعة وحدة الإخراج في الإنسان</p>
          </div>
          <div className="p-12 bg-cyan-50/20 text-center">
            <button 
              onClick={() => setExamStarted(true)}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-black py-6 rounded-2xl text-2xl shadow-xl transition-all active:scale-95 border-b-8 border-cyan-700"
            >
              ابدأ الاختبار الآن
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    /* تم تكبير الحاوية من max-w-3xl إلى max-w-4xl */
    <div className="max-w-4xl mx-auto p-6 pb-20" dir="rtl">
      {/* هيدر ثابت */}
      <header className="flex justify-between items-center mb-10 bg-cyan-500 p-8 rounded-[2.5rem] border-b-4 border-cyan-700 shadow-lg sticky top-4 z-10">
        <h1 className="text-2xl font-black text-white italic">اختبار الجهاز البولي</h1>
        <div className="text-lg font-black text-cyan-700 bg-white px-6 py-3 rounded-2xl shadow-inner border-2 border-cyan-100">
           أجبت على: {Object.keys(userAnswers).length} / {questions.length}
        </div>
      </header>

      {showResult && (
        <div className="mb-10 p-16 bg-white border-4 border-cyan-500 rounded-[4rem] text-center shadow-2xl animate-in fade-in zoom-in duration-500 relative overflow-hidden">
          <h2 className="text-3xl font-black mb-6 text-cyan-600">نتيجة فحص المعلومات</h2>
          <div className="text-9xl font-black mb-8 text-cyan-500">{score} / {questions.length}</div>
          <p className="text-cyan-800 mb-12 font-black text-2xl">
            {score === questions.length ? "عبقري! لقد أتقنت وحدة الإخراج بجدارة 🏆" : "أداء رائع، راجع إجاباتك بالأسفل 🌟"}
          </p>
          <button 
            onClick={() => { setShowResult(false); setUserAnswers({}); setScore(0); setExamStarted(false); }}
            className="bg-cyan-500 text-white px-16 py-5 rounded-3xl text-xl font-black hover:bg-cyan-600 transition-all shadow-lg border-b-4 border-cyan-700"
          >
            إعادة التحدي
          </button>
        </div>
      )}

      <div className="space-y-10">
        {questions.map((item, idx) => (
          /* تم تكبير المسافات الداخلية p-10 */
          <div key={item.id} className={`p-10 bg-white rounded-[3rem] border-2 transition-all shadow-xl ${showResult ? 'border-slate-300' : 'border-cyan-100'}`}>
            <p className="text-2xl font-black mb-10 text-slate-800 leading-relaxed">
              <span className="bg-cyan-500 text-white w-12 h-12 inline-flex items-center justify-center rounded-2xl ml-4 text-xl shadow-md">{idx + 1}</span>
              {item.q}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {item.options.map(opt => {
                const isSelected = userAnswers[item.id] === opt;
                const isCorrect = opt === item.ans;
                
                let buttonStyle = "";

                if (showResult) {
                  if (isCorrect) {
                    buttonStyle = "bg-emerald-500 border-emerald-700 text-white shadow-lg ring-4 ring-emerald-100";
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = "bg-rose-500 border-rose-700 text-white shadow-lg";
                  } else {
                    buttonStyle = "bg-slate-100 border-slate-300 text-slate-700 opacity-100";
                  }
                } else if (isSelected) {
                  buttonStyle = "border-cyan-500 bg-cyan-100 text-cyan-700 shadow-md translate-y-[-4px]";
                } else {
                  buttonStyle = "border-slate-200 bg-white text-slate-600 hover:bg-cyan-50 hover:border-cyan-200";
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelect(item.id, opt)}
                    disabled={showResult}
                    className={`p-6 text-center rounded-[2rem] border-2 transition-all font-black text-xl flex flex-col items-center justify-center gap-3 ${buttonStyle}`}
                  >
                    <span>{opt}</span>
                    {showResult && isCorrect && <span className="text-xs bg-white text-emerald-700 px-4 py-1 rounded-full uppercase">الإجابة الصحيحة</span>}
                    {showResult && isSelected && !isCorrect && <span className="text-xs bg-white text-rose-700 px-4 py-1 rounded-full uppercase">اختيارك</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!showResult && (
        <button
          onClick={calculateScore}
          disabled={Object.keys(userAnswers).length < questions.length}
          className={`w-full py-8 rounded-[2.5rem] font-black text-3xl my-16 transition-all shadow-2xl
            ${Object.keys(userAnswers).length < questions.length 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-cyan-500 hover:bg-cyan-600 text-white border-b-8 border-cyan-700 active:scale-95'}`}
        >
          {Object.keys(userAnswers).length < questions.length 
            ? `باقي ${questions.length - Object.keys(userAnswers).length} أسئلة` 
            : "تسليم الإجابات"}
        </button>
      )}
    </div>
  );
}