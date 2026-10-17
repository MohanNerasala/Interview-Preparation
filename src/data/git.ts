import type { Topic } from '../types';

export const gitTopic: Topic = {
  id: 'git', number: '10', title: 'Git & GitHub', description: 'Version control, branching, merging, and collaboration.', icon: 'GitBranch',
  subtopics: [{
    id: 'git-basics', title: 'Git Fundamentals', description: 'Core Git concepts and commands.',
    concepts: [{
      id: 'git-overview', title: 'Git Basics', description: 'Version control, repositories, and essential commands.', difficulty: 'Essential', studyTime: '10 minutes',
      definition: 'Git is a distributed version control system that tracks changes in source code.',
      interviewAnswer: 'Git is a distributed version control system. Key concepts: Repository (project folder tracked by Git), Commit (snapshot of changes), Branch (independent line of development), Merge (combine branches). Essential commands: git init, git add, git commit, git push, git pull, git branch, git merge, git checkout.',
      explanation: 'Git workflow: Working Directory → Staging Area (git add) → Local Repository (git commit) → Remote Repository (git push).',
      codeExample: '# Initialize repository\ngit init\n\n# Stage and commit\ngit add .\ngit commit -m "Initial commit"\n\n# Branch operations\ngit branch feature-login\ngit checkout feature-login\n# or: git checkout -b feature-login\n\n# Push to remote\ngit remote add origin <url>\ngit push -u origin main\n\n# Pull latest changes\ngit pull origin main\n\n# Merge branch\ngit checkout main\ngit merge feature-login',
      questions: [
        { id: 'git-q1', question: 'What is Git and why is it used?', answer: 'Git is a distributed version control system that tracks changes in code. Benefits: 1) Tracks every change with history. 2) Enables collaboration — multiple developers can work simultaneously. 3) Supports branching for parallel development. 4) Allows reverting to previous versions. 5) Works offline (distributed).', difficulty: 'Essential' },
        { id: 'git-q2', question: 'What is the difference between git pull and git fetch?', answer: 'git fetch: Downloads changes from remote but does NOT merge them. Your working directory is unchanged.\ngit pull: Downloads changes AND merges them into your current branch. Equivalent to git fetch + git merge.\nUse fetch when you want to review changes before merging.', difficulty: 'Common' },
        { id: 'git-q3', question: 'What is a merge conflict and how do you resolve it?', answer: 'A merge conflict occurs when two branches modify the same line in a file. Git cannot auto-merge and marks the conflicts with <<<<<<<, =======, >>>>>>> markers. To resolve: 1) Open the conflicting file. 2) Choose which changes to keep. 3) Remove conflict markers. 4) Stage and commit the resolved file.', difficulty: 'Common' },
      ]
    }]
  }]
};
