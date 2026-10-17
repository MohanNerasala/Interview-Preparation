import type { Topic } from '../types';
import { selfIntroductionTopic } from './selfIntroduction';
import { projectExplanationTopic } from './projectExplanation';
import { coreJavaTopic } from './coreJava';
import { sqlDatabaseTopic } from './sqlDatabase';
import { frontendTopic } from './frontend';
import { springBootTopic } from './springBoot';
import { hibernateTopic } from './hibernate';
import { reactjsTopic } from './reactjs';
import { typescriptTopic } from './typescript';
import { gitTopic } from './git';
import { testingTopic } from './testing';
import { microservicesTopic } from './microservices';
import { hrTopic } from './hr';

export const allTopics: Topic[] = [
  selfIntroductionTopic,
  projectExplanationTopic,
  coreJavaTopic,
  sqlDatabaseTopic,
  frontendTopic,
  springBootTopic,
  hibernateTopic,
  reactjsTopic,
  typescriptTopic,
  gitTopic,
  testingTopic,
  microservicesTopic,
  hrTopic,
];

export function getTopicById(id: string): Topic | undefined {
  return allTopics.find(t => t.id === id);
}

export function getTotalConcepts(topic: Topic): number {
  return topic.subtopics.reduce((sum, st) => sum + st.concepts.length, 0);
}

export function getTotalQuestions(topic: Topic): number {
  return topic.subtopics.reduce((sum, st) =>
    sum + st.concepts.reduce((s, c) => s + c.questions.length, 0), 0);
}

export function getAllConcepts(topic: Topic) {
  return topic.subtopics.flatMap(st => st.concepts);
}

export function findConceptInTopic(topic: Topic, conceptId: string) {
  for (const st of topic.subtopics) {
    const concept = st.concepts.find(c => c.id === conceptId);
    if (concept) return { subtopic: st, concept };
  }
  return null;
}
