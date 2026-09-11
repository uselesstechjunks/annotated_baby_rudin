# Chapter 1: The Real and Complex Number System

## Introduction
What am I trying to achieve?
- To explain what these models can do
- To make people understand the theme of this talk, and which topics come when.

Some placeholder math below:
- Dataset: $D=(z_i)_{i=1}^N, z_i\in\mathbb{R}^d$.
- The Goal: Learn a map $T$ that morphs some distribution $p$ to target $q$.

  $$
  T_\sharp p=q
  $$

- Optimal Transport: For some cost function $c:\mathbb{R}^d\times\mathbb{R}^d\to\mathbb{R}_{\geq 0}$

  $$
  \inf_T\mathbb{E}_{x\sim\mu}[c(x, T(x)]
  $$
