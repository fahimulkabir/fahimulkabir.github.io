---
title: "ClaimIQ at CheckThat! 2025: Comparing Prompted and Fine-Tuned Language
  Models for Verifying Numerical"
authors: Anirban Saha Anik, Md Fahimul Kabir Chowdhury, Andrew Wyckoff, Sagnik
  Ray Choudhury
venue: CLEF | Conference and Labs of the Evaluation Forum
year: 2025
link: https://ceur-ws.org/Vol-4038/paper_61.pdf
bibtex: >-
  @article{anik2025claimiq,
    title={ClaimIQ at CheckThat! 2025: Comparing Prompted and Fine-Tuned Language Models for Verifying Numerical},
    author={Anik, Anirban Saha and Chowdhury, Md Fahimul Kabir and Wyckoff, Andrew and Choudhury, Sagnik Ray},
    year={2025}
  }
---
This paper presents our system for Task 3 of the CLEF 2025 CheckThat! Lab, which focuses on verifying numerical and temporal claims using retrieved evidence. We explore two complementary approaches: zero-shot prompting with instruction-tuned large language models (LLMs) and supervised fine-tuning using parameter-efficient LoRA. To enhance evidence quality, we investigate several selection strategies, including full-document input and top-k sentence filtering using BM25 and MiniLM. Our best-performing model LLaMA fine-tuned with LoRA achieves strong performance on the English validation set. However, a notable drop in the test set highlights a generalization challenge. These findings underscore the importance of evidence granularity and model adaptation for robust numerical fact verification.
