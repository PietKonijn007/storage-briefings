# Weekly AI & Compute Innovation Briefing
## Date Range: Monday 11 May – Sunday 17 May 2026 (covering items 8 May – 15 May 2026)
> *Research methodology: 3× Claude WebSearch passes (28 queries) + 1× Perplexity deep research, synthesised and deduplicated. Items flagged ⚠️ are single-source.*

---

### Executive Summary

- **NVIDIA's "Project Glasswing" / Claude Mythos Preview surfaces** as Anthropic gives select hyperscalers early access to its vulnerability-finding model — the model reportedly surfaced thousands of zero-days during testing, while Google separately disclosed an in-the-wild AI-generated zero-day exploit attempt this week.
- **Cerebras's blockbuster IPO (May 14, 2026)** — shares opened >100% above the $185 IPO price, raising ~$5.55B and validating wafer-scale inference silicon at a ~$50B market cap; the largest US AI-infrastructure listing of 2026 to date.
- **Anthropic overtakes OpenAI in US enterprise AI spend** (Ramp AI Index, May 2026 release): Claude paid-customer share rose to 34.4% vs. OpenAI's 32.3%, while Anthropic is reportedly in talks for a $30–50B round at a ~$950B valuation — surpassing OpenAI's March $854B mark.
- **Google DeepMind's Gemma 4 open-weight family released** (May 13–15, 2026), claimed as Google's most capable open model series to date and paired with a Kaggle "Gemma 4 Good Challenge".
- **POET Technologies + Lumilens announce wafer-level photonic interposer partnership (May 14, 2026)** with a >$500M five-year purchase trajectory and engineering samples in late 2026, targeting the optical-engine bottleneck for hyperscale AI fabrics.

---

### 1. Foundation Models & LLMs

**Google DeepMind — Gemma 4 (open weights)** — DeepMind released Gemma 4, billed as its most capable open-source family, in multiple sizes targeting both edge and frontier-class workloads, accompanied by a Kaggle "Gemma 4 Good Challenge". Parameter counts and benchmark tables not yet pinned down in this week's coverage; refer to the official model card. [SMBtech, May 15 2026](https://smbtech.au/news/google-deepmind-releases-gemma-4-its-most-capable-open-source-ai-models/)

