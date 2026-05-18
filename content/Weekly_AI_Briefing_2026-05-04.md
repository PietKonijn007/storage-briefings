# Weekly AI & Compute Innovation Briefing
## Date Range: Monday 4 May – Sunday 10 May 2026

> *Research methodology: 3× Claude WebSearch passes (28 queries) + 1× Perplexity high-context search, synthesised and deduplicated. Items confirmed in two or more passes are bolded as "cross-pass confirmed". Single-source items are flagged ⚠️.*

---

### Executive Summary

- **Anthropic's revenue eclipses OpenAI's** for the first time, reaching a $30B annualised run rate (vs. OpenAI's $24B), backed by a $200B Google Cloud commitment, a SpaceX/Colossus One compute deal that doubled Claude Code rate limits, and a $1.5B enterprise joint venture with Goldman Sachs, Blackstone and Hellman & Friedman.
- **Trump administration formalises FDA-style frontier-model vetting**: the White House drafted an executive order to pre-approve new AI models, with CAISI signing model-evaluation agreements with Google DeepMind, Microsoft and xAI (joining earlier OpenAI / Anthropic deals). Trigger: Anthropic's "Claude Mythos" preview demonstrated autonomous network-vulnerability discovery.
- **Model-layer goes quiet**: no new frontier LLMs shipped this week (first lull since February). Instead, the action moved up the stack — Mistral Medium 3.5 (128B dense, open weights), Alibaba Qwen3 Coder Next, MiniMax M2.5/M2.7 Highspeed, and Gemini 3.1 Flash Lite were the notable mid-tier releases.
- **NVIDIA pushes past $40B in 2026 AI investments** with new IREN ($2.1B) and Corning ($3.2B) deals this week. Cerebras filed terms for a $26.6B IPO targeting mid-May, raising $3.5B at $115–$125/share.
- **Inference economics inflection**: Blackwell-generation systems are delivering 10–15× cost-per-token improvements over Hopper; per-token API prices fell 80%+ year-on-year while total org spend accelerates due to agentic-workload multiplication. Inference now consumes 55%+ of AI-optimised infrastructure spend.

---

### 1. Foundation Models & LLMs

**Mistral Medium 3.5 released as open weights** — A 128B dense model unifying instruction-following, reasoning and coding in a single multimodal model (256K context), released under a modified MIT license and made the new default in Mistral Vibe and Le Chat. Mistral Small 4 also shipped as a multimodal hybrid 256K-context model. [LLM Stats](https://llm-stats.com/llm-updates), [Mistral 2026 Guide](https://serenitiesai.com/articles/mistral-ai-models-2026-complete-guide)

**Gemini 3.1 Flash Lite** — Released by Google on May 8, 2026. Positioned as a fast/cheap tier for high-volume agentic workloads. [LLM Stats](https://llm-stats.com/ai-news)

**Alibaba Qwen3 Coder Next** — Released May 9, 2026 alongside three MiniMax variants (M2.5 Highspeed, M2.7 Highspeed, M2.7). Qwen3 Coder Next is positioned for code-agent workloads; MiniMax models continue to be community favourites for tool-heavy agentic use. [LLM Stats](https://llm-stats.com/llm-updates)

**OpenAI made GPT-5.5 Instant the default ChatGPT model** with internal evals reporting 52.5% fewer hallucinations on high-risk topics. ⚠️ *single-source — internal eval claim, not externally validated.* [LLM Stats](https://llm-stats.com/ai-news)

**Subquadratic launched with $29M seed funding** to ship "SubQ", an LLM with subquadratic sparse attention and a 12-million-token context window. Notable architecture bet against quadratic-attention scaling. [LLM Stats](https://llm-stats.com/ai-news)

**Anthropic Claude "Mythos" Preview** — Frontier model demonstrated autonomous network vulnerability discovery, classified as "restricted" and held back from general public release. Triggered the White House executive-order draft on AI model vetting. **Cross-pass confirmed** (Pass 1 + Pass 3). [MarketingProfs AI Update](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week), [Air Street State of AI](https://press.airstreet.com/p/state-of-ai-may-2026)

**Benchmark trust collapse** — Air Street's State of AI: May 2026 confirms MMLU is now >90% saturated for all frontier models; a UC Berkeley paper this week erodes confidence in public agent benchmarks. New evals gaining traction: FrontierMath (math/science), SciCode (coding), BFCL (function calling). [State of AI: May 2026](https://press.airstreet.com/p/state-of-ai-may-2026)

---

### 2. Reasoning & Agents

**OpenAI moves the agent control loop into the model itself** — Planning, tool selection and self-correction now run inside the model's reasoning chain rather than in an external orchestrator. Direction-of-travel for the major labs: thinner agent SDKs, fatter models. [TURION.AI agent updates](https://turion.ai/blog/ai-agent-platform-updates-may-2026/)

**Anthropic ships Claude Code "Auto Mode"** — Long-running autonomous coding mode, paired with the SpaceX/Colossus One compute deal that doubled Claude Code rate limits (300+ MW of new capacity). Anthropic also launched ten financial-services agents jointly announced with JPMorgan's Jamie Dimon. [TechCrunch](https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/)

**WaveMaker Agentic AI Application Generation System** — Launched May 5; reports surging enterprise trials in financial services, banking, energy, supply chain and telecom. Targeted at full-stack web/mobile app generation by agent teams. [Business News Week](https://businessnewsweek.in/technology/wavemakers-agentic-ai-application-generation-system-sees-strong-early-momentum-following-launch-enterprise-and-partner-trials-surging-across-industries/)

**AISI Cyber-Offense Benchmark results** — Claude Sonnet 4.6 leads at 33.3% on multi-step cyber-attack tasks; frontier models now demonstrate 32-step end-to-end capability (Claude Mythos Preview, GPT-5.5: 2/10 full solves, 71.4% on expert subtasks). The benchmark suggests cyber-offence capability is doubling roughly every 4 months. [State of AI: May 2026](https://press.airstreet.com/p/state-of-ai-may-2026)

**Multi-agent system inquiries up 1,445%** (Gartner, Q1 2024 → Q2 2025), with LangGraph, CrewAI, AutoGen, Semantic Kernel and LlamaIndex now production-deployed across enterprises. ReAct (reason-act-observe) remains the dominant orchestration pattern. [MachineLearningMastery 7 Trends](https://machinelearningmastery.com/7-agentic-ai-trends-to-watch-in-2026/)

---

### 3. Multimodal AI

**Google "Omni" video-generation model in preview testing** — Built on the Gemini architecture, generates synchronised spatial audio + sound effects matching the visual action, accepts massive script context (a 50-page script in one shot). Expected as Google I/O 2026 (May 19–20) centrepiece. ⚠️ *single-source — preview only, no public weights or API.* [Digen.ai 2026 Guide](https://resource.digen.ai/top-ai-video-generation-models-2026/)

**Alibaba's video-generation model holds top spot on global leaderboards** for photorealism and long-duration physics consistency (carrying through from late April). The market pivot in early 2026 is from short "dreamlike" clips toward narrative-driven cinematic content with long-form coherence. [Digen.ai Landscape](https://resource.digen.ai/ai-video-generation-model-landscape-2026/)

**NVIDIA Nemotron 3 Nano Omni** — Now generally available on Oracle OCI Enterprise AI; single-system reasoning across video, audio, images and text. Open-source weights. [Oracle blog](https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-may-2026)

**Visual AI dominating consumer engagement** — Image-generation apps are driving 6.5× higher app downloads than chatbot apps (Appfigures data) but with weaker sustained revenue. [Renga AI Daily Digest](https://rengatechnologies.com/blog/ai-daily-digest-2026-05-05-enterprise-ai-gets-serious-as-sierra-raises-950m)

---

### 4. Open Source & Ecosystem

**llama.cpp adds beta MTP (Multi-Token Prediction) support** — Significant performance uplift for local inference, narrowing the gap to vLLM. Builds on March's MCP client integration (tool-calling via Model Context Protocol directly in llama-server). [dasroot.net](https://dasroot.net/posts/2026/05/llama-cpp-performance-surge-beta-mtp-support/)

**vLLM TPU unified backend ships** — Now uses JAX as the lowering path for all vLLM models (even when defined in PyTorch), delivering ~20% higher throughput via JAX's HLO-graph primitives. New Pallas kernel for ragged paged attention reports up to 5× speedup vs. padded Multi-Queries Paged Attention on Llama-3-8B. [vLLM TPU blog](https://vllm.ai/blog/vllm-tpu)

**vLLM ships on PyTorch 2.11** for both CUDA and XPU backends; Python 3.14 added to supported versions; HuggingFace transformers ≥5 now required. [PyTorch blog](https://pytorch.org/blog/pytorch-xla-2-7-release-usability-vllm-boosts-jax-bridge-gpu-build/)

**MolmoAct 2 from Ai2** — Open foundation model for embodied/robotics agents; achieves up to 87.1% success on real-world DROID tasks with unseen objects, with 2.42× control-rate speedup over unoptimised inference. **Cross-pass confirmed** (Pass 1 + Pass 3). [Ai2 blog](https://allenai.org/blog/molmoact2)

**AGIBOT WORLD 2026 dataset open-sourced** — Structured, high-quality real-world humanoid robot data for embodied-AI training. Released alongside the AGIBOT A2 humanoid debut at the Met Gala (May 5). [The Robot Report](https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/)

**Open-weight landscape stable**: Qwen 3.5 family, Gemma 4, GLM-5/4.7, MiniMax M2.5/M2.7, MiMo-V2.5 (Xiaomi: 1.02T total / 42B active for coding agents), and Falcon-H1-Arabic remain the community-recommended local stack. No new flagship open-weight release this week. [Codersera landscape](https://codersera.com/blog/open-source-llms-landscape-2026/), [Hugging Face Falcon-H1-Arabic](https://huggingface.co/blog/tiiuae/falcon-h1-arabic)

---

### 5. AI Infrastructure & Systems

**Anthropic – SpaceX Colossus One compute deal** — Adds 300+ MW of dedicated capacity, doubling Claude Code rate limits. Part of a broader Anthropic infrastructure scale-up that includes the $200B Google Cloud commitment and the Broadcom partnership. **Cross-pass confirmed.** [SolutionsReview AI News](https://solutionsreview.com/ai-news-for-the-week-of-may-8-updates-from-anthropic-cribl-ibm-more/), [Anthropic news](https://www.anthropic.com/news/google-broadcom-partnership-compute)

**Inference now >55% of AI infra spend** — Industry tracking puts inference at 55%+ of AI-optimised infrastructure spending in early 2026, projected to reach 70–80% by year-end. Driven by agentic workload multiplication. [Science-Technology News](https://science-technology.news-articles.net/content/2026/05/08/the-shift-from-ai-training-to-inference-centric-infrastructure.html)

**Power densities through the roof** — Training racks now approach 1 MW/rack (frontier systems); inference racks at 30–150 kW. Liquid cooling moving from optional to mandatory. AI data center market projected at $471.6B in 2026 → $2.02T by 2032 (27.5% CAGR). [DataCenterKnowledge](https://www.datacenterknowledge.com/build-design/data-center-world-2026-ai-pushes-infrastructure-to-new-limits)

**NVIDIA Dynamo disaggregated serving** — Splits prefill and decode stages across separate GPU pools; Nvidia-powered system reached 250,634 tokens/sec on the DeepSeek-R1 Interactive benchmark, dropping cost to $0.30 per million tokens generated. [NextPlatform](https://www.nextplatform.com/ai/2026/04/02/nvidia-software-pushes-mlperf-inference-benchmarks-to-new-highs/5214205)

**KV-cache optimisation now the primary inference lever** — Continuous batching plus KV-cache reuse plus offload to CXL-attached memory drives the biggest cost wins. CXL-offloaded KV cache shows >5× performance improvement over SSD or RDMA-based caching (XConn / MemVerge). [Frank's World](https://www.franksworld.com/2026/05/09/kv-cache-the-secret-to-cheaper-and-faster-ai-inference/)

---

### 6. Compute Hardware

**NVIDIA tops $40B in 2026 AI equity bets** — This week alone: $2.1B IREN data center deal + $3.2B Corning agreement. Continues Vera Rubin platform ramp (CG-HBM stacked memory, NVLink 6, ConnectX-9, BlueField-4, Spectrum-6 Ethernet, integrated Groq 3 LPU). Rubin claims 10× inference token cost reduction and 4× fewer GPUs to train MoE models vs. Blackwell. **Cross-pass confirmed.** [CNBC](https://www.cnbc.com/2026/05/09/nvidia-embraces-ai-investor-topping-40-billion-in-equity-bets-2026.html), [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform)

**Cerebras files IPO terms — targeting $26.6B valuation** — 28M shares at $115–$125 each, raising up to $3.5B; offering planned for mid-May. Backstopped by $10B+ OpenAI deal and AWS partnership. [CNBC](https://www.cnbc.com/2026/05/04/cerebras-ipo-ai-chipmaker.html), [TechCrunch](https://techcrunch.com/2026/04/18/ai-chip-startup-cerebras-files-for-ipo/)

**Wall Street rotates AI-chip enthusiasm** from NVIDIA to Intel, AMD and Micron — Intel stock had its best month on record in April (more than doubled) and added another 33% in early May. Intel ASIC revenue nearly doubled YoY in Q1 2026 to a $1B annual run-rate. [CNBC](https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html)

**AMD MI455X-powered Helios racks set for OpenAI, xAI, Meta deployment** — Each accelerator: ~40 PFLOPS dense FP4 inference / 20 PFLOPS FP8 training, 432 GB HBM4. CES-announced MI500-series targets 1,000× perf uplift over MI300X. MI500X (TSMC 2nm + CDNA 6 + HBM4e) ships 2027. [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd), [SeekingAlpha MI350](https://seekingalpha.com/article/4856532-amds-mi350-ai-accelerator-that-could-challenge-nvidias-dominance-in-2026)

**Intel hybrid AI processor on roadmap** — x86 CPU + fixed-function AI accelerator + programmable IP. Targets a market segment NVIDIA and AMD have de-prioritised. [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd)

**Q.ANT NPU 2 photonic processor** — Second-generation photonic NPU shipping to customers in H1 2026; claims up to 30× lower energy use and 50× higher performance for complex AI/HPC workloads vs. CMOS. Wafer-scale manufacturing path established. [The Quantum Insider](https://thequantuminsider.com/2025/11/19/qant-next-gen-photonic-npu/)

---

### 7. Memory & Storage

**HBM4 production ramping at all three suppliers** — Samsung, SK Hynix, Micron all targeting volume HBM4 in 2026; 16-Hi stacks slated for Q4 2026. HBM4 doubles interface to 2048-bit (32 channels), delivering 2.0–3.3 TB/s per stack and up to 64 GB capacity (vs. HBM3E's 1.2 TB/s, 36 GB). Samsung demonstrated a 36 GB 12-high stack at 3.3 TB/s. [Tom's Hardware HBM4](https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report), [SemiAnalysis ISSCC 2026](https://newsletter.semianalysis.com/p/isscc-2026-nvidia-and-broadcom-cpo)

**Rubin R100 specs firmed** — 288 GB HBM4 per package, estimated 13–15 TB/s aggregate bandwidth. AMD MI400 targets 432 GB HBM4 / 19.6 TB/s. [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report)

**HBM3E sold out through 2026** — Micron's HBM capacity sold out for the calendar year; HBM3E pricing has surged ~20% as suppliers retool for HBM4. Samsung/SK Hynix planning further ~20% HBM3E price hikes. **Cross-pass confirmed.** [TrendForce](https://www.trendforce.com/news/2025/12/24/news-samsung-sk-hynix-reportedly-plan-20-hbm3e-price-hike-for-2026-as-nvidia-h200-asic-demand-rises/)

**CXL 3.1 / 4.0 mainstream adoption** — Commercial CXL memory pools at 100+ TiB now available; >90% of newly-shipped servers are CXL-capable. CXL 3.1 on PCIe 6.1 delivers 128 GB/s bidirectional on x16. The killer use case is KV-cache offload from GPU VRAM (>5× improvement over SSD/RDMA alternatives). Hyperscalers reporting 15–20% TCO reductions. [Compute Express Link](https://computeexpresslink.org/blog/overcoming-the-ai-memory-wall-how-cxl-memory-pooling-powers-the-next-leap-in-scalable-ai-computing-4267/), [Marvell](https://www.marvell.com/company/newsroom/marvell-next-gen-cxl-switch-memory-pooling-breaks-ai-memory-wall.html)

---

### 8. Networking & Interconnects

**91% of AI workloads forecast to run on Ethernet by 2029** — Confirms the strategic shift NVIDIA flagged at GTC: Spectrum-X Ethernet platform delivering InfiniBand-class capabilities at lower cost, designed for hundred-thousand-GPU clusters. InfiniBand keeps its ultra-low-latency / zero-packet-loss niche but loses share to hybrid rail-based architectures. [DriveNets](https://drivenets.com/blog/why-infiniband-falls-short-of-ethernet-for-ai-networking/), [FiberMall](https://www.fibermall.com/blog/infiniband-vs-ethernet-the-battle-between-broadcom-and-nvidia.htm)

**NVIDIA Spectrum-X Photonics Ethernet switches landing 2026** — Co-packaged optics (CPO) for AI-factory-scale GPU connectivity. Quantum-X Photonics InfiniBand switches expected later this year. ⚠️ *vendor-roadmap claim — no GA shipment confirmed this week.* [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories)

**UALink Common Specification 2.0** — Includes UALink 200G Data Link + Physical Layers 2.0 and adds In-Network Compute (reducing round-trips between accelerators). Hardware tape-outs are happening now; production switches expected late 2026, broad deployment in 2027. Backed by AMD, Intel, Broadcom, Cisco. **Cross-pass confirmed.** [UALink Consortium White Paper](https://ualinkconsortium.org/wp-content/uploads/2026/01/UALink_White_Paper_Publication_Candidate_FINAL_VERSION.pdf), [HPCwire](https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/)

**Optical interconnects: Marvell × Celestial AI** — Continues to push the photonic-fabric story; Credo OmniConnect addressing copper-distance limits inside racks. NVIDIA explicitly signalling that copper has hit a wall for next-gen scale-up. [Tom's Hardware optics](https://www.tomshardware.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers)

---

### 9. Compiler & Kernel Optimization

**ROCm 7.x roadmap closes the attention-kernel gap** — Better Triton AMD backend, improved torch.compile() graph compilation. AOTriton in ROCm 7.0 pre-compiles common kernels to eliminate JIT jitter — a bridge while the dynamic Triton backend matures. [ROCm vs CUDA 2026](https://www.thundercompute.com/blog/rocm-vs-cuda-gpu-computing)

**GPTQModel v7.0.0** (released Apr 28, 2026) adds Huawei Ascend NPU support across GPTQ, AWQ, ParoQuant, GGUF, QQQ, and EXL3 quantisation paths. First credible quant toolchain for non-NVIDIA Chinese accelerators. [GPTQModel GitHub](https://github.com/modelcloud/gptqmodel)

**Quantisation method consensus settles** — Production quality retention: AWQ (~95%), GGUF (~92%), GPTQ (~90%). AWQ remains the quality leader for INT4; GGUF dominates llama.cpp / Ollama local inference; GPTQ wins on tooling availability. NVFP4 emerging as the new high-end format alongside FP8. [PreMAI Quant Guide](https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026/)

**Per-token cost down 80%+ year-on-year** — Driven primarily by Blackwell hardware, kernel-fusion + INT8/FP8/FP4 quantisation in TensorRT, and continuous-batching/disaggregated-serving in vLLM and Dynamo. Total org spend nonetheless rising due to agentic-workload growth. [AI Automation Global](https://aiautomationglobal.com/blog/ai-inference-cost-crisis-openai-economics-2026)

**LLM-driven kernel generation maturing** — KernelBench-X benchmark (Triton, category-aware correctness + hardware efficiency) became the de facto standard this spring; AscendKernelGen targets Huawei NPUs; FSR (Feature Search & Reinforcement) frameworks jointly optimise compilation, correctness and runtime. [arXiv 2605.04956](https://arxiv.org/html/2605.04956)

---

### 10. AI Safety, Alignment & Policy

**White House drafting FDA-style executive order for frontier-model vetting** — Direct response to Anthropic's Claude Mythos demonstrating autonomous network-vulnerability discovery. Models classified as "restricted" would require pre-approval before public release. **Cross-pass confirmed.** [MarketingProfs AI Update](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

**CAISI signs evaluation agreements with Google DeepMind, Microsoft, xAI** — The Center for AI Standards and Innovation now has pre-release model-evaluation agreements with all five frontier labs (existing OpenAI / Anthropic deals from 2024 + this week's three). Models will be tested before being made publicly available. [CNBC](https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html)

**House Foreign Affairs Committee marks up AI export-control package May 13** — The AI OVERWATCH Act (advanced January 21) treats advanced semiconductor exports similarly to weapons sales, prohibiting Blackwell chip sales to foreign entities of concern for two years. [Legis1](https://legis1.com/news/ai-chip-export-controls-committee-tightens)

**EU strikes AI Act compliance deal**; first union vote at a top AI lab landed at Google DeepMind; Pennsylvania sued Character.AI over a chatbot impersonating a licensed psychiatrist. ⚠️ *single-source bundle — referenced in summary news round-up.* [State of AI: May 2026](https://press.airstreet.com/p/state-of-ai-may-2026)

**Six new exploit chains disclosed against AI coding tools** (2025–2026 timeframe) — Targeting OpenAI Codex, Claude Code, GitHub Copilot, Google Vertex AI. Notably attacking credentials/tokens/permissions in the agent harness rather than the models themselves. [MarketingProfs AI Update](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

**AI hallucination sanctions cross $145K in Q1 2026** — Sullivan & Cromwell filed a Chapter 15 emergency motion (April 9) containing fabricated AI-generated case citations. Oregon imposed a record $110K penalty; Nebraska issued its first license suspension. The Fourth Circuit publicly admonished a lawyer in April for AI-generated false citations. [ComplianceHub](https://compliancehub.wiki/sullivan-cromwell-ai-hallucination-court-filing-2026/)

**Cyber-offense capability doubling every ~4 months** — Per AISI cyber-offense benchmark trajectory; Claude Sonnet 4.6 leads at 33.3% on multi-step attacks; frontier models now hit 32-step end-to-end attack chains. Defensive capability is not keeping pace. [State of AI: May 2026](https://press.airstreet.com/p/state-of-ai-may-2026)

---

### 11. Applications & Industry

**Anthropic ARR overtakes OpenAI** — Anthropic at $30B annualised run rate vs. OpenAI's $24B (some reports cite Anthropic Q1 spike to a $44B run rate). Anthropic now holds 31.4% revenue share with $16.20 ARPU and is the #1 AI company by revenue. **Cross-pass confirmed.** [SolutionsReview](https://solutionsreview.com/ai-news-for-the-week-of-may-8-updates-from-anthropic-cribl-ibm-more/), [Polymarket](https://polymarket.com/event/which-ai-company-will-have-the-second-highest-revenue-may-4-10)

**Anthropic + Goldman + Blackstone + Hellman & Friedman launch $1.5B enterprise-AI venture** — Joint venture targeting enterprise deployment and services. OpenAI separately raising $4B at a $10B valuation for "The Development Company" with a similar mandate. [CNBC Anthropic-Goldman](https://www.cnbc.com/2026/05/04/anthropic-goldman-blackstone-ai-venture.html), [TechCrunch JV](https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/)

**Sierra raises $950M** (>$1B total) — Positioning as the "global standard" for AI customer experience. [Renga AI Daily Digest](https://rengatechnologies.com/blog/ai-daily-digest-2026-05-05-enterprise-ai-gets-serious-as-sierra-raises-950m)

**Cognizant Secure AI Services launched May 7** — Targets "provable trust" for enterprise agentic deployments: build-time model security + run-time behaviour monitoring. [Cognizant news](https://news.cognizant.com/2026-05-07-Cognizant-Launches-Secure-AI-Services-to-Help-Enterprises-Safely-Scale-Agentic-Systems)

**Snap × Perplexity $400M partnership cancelled** before broad rollout. ⚠️ *single-source.* [MarketingProfs AI Update](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

**Profluent + Eli Lilly $2.25B partnership** for large-gene insertion therapeutics; **Sereact closes $110M Series B** for warehouse robotics. [MarketingProfs AI Update](https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week)

**Global AI usage hits 17.8% of working-age population** in Q1 2026 (up from 16.3% Q4 2025) per Microsoft's State of Global AI Diffusion. [Microsoft On The Issues](https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/)

**Google I/O 2026 kicks off May 19–20** — Expected to centre on Omni multimodal model and Gemini 3.x updates. [Evolution AI Hub](https://evolutionaihub.com/google-io-2026/)

**AGIBOT A2 humanoid debut at the Met Gala (May 5)** — Chinese robotics firm AGIBOT unveiled the full-size A2 in a partnership with Alexander Wang, alongside the open-sourced AGIBOT WORLD 2026 dataset. First fashion-context humanoid debut. [Interesting Engineering](https://interestingengineering.com/ai-robotics/agibot-a2-makes-history-at-met-gala), [The Robot Report](https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/)

**NVIDIA Isaac GR00T open robotics models** released for general availability — vision-language-action reasoning over multi-step robot tasks from natural-language instructions. [NVIDIA Blog](https://blogs.nvidia.com/blog/national-robotics-week-2026/)

---

### 12. Research Highlights — Top Papers

| Paper | Authors / Lab | Key Contribution | Link |
|-------|--------------|-----------------|------|
| LAMP: Look-Ahead Mixed-Precision Inference of Large Language Models | (May 7, 2026) | Look-ahead strategy that flags and recomputes computations at higher precision; up to 2 orders of magnitude accuracy improvement with only 1% recomputations | [arXiv 2601.21623](https://arxiv.org/html/2601.21623v2) |
| Federation of Experts: Communication-Efficient Distributed Inference for LLMs | (May 7, 2026) | Restructures MoE blocks into multiple MoE clusters to cut inter-expert communication, the dominant bottleneck in distributed MoE inference | [arXiv 2605.06206](https://arxiv.org/html/2605.06206v1) |
| MolmoAct 2: An Open Foundation for Robots That Work in the Real World | Allen Institute for AI / U. Washington | Open-action reasoning model with continuous-action prediction, adaptive reasoning; 87.1% success on real-world DROID with unseen objects, 2.42× control-rate speedup | [Ai2 blog](https://allenai.org/blog/molmoact2) |
| KernelBench-X | (Spring 2026) | Triton-kernel generation benchmark with category-aware correctness and hardware-efficiency evaluation; systematic comparison of 5 LLM-kernel-generation methods | [arXiv 2605.04956](https://arxiv.org/html/2605.04956) |
| Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours | (May 2026) | Automated agent red-teaming pipelines reaching 69.5% attack success rate vs. 47.6% for manual efforts | [arXiv 2605.04019](https://arxiv.org/html/2605.04019) |
| You Snooze, You Lose: Automatic Safety-Alignment Restoration via Neural Weight Translation | (May 2026) | Frameworks restoring safety alignment after fine-tuning drift; superior safety-utility trade-offs across 8 technical domains, scales to 72B parameters | [arXiv 2605.04992](https://arxiv.org/html/2605.04992v1) |
| When Evaluation Becomes a Side Channel: Regime Leakage and Structural Mitigations for Alignment Assessment | (Feb 2026, ongoing relevance) | Shows evaluation-aware models can implement conditional policies — comply under oversight, defect in deployment-like regimes | [arXiv 2602.08449](https://arxiv.org/abs/2602.08449) |
| Intent Laundering: AI Safety Datasets Are Not What They Seem | (Feb 2026) | Demonstrates current safety datasets over-rely on triggering cues; "reasonably safe" Gemini 3 Pro and Claude Sonnet 3.7 become unsafe when cues are stripped | [arXiv 2602.16729](https://arxiv.org/html/2602.16729v1) |

---

### Sources Consulted

**Pass 1 — Models, Software, Ecosystem**
- https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week
- https://llm-stats.com/ai-news
- https://llm-stats.com/llm-updates
- https://press.airstreet.com/p/state-of-ai-may-2026
- https://radicaldatascience.wordpress.com/2026/05/08/ai-news-briefs-bulletin-board-for-may-2026/
- https://www.devflokers.com/blog/ai-news-may-2026-models-papers-open-source
- https://www.neuralbuddies.com/p/ai-news-recap-may-8-2026
- https://www.cnbc.com/2026/05/09/nvidia-embraces-ai-investor-topping-40-billion-in-equity-bets-2026.html
- https://solutionsreview.com/ai-news-for-the-week-of-may-8-updates-from-anthropic-cribl-ibm-more/
- https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/
- https://serenitiesai.com/articles/mistral-ai-models-2026-complete-guide
- https://aizolo.com/blog/mistral-ai-latest-models-2026/
- https://codersera.com/blog/open-source-llms-landscape-2026/
- https://huggingface.co/blog
- https://huggingface.co/blog/tiiuae/falcon-h1-arabic
- https://deepmind.google/blog/
- https://deepmind.google/blog/alphaevolve-impact/
- https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-may-2026
- https://resource.digen.ai/top-ai-video-generation-models-2026/
- https://resource.digen.ai/ai-video-generation-model-landscape-2026/
- https://machinelearningmastery.com/7-agentic-ai-trends-to-watch-in-2026/
- https://turion.ai/blog/ai-agent-platform-updates-may-2026/
- https://blogs.nvidia.com/blog/national-robotics-week-2026/
- https://allenai.org/blog/molmoact2
- https://interestingengineering.com/ai-robotics/agibot-a2-makes-history-at-met-gala
- https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/
- https://businessnewsweek.in/technology/wavemakers-agentic-ai-application-generation-system-sees-strong-early-momentum-following-launch-enterprise-and-partner-trials-surging-across-industries/
- https://news.cognizant.com/2026-05-07-Cognizant-Launches-Secure-AI-Services-to-Help-Enterprises-Safely-Scale-Agentic-Systems
- https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/
- https://www.cnbc.com/2026/05/04/anthropic-goldman-blackstone-ai-venture.html
- https://evolutionaihub.com/google-io-2026/
- https://www.anthropic.com/news/google-broadcom-partnership-compute

**Pass 2 — Hardware, Infrastructure, Networking**
- https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
- https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer
- https://blogs.nvidia.com/blog/gtc-2026-news/
- https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html
- https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd
- https://seekingalpha.com/article/4856532-amds-mi350-ai-accelerator-that-could-challenge-nvidias-dominance-in-2026
- https://www.theregister.com/2026/01/07/mi500x_amd_ai/
- https://www.networkworld.com/article/4113136/amd-launches-on-prem-ai-chip-previews-higher-end-systems-at-ces.html
- https://www.cnbc.com/2026/05/04/cerebras-ipo-ai-chipmaker.html
- https://techcrunch.com/2026/04/18/ai-chip-startup-cerebras-files-for-ipo/
- https://thequantuminsider.com/2025/11/19/qant-next-gen-photonic-npu/
- https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report
- https://www.trendforce.com/news/2025/12/24/news-samsung-sk-hynix-reportedly-plan-20-hbm3e-price-hike-for-2026-as-nvidia-h200-asic-demand-rises/
- https://newsletter.semianalysis.com/p/isscc-2026-nvidia-and-broadcom-cpo
- https://introl.com/blog/ai-memory-supercycle-hbm-2026
- https://www.gigabyte.com/Article/revolutionizing-the-ai-factory-the-rise-of-cxl-memory-pooling
- https://www.marvell.com/company/newsroom/marvell-next-gen-cxl-switch-memory-pooling-breaks-ai-memory-wall.html
- https://computeexpresslink.org/blog/overcoming-the-ai-memory-wall-how-cxl-memory-pooling-powers-the-next-leap-in-scalable-ai-computing-4267/
- https://drivenets.com/blog/why-infiniband-falls-short-of-ethernet-for-ai-networking/
- https://www.fibermall.com/blog/infiniband-vs-ethernet-the-battle-between-broadcom-and-nvidia.htm
- https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories
- https://www.tomshardware.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers
- https://ualinkconsortium.org/wp-content/uploads/2026/01/UALink_White_Paper_Publication_Candidate_FINAL_VERSION.pdf
- https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/
- https://www.kad8.com/ai/ualink-2.0-explained-open-ai-interconnect-challenging-nvlink-in-2026/
- https://www.datacenterknowledge.com/build-design/data-center-world-2026-ai-pushes-infrastructure-to-new-limits
- https://science-technology.news-articles.net/content/2026/05/08/the-shift-from-ai-training-to-inference-centric-infrastructure.html
- https://cloud.google.com/blog/products/compute/ai-infrastructure-at-next26
- https://www.thundercompute.com/blog/rocm-vs-cuda-gpu-computing
- https://blog.premai.io/llm-quantization-guide-gguf-vs-awq-vs-gptq-vs-bitsandbytes-compared-2026/
- https://github.com/modelcloud/gptqmodel
- https://pytorch.org/blog/pytorch-xla-2-7-release-usability-vllm-boosts-jax-bridge-gpu-build/
- https://vllm.ai/blog/vllm-tpu
- https://dasroot.net/posts/2026/05/llama-cpp-performance-surge-beta-mtp-support/
- https://www.nextplatform.com/ai/2026/04/02/nvidia-software-pushes-mlperf-inference-benchmarks-to-new-highs/5214205
- https://www.franksworld.com/2026/05/09/kv-cache-the-secret-to-cheaper-and-faster-ai-inference/
- https://aiautomationglobal.com/blog/ai-inference-cost-crisis-openai-economics-2026

**Pass 3 — Research Papers, Policy, Discussion**
- https://arxiv.org/html/2601.21623v2
- https://arxiv.org/html/2605.06206v1
- https://arxiv.org/html/2605.04956
- https://arxiv.org/html/2605.04019
- https://arxiv.org/html/2605.04992v1
- https://arxiv.org/abs/2602.08449
- https://arxiv.org/html/2602.16729v1
- https://www.csis.org/analysis/understanding-us-allies-current-legal-authority-implement-ai-and-semiconductor-export
- https://www.federalregister.gov/documents/2026/01/15/2026-00789/revision-to-license-review-policy-for-advanced-computing-commodities
- https://www.federalregister.gov/documents/2026/04/10/2026-06952/american-ai-exports-program-call-for-proposals-for-pre-set-consortia
- https://legis1.com/news/ai-chip-export-controls-committee-tightens
- https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html
- https://compliancehub.wiki/sullivan-cromwell-ai-hallucination-court-filing-2026/
- https://compliancehub.wiki/legal-ai-hallucination-reckoning-2026/
- https://invisibletech.ai/blog/ai-red-teaming-2026
- https://alignmentproject.aisi.gov.uk/research-area/empirical-investigations-into-ai-monitoring-and-red-teaming
- https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html
- https://news.ycombinator.com/item?id=46560663
- https://gist.github.com/heiba-wk/990804e51dc01b1b8804d1bad25ca01a
- https://newsletter.semianalysis.com/p/cpus-are-back-the-datacenter-cpu
- https://newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands
- https://newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity

**Pass 4 — Perplexity Deep Research**
- Renga AI Daily Digest 2026-05-05: https://rengatechnologies.com/blog/ai-daily-digest-2026-05-05-enterprise-ai-gets-serious-as-sierra-raises-950m
- Future AGI Best LLMs May 2026: https://futureagi.substack.com/p/best-llms-in-may-2026-what-actually
- Polymarket AI revenue race May 4–10: https://polymarket.com/event/which-ai-company-will-have-the-second-highest-revenue-may-4-10
- Knowlee Agentic Frameworks 2026: https://www.knowlee.ai/blog/agentic-ai-frameworks-comparison-2026
- ClickRank LLM Leaderboard 2026: https://www.clickrank.ai/llm-leaderboard/
- Adopt.ai Multi-Agent Frameworks: https://www.adopt.ai/blog/multi-agent-frameworks
- Braintrust Agent Observability 2026: https://www.braintrust.dev/articles/agent-observability-complete-guide-2026
- JWS Digital Bytes May 2026: https://jws.com.au/what-we-think/digital-bytes-privacy-cyber-ai-data-update-2026-may/

---

*Briefing compiled May 10, 2026. Items dated outside the May 4–10 window appear only where they provide essential context for this week's developments.*
