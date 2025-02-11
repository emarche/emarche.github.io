---
layout: publication
title: Improving Policy Optimization via \epsilon-Retrain
author: Luca Marzari, Changliu Liu, Priya L. Donti, Enrico Marchesini
conference: International Conference on Autonomous Agents and MultiAgent Systems (AAMAS), 2025
---

<img title="Retrain" alt="General architecture of \epsilon-Retrain" src="/assets/img/publication_preview/AAMAS2025_epsretrain.png" class="post-image">

<p class="post-abstract">We present \epsilon-retrain, an exploration strategy designed to encourage a behavioral preference while optimizing policies with monotonic improvement guarantees. To this end, we introduce an iterative procedure for collecting retrain areas -- parts of the state space where an agent did not follow the behavioral preference. Our method then switches between the typical uniform restart state distribution and the retrain areas using a decaying factor \epsilon, allowing agents to retrain on situations where they violated the preference. Experiments over hundreds of seeds across locomotion, navigation, and power network tasks show that our method yields agents that exhibit significant performance and sample efficiency improvements. Moreover, we employ formal verification of neural networks to provably quantify the degree to which agents adhere to behavioral preferences.</p>

<h3>Citation</h3>
```bibtex
@inproceedings{AAMAS2025_retrain, 
    title={Improving Policy Optimization via \epsilon-Retrain}, 
    author={Marzari, Luca and Liu, Changliu and Donti, Priya and Marchesini, Enrico}, 
    booktitle={International Conference on Autonomous Agents and MultiAgent Systems (AAMAS)}, 
    year={2025}, 
}
```