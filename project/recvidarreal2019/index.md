---
layout: project
title: recVidarReal2019
image: images/dataset_image/railway.gif
tags:
  - high-speed
  - real
  - dataset
collaborators: 
collaborator_icons: []
---

用途：专注于高速目标检测与跟踪的数据集，支持SNN算法开发与超高速视觉系统测试。
场景类别：
- ClassA：动态物体和旋转场景
- ClassB：大场景和高速运动
数据特性：
- 图像分辨率：400×250
- 采样频率：20,000 Hz
- 数据格式：二进制spike事件流

### 数据集结构
数据集采用结构化组织，便于模型训练和评估。

### 可支持的任务：
- 高速运动目标跟踪
- 大场景三维重建
- 旋转物体姿态估计
- 交通监控系统
- SNN算法开发与测试

### 关键特性
- 超高速采样率：20,000Hz，捕捉高速运动细节
- 多样化场景：涵盖动态物体、旋转场景、大场景和高速运动
- 真实世界数据：基于Vidar相机采集的真实场景脉冲序列
- 适合SNN：二进制spike事件流格式，直接支持脉冲神经网络

数据集链接：https://openi.pcl.ac.cn/Cordium/SpikeCV/datasets?page=2

{% include figure.html image="/images/dataset_image/recvidar.png" width="100%" %}
{% include figure.html image="/images/dataset_image/ballon.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/car-100kmh.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/forest.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/railway.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/rotation1.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/rotation2.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/rotation2x.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/train-350kmh.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/viaduct-bridge.gif" width="100%" %}