#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片尺寸修改工具
支持调整PNG图片的大小到指定尺寸
"""

import os
import sys
from PIL import Image
import argparse


def resize_image(input_path, output_path, width, height, quality=95):
    """
    调整图片尺寸
    
    Args:
        input_path (str): 输入图片路径
        output_path (str): 输出图片路径
        width (int): 目标宽度
        height (int): 目标高度
        quality (int): 输出质量 (1-100)
    """
    try:
        # 打开图片
        with Image.open(input_path) as img:
            print(f"原始图片尺寸: {img.size[0]} x {img.size[1]}")
            
            # 调整尺寸
            resized_img = img.resize((width, height), Image.Resampling.LANCZOS)
            
            # 保存图片
            if output_path.lower().endswith('.png'):
                resized_img.save(output_path, 'PNG', optimize=True)
            else:
                resized_img.save(output_path, quality=quality, optimize=True)
            
            print(f"调整后图片尺寸: {resized_img.size[0]} x {resized_img.size[1]}")
            print(f"图片已保存到: {output_path}")
            
    except FileNotFoundError:
        print(f"错误: 找不到文件 {input_path}")
    except Exception as e:
        print(f"错误: {str(e)}")


def get_user_input():
    """获取用户输入的参数"""
    print("=== 图片尺寸修改工具 ===")
    print()
    
    # 获取输入文件路径
    while True:
        input_path = input("请输入图片文件路径: ").strip()
        if os.path.exists(input_path):
            break
        print("文件不存在，请重新输入")
    
    # 获取目标尺寸
    while True:
        try:
            width = int(input("请输入目标宽度: "))
            height = int(input("请输入目标高度: "))
            if width > 0 and height > 0:
                break
            print("宽度和高度必须大于0")
        except ValueError:
            print("请输入有效的数字")
    
    # 获取输出路径
    output_path = input("请输入输出文件路径 (直接回车使用默认): ").strip()
    if not output_path:
        # 生成包含尺寸信息的默认输出文件名
        base_name = os.path.splitext(os.path.basename(input_path))[0]
        output_path = f"{base_name}{width}_{height}.png"
    
    return input_path, output_path, width, height


def main():
    """主函数"""
    parser = argparse.ArgumentParser(description='调整PNG图片尺寸')
    parser.add_argument('--i', default='Peking University logo.png', help='输入图片路径')

    parser.add_argument('--w', type=int, default=200, help='目标宽度')
    parser.add_argument('--h', type=int, default=200, help='目标高度')
    parser.add_argument('--q', type=int, default=100, help='输出质量 (1-100)')
    
    args = parser.parse_args()
    
    # 如果提供了命令行参数，使用命令行模式
    if args.i and args.w and args.h:
        # 生成包含尺寸信息的输出文件名
        base_name = os.path.splitext(os.path.basename(args.i))[0]
        output_path = f"{base_name}{args.w}_{args.h}.png"
        resize_image(args.i, output_path, args.w, args.h, args.q)
    else:
        # 否则使用交互模式
        input_path, output_path, width, height = get_user_input()
        resize_image(input_path, output_path, width, height)


if __name__ == "__main__":
    main()
