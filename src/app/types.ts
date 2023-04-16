export type CardDto = {
  id: number;
  question: string;
  answer: string;
  // TODO use only `whenReview` once I fix the backend
  whenReview: number | null;
  when_review: number | null;
};
