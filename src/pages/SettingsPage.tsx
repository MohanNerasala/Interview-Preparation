import { useState } from 'react';
import { Settings, Trash2, AlertTriangle, CheckCircle, Info, RefreshCw } from 'lucide-react';
import { useProgress } from '../store/progressStore';
import Breadcrumbs from '../components/Breadcrumbs';

export default function SettingsPage() {
  const { resetProgress, progress, getTotalQuestionsAttempted } = useProgress();
  const [showConfirm, setShowConfirm] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleReset = () => {
    resetProgress();
    setShowConfirm(false);
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 3000);
  };

  const activeTopicsCount = Object.keys(progress.topics).length;
  const questionsAttempted = getTotalQuestionsAttempted();

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <Breadcrumbs items={[{ label: 'Settings' }]} />

      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <Settings className="w-6 h-6 text-primary" />
          <span>Application Settings</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your local learning data and preferences
        </p>
      </div>

      {resetSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <span>All learning progress has been successfully reset.</span>
        </div>
      )}

      {/* Storage and Data Section */}
      <div className="glass-panel p-6 border border-slate-200/90 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-primary" />
          <span>Learning Progress & Data</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Your study progress, question answers, bookmarks, and revision flags are automatically saved in your browser's local storage. No login required.
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs pt-2">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-400 block mb-0.5">Active Modules</span>
            <span className="font-bold text-slate-800 text-sm">{activeTopicsCount} / 15</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-400 block mb-0.5">Questions Attempted</span>
            <span className="font-bold text-slate-800 text-sm">{questionsAttempted}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          {!showConfirm ? (
            <button
              onClick={() => setShowConfirm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs sm:text-sm font-semibold border border-rose-200 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Reset All Learning Progress</span>
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-3 animate-fade-in">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-rose-900">Are you absolutely sure?</h4>
                  <p className="text-xs text-rose-700 mt-1">
                    This will clear all completed concepts, question answers, bookmarks, and revision lists. This action cannot be undone.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleReset}
                  className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  Yes, Reset Everything
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Platform Information */}
      <div className="glass-panel p-6 border border-slate-200/90 space-y-3">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Info className="w-4 h-4 text-primary" />
          <span>About This Platform</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          <strong>Java Full Stack Interview Preparation</strong> is designed for developers preparing for Junior to Senior full-stack roles. Covering 14 comprehensive interview modules and 62 Java & DSA coding questions: Self-Introduction, Menvy Architecture Project Explanation, Core Java & OOP, SQL & Database, Frontend Basics (HTML/CSS/JS), Spring Boot, Hibernate/JPA, React.js, TypeScript, DSA & Coding, Git & GitHub, Software Testing, Microservices, and HR & Behavioral.
        </p>
        <div className="text-xs text-slate-400 pt-2 border-t border-slate-100">
          Architecture: React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion
        </div>
      </div>
    </div>
  );
}
