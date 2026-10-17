import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { getTopicById, getTotalConcepts, getTotalQuestions } from '../data';
import SubtopicAccordion from '../components/SubtopicAccordion';
import TopicIcon from '../components/TopicIcon';
import Breadcrumbs from '../components/Breadcrumbs';

export default function TopicViewPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const topic = getTopicById(topicId || '');

  if (!topic) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-bold text-slate-800">Topic Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The requested topic does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Concepts</span>
        </Link>
      </div>
    );
  }

  const totalConcepts = getTotalConcepts(topic);
  const totalQuestions = getTotalQuestions(topic);

  // First concept helper
  const firstConcept = topic.subtopics[0]?.concepts[0];

  return (
    <div className="space-y-6 animate-fade-in">
      <Breadcrumbs
        items={[
          { label: 'Concepts', path: '/' },
          { label: topic.title },
        ]}
      />

      {/* Topic Hero Card */}
      <div className="glass-panel p-6 sm:p-8 border border-slate-200/90 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-blue-50 text-primary border border-blue-100 shadow-sm shrink-0">
              <TopicIcon name={topic.icon} className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary mb-1">
                <span>MODULE {topic.number}</span>
                <span>•</span>
                <span>{topic.subtopics.length} SUBTOPICS</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {topic.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                {topic.description}
              </p>
            </div>
          </div>

          {firstConcept && (
            <button
              onClick={() => navigate(`/topic/${topic.id}/concept/${firstConcept.id}`)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shadow-md shrink-0 self-start sm:self-auto"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start Studying</span>
            </button>
          )}
        </div>

        {/* Module Meta in header */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-700">
              {totalConcepts} Core Concepts
            </span>
            <span>•</span>
            <span>{totalQuestions} Interview Questions with Answers & Code</span>
          </div>
        </div>
      </div>

      {/* Subtopics and Concepts List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-slate-900">Curriculum Breakdown</h2>
          <span className="text-xs text-slate-500">
            Click any concept to study answers & code
          </span>
        </div>

        <div className="space-y-4">
          {topic.subtopics.map((subtopic, index) => (
            <SubtopicAccordion
              key={subtopic.id}
              topicId={topic.id}
              subtopic={subtopic}
              defaultExpanded={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
