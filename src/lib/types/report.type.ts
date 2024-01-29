export type ReportAnswers = {
  answer_id: number;
  type: string;
  answer: Array<{
    seq: number;
    score: number;
  }>;
  sumScore: number;
  create_date: string;
};

export type ResultDetail = {
  color: string;
  description: string;
  title: string;
};
