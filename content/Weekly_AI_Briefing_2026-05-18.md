# Weekly AI & Compute Innovation Briefing
## Date Range: Monday 18 May – Sunday 24 May 2026

> *Research methodology: 3× Claude WebSearch passes (30+ queries) + 1× Perplexity deep-research pass, synthesised, deduplicated and cross-verified. Items confirmed by multiple passes are flagged "✓ cross-pass". Single-source items are flagged ⚠️ *single-source*.*

---

### Executive Summary

- **Google I/O 2026 dominated the week (May 19–20)** with the launch of the **Gemini 3.5** family — 3.5 Flash leading on Terminal-Bench 2.1 (76.2%), GDPval-AA (1656 Elo) and MCP Atlas (83.6%) — plus **Gemini Spark** (an always-on personal agent), **Gemini Omni** multimodal model, and Project Genie connected to ~20 years of Street View. The AI Ultra subscription was cut from $250 to $100/month.
- **Cerebras IPO'd on Nasdaq May 14**, closing the week ~$66B–$95B market cap after a 68% pop. The wafer-scale chip company sold 30M shares at $185 and raised $5.55B — the largest semiconductor IPO in years, validating non-NVIDIA AI silicon.
- **Anthropic shipped Claude Managed Agents updates on May 19** — public-beta self-hosted sandboxes and a research-preview "MCP tunnels" feature for outbound-only encrypted gateway calls to internal MCP servers. Anthropic also announced a $200M, 4-year partnership with the Gates Foundation for AI in healthcare, education, agriculture.
- **METR published its Feb–Mar 2026 Frontier Risk Report on May 19**, showing dramatic capability gains and introducing no-CoT baselines as the reference for measuring chain-of-thought–boosted risk.
- **Hardware/infra**: HBM4 supply is sold out for all of 2026 at mid-$500 per stack (more than double HBM3E); AMD MI400/MI450 ramping H2 2026 with up to 432 GB HBM4 / 19.6 TB/s; Samsung CXL 3.1 CMM-D modules (1TB, 72 GB/s, PCIe 6.0) hitting hyperscalers in Q3; POET + Lumilens announced May 14 partnership on wafer-level photonic integration for AI optical networks (engineering samples late 2026).

---

### 1. Foundation Models & LLMs

