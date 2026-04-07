---
layout: project
title: "USP-Gaussian: Unifying Spike-based Image Reconstruction, Pose Correction and Gaussian Splatting"
section_title: Recent work
section_title_key: recent_work_title
section_link: /recent-work/
tags:
  - spike camera
  - 3D reconstruction
  - gaussian splatting
---

*Kang Chen, Jiyuan Zhang, Zecheng Hao, Yajing Zheng, Tiejun Huang, Zhaofei Yu*. USP-Gaussian: Unifying Spike-based Image Reconstruction, Pose Correction and Gaussian Splatting. Proceedings of the Computer Vision and Pattern Recognition Conference (CVPR), 2025. (Highlight).*

<div data-lang-target="en" markdown="1">
[Read the paper](https://openaccess.thecvf.com/content/CVPR2025/html/Chen_USP-Gaussian_Unifying_Spike-based_Image_Reconstruction_Pose_Correction_and_Gaussian_Splatting_CVPR_2025_paper.html)

## Research Background and Problem

### Background

Spike cameras are neuromorphic sensors that record scenes as high-temporal-resolution binary streams, making them highly suitable for 3D reconstruction and novel view synthesis in high-speed dynamic scenarios.

### Limitation of Existing Methods

Existing spike-based 3D reconstruction methods usually adopt a cascaded three-stage pipeline -- spike-to-image reconstruction, pose estimation, and 3D reconstruction -- which suffers from severe error accumulation because inaccuracies in early reconstruction directly degrade downstream pose estimation and rendering quality.

### Our Perspective

To address this issue, USP-Gaussian proposes a unified framework that jointly optimizes spike-based image reconstruction, pose correction, and Gaussian splatting in an end-to-end manner. By allowing these components to mutually supervise and refine each other during training, the method effectively reduces the error propagation inherent in conventional cascaded pipelines.

{% include figure.html image="/images/recent-work/usp-gaussian/background-problem.png" width="100%" %}

## Contributions

- Proposes USP-Gaussian, a unified framework that jointly integrates spike-based image reconstruction, camera pose correction, and 3D Gaussian Splatting, instead of treating them as independent sequential stages.
- Introduces a joint optimization strategy that aligns the reconstructed image sequence from Recon-Net with the rendered sequence from 3DGS, enabling reconstruction and 3D representation learning to provide complementary supervision to each other.
- Establishes a new self-supervised spike reconstruction paradigm by using multi-view consistency from 3DGS as an additional supervisory signal, rather than relying only on isolated spike-to-image reconstruction objectives.
- Designs complementary long-short spike inputs and a multi-reblur loss, which improve reconstruction robustness under low spike firing rates, suppress noise, and prevent the model from collapsing to a trivial long-exposure prediction.

## Core Method

The core idea of USP-Gaussian is to jointly train two tightly coupled branches. The first branch is Recon-Net, which takes spike streams as input and reconstructs a sequence of sharp images. Instead of using only a short spike window, the method feeds long spikes, short spikes, and a time index into the network so that both global and local temporal information can be exploited, especially under low-texture or low-firing-rate conditions. The second branch is 3D Gaussian Splatting, which uses the current Gaussian primitives and camera poses to render a sharp image sequence over the exposure interval. These two branches are optimized both individually and jointly, so that they can progressively improve each other during training.

{% include figure.html image="/images/recent-work/usp-gaussian/core-method.png" width="100%" %}

## Representative Results

Extensive experiments on both synthetic and real-world datasets show that USP-Gaussian consistently outperforms prior spike-based reconstruction methods. On the synthetic benchmark, the paper reports an average performance of 27.903 PSNR / 0.843 SSIM / 0.217 LPIPS, surpassing the main baseline SpikeGS, which achieves 27.196 / 0.832 / 0.244. In particular, on the Outdoorpool scene, USP-Gaussian reaches 30.142 dB PSNR, which is the best result in the table. These results verify that unified optimization substantially alleviates the error accumulation problem in cascaded pipelines.

{% include figure.html image="/images/recent-work/usp-gaussian/representative-results-1.png" width="100%" %}

{% include figure.html image="/images/recent-work/usp-gaussian/representative-results-2.png" width="100%" %}
</div>

<div data-lang-target="zh" hidden markdown="1">
[查看原文](https://openaccess.thecvf.com/content/CVPR2025/html/Chen_USP-Gaussian_Unifying_Spike-based_Image_Reconstruction_Pose_Correction_and_Gaussian_Splatting_CVPR_2025_paper.html)

## 研究背景与问题

### 背景

脉冲相机是一类神经形态传感器，能够以高时间分辨率的二值流形式记录场景，因此非常适合用于高速动态场景下的三维重建与新视角合成。

### 现有方法的局限

现有基于脉冲的三维重建方法通常采用“脉冲到图像重建、位姿估计、三维重建”三级级联流程。由于前期重建中的误差会直接削弱后续位姿估计与渲染质量，这类方法往往面临严重的误差累积问题。

### 我们的思路

为了解决这一问题，USP-Gaussian 提出一个统一框架，以端到端方式联合优化基于脉冲的图像重建、位姿校正与 Gaussian Splatting。通过在训练过程中让这些模块相互监督、相互修正，该方法能够有效缓解传统级联流程中固有的误差传播问题。

{% include figure.html image="/images/recent-work/usp-gaussian/background-problem.png" width="100%" %}

## 创新点

- 提出 USP-Gaussian 统一框架，将基于脉冲的图像重建、相机位姿校正与 3D Gaussian Splatting 联合建模，而不再将其视为彼此独立的串行阶段。
- 引入联合优化策略，对齐 Recon-Net 重建得到的图像序列与 3DGS 渲染序列，使图像重建与三维表示学习能够为彼此提供互补监督。
- 利用 3DGS 的多视角一致性作为额外监督信号，建立新的自监督脉冲重建范式，而不再仅依赖孤立的 spike-to-image 重建目标。
- 设计长短时互补的脉冲输入以及 multi-reblur loss，在低脉冲发放率条件下提升重建鲁棒性、抑制噪声，并避免模型退化为简单的长曝光预测。

## 核心方法

USP-Gaussian 的核心思想是联合训练两个紧密耦合的分支。第一个分支是 Recon-Net，它以脉冲流为输入并重建清晰图像序列。与仅使用短时间窗脉冲不同，该方法同时输入长时脉冲、短时脉冲以及时间索引，从而能够同时利用全局与局部时间信息，尤其适用于低纹理或低发放率场景。第二个分支是 3D Gaussian Splatting，它基于当前的高斯元与相机位姿，在曝光时间内渲染清晰图像序列。这两个分支既分别优化，也联合优化，从而在训练过程中逐步相互促进、共同提升。

{% include figure.html image="/images/recent-work/usp-gaussian/core-method.png" width="100%" %}

## 代表性结果

在合成数据集和真实数据集上的大量实验表明，USP-Gaussian 持续优于此前的基于脉冲的重建方法。在合成基准上，论文报告的平均性能达到 27.903 PSNR / 0.843 SSIM / 0.217 LPIPS，优于主要基线 SpikeGS 的 27.196 / 0.832 / 0.244。尤其是在 Outdoorpool 场景中，USP-Gaussian 取得了 30.142 dB 的 PSNR，为表中最优结果。这些结果验证了统一优化能够显著缓解级联流程中的误差累积问题。

{% include figure.html image="/images/recent-work/usp-gaussian/representative-results-1.png" width="100%" %}

{% include figure.html image="/images/recent-work/usp-gaussian/representative-results-2.png" width="100%" %}
</div>
