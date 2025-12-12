# 图片尺寸修改工具

这是一个用于调整PNG图片尺寸的Python工具，支持交互式和命令行两种使用方式。

## 安装依赖

```bash
pip install -r requirements.txt
```

## 使用方法

### 1. 交互式模式

直接运行脚本，按提示输入参数：

```bash
python change_img_size.py
```

程序会依次询问：
- 输入图片文件路径
- 目标宽度
- 目标高度
- 输出文件路径（可选，直接回车使用默认命名）

### 2. 命令行模式

```bash
python change_img_size.py -i input.png -w 800 -h 600 -o output.png
```

参数说明：
- `-i, --input`: 输入图片路径
- `-o, --output`: 输出图片路径（可选）
- `-w, --width`: 目标宽度
- `-h, --height`: 目标高度
- `-q, --quality`: 输出质量（1-100，默认95）

## 功能特点

- 支持PNG格式图片
- 使用高质量的重采样算法（LANCZOS）
- 自动优化输出文件大小
- 显示原始和调整后的图片尺寸
- 错误处理和用户友好的提示信息

## 示例

```bash
# 交互式使用
python change_img_size.py

# 命令行使用
python change_img_size.py -i "Peking University logo.png" -w 200 -h 200 -o "logo_resized.png"
```