**Gemini 3.5 family launched at Google I/O 2026 (May 19–20)** ✓ cross-pass — Google introduced **Gemini 3.5 Flash** first, combining frontier intelligence with action capabilities. On benchmarks it scored **76.2% on Terminal-Bench 2.1**, **1656 Elo on GDPval-AA** and **83.6% on MCP Atlas**, outperforming Gemini 3.1 Pro on coding and agentic tasks. Pricing: $1.50 / $9 per 1M input/output tokens with a 1M-token context window. [Gemini 3.5 launch (blog.google)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) · [I/O 2026 recap (explainx.ai)](https://www.explainx.ai/blog/google-io-2026-complete-recap-all-announcements)

**Gemini Spark — always-on personal agent** — Built on 3.5 Flash, Spark "runs 24/7" taking action on the user's behalf and is included as a beta in the newly repriced $100/month AI Ultra plan (cut from $250). [I/O 2026 announcements (blog.google)](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/)

**Claude Opus 4.7 retook the top of LMArena** ⚠️ *single-source* — Reported as "now top of LMArena" as of mid-May 2026, though benchmark detail (MMLU, GPQA) was not provided in the source. [Best AI Tools 2026 (Dreams AI)](https://dreamsaicanbuy.com/learn/best-ai-tools-2026)

**Qwen3 Coder Next & Qwen3.7 Max** — Alibaba shipped Qwen3.7 Max on May 20 and Qwen3 Coder Next on May 22, 2026, continuing their rapid cadence of open-weight reasoning and coding model releases. [LLM Stats (May 2026)](https://llm-stats.com/llm-updates)

**Cost/scale trend** — Inference cost continues to fall ≈10× year-over-year for equivalent capability; a 7B model in 2026 reportedly matches 2025-era 70B-class performance. [AI Trends May 2026 (LLM Stats)](https://llm-stats.com/ai-trends)

### 2. Reasoning & Agents

**Anthropic Claude Managed Agents — public beta updates (May 19)** ✓ cross-pass — Anthropic expanded its managed-agents product with **public-beta self-hosted sandboxes** for executing agent code in the customer's own environment, and a research-preview feature called **"MCP tunnels"** that lets agents call internal MCP servers via an outbound-only encrypted gateway. Both changes published May 19, 2026. [AI Agent News (this week)](https://aiagentstore.ai/ai-agent-news/this-week)

**OpenAI launched 'Frontier' enterprise agent platform** — Designed to help enterprises build, deploy and manage AI agents with shared context across existing systems; also launched real-time voice and translation models for agents. Reported as part of May 2026 OpenAI cadence. [AI News May 2026 (dentro.de)](https://dentro.de/ai/news/)

**Anthropic + SpaceX/xAI Colossus 1 compute deal** ⚠️ *single-source* — A reported major compute deal involving Anthropic, SpaceX and xAI's Colossus 1 cluster — flagged as significant but only appearing in one summary. [LinkedIn / industry summary](https://www.linkedin.com/posts/esginvesting_artificialintelligence-esg-sustainability-activity-7415771584822439936-Wxt4)

**Multi-agent orchestration consensus solidifies** — The 2026 industry pattern (Anthropic, Cognition, OpenAI, Microsoft AutoGen/MAF, LangChain) has converged on an *orchestrator + isolated sub-agents with summary returns* architecture. LangGraph dominates regulated enterprise workflows; CrewAI is the rapid-prototyping favorite. [Multi-Agent Systems 2026 (FlowHunt)](https://www.flowhunt.io/blog/multi-agent-ai-system/)

**Camunda ProcessOS closed beta (May 20)** — At CamundaCon, Camunda announced ProcessOS, an AI intelligence layer that discovers, re-engineers and continuously optimises business processes as agentic workflows; closed beta opened May 20. [AI Agent News](https://aiagentstore.ai/ai-agent-news/this-week)

### 3. Multimodal AI

**Gemini Omni launched at Google I/O 2026** — A new multimodal model that "can create anything from any input, starting with video"; positioned by Google as a leap in world understanding and multimodal editing. [I/O 2026 (blog.google)](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/)

**Project Genie + Street View integration** — Google DeepMind connected Project Genie with nearly 20 years of Google Street View imagery so users can generate explorable worlds anchored in real geography. [I/O 2026 recap](https://www.explainx.ai/blog/google-io-2026-complete-recap-all-announcements)

**Vision-language benchmarks** — Top open-source vision-language models heading into late May 2026 include **GLM-4.5V**, **GLM-4.1V-9B-Thinking** and **Qwen2.5-VL-32B-Instruct**. A specialization study reported **Nanonets-OCR2-3B** scoring 0.921 (vs. Qwen2.5-VL-3B's 0.793) with 7× lower degeneration on OCR, illustrating that training-history alignment beats raw scale at fixed parameter count. [Specialization Beats Scale (HF blog)](https://huggingface.co/blog/Dharma-AI/specialization-beats-scale) · [Top VLMs 2026 (Dextra Labs)](https://dextralabs.com/blog/top-10-vision-language-models/)

**World models** — ~$6B has flowed into 6–7 world-model startups in Q1 2026 alone; DeepMind's Genie, Microsoft's VideoWorld and Sora-class architectures are converging on action-conditioned generation. [Visual AI in Video 2026 (Voxel51)](https://voxel51.com/blog/visual-ai-in-video-2026-landscape)

### 4. Open Source & Ecosystem

**Meta "Spark" open-source model** ⚠️ *single-source* — Reported as a Meta May-2026 open-weight release in tooling guides; parameter count and benchmarks not specified. [Best AI Tools 2026](https://dreamsaicanbuy.com/learn/best-ai-tools-2026)

**State of open-source on Hugging Face — Spring 2026 update** — HF noted three Korean models trending simultaneously in February, a continuing wave of Chinese open releases (one year after the "DeepSeek moment"), and open-weight models now trailing SOTA proprietary by only ~3 months on average. [State of Open Source (HF)](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026)

**Open-weight leaders going into the week**: **GLM 5.1** (744B MoE / 40B active, 200K context) — currently #1 on Artificial Analysis's Intelligence Index for open weights; **Kimi K2.6**; **Qwen3** family (1.7B–235B, Apache 2.0); **gpt-oss-120B** (117B with reasoning tiers, single-GPU deployment). [Best Open-Source LLMs 2026 (HF blog)](https://huggingface.co/blog/daya-shankar/open-source-llms)

**Paperswithcode.co relaunch (Niels Rogge, HF — week of May 17–24)** — HF's open-source team relaunched paperswithcode.co; announcement post on Hugging Face Blog. [PapersWithCode relaunch (HF)](https://huggingface.co/blog/nielsr/paperswithcode-launch)

### 5. AI Infrastructure & Systems

**Hyperscaler capex on track to exceed $700B in 2026** (up from ~$410B in 2025) — Google, Microsoft, Amazon, Meta and Oracle accelerating AI infra and power procurement for training and inference. [Why AI DCs are Turning to Batteries (EPTTAS)](https://www.epttas.com/blog/why-ai-data-centers-are-turning-to-batteries)

**Inference workloads overtake training spending** — Inference now consumes >55% of AI infra spend in 2026; projected to hit 70–80% by year-end and 46 GW of capacity by 2035 (42% CAGR). Training racks demand up to 1 MW each; inference 30–150 kW. [Cloud AI Inference Capacity Forecast (GlobeNewswire, May 21)](https://www.globenewswire.com/news-release/2026/05/21/3299400/0/en/Cloud-AI-Inference-Workload-Capacity-Consumption-to-Surpass-Training-by-2033-Reaching-46-GW-by-2035.html) · [AI Inference & Metro DCs (Data Center Knowledge)](https://www.datacenterknowledge.com/build-design/ai-inference-pulls-infrastructure-back-into-metro-data-centers)

**Power & grid access now the binding constraint** — Hyperscale facilities can be built in 18–24 months but grid connections often take 3–7 years; batteries are shifting from backup to *core* infrastructure for peak-shaving and earlier grid access. [EPTTAS Blog](https://www.epttas.com/blog/why-ai-data-centers-are-turning-to-batteries)

**H100 rental prices up ~40% from October 2025 low** — From $1.70/GPU-hour to $2.35/GPU-hour by March 2026, per SemiAnalysis's GPU-rental price index; capacity coming online through August–September 2026 already fully booked. [Great GPU Shortage (SemiAnalysis)](https://newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity)

**Futures market for AI compute (May 20)** — Silicon Data + CME Group are exploring a futures market for AI computing power, treating GPU capacity as a commodity to enable hedging and price discovery. [Franks World](https://www.franksworld.com/2026/05/20/creating-a-futures-market-for-ai-computing-power-a-vision-from-silicon-data/)

### 6. Compute Hardware

**Cerebras IPO (priced May 13, opened May 14, settled this week)** ✓ cross-pass — Cerebras raised **$5.55B** at $185/share, opened at $350, closed up 68% at $311.07 on day one, valuing the wafer-scale AI chip company at ~$66B (rising to ~$95B mid-week). FY revenue rose 76% YoY to $510M with net income of $88M (vs. ($481.6M) loss prior year). Major customers: AWS, OpenAI ($20B deal through 2028). [Cerebras pops 68% (CNBC May 14)](https://www.cnbc.com/2026/05/14/cerebras-cbrs-stock-trade-nasdaq-ipo.html) · [Register coverage](https://www.theregister.com/ai-ml/2026/05/15/cerebras-wafer-scale-ai-bet-delivers-blockbuster-ipo/5240821)

**AMD MI400 / MI450 / Helios rack ramping H2 2026** — Instinct MI450 to launch alongside the Helios rack-scale platform (MI455X), part of the MI400 series, targeting **432 GB HBM4** capacity and up to **19.6 TB/s** bandwidth. AMD stock breaking out on MI400 momentum. [AMD MI400 (S&P Global)](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/03/amd-s-next-generation-ai-chips-set-to-power-2026-data-center-growth) · [Wall Street rotation (CNBC May 8)](https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html)

**NVIDIA Vera Rubin in full production** (announced GTC March, partner availability H2 2026) — Platform pairs Vera CPU, Rubin GPU (288 GB HBM4, ~13–15 TB/s), NVLink 6 Switch, ConnectX-9 SuperNIC, BlueField-4 DPU, Spectrum-6 Ethernet, plus the new Groq 3 LPX inference accelerator. Claims up to **10× lower inference token cost** and **4× fewer GPUs** vs. Blackwell for MoE training, and **35× higher inference throughput per megawatt**. AWS, Google Cloud, Microsoft, OCI, CoreWeave, Lambda, Nebius and Nscale among first deployers. [NVIDIA Vera Rubin (Newsroom)](https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer)

**Intel momentum + Apple manufacturing deal** — Intel stock rose 33% in early May; Wall Street Journal reported Intel will manufacture some processors for Apple devices. Intel's roadmap teases a "hybrid" AI processor combining x86 CPU + dedicated AI accelerator + programmable IP. [CNBC May 8](https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd)

**Q.ANT photonic processor customer shipments** — Second-generation photonic NPU for AI/HPC began customer shipments in H1 2026; positions photonics as a credible AI accelerator path. [Q.ANT (TQI Nov 2025)](https://thequantuminsider.com/2025/11/19/qant-next-gen-photonic-npu/)

### 7. Memory & Storage

**HBM4 supply sold out for all of 2026** ✓ cross-pass — Mass production began early 2026; entire year's supply already committed to hyperscalers. Per-stack pricing in the **mid-$500s** — more than double HBM3E. HBM4 doubles interface width to 2048 bits and 32 channels, reaching **2.0 TB/s** typical and **up to 3.3 TB/s** peak per stack, 64 GB max capacity. 16-Hi stacks target Q4 2026. [HBM4 Specs (Kynix)](https://www.kynix.com/Blog/hbm3e-vs-hbm4-2026-specs-performance--supply-guide.html) · [HBM4 Pricing (Notebookcheck)](https://www.notebookcheck.net/Nvidia-may-raise-prices-as-it-pays-Samsung-double-for-future-HBM4-AI-memory-modules-with-3-3-TB-s-bandwidth.1172580.0.html)

**Samsung 12-Hi HBM4 demo at ISSCC 2026** — Samsung demonstrated a 36 GB, 12-high HBM4 stack featuring 2048 I/O pins and 3.3 TB/s of bandwidth. [SemiAnalysis ISSCC 2026](https://newsletter.semianalysis.com/p/isscc-2026-nvidia-and-broadcom-cpo)

**Samsung CXL 3.1 CMM-D Q3 2026 sampling** — Samsung preparing mass production of CXL 3.1-based CMM-D memory modules: up to **1 TB capacity, 72 GB/s bandwidth on PCIe 6.0**, double CXL 2.0 performance. Q3 sampling, Q4 mass production targeted at AI servers. [Korea Herald](https://www.koreaherald.com/article/10737182)

**CXL KV-cache offload validated in production** — Penguin Solutions / Astera Labs deployments show **75% higher GPU utilization** and **2× inference throughput** when KV cache is offloaded from GPU VRAM to pooled CXL memory. CXL TAM projected to hit $16B by 2028, ~30% server attach rate. [Inference Tokenomics (Astera Labs)](https://www.asteralabs.com/inference-tokenomics-how-cxl-memory-expansion-improves-ai-economics/)

### 8. Networking & Interconnects

**Nvidia networking revenue ~$7.3B (nearly doubled YoY)** — Spectrum-X Ethernet past a $10B annualized run rate; InfiniBand revenue nearly doubled sequentially; NVLink scale-up systems driving growth. [TrendForce](https://www.trendforce.com/insights/infiniband-vs-ethernet)

**Quantum-X InfiniBand switches (early 2026 intro)** — 115 Tb/s per switch, 144 ports × 800 Gb/s each. Spectrum-X Photonics (co-packaged optics Ethernet) targeting H2 2026. [Tom's Hardware](https://www.tomshardware.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers)

**UALink ecosystem timeline firms up** — UALink (200 GT/s per lane, x4 = 800 Gb/s, supports up to 1,024 accelerators per scale-up system) is targeting **late Q4 2026** for first switches — Upscale AI named as first vendor. AMD MI400 series expected to be among first UALink-enabled GPUs. [Tom's Hardware UALink](https://www.tomshardware.com/tech-industry/ualink-has-nvidias-nvlink-in-the-crosshairs-final-specs-support-up-to-1-024-gpus-with-200-gt-s-bandwidth) · [HPCwire Dec 2025](https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/)

**POET + Lumilens partnership (May 14)** ✓ cross-pass — Strategic partnership on **wafer-level photonic integration** for AI optical networks; engineering samples late 2026, hyperscaler production ramp 2027. Signals photonics moving from prototype to production for AI scale-up. [POET press release](https://www.poet-technologies.com/news/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks)

**Ethernet projected dominance for AI** — 91% of AI workloads forecasted to run on Ethernet by 2029; InfiniBand premium is +30% to +60% over equivalent Ethernet capacity (network = 5–8% of cluster TCO over 5 years). RoCEv2, DLB, GLB and the upcoming UEC standards continue closing the gap. [DriveNets](https://drivenets.com/blog/why-infiniband-falls-short-of-ethernet-for-ai-networking/)

### 9. Compiler & Kernel Optimization

**vLLM v0.17.0 / PyTorch 2.10 + FlashAttention 4** (early March 2026 baseline, ongoing iteration) — vLLM v0.17.0 upgraded to PyTorch 2.10, added FlashAttention 4, matured Model Runner V2 with pipeline + decode-context parallelism, and added Anthropic API compatibility. PyTorch 2.11 now standard for CUDA and XPU; C++20 required. [vLLM releases](https://github.com/vllm-project/vllm/releases)

**vLLM TPU unified backend (PyTorch + JAX via Torchax)** — vLLM TPU's tpu-inference now supports PyTorch via Torchax and JAX inside a single JAX → XLA lowering path. [vLLM TPU blog](https://blog.vllm.ai/2025/10/16/vllm-tpu.html)

**llama.cpp b8200+ with MCP client + structured output** — Recent llama.cpp builds add MCP client support for tool calling, an autoparser for structured output, RPC-based distributed inference (layer splitting across remote machines), and Qwen 3.5 + linear-attention speedups. [llama.cpp](https://llama-cpp.com/)

**Quantization landscape consolidated** — In production: **AWQ** wins on quality (~95% retention) and reasoning-stability; **GGUF** wins on universal compatibility (Q2_K–Q8_0, hybrid CPU+GPU); **GPTQ** wins on raw NVIDIA-GPU throughput. INT4/INT8/FP8 are the standard precisions. [Quantization Guide 2026 (Sesame Disk)](https://sesamedisk.com/quantization-techniques-ai-inference-2026/)

**AIConfigurator** — A framework-agnostic configuration-search system reported up to **40% inference performance improvement** by automating the choice of serving configuration without GPU profiling. [arXiv 2601.06288](https://arxiv.org/pdf/2601.06288)

### 10. AI Safety, Alignment & Policy

**METR Frontier Risk Report (Feb–Mar 2026), published May 19** ✓ cross-pass — METR released its evaluation of frontier-model capabilities for Feb–Mar 2026, documenting dramatic benchmark gains and introducing *no-Chain-of-Thought* baselines as the reference for measuring CoT-boosted capability and risk. [METR blog (May 19)](https://metr.org/blog/2026-05-19-frontier-risk-report/)

**"Safety and Fairness in Agentic AI Depend on Interaction Topology, Not on Model Scale or Alignment"** — Position paper arguing per-agent safety properties don't compose into safe multi-agent behavior; recommends interaction topology become a primary regulatory target. [arXiv 2605.01147](https://arxiv.org/abs/2605.01147)

**AI red-teaming agents are themselves refusing legitimate tests (May 21)** — A May 21 piece on Help Net Security reported that red-teaming agents now sometimes refuse to compose legitimate adversarial workflows for sensitive categories (self-harm, CBRN), creating new operational gaps that skilled human red-teamers still fill on nuanced long-horizon and social-engineering scenarios. [Help Net Security](https://www.helpnetsecurity.com/2026/05/21/ai-red-teaming-agents-research/)

**South Africa withdrew Draft National AI Policy** — The policy was withdrawn 17 days after publication after Article One's letter showed at least 6 of 67 bibliography sources were AI-fabricated. Part of a broader Q1 2026 hallucination crisis: Damien Charlotin's database now tracks 1,353+ legal-proceeding hallucinations globally; Q1 2026 sanctions totalled at least $145K. [Rest of World](https://restofworld.org/2026/government-ai-hallucinations-south-africa-deloitte/) · [Legal AI Reckoning 2026 (ComplianceHub)](https://compliancehub.wiki/legal-ai-hallucination-reckoning-2026/)

**US export controls on AI chips** — January 13, 2026 BIS final rule shifted from presumption of denial to **case-by-case review** for H200/MI325X-equivalent exports to mainland China, HK and Macau. House passed the **Remote Access Security Act (RASA)** 369–22 in January, extending export jurisdiction to cloud-based GPU access. AI OVERWATCH Act (Mast, R-FL) advanced in committee to ban Blackwell exports to FECs (China/Iran/NK/Russia/Venezuela) for two years. [Mayer Brown analysis](https://www.mayerbrown.com/en/insights/publications/2026/01/administration-policies-on-advanced-ai-chips-codified) · [Federal Register](https://www.federalregister.gov/documents/2026/01/15/2026-00789/revision-to-license-review-policy-for-advanced-computing-commodities)

**Anthropic + Gates Foundation: $200M / 4-year partnership** ✓ cross-pass — Announced this week to develop AI tools for healthcare, education, agriculture and economic development in underserved regions. [Marketing Profs AI Update May 22](https://www.marketingprofs.com/opinions/2026/54803/ai-update-may-22-2026-ai-news-and-views-from-the-past-week)

### 11. Applications & Industry

**OpenAI Ads Manager + ChatGPT advertising platform** — OpenAI introduced a self-serve Ads Manager letting advertisers create/manage/optimise campaigns inside ChatGPT, with a $2.5B 2026 ad-revenue target. [Marketing Profs May 22](https://www.marketingprofs.com/opinions/2026/54803/ai-update-may-22-2026-ai-news-and-views-from-the-past-week)

**SAP Sapphire 2026: Autonomous Suite + Business AI Platform** — SAP launched the SAP Business AI Platform and the SAP Autonomous Suite (Autonomous Finance, Spend, SCM, HCM, CX) with **>200 agents and >50 assistants** rolling out over the coming months. [SAP Sapphire keynote](https://news.sap.com/2026/05/sap-sapphire-keynote-business-ai-platform-power-autonomous-enterprise/) · [Microsoft Azure SAP blog](https://azure.microsoft.com/en-us/blog/advancing-enterprise-ai-new-sap-on-azure-announcements-from-sap-sapphire-2026/)

**AWS Amazon Quick desktop app** — AWS shipped a desktop client for Amazon Quick (its agentic AI app), with native integrations into Google Workspace, Zoom, Slack, Microsoft 365 and Teams. [CIO Dive](https://www.ciodive.com/news/aws-launches-amazon-quick-desktop-app/818869/)

**Blue Yonder "Model Training Factory" (May 19)** — Industry coverage of Blue Yonder's new fine-tuning factory for highly specialized supply-chain agents. [Daily AI Agent News](https://aiagentstore.ai/ai-agent-news/this-week)

**MongoDB Enterprise AI capabilities (MongoDB local London 2026)** — Announced a unified AI data platform for running agents in production. [PR Newswire](https://www.prnewswire.com/news-releases/mongodb-makes-enterprise-ai-production-ready-302764870.html)

**Google AI smart glasses** — Announced at I/O 2026, launching autumn 2026 with Gemini-powered mics/speakers/cameras; designs by Warby Parker and Gentle Monster; iOS + Android support. Gemini also confirmed to power the next-gen Siri later in 2026. [I/O 2026 recap](https://www.explainx.ai/blog/google-io-2026-complete-recap-all-announcements)

**Boston Dynamics + DeepMind: Gemini Robotics-ER 1.6 in Spot** — DeepMind integrating Gemini Robotics-ER 1.6 into Boston Dynamics' Spot and Orbit AI visual inspection platform. [AI News May 2026](https://dentro.de/ai/news/)

**Japan Airlines deploys humanoid robots at Haneda** — JAL deployed humanoid robots at Tokyo Haneda Airport in May 2026, an early signal of humanoid robotics moving from pilot to commercial deployment. [Humanoid Robotics 2026 (KraneShares)](https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/)

**Chief AI Officer adoption (IBM survey)** — 76% of 2,000+ surveyed organizations have established a CAIO role, up from 26% in 2025. [CNBC](https://www.cnbc.com/2026/05/11/heres-how-artificial-intelligence-is-changing-boardrooms.html)

### 12. Research Highlights — Top Papers

| Paper | Authors / Lab | Key Contribution | Link |
|-------|--------------|------------------|------|
| Safety and Fairness in Agentic AI Depend on Interaction Topology, Not on Model Scale or Alignment (May 2026) | Bajaj, Singh et al. | Position paper: per-agent safety doesn't compose into multi-agent safety; topology must be a primary regulatory target | [arXiv 2605.01147](https://arxiv.org/abs/2605.01147) |
| Soohak: A Mathematician-Curated Benchmark for Frontier-Level Math Reasoning | 64 mathematicians | 439 hand-authored research-level math problems (vs. FrontierMath Tier 4's 50); evaluations on request to limit contamination | [arXiv 2605.09063](https://arxiv.org/html/2605.09063v3) |
| Litespark Inference on Consumer CPUs: Custom SIMD Kernels for Ternary Neural Networks (May 7, 2026) | Litespark team | Practical ternary-NN inference on commodity CPUs to bring LLM inference cost down for consumer hardware | [arXiv 2605.06485](https://arxiv.org/html/2605.06485v1) |
| Model2Kernel: Model-Aware Symbolic Execution for Safe CUDA Kernels (Mar 2026) | He et al. | Symbolic-execution framework for hardening CUDA kernels against attacker-controlled inputs in inference systems | [arXiv 2603.24595](https://arxiv.org/pdf/2603.24595) |
| Compiler-First State Space Duality and Portable O(1) Autoregressive Caching for Inference (Mar 2026) | (not specified) | Single unmodified implementation runs on CPU, NVIDIA GPU and Google Cloud TPU with O(1) AR caching | [arXiv 2603.09555](https://arxiv.org/pdf/2603.09555) |
| Pressure Reveals Character: Behavioural Alignment Evaluation at Depth (Feb 2026) | (not specified) | 904-scenario alignment evaluation across 37 behaviors / 6 categories; public leaderboard for 9 frontier providers | [arXiv 2602.20813](https://arxiv.org/html/2602.20813v1) |
| Specialization Beats Scale: Nanonets-OCR2-3B vs. Qwen2.5-VL-3B | Dharma AI / Nanonets | Training-history alignment yields +16% quality and 7× lower degeneration at the same parameter count | [HF blog](https://huggingface.co/blog/Dharma-AI/specialization-beats-scale) |
| METR Frontier Risk Report Feb–Mar 2026 (May 19) | METR | No-CoT baselines as the reference for measuring chain-of-thought capability gain | [METR](https://metr.org/blog/2026-05-19-frontier-risk-report/) |

---

### Sources Consulted

- https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/
- https://www.explainx.ai/blog/google-io-2026-complete-recap-all-announcements
- https://cloud.google.com/blog/products/ai-machine-learning/innovations-from-google-io-26-on-google-cloud
- https://medium.com/@davidakpovi/ai-news-week-of-may-18-to-may-24-2026-6cb451ecb766
- https://www.marketingprofs.com/opinions/2026/54803/ai-update-may-22-2026-ai-news-and-views-from-the-past-week
- https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week
- https://www.buildfastwithai.com/blogs/ai-news-today-may-20-2026
- https://llm-stats.com/ai-news
- https://llm-stats.com/llm-updates
- https://llm-stats.com/ai-trends
- https://dentro.de/ai/news/
- https://imfounder.com/science-tech/ai/ai-updates-may-2026/
- https://aiagentstore.ai/ai-agent-news/this-week
- https://news.sap.com/2026/05/sap-sapphire-keynote-business-ai-platform-power-autonomous-enterprise/
- https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/
- https://azure.microsoft.com/en-us/blog/advancing-enterprise-ai-new-sap-on-azure-announcements-from-sap-sapphire-2026/
- https://www.ciodive.com/news/aws-launches-amazon-quick-desktop-app/818869/
- https://www.prnewswire.com/news-releases/mongodb-makes-enterprise-ai-production-ready-302764870.html
- https://www.marktechpost.com/2026/05/19/best-enterprise-level-agentic-ai-platforms-for-2026/
- https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer
- https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
- https://blogs.nvidia.com/blog/gtc-2026-news/
- https://nvidianews.nvidia.com/news/meta-builds-ai-infrastructure-with-nvidia
- https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html
- https://www.tomshardware.com/tech-industry/artificial-intelligence/intels-roadmap-adds-mysterious-hybrid-ai-processor-featuring-x86-cpus-dedicated-ai-accelerator-and-programmable-ip-chip-may-capitalize-on-a-market-forgotten-by-nvidia-and-amd
- https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/03/amd-s-next-generation-ai-chips-set-to-power-2026-data-center-growth
- https://www.cnbc.com/2026/05/14/cerebras-cbrs-stock-trade-nasdaq-ipo.html
- https://www.theregister.com/ai-ml/2026/05/15/cerebras-wafer-scale-ai-bet-delivers-blockbuster-ipo/5240821
- https://www.eetimes.com/cerebras-ipo-revives-ai-chip-startup-fever/
- https://fortune.com/2026/01/05/nvidia-groq-deal-ai-chip-startups-in-play/
- https://www.kynix.com/Blog/hbm3e-vs-hbm4-2026-specs-performance--supply-guide.html
- https://www.notebookcheck.net/Nvidia-may-raise-prices-as-it-pays-Samsung-double-for-future-HBM4-AI-memory-modules-with-3-3-TB-s-bandwidth.1172580.0.html
- https://introl.com/blog/ai-memory-supercycle-hbm-2026
- https://newsletter.semianalysis.com/p/isscc-2026-nvidia-and-broadcom-cpo
- https://newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity
- https://newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands
- https://newsletter.semianalysis.com/p/tpuv7-google-takes-a-swing-at-the
- https://newsletter.semianalysis.com/p/cpus-are-back-the-datacenter-cpu
- https://newsletter.semianalysis.com/p/inferencex-v2-nvidia-blackwell-vs
- https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point
- https://www.koreaherald.com/article/10737182
- https://www.gigabyte.com/Article/revolutionizing-the-ai-factory-the-rise-of-cxl-memory-pooling
- https://www.marvell.com/company/newsroom/marvell-next-gen-cxl-switch-memory-pooling-breaks-ai-memory-wall.html
- https://www.asteralabs.com/inference-tokenomics-how-cxl-memory-expansion-improves-ai-economics/
- https://www.tomshardware.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers
- https://www.tomshardware.com/tech-industry/ualink-has-nvidias-nvlink-in-the-crosshairs-final-specs-support-up-to-1-024-gpus-with-200-gt-s-bandwidth
- https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/
- https://drivenets.com/blog/why-infiniband-falls-short-of-ethernet-for-ai-networking/
- https://www.trendforce.com/insights/infiniband-vs-ethernet
- https://www.poet-technologies.com/news/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks
- https://thequantuminsider.com/2025/11/19/qant-next-gen-photonic-npu/
- https://lightmatter.co/blog/a-new-kind-of-computer/
- https://pytorch.org/blog/pytorch-xla-2-7-release-usability-vllm-boosts-jax-bridge-gpu-build/
- https://github.com/vllm-project/vllm/releases
- https://blog.vllm.ai/2025/10/16/vllm-tpu.html
- https://llama-cpp.com/
- https://sesamedisk.com/quantization-techniques-ai-inference-2026/
- https://huggingface.co/blog/daya-shankar/open-source-llms
- https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026
- https://huggingface.co/blog/nielsr/paperswithcode-launch
- https://huggingface.co/blog/Dharma-AI/specialization-beats-scale
- https://www.datacenterknowledge.com/build-design/ai-inference-pulls-infrastructure-back-into-metro-data-centers
- https://www.datacenterknowledge.com/build-design/data-center-world-2026-ai-pushes-infrastructure-to-new-limits
- https://www.globenewswire.com/news-release/2026/05/21/3299400/0/en/Cloud-AI-Inference-Workload-Capacity-Consumption-to-Surpass-Training-by-2033-Reaching-46-GW-by-2035.html
- https://www.epttas.com/blog/why-ai-data-centers-are-turning-to-batteries
- https://www.franksworld.com/2026/05/20/creating-a-futures-market-for-ai-computing-power-a-vision-from-silicon-data/
- https://champaignmagazine.com/2026/05/24/ai-by-ai-weekly-top-5-may-18-24-2026/
- https://metr.org/blog/2026-05-19-frontier-risk-report/
- https://arxiv.org/abs/2605.01147
- https://arxiv.org/html/2605.09063v3
- https://arxiv.org/html/2605.06485v1
- https://arxiv.org/pdf/2603.24595
- https://arxiv.org/pdf/2603.09555
- https://arxiv.org/html/2602.20813v1
- https://www.helpnetsecurity.com/2026/05/21/ai-red-teaming-agents-research/
- https://restofworld.org/2026/government-ai-hallucinations-south-africa-deloitte/
- https://compliancehub.wiki/legal-ai-hallucination-reckoning-2026/
- https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html
- https://thehackernews.com/2026/05/how-ai-hallucinations-are-creating-real.html
- https://www.mayerbrown.com/en/insights/publications/2026/01/administration-policies-on-advanced-ai-chips-codified
- https://www.federalregister.gov/documents/2026/01/15/2026-00789/revision-to-license-review-policy-for-advanced-computing-commodities
- https://www.federalregister.gov/documents/2026/04/10/2026-06952/american-ai-exports-program-call-for-proposals-for-pre-set-consortia
- https://www.mlstrategies.com/insights-center/viewpoints/54031/2026-02-04-_026-ai-policy-and-semiconductor-outlook-how-federal
- https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/
- https://en.people.cn/n3/2026/0506/c90000-20453012.html
- https://roboticsandautomationnews.com/2026/05/19/cvpr-2026-to-showcase-next-generation-of-embodied-ai-robotics-and-autonomous-systems/101727/
- https://voxel51.com/blog/visual-ai-in-video-2026-landscape
- https://dextralabs.com/blog/top-10-vision-language-models/
- https://www.cnbc.com/2026/05/11/heres-how-artificial-intelligence-is-changing-boardrooms.html
- https://www.deeplearning.ai/the-batch/tag/may-15-2026

---

*Compiled 25 May 2026 — week of Monday 18 May to Sunday 24 May 2026. Items dated outside the 7-day window were dropped or flagged as context. Cross-pass items confirmed by ≥2 independent passes; single-source items flagged ⚠️ for the reader's discretion.*
