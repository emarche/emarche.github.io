---
layout: publication
title:  Improving Deep Policy Gradients with Value Function Search
author: Enrico Marchesini, Christopher Amato
conference: International Conference on Learning Representations (ICLR), 2023
---

<img title="VFS" alt="General architecture of Value Function Search" src="/assets/img/publication_preview/ICLR2023_vfs.png" class="post-image">

<p class="post-abstract">Deep Policy Gradient (PG) algorithms employ value networks to drive the learning of parameterized policies and reduce the variance of the gradient estimates. However, value function approximation gets stuck in local optima and struggles to fit the actual return, limiting the variance reduction efficacy and leading policies to sub-optimal performance. In this paper, we focus on improving value approximation and analyzing the effects on Deep PG primitives such as value prediction, variance reduction, and correlation of gradient estimates with the true gradient. To this end, we introduce a Value Function Search that employs a population of perturbed value networks to search for a better approximation. Our framework does not require additional environment interactions, gradient computations, or ensembles, providing a computationally inexpensive approach to enhance the supervised learning task on which value networks train. Crucially, we show that improving Deep PG primitives results in improved sample efficiency and policies with higher returns using common continuous control benchmark domains.</p>

<h3>Citation</h3>
```bibtex
@inproceedings{ICLR2023_vfs,
    title={Improving Deep Policy Gradients via Value Function Search},
    author={Marchesini, Enrico and Amato, Christopher},
    booktitle={International Conference on Learning Representations (ICLR)},
    year={2023},
    url={https://openreview.net/forum?id=6qZC7pfenQm},
}
```