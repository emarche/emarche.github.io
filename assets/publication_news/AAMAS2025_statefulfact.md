---
layout: publication
title: On Stateful Value Factorization in Multi-Agent Reinforcement Learning
author: Enrico Marchesini, Andrea Baisero, Rupali Bhati, Christopher Amato
conference: International Conference on Autonomous Agents and MultiAgent Systems (AAMAS), 2025
---

<img title="DuelMIX" alt="General architecture of DuelMIX" src="/assets/img/publication_preview/AAMAS2025_statefulfact.png" class="post-image">

<p class="post-abstract">Value factorization is a popular paradigm for designing scalable multi-agent reinforcement learning algorithms. However, current factorization methods make choices without full justification that may limit their performance. For example, the theory in prior work uses stateless (i.e., history) functions, while the practical implementations use state information -- making the motivating theory a mismatch for the implementation. Also, methods have built off of previous approaches, inheriting their architectures without exploring other, potentially better ones. To address these concerns, we formally analyze the theory of using the state instead of the history in current methods -- reconnecting theory and practice. We then introduce DuelMIX, a factorization algorithm that learns distinct per-agent utility estimators to improve performance and achieve full expressiveness. Experiments on StarCraft II micromanagement and Box Pushing tasks demonstrate the benefits of our intuitions.</p>

<h3>Citation</h3>
```bibtex
@inproceedings{AAMAS2025_statefulfact, 
    title={On Stateful Value Factorization in Multi-Agent Reinforcement Learning}, 
    author={Marchesini, Enrico and Baisero, Andrea and Bhati, Rupali and Amato, Christopher}, 
    booktitle={International Conference on Autonomous Agents and MultiAgent Systems (AAMAS)}, 
    year={2025}, 
}
```