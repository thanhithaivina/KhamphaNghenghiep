import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, Trophy, RefreshCcw, Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getShuffledQuestions } from '../data/questions';
import { cn } from '../lib/utils';

type GameState = 'start' | 'playing' | 'end';

export default function Quiz() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [questions, setQuestions] = useState<ReturnType<typeof getShuffledQuestions>>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (gameState === 'start') {
      setQuestions(getShuffledQuestions());
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    }
  }, [gameState]);

  const startGame = () => setGameState('playing');

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(index);
    setIsAnswered(true);

    const isCorrect = questions[currentQuestionIndex].shuffledOptions[index].isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4ade80', '#3b82f6', '#a855f7']
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    } else {
      setGameState('end');
      confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#f59e0b', '#ef4444', '#3b82f6', '#10b981']
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center p-4 sm:p-8 font-sans overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/20 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-3xl relative z-10">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
            >
              <div className="inline-flex items-center justify-center p-4 bg-indigo-500/20 rounded-full mb-6">
                <Sparkles className="w-12 h-12 text-indigo-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Khám Phá Nghề Nghiệp Kỷ Nguyên Số
              </h1>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Thế giới đang thay đổi từng ngày! Công nghệ thông tin không chỉ dành cho lập trình viên mà đã len lỏi vào mọi ngóc ngách của cuộc sống. Hãy cùng thử sức với 20 câu hỏi thú vị để xem bạn hiểu thế nào về những nghề nghiệp "số hóa" nhé!
              </p>
              <button
                onClick={startGame}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 hover:scale-105 active:scale-95"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Bắt đầu ngay
              </button>
            </motion.div>
          )}

          {gameState === 'playing' && questions.length > 0 && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full"
            >
              {/* Header / Progress */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium text-slate-300">
                    Câu hỏi {currentQuestionIndex + 1} / {questions.length}
                  </div>
                </div>
                <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold">
                  <Trophy className="w-4 h-4 mr-2" />
                  Điểm: {score}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800 rounded-full mb-8 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Question Card */}
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 leading-snug">
                  {questions[currentQuestionIndex].question}
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {questions[currentQuestionIndex].shuffledOptions.map((option, index) => {
                    const isSelected = selectedOptionIndex === index;
                    const isCorrect = option.isCorrect;
                    
                    let btnClass = "relative p-4 sm:p-6 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between group ";
                    
                    if (!isAnswered) {
                      btnClass += "border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-indigo-500/50 cursor-pointer";
                    } else {
                      if (isCorrect) {
                        btnClass += "border-emerald-500 bg-emerald-500/10 text-emerald-100";
                      } else if (isSelected && !isCorrect) {
                        btnClass += "border-rose-500 bg-rose-500/10 text-rose-100";
                      } else {
                        btnClass += "border-slate-800 bg-slate-900/50 opacity-50 cursor-not-allowed";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={isAnswered}
                        className={btnClass}
                      >
                        <span className="text-lg font-medium pr-4">{option.text}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation & Next Button */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    className="bg-indigo-950/50 border border-indigo-500/30 rounded-3xl p-6 sm:p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-indigo-300 mb-2 flex items-center">
                          <Sparkles className="w-5 h-5 mr-2" />
                          Giải thích
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {questions[currentQuestionIndex].explanation}
                        </p>
                      </div>
                      <button
                        onClick={nextQuestion}
                        className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors"
                      >
                        {currentQuestionIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {gameState === 'end' && (
            <motion.div
              key="end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
            >
              <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-8 shadow-lg shadow-indigo-500/30">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold mb-4">Chúc mừng bạn đã hoàn thành!</h2>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8">
                {score} / {questions.length}
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-10 text-left">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 mr-2" />
                  Tổng kết hành trình
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Qua 20 câu hỏi vừa rồi, bạn có thể thấy <strong>Công nghệ thông tin (CNTT) không chỉ là việc ngồi gõ code</strong>. Nó đã trở thành "hơi thở" của mọi ngành nghề: từ bác sĩ, nông dân, giáo viên cho đến kiến trúc sư, nhà báo.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Sự "số hóa" không làm mất đi các nghề nghiệp cũ, mà nó nâng cấp chúng lên một tầm cao mới, đòi hỏi con người phải liên tục học hỏi và thích nghi. Bất kể bạn chọn ngành nghề nào trong tương lai, việc trang bị kỹ năng số và tư duy công nghệ sẽ là chiếc chìa khóa vạn năng giúp bạn thành công!
                </p>
              </div>

              <button
                onClick={() => setGameState('start')}
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 bg-white rounded-full hover:bg-slate-200 transition-colors"
              >
                <RefreshCcw className="w-5 h-5 mr-2" />
                Chơi lại từ đầu
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
