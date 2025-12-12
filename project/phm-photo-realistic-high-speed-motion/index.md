---
layout: project
title: PHM(Photo-realistic High-speed Motion)
image: images/dataset_image/phm.png
tags:
  - optical flow
  - simulate
  - dataset
collaborators: 
collaborator_icons: []
---

用途：作为测试集，包含逼真的高速场景。  
场景类别：10类（如 Ball、Fan、Fly），共约 25,100 帧数据；光流标签覆盖所有像素（100% 密度）。  
数据格式：与 SPIFT 相同，但场景更复杂。  
### 可支持的任务：
- 光流估计：利用脉冲流直接训练端到端模型(如 SCFlow)。
- 运动去模糊：通过 FAW(Flow-guided Adaptive Window) 验证运动模糊的抑制效果。
- 跨模态分析：研究脉冲流与重建图像/事件流的关联。

数据集链接：https://pan.baidu.com/s/1A5U9lsNyViGEQIyulSE8vg (password:5331).
### 每个场景脉冲数
<table style="width:100%; border-collapse: collapse; margin: 12px 0;">
  <thead>
    <tr>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">场景</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Ball</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Cook</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Dice</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Doll</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Fan</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Fly</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Hand</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Jump</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Poker</th>
      <th style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">Top</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 5px; border-bottom: 1px solid #ccc;">帧数</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">1000</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">4000</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">4000</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">3000</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">3000</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">4500</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">2000</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">1400</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">3200</td>
      <td style="padding: 5px; border-bottom: 1px solid #ccc; text-align:center;">1000</td>
    </tr>
  </tbody>
</table>

{% include figure.html image="/images/dataset_image/phm_result_1.gif" width="100%" %}
{% include figure.html image="/images/dataset_image/phm_result_2.gif" caption="随机抽取示例如上（每隔10帧生成光流）" width="100%" %}

### 对于不同的时间间隔而言，以Poker为例：
我们故意放缓速度便于对比，可以看出Δt=10光流效果更加丝滑，而Δt=20略有卡顿。

{% include figure.html image="/images/dataset_image/poker.gif" caption="Δt=10光流和Δt=20光流可视化与脉冲流可视化对比。" width="100%" %}

{% capture note %}
<span style="font-size: 1.25em; font-weight: 700;">特别注意：</span> PHM 数据集中的 "Fly" 场景具有极其剧烈的运动特性，建议在研究中排除该场景。我们将在未来的工作中更新和重建该场景。
{% endcapture %}
{% include alert.html type="info" content=note %}

