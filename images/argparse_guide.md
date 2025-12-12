# argparse 使用指南

## 🎯 基本概念

`argparse` 是 Python 标准库中用于解析命令行参数的工具，让您可以轻松创建用户友好的命令行界面。

## 📚 核心组件

### 1. ArgumentParser
创建参数解析器对象
```python
parser = argparse.ArgumentParser(description='程序描述')
```

### 2. add_argument()
添加命令行参数
```python
parser.add_argument('参数名', help='参数说明')
```

### 3. parse_args()
解析命令行参数
```python
args = parser.parse_args()
```

## 🔧 参数类型详解

### 位置参数 (Positional Arguments)
```python
# 必需的位置参数
parser.add_argument('input_file', help='输入文件路径')
# 使用: python script.py input.txt
```

### 可选参数 (Optional Arguments)
```python
# 短选项和长选项
parser.add_argument('-i', '--input', help='输入文件')
parser.add_argument('-o', '--output', help='输出文件')
# 使用: python script.py -i input.txt -o output.txt
```

### 参数类型
```python
parser.add_argument('-n', type=int, help='整数参数')
parser.add_argument('-f', type=float, help='浮点数参数')
parser.add_argument('-s', type=str, help='字符串参数')
```

### 默认值
```python
parser.add_argument('-q', '--quality', type=int, default=95, help='质量')
```

### 布尔标志
```python
# store_true: 指定时为True，否则为False
parser.add_argument('-v', '--verbose', action='store_true', help='详细模式')

# store_false: 指定时为False，否则为True
parser.add_argument('--no-cache', action='store_false', help='不使用缓存')
```

### 选择列表
```python
parser.add_argument('-f', '--format', choices=['png', 'jpg', 'gif'], help='图片格式')
```

### 必需参数
```python
parser.add_argument('-r', '--required', required=True, help='必需参数')
```

### 计数器参数
```python
parser.add_argument('-c', '--count', action='count', default=0, help='计数')
# 使用: -c (count=1), -cc (count=2), -ccc (count=3)
```

### 列表参数
```python
# 接受多个值
parser.add_argument('--filters', nargs='+', help='多个滤镜')
# 使用: --filters blur sharpen resize
```

### 互斥参数组
```python
group = parser.add_mutually_exclusive_group()
group.add_argument('--resize', action='store_true', help='调整尺寸')
group.add_argument('--crop', action='store_true', help='裁剪图片')
# 只能选择其中一个
```

## 🎨 高级功能

### 自定义帮助信息
```python
parser = argparse.ArgumentParser(
    description='程序描述',
    epilog='使用示例和额外说明',
    formatter_class=argparse.RawDescriptionHelpFormatter
)
```

### 参数验证
```python
def validate_quality(value):
    ivalue = int(value)
    if ivalue < 1 or ivalue > 100:
        raise argparse.ArgumentTypeError("质量必须在 1-100 之间")
    return ivalue

parser.add_argument('-q', '--quality', type=validate_quality, help='图片质量')
```

### 子命令
```python
subparsers = parser.add_subparsers(dest='command', help='可用命令')

# 创建子命令
resize_parser = subparsers.add_parser('resize', help='调整尺寸')
resize_parser.add_argument('-w', '--width', type=int, help='宽度')

crop_parser = subparsers.add_parser('crop', help='裁剪图片')
crop_parser.add_argument('-x', type=int, help='X坐标')
```

## 📖 实际使用示例

### 基本示例
```python
import argparse

parser = argparse.ArgumentParser(description='图片处理工具')
parser.add_argument('input', help='输入文件')
parser.add_argument('-o', '--output', help='输出文件')
parser.add_argument('-w', '--width', type=int, default=800, help='宽度')
parser.add_argument('-h', '--height', type=int, default=600, help='高度')
parser.add_argument('-v', '--verbose', action='store_true', help='详细输出')

args = parser.parse_args()

print(f"输入: {args.input}")
print(f"输出: {args.output}")
print(f"尺寸: {args.width}x{args.height}")
print(f"详细模式: {args.verbose}")
```

### 使用方式
```bash
# 基本使用
python script.py input.png

# 指定输出文件
python script.py input.png -o output.png

# 指定尺寸
python script.py input.png -w 1024 -h 768

# 详细模式
python script.py input.png -v

# 查看帮助
python script.py -h
```

## 🚀 最佳实践

1. **清晰的描述**: 为每个参数提供清晰的帮助信息
2. **合理的默认值**: 为常用参数设置合理的默认值
3. **参数验证**: 验证用户输入的有效性
4. **错误处理**: 提供友好的错误信息
5. **使用示例**: 在帮助信息中包含使用示例

## 🔍 常见问题

### Q: 为什么 `-h` 参数冲突？
A: `-h` 是 argparse 的保留选项，用于显示帮助。使用 `-H` 或其他字母。

### Q: 如何让参数可选？
A: 使用 `-` 或 `--` 开头的参数名，或者设置 `required=False`。

### Q: 如何处理多个值？
A: 使用 `nargs` 参数，如 `nargs='+'` 表示一个或多个值。

### Q: 如何创建互斥的参数？
A: 使用 `add_mutually_exclusive_group()` 创建互斥组。