**Google — Gemini 3.1 Flash Lite (May 8, 2026)** — A lightweight tier slotting below the Gemini 3 Deep Think family, aimed at high-throughput inference on consumer surfaces. [LLM-Stats Updates](https://llm-stats.com/llm-updates)

**Alibaba — Qwen3 Coder Next (May 13, 2026)** — New coding-focused checkpoint in the Qwen3 family, dropped alongside the open-weight Qwen3.6-27B / Qwen3.6-35B which on the May 12 LiveBench snapshot scored 71.78 Coding Avg and 50.00 Agentic Coding Avg. [LLM-Stats](https://llm-stats.com/llm-updates) · [llm-stats news](https://llm-stats.com/ai-news)

**MiniMax — M2.5 Highspeed, M2.7 Highspeed, M2.7 (May 13, 2026)** — Three near-simultaneous releases focused on inference throughput. ⚠️ *single-source* [LLM-Stats](https://llm-stats.com/llm-updates)

**Inception — Mercury 2** — Described as the world's fastest reasoning language model, claiming >5× faster generation through parallel refinement. [Inception Labs blog](https://www.inceptionlabs.ai/blog/introducing-mercury-2)

**Anthropic — Claude "Mythos Preview" via Project Glasswing** — Anthropic granted major tech firms preview access to Claude Mythos for vulnerability discovery; during evaluation the model reportedly surfaced thousands of zero-day vulnerabilities. [MarketingProfs — AI Update, May 8 2026](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

**Meta — frontier model release + $115–135B 2026 capex plan** — Meta announced a proprietary frontier model and confirmed an annual AI capex range of $115–135B for 2026. ⚠️ *single-source* [MarketingProfs](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

---

### 2. Reasoning & Agents

**Sakana AI — RL Conductor (7B)** — A 7B-parameter orchestration model trained via reinforcement learning to route tasks dynamically across GPT-5, Claude Sonnet 4, Gemini 2.5 Pro, and open-source models — replacing rigid rule-based workflows. [MarketingProfs](https://www.marketingprofs.com/opinions/2026/54786/ai-update-may-15-2026-ai-news-and-views-from-the-past-week)

**Cloudflare — Autonomous Agents** — Cloudflare announced Agents that can autonomously create Cloudflare accounts, purchase domains, and deploy applications, framed as the move from "assistant tools" to "autonomous executors". [cogitx.ai overview](https://cogitx.ai/blog/ai-agents-complete-overview-2026)

**Google — Gemma 4 Multi-Token Prediction (MTP)** — MTP enables multiple-token prediction in lock-step with draft models for speculative decoding. ⚠️ *single-source* [cogitx.ai](https://cogitx.ai/blog/ai-agents-complete-overview-2026)

**NVIDIA + Hermes Agent on RTX / DGX Spark** — NVIDIA highlighted Hermes (a self-improving agent framework, reportedly >140k GitHub stars in 3 months) running on RTX and DGX Spark, paired with Qwen 3.6 27B/35B which NVIDIA claims outperform earlier 120B/400B variants. [NVIDIA blog](https://blogs.nvidia.com/blog/rtx-ai-garage-hermes-agent-dgx-spark/)

**Anthropic — Claude Managed Agents** — Out-of-the-box infrastructure for enterprises to build, deploy, and scale autonomous agents. [TechCrunch, May 4 2026](https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/)

**MCP standardisation** — Model Context Protocol is now widely supported across VS Code, JetBrains, and third-party platforms, cementing its position as the agent-to-tool integration standard. [cogitx.ai](https://cogitx.ai/blog/ai-agents-complete-overview-2026)

---

### 3. Multimodal AI

**Google — Gemini Omni (early app tests, May 12, 2026)** — Google's unreleased Gemini Omni video model surfaced in early Gemini app testing, supporting video remix, in-chat edits, and high-fidelity text-to-video; early testers rate it slightly above Runway Gen-3 on prompt adherence. Expected formal unveil at I/O 2026. [explainX](https://www.explainx.ai/blog/google-gemini-omni-video-model-io-2026)

**Top open VLMs as of mid-May 2026** — GLM-4.5V, GLM-4.1V-9B-Thinking, and Qwen2.5-VL-32B-Instruct lead community benchmarks on multimodal chat and visual reasoning. [BentoML](https://www.bentoml.com/blog/multimodal-ai-a-guide-to-open-source-vision-language-models)

**SenseNova-U1 (SenseNova + Light-AI)** — A native unified multimodal model based on the NEO-unify architecture that processes pixels and words jointly, posting competitive scores across multimodal benchmarks. ⚠️ *single-source* [arXiv listing](https://arxiv.org/list/cs.AI/recent)

---

### 4. Open Source & Ecosystem

**xAI — X Algorithm Open Source major update (May 15, 2026)** — First fully runnable end-to-end version of the X recommendation stack, including a "Mini Phoenix" transformer (256-dim embeddings, 4 heads, 2 layers, ~3 GB via Git LFS) under Apache 2.0; codebase ~57% Rust / 43% Python. Production weights remain closed. [Pillitteri write-up](https://pasqualepillitteri.it/en/news/2594/x-algorithm-open-source-may-2026)

**Open-weight coding model leaderboard (May 12, 2026 LiveBench snapshot)** — Kimi K2.6 Thinking leads open coding at 78.57 Coding Avg / 58.33 Agentic Coding Avg; DeepSeek-V4 Pro (1.6T total / 49B active) and Flash (284B / 13B active) — both 1M context, MIT-licensed — released April 24; MiMo-V2.5-Pro (1.02T / 42B active) from Xiaomi is the new open-weight flagship for agentic coding. [LLM-Stats](https://llm-stats.com/ai-news) · [Kilo.ai roundup](https://kilo.ai/open-source-models)

**vLLM TPU Backend** — vLLM's TPU path now uses JAX as the lowering layer for all vLLM models, even those originally written in PyTorch, delivering measurable throughput gains. [vLLM blog](https://blog.vllm.ai/2025/10/16/vllm-tpu.html)

**PyTorch/XLA 2.7** — Ships Pallas-based ragged paged attention with up to 5× speedup vs. the prior implementation for Llama-3-8B mixed prefill/decode, plus a JAX bridge. [PyTorch blog](https://pytorch.org/blog/pytorch-xla-2-7-release-usability-vllm-boosts-jax-bridge-gpu-build/)

**Hugging Face — State of Open Source: Spring 2026** — Latest blog quantifies South Korea's National Sovereign AI Initiative producing three simultaneously trending models on the Hub in February 2026, and revisits a year since the "DeepSeek moment". [HF blog](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026)

**Osaurus (May 15, 2026)** — Mac-native hybrid client that can route between local models (Ollama / Metal) and cloud APIs (OpenAI, Anthropic), keeping memory, files, and tools on-device by default. [TechCrunch](https://techcrunch.com/2026/05/15/osaurus-brings-both-local-and-cloud-ai-models-to-your-mac/)

---

### 5. AI Infrastructure & Systems

**Inference now dominates AI compute spend** — Early-2026 figures show inference workloads consuming >55% of AI-optimised infrastructure spending, projected to hit 70–80% by year-end. [SDxCentral](https://www.sdxcentral.com/analysis/ai-inferencing-will-define-2026-and-the-markets-wide-open/)

**Rack power-density step-changes** — Vera Rubin NVL144 systems are landing at 300+ kW/rack in 2026 (vs. Blackwell GB300's 163 kW); Rubin Ultra NVL576 projected >600 kW/rack by 2027. [Data Center Knowledge](https://www.datacenterknowledge.com/build-design/data-center-world-2026-ai-pushes-infrastructure-to-new-limits)

**Google Cloud Managed Lustre** — Now delivers 10 TB/s bandwidth, 10× year-on-year improvement. [Google Cloud blog](https://cloud.google.com/blog/products/compute/ai-infrastructure-at-next26)

**Kneron warning on inference bottleneck (May 12, 2026)** — Kneron flagged an impending inference-capacity crunch given how quickly serving demand is outpacing chip lead-times. ⚠️ *single-source* [Manila Times](https://www.manilatimes.net/2026/05/12/tmt-newswire/globenewswire/kneron-warns-the-ai-industry-is-approaching-a-massive-inference-infrastructure-bottleneck/2341273)

**Alphabet record Yen bond sale** — Funds earmarked for data-centre and AI-infrastructure expansion; signal of continued capex appetite despite rates pressure on AI equities this week. [Tastylive](https://www.tastylive.com/news-insights/the-daily-bond-selloff-oil-above-109-and-the-first-real-rates-test-for-ai)

---

### 6. Compute Hardware

**Cerebras IPO (May 14, 2026)** — Cerebras priced at $185/share (above range), raising ~$5.55B; shares opened >100% above the IPO price, valuing the company near $50B. WSE-3 wafer-scale inference engine continues to break records (1,000+ tok/s on Llama 3.1-405B). [Fortune](https://fortune.com/2026/05/14/cerebras-one-of-the-biggest-ipos-of-the-year/) · [Motley Fool](https://www.fool.com/investing/2026/05/13/should-you-buy-the-cerebras-ipo-heres-how-the-ai-c/)

**NVIDIA Vera Rubin platform — production update** — Seven new chips in full production (Vera CPU, Rubin GPU, NVLink 6 Switch, ConnectX-9 SuperNIC, BlueField-4 DPU, Spectrum-6 Ethernet switch, plus integrated NVIDIA Groq 3 LPU). Vendor partners ship Rubin-based systems in H2 2026; claims 10× lower inference token cost and 4× fewer GPUs for MoE training vs. Blackwell. NVIDIA Q1 FY27 earnings on May 20 will be the next live update. [NVIDIA newsroom](https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform)

**AMD MI400 / MI455X momentum** — MI400 ships H2 2026, ramping into 2027; CES 2026 unveiled the Helios AI server rack pairing 72× MI455X to challenge NVL72. AMD's MI430X carries 432 GB HBM4 at 19.6 TB/s. [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report)

**Intel hybrid AI processor** — Intel quietly reintroduced a hybrid AI processor to its roadmap, combining an x86 CPU with fixed-function AI acceleration and programmable IP; stock continues its run (up 33% in early May after doubling in April). [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd) · [CNBC](https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html)

**Applied Materials guidance** — >30% growth in semiconductor-equipment sales projected for 2026, driven by HBM and AI accelerator demand. ⚠️ *single-source* [Tastylive](https://www.tastylive.com/news-insights/the-daily-bond-selloff-oil-above-109-and-the-first-real-rates-test-for-ai)

---

### 7. Memory & Storage

**HBM4 production landscape** — HBM4 mass production has commenced in 2026 with 16-Hi stacks targeted for Q4 2026; full-year 2026 capacity reportedly sold out. Per-stack peaks: 3.3 TB/s bandwidth, 64 GB capacity, 2048-bit interface — roughly 2× HBM3E. Global HBM market projected $58B in 2026 vs. $38B in 2025. [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report) · [Introl blog](https://introl.com/blog/ai-memory-supercycle-hbm-2026)

**NVIDIA paying double for Samsung HBM4** — Reports indicate NVIDIA is paying roughly 2× prior HBM pricing for Samsung HBM4 modules at 3.3 TB/s; potential GPU ASP pass-through implications. [NotebookCheck](https://www.notebookcheck.net/Nvidia-may-raise-prices-as-it-pays-Samsung-double-for-future-HBM4-AI-memory-modules-with-3-3-TB-s-bandwidth.1172580.0.html)

**HBM Shift-Left testing (SemiEngineering, May 12, 2026)** — Memory vendors are pushing test steps earlier in the flow to preserve yield on rising HBM stack heights, trading higher test costs for better yields critical to AI GPU economics. [SemiEngineering](https://semiengineering.com/hbm-shifts-testing-left-to-preserve-ai-chip-yield/)

**CXL 3.1 mass production prep** — Samsung is preparing Q3 2026 mass production of CXL 3.1 modules; Marvell announced a 260-lane CXL switch for rack-level memory pooling, sampling Q3 2026. CXL is now present in >90% of newly shipped servers; KV-cache offload from GPU VRAM to CXL is the highest-impact near-term use case. [Korea Herald](https://www.koreaherald.com/article/10737182) · [Marvell newsroom](https://www.marvell.com/company/newsroom/marvell-next-gen-cxl-switch-memory-pooling-breaks-ai-memory-wall.html)

---

### 8. Networking & Interconnects

**POET Technologies + Lumilens — wafer-level photonic interposer (May 14, 2026)** — Strategic JDA on the Electrical-Optical Interposer (EOI), built on active-alignment-free wafer-scale optical-engine production. Engineering samples late 2026, ramp 2027, with a >$500M five-year cumulative purchase trajectory. [GlobeNewswire](https://www.globenewswire.com/news-release/2026/05/14/3294762/0/en/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks.html)

**UALink roadmap** — UALink 2.0 spec ahead of 1.0 silicon; Upscale AI targeting late-2026 first UALink switch; Supermicro / HPE early UALink-fabric systems target 2026 for multi-rack MI350X clusters. Two-tier model emerging: UALink intra-pod, UEC-Ethernet inter-pod. [HPCwire](https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/) · [The Register](https://www.theregister.com/on-prem/2026/04/07/ualink-delivers-20-spec-before-v-10-silicon-ships/5228485)

**NVIDIA Quantum-X InfiniBand** — Switches launching early 2026 at 115 Tb/s per switch, 144× 800 Gb/s ports. Spectrum-X Ethernet platform extends InfiniBand-like behaviour to Ethernet-based AI fabrics. [Network World](https://www.networkworld.com/article/4050881/nvidia-networking-roadmap-ethernet-infiniband-co-packaged-optics-will-shape-data-center-of-the-future.html)

**Ethernet trajectory** — Forecasters now expect 91% of AI workloads to run on Ethernet by 2029 as Ultra Ethernet (UEC) closes the gap with InfiniBand at scale. [DriveNets](https://drivenets.com/blog/why-infiniband-falls-short-of-ethernet-for-ai-networking/)

---

### 9. Compiler & Kernel Optimization

**ROCm 7.x — AOTriton + better Triton backend** — AMD has integrated AOTriton in ROCm 7.0 to pre-compile common kernels and reduce JIT jitter, while improving the Triton AMD backend and torch.compile graph compilation. [ROCm docs](https://rocm.docs.amd.com/en/latest/how-to/rocm-for-ai/inference-optimization/vllm-optimization.html)

**vLLM upgrades** — vLLM moved to CUDA 13.0 + PyTorch 2.11 default; XPU support on torch 2.11; gRPC serving, GPU-less render serving, and NGram GPU speculative decoding now in main. [vLLM releases](https://github.com/vllm-project/vllm/releases)

**Quantization snapshot (mid-2026)** — On open inference benchmarks: AWQ ~95% quality retention vs. FP16; Marlin-AWQ leads at 741 tok/s output throughput, Marlin-GPTQ at 712 tok/s — both beat FP16 baseline. GGUF remains the default for llama.cpp / Ollama CPU+GPU hybrid deployment. [Local AI Master roundup](https://localaimaster.com/blog/quantization-explained)

**CUDA kernel-generation research** — CUDA-L1 (contrastive RL for kernel optimisation), CUDA Agent (agentic RL kernel generation), and K-Search (co-evolved intrinsic world model search) are the three CUDA-kernel-synthesis lines being cited in this week's arXiv discussion. [arXiv listing](https://arxiv.org/list/cs.AI/recent)

---

### 10. AI Safety, Alignment & Policy

**Google catches AI-generated zero-day in the wild** — Google's Threat Intelligence Group disclosed (May 11, 2026) the first observed case of attackers using a Mythos-class model to generate a working zero-day exploit; Google said it blocked an attempted "mass exploitation event" this week. [Bloomberg](https://www.bloomberg.com/news/articles/2026-05-11/hackers-used-ai-to-build-zero-day-attack-google-researchers-say)

**CAISI evaluations with Google DeepMind, Microsoft, xAI** — The US Center for AI Standards and Innovation expanded its pre-release evaluation programme to cover Google DeepMind, Microsoft, and xAI (adding to existing OpenAI/Anthropic agreements). [CNBC, May 5 2026](https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html)

**Q1 2026 legal-AI hallucination sanctions hit record** — At least $145k in Q1 sanctions for AI-generated false citations, with a single $109,700 penalty in Oregon; Damien Charlotin's tracker now catalogues 1,353+ legal hallucination cases globally. [ComplianceHub.wiki](https://compliancehub.wiki/legal-ai-hallucination-reckoning-2026/)

**US export-control framework — Q2 2026 status** — January 2026 BIS rule shifted H200-/MI325X-equivalent exports to case-by-case review; AI OVERWATCH Act advanced by House Foreign Affairs (Jan 21); Remote Access Security Act (RASA) passed the House 369-22, extending export-control jurisdiction to remote GPU cloud access. [Mayer Brown briefing](https://www.mayerbrown.com/en/insights/publications/2026/01/administration-policies-on-advanced-ai-chips-codified)

**Constitutional-AI scale-up** — Anthropic's Claude 4.5 reportedly uses a ~200-principle constitution (up from ~50 in earlier generations) covering harmlessness, honesty, and helpfulness across diverse scenarios. ⚠️ *single-source* [Claude5 Hub](https://claude5.com/news/ai-safety-2026-alignment-research-breakthroughs)

**Automated red-teaming research** — 214,271 attack attempts across 30 LLM challenges show automated red-teaming achieving 69.5% success vs. 47.6% for manual attempts. [arXiv 2605.04019](https://arxiv.org/html/2605.04019v1)

---

### 11. Applications & Industry

**Anthropic + Goldman + Blackstone + Hellman & Friedman — $1.5B enterprise AI JV** — Anthropic and OpenAI separately announced joint ventures to deploy enterprise AI services. [CNBC, May 4 2026](https://www.cnbc.com/2026/05/04/anthropic-goldman-blackstone-ai-venture.html)

**SAP Autonomous Enterprise (Sapphire 2026, Orlando)** — Combines SAP Business AI Platform, SAP Autonomous Suite, and Joule Work, embedding autonomous agents directly into ERP workflows. [MEXC](https://www.mexc.com/news/1086381)

**MongoDB unified AI data platform (MongoDB London 2026)** — Single platform combining real-time DB, full-text and vector search, memory, embeddings, and reranker models for production agents. [PRNewswire](https://www.prnewswire.com/news-releases/mongodb-makes-enterprise-ai-production-ready-302764870.html)

**Oracle OCI Enterprise AI** — New platform layer for building, deploying, and scaling AI solutions, announced this week. [Oracle blog](https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-may-2026)

**Google "Googlebook" + Magic Pointer (May 12, 2026)** — A new Android-class device positioned as "designed for Gemini Intelligence" with a DeepMind-built Magic Pointer feature. [Google blog](https://blog.google/products-and-platforms/platforms/android/meet-googlebook/)

**Microsoft / OpenAI restructure** — Microsoft and OpenAI moved from exclusive to non-exclusive cloud-AI partnership, opening commercial competition. [MarketingProfs](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

**Coinbase 14% workforce cut tied to AI productivity** — Joins Oracle, Snap, IBM 2026 cohort of AI-linked restructurings. [MarketingProfs](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

**Embodied AI deployments** — Japan Airlines deployed humanoid robots at Haneda (May 2026) under a three-year operational commitment; Bessemer characterises the field as in a "GPT-2.5 moment for robotics". [Bessemer / DigitalTrends summary](https://www.digitaltrends.com/contributor-content/ready-or-not-embodied-ai-is-leaving-the-lab-and-entering-infrastructure/) · [The Robot Report](https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/)

**Snap / Perplexity $400M deal ended** — Confirmed terminated before broad rollout. [MarketingProfs](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

---

### 12. Research Highlights — Top Papers (8–15 May 2026)

| Paper | Authors / Lab | Key Contribution | Link |
|-------|--------------|-----------------|------|
| Litespark Inference on Consumer CPUs: Custom SIMD Kernels for Ternary Neural Networks | Independent | Ternary {-1,0,+1} weights + SIMD; matrix multiplies become add/subtract for consumer-CPU inference | [arXiv 2605.06485](https://arxiv.org/html/2605.06485v1) |
| LAMP: Look-Ahead Mixed-Precision Inference of Large Language Models | — | Look-ahead flagging of round-off-sensitive ops, up to 2 orders of magnitude accuracy gain with ~1% recomputation | [arXiv 2601.21623v2](https://arxiv.org/html/2601.21623v2) |
| You Snooze, You Lose: Automatic Safety Alignment Restoration through Neural Weight Translation | — | Method to repair safety alignment lost during fine-tuning via learned weight translation | [arXiv 2605.04992](https://arxiv.org/html/2605.04992v1) |
| Position: Safety and Fairness in Agentic AI Depend on Interaction Topology, Not on Model Scale or Alignment | — | Argues agentic systems should be treated as dynamical systems; safety determined by topology not weights | [arXiv 2605.01147](https://arxiv.org/abs/2605.01147) |
| Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours | — | Automated agentic red-teaming framework collapsing assessment cycle times | [arXiv 2605.04019](https://arxiv.org/html/2605.04019v1) |
| International AI Safety Report 2026 | Multi-author (international) | Synthesises capabilities, emerging risks, and safety status of general-purpose AI | [arXiv 2602.21012](https://arxiv.org/abs/2602.21012) |
| SenseNova-U1: Native Unified Multimodal Model | SenseNova + Light-AI | NEO-unify architecture: jointly process pixels + words for understanding and generation | [arXiv listing](https://arxiv.org/list/cs.AI/recent) |
| MinerU2.5: 1.2B-parameter Document Parsing VLM | Alibaba / collaborators | Coarse-to-fine parsing strategy hitting SOTA recognition accuracy with sub-2B params | [arXiv listing](https://arxiv.org/list/cs.AI/recent) |
| SlimQwen-23A2B: Structured Pruning + Progressive Distillation | Alibaba / MBZUAI / KAUST | 4× smaller model with 72% peak-memory reduction, 48% throughput gain | [arXiv listing](https://arxiv.org/list/cs.AI/recent) |
| Improving Efficiency of GPU Kernel Optimization Agents | — | Agentic RL pipeline for GPU kernel optimisation | [arXiv 2603.29010](https://arxiv.org/pdf/2603.29010) |

---

### Sources Consulted

- https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week
- https://www.marketingprofs.com/opinions/2026/54786/ai-update-may-15-2026-ai-news-and-views-from-the-past-week
- https://www.cnbc.com/2026/05/11/heres-how-artificial-intelligence-is-changing-boardrooms.html
- https://www.cnbc.com/2026/05/12/google-races-put-gemini-at-center-of-android-before-apples-ai-reboot.html
- https://www.cnbc.com/2026/05/13/palo-alto-ai-cyberattacks-mythos-gpt.html
- https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html
- https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html
- https://www.cnbc.com/2026/05/04/anthropic-goldman-blackstone-ai-venture.html
- https://llm-stats.com/ai-news
- https://llm-stats.com/llm-updates
- https://www.inceptionlabs.ai/blog/introducing-mercury-2
- https://venturebeat.com/technology/anthropic-finally-beat-openai-in-business-ai-adoption-but-3-big-threats-could-erase-its-lead
- https://fortune.com/2026/05/14/cerebras-one-of-the-biggest-ipos-of-the-year/
- https://fortune.com/2026/05/13/behold-the-googlebook/
- https://theaiinsider.tech/2026/05/14/anthropic-overtakes-openai-among-business-customers-as-it-courts-small-firms-and-eyes-950b-valuation/
- https://www.explainx.ai/blog/google-gemini-omni-video-model-io-2026
- https://www.bentoml.com/blog/multimodal-ai-a-guide-to-open-source-vision-language-models
- https://www.bentoml.com/blog/navigating-the-world-of-open-source-large-language-models
- https://pytorch.org/blog/pytorch-xla-2-7-release-usability-vllm-boosts-jax-bridge-gpu-build/
- https://github.com/vllm-project/vllm/releases
- https://blog.vllm.ai/2025/10/16/vllm-tpu.html
- https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026
- https://blog.google/innovation-and-ai/models-and-research/google-deepmind/measuring-agi-cognitive-framework/
- https://blog.google/products-and-platforms/platforms/android/meet-googlebook/
- https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
- https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer
- https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd
- https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report
- https://www.notebookcheck.net/Nvidia-may-raise-prices-as-it-pays-Samsung-double-for-future-HBM4-AI-memory-modules-with-3-3-TB-s-bandwidth.1172580.0.html
- https://introl.com/blog/ai-memory-supercycle-hbm-2026
- https://www.koreaherald.com/article/10737182
- https://www.marvell.com/company/newsroom/marvell-next-gen-cxl-switch-memory-pooling-breaks-ai-memory-wall.html
- https://www.globenewswire.com/news-release/2026/05/14/3294762/0/en/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks.html
- https://www.manilatimes.net/2026/05/12/tmt-newswire/globenewswire/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks/2343798
- https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/
- https://www.theregister.com/on-prem/2026/04/07/ualink-delivers-20-spec-before-v-10-silicon-ships/5228485
- https://www.networkworld.com/article/4050881/nvidia-networking-roadmap-ethernet-infiniband-co-packaged-optics-will-shape-data-center-of-the-future.html
- https://drivenets.com/blog/why-infiniband-falls-short-of-ethernet-for-ai-networking/
- https://rocm.docs.amd.com/en/latest/how-to/rocm-for-ai/inference-optimization/vllm-optimization.html
- https://localaimaster.com/blog/quantization-explained
- https://cogitx.ai/blog/ai-agents-complete-overview-2026
- https://www.bloomberg.com/news/articles/2026-05-11/hackers-used-ai-to-build-zero-day-attack-google-researchers-say
- https://compliancehub.wiki/legal-ai-hallucination-reckoning-2026/
- https://www.mayerbrown.com/en/insights/publications/2026/01/administration-policies-on-advanced-ai-chips-codified
- https://claude5.com/news/ai-safety-2026-alignment-research-breakthroughs
- https://arxiv.org/html/2605.04019v1
- https://arxiv.org/html/2605.06485v1
- https://arxiv.org/html/2601.21623v2
- https://arxiv.org/html/2605.04992v1
- https://arxiv.org/abs/2605.01147
- https://arxiv.org/abs/2602.21012
- https://arxiv.org/list/cs.AI/recent
- https://arxiv.org/pdf/2603.29010
- https://www.mexc.com/news/1086381
- https://www.prnewswire.com/news-releases/mongodb-makes-enterprise-ai-production-ready-302764870.html
- https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-may-2026
- https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/
- https://techcrunch.com/2026/05/15/osaurus-brings-both-local-and-cloud-ai-models-to-your-mac/
- https://semiengineering.com/hbm-shifts-testing-left-to-preserve-ai-chip-yield/
- https://pasqualepillitteri.it/en/news/2594/x-algorithm-open-source-may-2026
- https://smbtech.au/news/google-deepmind-releases-gemma-4-its-most-capable-open-source-ai-models/
- https://blogs.nvidia.com/blog/rtx-ai-garage-hermes-agent-dgx-spark/
- https://kilo.ai/open-source-models
- https://www.tastylive.com/news-insights/the-daily-bond-selloff-oil-above-109-and-the-first-real-rates-test-for-ai
- https://uvik.net/blog/python-ai-agent-frameworks/
- https://www.straive.com/blogs/top-agentic-ai-trends-to-watch-in-2026/
- https://insights.reinventing.ai/articles/ai-agents-open-source-tooling-launches-2026-05-14
- https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/
- https://www.digitaltrends.com/contributor-content/ready-or-not-embodied-ai-is-leaving-the-lab-and-entering-infrastructure/
- https://www.datacenterknowledge.com/build-design/data-center-world-2026-ai-pushes-infrastructure-to-new-limits
- https://cloud.google.com/blog/products/compute/ai-infrastructure-at-next26
- https://www.sdxcentral.com/analysis/ai-inferencing-will-define-2026-and-the-markets-wide-open/
- https://thehackernews.com/2026/05/how-ai-hallucinations-are-creating-real.html
- https://newsletter.semianalysis.com/p/cpus-are-back-the-datacenter-cpu

---

*Quality notes:*
- Items dated within the 8–15 May 2026 window are unmarked; older context dates (CES 2026, March/April releases) are included only where they directly underpin a development reported this week.
- ⚠️ *single-source* tags flag items confirmed in only one pass.
- A handful of arXiv IDs (e.g., 2605.xxxxx) are surfaced via search-engine excerpts; verify directly against the arXiv listing before citing externally.
