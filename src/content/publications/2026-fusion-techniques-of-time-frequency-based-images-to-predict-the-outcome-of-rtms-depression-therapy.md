---
title: Fusion techniques of time frequency-based images to predict the outcome
  of rTMS depression therapy
authors: Wael Korani, Md Fahimul Kabir Chowdhury, Mohammed Aledhari, Reza
  Rostami and Reza Kazemi
venue: Biomedical Signal Processing and Control
year: 2027
link: https://doi.org/10.1016/j.bspc.2026.111375
bibtex: >-
  @article{korani2027fusion,
    title={Fusion techniques of time frequency-based images to predict the outcome of rTMS depression therapy},
    author={Korani, Wael and Chowdhury, Md Fahimul Kabir and Aledhari, Mohammed and Rostami, Reza and Kazemi, Reza},
    journal={Biomedical Signal Processing and Control},
    volume={130},
    pages={111375},
    year={2027},
    publisher={Elsevier}
  }
---
Depression is a mental condition that can lead to suicide and self-harm. Predicting the outcome of depression treatment is one of the most difficult tasks for clinicians. Among various treatment options, repetitive Transcranial Magnetic Stimulation (rTMS) is a widely used non-invasive method. Predicting rTMS response using Electroencephalogram (EEG) data is difficult because of high inter-subject variability and limited features from single-domain analysis. We introduce two fusion techniques, montage and blending, to overcome these limitations and extract richer features from EEG-derived Time-Frequency (TF) images. We then propose a lightweight custom Convolutional Neural Network (CNN) trained on fused TF representations. We use a primary dataset of 15 patients and a secondary dataset of 46 patients. We run two sets of experiments. The first set uses segment-level 10-fold cross-validation. In this setup segments from the same patient can appear in both training and testing. The Montage CWT_ST fusion reaches 99.90% accuracy on the primary dataset and 91.90% on the secondary dataset. The second set uses strict subject-disjoint cross-validation. All segments of a patient stay in one fold and no patient appears in both training and testing. Performance collapses. We test four time–frequency methods, six fusion mechanisms, and fourteen model architectures. With one exception, every configuration on both cohorts falls between AUC 0.31 and 0.54 and every 95% confidence interval contains 0.5. A patient-level permutation test on the best standalone method returns p = 0.703. The best subject-level result is Montage CWT_ST on the primary cohort, which reaches AUC 0.874 ± 0.183 and 82.7% accuracy. The same fusion strategy on the same pair of methods reaches 0.514 on the secondary cohort, so the mechanism behind this difference is not yet established and we identify it as the main target for follow-up work. The gap between the two experimental setups is the main result. Segment-level validation raises accuracy from chance to near-perfect on this data. Similar figures in the EEG literature should therefore be read together with the fold construction used to produce them.
