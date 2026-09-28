---
title: 'Intelligent Self Reliance Agent'
summary: 'An Experimental Artificial General Intelligence System'
pubDate: 2016-10-05
updatedDate: 2021-08-18
topic: isra
tags: ['architecture', 'agi']
cover: ./isra-hero.jpg
hero: cover
---

ISRA is an experimental design for a general learning agent: a system meant to learn any task from experience rather than being programmed for one. The design was worked out between 2012 and 2014 and written up in a [thesis](/assets/isra.pdf) (PDF). A prototype was released as [open source](https://github.com/ogxing/isra) in 2016.

## The idea

Everything the agent perceives, does, or remembers is stored in one generic memory structure: sensory input, actions, patterns and the links between them. There is no separate module per skill. Learning is unsupervised. The agent acts, predicts what should follow, checks the prediction against what actually happens, and strengthens or weakens the links involved. Repeating and imitating earlier experience is how it builds longer chains of behaviour.

## How it runs

![ISRA operation flow](/images/isra/israOverview.gif)

If the animation doesn't play, [watch it on YouTube](https://youtu.be/yhS_XC_39bg).

Three layers loop independently:

1. **Input and classification.** Sensor data arrives, is matched against stored patterns, and the memory is told whether earlier predictions came true.
2. **Memory.** Everything present at a given moment is linked into a snapshot, old working memory is retired, and storage is kept within bounds.
3. **Decision and execution.** A point of interest is selected, a solution tree is assembled from past experience of it, and the tree is executed against the outputs and the pattern matchers.

A short overview of the loop:

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/EuFlydX3MWM" title="ISRA overview" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Status

The prototype implements the full loop: sensing and classification, memory snapshots, decision-making and execution, with a console for driving worker nodes and a viewer for replaying a run frame by frame. It is written in Java on a graph database, with vision through OpenCV, and it ran on a small hardware set: a few motors with feedback on a Raspberry Pi, one camera and one audio stream. On the hardware available at the time the simulation was expensive, so runs stayed short. The claim the design rests on, that learning speeds up as experience accumulates, is still to be tested at scale. Development is paused.

## Reference

Ong Guan Xing, *ISRA: Intelligent Self Reliance Agent*, 2016. [PDF](/assets/isra.pdf), 28 pages. Source code: [github.com/ogxing/isra](https://github.com/ogxing/isra), Apache 2.0.
