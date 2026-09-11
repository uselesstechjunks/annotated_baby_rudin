## 1. Overall judgment

**What this list gets right**

* Correct prioritization of post-training over pure architecture novelty.
* Strong emphasis on evaluation as a scientific object, not a dashboard artifact.
* Good balance between theory (scaling laws) and practice (TRL, OpenAI Evals).
* Inclusion of failure modes, reward hacking, and alignment pathologies.

If a candidate told me they had deeply internalized Tier 1–3 of this list and had hands-on experience implementing parts of it, I would assume solid baseline readiness for a research engineering role.

**What it implicitly assumes**

* That reading is a proxy for capability.
* That training large models is mostly about knowing papers.
* That systems knowledge only matters insofar as it “affects models.”

These assumptions are where interviews diverge sharply from reading lists.

---

## 2. What is missing or underemphasized

### A. Pretraining mechanics (this is the biggest gap)

The list explicitly frames itself as post-training focused, but **most training-focused RE/RS interviews will probe pretraining intuition**, even if the role is nominally post-training.

Missing topics include:

* Tokenization tradeoffs (BPE vs unigram, multilingual effects, token inflation)
* Data mixture construction and temperature-based sampling
* Curriculum effects during pretraining
* Loss curves, inflection points, and early-warning signals
* Memorization vs generalization diagnostics
* Deduplication strategies and their unintended consequences

You do not need to be a tokenizer researcher, but you must be able to answer:
“If I change the data mixture or tokenizer, what downstream behavior changes and why?”

---

### B. Training pathologies and recovery

The list mentions failure conceptually, but not operationally.

In interviews, you will be asked questions like:

* Training loss diverges at step 120k. What do you check first?
* Reward model improves offline but policy quality degrades. Why?
* KL collapses during RLHF. What knobs exist and what do they trade off?
* Eval metrics disagree. Which one do you trust and why?

What’s missing is a **mental runbook** for:

* Optimizer instability
* Gradient spikes and silent NaNs
* Batch-size–learning-rate coupling
* Checkpoint corruption and partial restarts
* Distributed training nondeterminism

Reading papers will not substitute for having a concrete debugging hierarchy in your head.

---

### C. Systems depth beyond “knowing Megatron exists”

The list includes Megatron-LM and ZeRO, but interviews usually go deeper than name recognition.

You should expect questions like:

* Why does tensor parallelism scale differently from pipeline parallelism?
* When does ZeRO-2 outperform ZeRO-3 in practice?
* What breaks first when scaling context length?
* How do activation checkpointing and recomputation affect optimizer state?

What’s missing is:

* Memory accounting at a per-layer level
* Throughput vs latency tradeoffs
* Communication bottlenecks and overlap
* Failure modes in multi-node training

You do not need to be a CUDA kernel author, but you must reason quantitatively about memory and bandwidth.

---

### D. Research taste and prioritization under constraints

The list includes good philosophical readings, but interviews test **decision-making under ambiguity**, not abstract taste.

Typical prompts:

* You have budget for one more week of training. What do you try?
* Two metrics move in opposite directions. What do you ship?
* A small model shows an effect. Do you scale it or discard it?
* A result is statistically weak but qualitatively compelling. What now?

This requires:

* Understanding which knobs scale and which do not
* Knowing when to trust small-scale experiments
* Being explicit about uncertainty and risk

This is rarely written down, but heavily evaluated.

---

### E. Communication of technical judgment

For research scientist and research engineer roles, **how you explain tradeoffs matters almost as much as what you know**.

Missing skills:

* Explaining a training decision to a non-expert stakeholder
* Writing a clean experiment proposal
* Justifying why a negative result is informative
* Framing postmortems without blaming infrastructure

Many candidates fail interviews not due to lack of knowledge, but due to inability to articulate reasoning clearly.

---

## 3. What interviews actually test

Based on training-focused interviews across major labs, you should be prepared to demonstrate:

1. **Causal reasoning**
   Not “what happened,” but “what change caused what effect.”

2. **Operational competence**
   You have actually trained models, broken them, and recovered them.

3. **Scaling intuition**
   You understand which effects survive scale and which evaporate.

4. **Evaluation skepticism**
   You distrust metrics by default and know how they fail.

5. **Research velocity**
   You can design experiments that maximize information per unit compute.

---

## How to supplement this list effectively

If I were advising you concretely, I would add:

* One end-to-end pretraining run (even at small scale) with full logging and postmortem
* One RLHF or DPO pipeline built from scratch, not just via TRL defaults
* One deliberate failure experiment where you push training into instability
* Written experiment notes answering:

  * What did I expect?
  * What happened?
  * What would I try next with half the budget?

These artifacts matter more in interviews than having read every paper.