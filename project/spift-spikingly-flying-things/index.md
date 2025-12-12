---
layout: project
title: SPIFT(Spikingly Flying Things)
image: images/dataset_image/spift.png
tags:
  - optical flow
  - simulate
  - dataset
collaborators: 
collaborator_icons: []
---

用途：作为脉冲相机光流估计的首个训练数据集，包含随机生成的高速运动场景。
场景类别：100类，每类描述不同物体在随机背景下的平移和旋转运动。
数据规模：每场景提供500帧脉冲信号流，共约50,000帧光流标签（每隔10帧和20帧生成）。
数据格式：脉冲流为二进制矩阵(H×W×N)，光流标签为二维运动矢量场(H×W×2)。
时间分辨率：基于40,000Hz的高帧率脉冲相机模拟生成。

### 数据集结构
数据集采用分层目录结构组织：
```
spift/train/[0-99]/(flow, img, test.dat)
```
- flow/：存放光流数据文件（.flo格式）
- img/：存放对应的图像文件
- test.dat：原始spike数据文件

### 可支持的任务：
- 光流估计：利用脉冲流直接训练端到端模型(如 SCFlow)。
- 运动去模糊：通过 FAW(Flow-guided Adaptive Window) 验证运动模糊的抑制效果。
- 跨模态分析：研究脉冲流与重建图像/事件流的关联。

### 关键特性
- 多样化的运动模式：涵盖平移和旋转等多种运动类型
- 高时间分辨率：40,000Hz采样率，捕捉高速运动细节
- 稠密光流标签：100%密度覆盖所有像素
- 结构化的目录设计：便于模型训练和评估

数据集链接：https://pan.baidu.com/s/1A5U9lsNyViGEQIyulSE8vg (password:5331).
{% include figure.html image="/images/dataset_image/spift_result_1.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/spift_result_2.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/spift_result_3.gif" caption="随机抽取示例（每隔10帧生成光流）" width="100%" %}