export type Project = {
  href: string
  title: string
  description: string
  tech: string
}

export const PROJECTS: Project[] = [
  {
    href: '/projects/fisherai',
    title: 'FisherAI — AI Shelf Card & Excel Generator',
    description: 'Cross-platform Tauri app using YOLO, PaddleOCR, and LayoutLMv3 to turn sale ads into shelf cards automatically, cutting a 2-hour manual task to about 5 minutes.',
    tech: 'Tauri (Rust + ORT) · TypeScript · React',
  },
  {
    href: '/projects/causal-effect-query',
    title: 'Causal Effect of Query Complexity on Product Relevance',
    description: 'End-to-end causal inference pipeline on Amazon’s 793K-row multilingual ESCI dataset, measuring a robust +14.8–16.3% causal lift in exact-match relevance.',
    tech: 'Python · EconML · scikit-learn · SBERT',
  },
  {
    href: '/projects/reliability-beyond-accuracy',
    title: 'Reliability Beyond Accuracy: Factuality, Uncertainty & Bias in LLMs',
    description: 'Comparative research review of four foundational LLM-reliability papers across factuality, uncertainty calibration, and bias.',
    tech: 'Research Paper · University of Illinois Chicago',
  },
]
