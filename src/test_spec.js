export const DAS_II  = "DAS-II";
export const WJ4_ACH = "WJ4_ACH";

export const spec = {
  [DAS_II]: [
    {
      label: "General Conceptual Ability", 
      t_score: true, 
      percentile_rank: true,
      descriptive_range: true,
      confidence_interval: true
    }, {
      label: "Verbal Cluster", 
      t_score: true, 
      percentile_rank: true,
      descriptive_range: true,
      confidence_interval: true
    }, {
      label: "Word Definitions", 
      t_score: true
    }, {
      label: "Verbal Similarities", 
      t_score: true
    }, {
      label: "Non-Verbal Reasoning Cluster", 
      t_score: true, 
      percentile_rank: true,
      descriptive_range: true,
      confidence_interval: true
    }, {
      label: "Matricies", 
      t_score: true
    }, {
      label: "Sequential/Quantitative Reasoning", 
      t_score: true
    }, {
      label: "Spatial Ability Cluster", 
      t_score: true, 
      percentile_rank: true,
      descriptive_range: true,
      confidence_interval: true
    }, {
      label: "Recall of Designs", 
      t_score: true
    }, {
      label: "Pattern Construction", 
      t_score: true
    }
  ],

  [WJ4_ACH]: [
    {
      label: "Basic Reading Skills", 
      t_score: true, 
      percentile_rank: true,
      descriptive_range: true,
      confidence_interval: true
    }, {
      label: "Letter-Word ID", 
      t_score: true
    }, {
      label: "Word Attack", 
      t_score: true
    }, {
      label: "Reading Comprehension", 
      t_score: true, 
      percentile_rank: true,
      descriptive_range: true,
      confidence_interval: true
    }, {
      label: "Passage Comprehension", 
      t_score: true
    }, {
      label: "Reading Recall", 
      t_score: true
    }, {
      label: "Reading Fluency", 
      t_score: true, 
      percentile_rank: true,
      descriptive_range: true,
      confidence_interval: true
    }, {
      label: "Oral Reading", 
      t_score: true
    }, {
      label: "Sentence Reading Fluency", 
      t_score: true
    }
  ]
};