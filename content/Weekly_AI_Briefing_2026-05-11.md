# Weekly AI & Compute Innovation Briefing
## Date Range: Monday 11 May – Sunday 17 May 2026
> *Research methodology: 3× Claude WebSearch passes (Models/Software, Hardware/Infra, Research/Policy) + 1× Perplexity deep search, synthesised and deduplicated. Items flagged ⚠️ *single-source* appeared in only one pass and should be verified before citing.*

---

### Executive Summary

- **Cybersecurity becomes the AGI-era safety flashpoint.** Anthropic launched **Project Glasswing** with Claude Mythos Preview (AWS, Apple, Google, Microsoft, NVIDIA, JPMorgan, CrowdStrike, Cisco, Broadcom, Palo Alto Networks and the Linux Foundation as launch partners; +Verizon on 15 May), while OpenAI countered with **Daybreak** and three specialised GPT-5.5 variants (GPT-5.5, GPT-5.5 with Trusted Access for Cyber, GPT-5.5-Cyber). The UK AI Security Institute reported frontier models executing **32-step end-to-end autonomous cyberattack chains** with no human-in-the-loop.
- **Cerebras' blockbuster IPO** raised **$5.55B at $185/share**, popped 68% to close at $311.07 (intraday peak +108% at $385), valuing the company at **~$95B**; demand was reportedly **20×+ oversubscribed**. It crystallises a public market for non-NVIDIA AI silicon and follows NVIDIA's late-2025 acquisition of Groq for ~$20B.
- **Perceptron Mk1**, a frontier video/embodied-reasoning model, launched on 12 May at **$0.15 / $1.50 per 1M input/output tokens** — 80-90% cheaper than Gemini Pro / Claude / GPT for video tasks — with native 2 FPS video processing across a 32K-token context.
- **Anthropic + Gates Foundation $200M four-year partnership** (announced 14 May) targets global health (polio, HPV, eclampsia), education, smallholder agriculture and economic mobility, with the Anthropic share delivered as Claude credits + technical staff.
- **Recursive Superintelligence** emerged from stealth on 13 May with **$650M at a $4.65B valuation** (GV and Greycroft leading, NVIDIA and AMD participating; Richard Socher CEO, Yuandong Tian co-founder, Peter Norvig adviser) to build self-improving AI systems with a "Level 1" autonomous trainer planned for mid-2026.

---

### 1. Foundation Models & LLMs

**Claude Mythos Preview (Anthropic)** — A new general-purpose frontier model that is "strikingly capable at computer security tasks." Anthropic disclosed that over the preceding weeks Mythos Preview had been used internally to identify **thousands of zero-day vulnerabilities** (many critical) across every major OS and browser. Mythos has limited rollout via Project Glasswing rather than a public release. [Anthropic — Claude Mythos Preview](https://red.anthropic.com/2026/mythos-preview/) · [Project Glasswing](https://www.anthropic.com/glasswing)

**GPT-5.5 family expansion (OpenAI)** — In the context of the Daybreak launch (11 May), OpenAI confirmed three deployment variants: **GPT-5.5** (standard general-purpose with safeguards), **GPT-5.5 with Trusted Access for Cyber** (verified defensive use in authorised environments), and **GPT-5.5-Cyber** (permissive variant for red-teaming, pentesting and validation). [The Hacker News](https://thehackernews.com/2026/05/openai-launches-daybreak-for-ai-powered.html) · [OpenAI Daybreak](https://openai.com/daybreak/)

**Anthropic enterprise share crosses OpenAI** ⚠️ *single-source* — Per the Ramp AI Index (week of 11 May), Anthropic reached **34.4%** of enterprise AI adoption versus OpenAI's **32.3%**, the first time Anthropic has led; the swing is attributed largely to Claude Code usage in dev/ITSM workflows. [Champaign Magazine summary](https://champaignmagazine.com/2026/05/17/ai-by-ai-weekly-top-5-may-11-17-2026/)

**Gemini 3.1 (Google DeepMind) — AI co-mathematician** — DeepMind's Gemini-3.1-based agentic "AI co-mathematician" set a new high on a long-standing math benchmark, and one mathematician reportedly cracked a previously unsolved problem using a strategy buried in a proof initially rejected by the system's reviewers. (Public detail ahead of Google I/O on 19 May.) [TheRundown summary](https://www.therundown.ai/p/google-deepmind-powerful-ai-co-mathematician)

**Pre-I/O Gemini build-up** — Reporting through 14–17 May points to a major Gemini upgrade (variously reported as **Gemini 3.5** or a full **Gemini 4.0** with an "Omni" video model variant) due at I/O 2026 on 19 May, alongside **Gemini Spark** (always-on assistant) and **Gemini Intelligence** OS-layer agents on Samsung/Pixel from summer 2026. [Android Authority](https://www.androidauthority.com/what-to-expect-from-google-io-2026-3664979/) · [AIxploria](https://www.aixploria.com/en/ai-radar/google-io-2026-gemini-announcements-preview/)

**Anthropic valuation talks** — Anthropic continued discussions around a **~$50B round at a $900B–$950B valuation** (vs $380B in February), potentially eclipsing OpenAI's $852B March valuation; the round was expected to close as early as end of May. [TechCrunch](https://techcrunch.com/2026/04/29/sources-anthropic-could-raise-a-new-50b-round-at-a-valuation-of-900b/) · [PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-valuation-could-eclipse-openai-50-billion-dollar-funding-round/)

**No new Meta, xAI or Mistral frontier model in-window.** Existing context: Grok 4.3 (xAI, 6 May), Mistral Small 4 and Mistral Medium 3.5 were the most recent flagship releases prior to the window. ZAYA1-8B (Zyphra, 6-7 May) — an Apache-2.0 MoE trained end-to-end on AMD Instinct hardware — remained the freshest AMD-native open model heading into the window. [llm-stats.com](https://llm-stats.com/llm-updates)

### 2. Reasoning & Agents

**OpenAI Daybreak** — Launched **11 May** as OpenAI's cybersecurity platform: Codex Security builds a project-specific threat model from a connected GitHub repo, searches for vulnerabilities via LLM reasoning, pressure-tests in an isolated sandbox, and proposes targeted patches for human review. Launch partners include Akamai, Cisco, Cloudflare, CrowdStrike, Fortinet, Oracle, Palo Alto Networks and Zscaler. [The Hacker News](https://thehackernews.com/2026/05/openai-launches-daybreak-for-ai-powered.html) · [OpenAI](https://openai.com/daybreak/)

**OpenAI Deployment Company** — Launched **11 May**: a holding-style entity to put Forward Deployed Engineers into large enterprises and run secured/partitioned model deployments, including local on-Windows sandboxed surfaces. OpenAI agreed to acquire **Tomoro** to seed the FDE bench. [OpenAI](https://openai.com/index/openai-launches-the-deployment-company/) · [CNBC](https://www.cnbc.com/2026/05/11/open-ai-dresser-enterprise-business.html)

**DeepMind AI co-mathematician (agentic Gemini 3.1)** — Plan-act-observe loop tackling open conjectures; the rejected-proof-derived solution is noteworthy as evidence that agentic systems are producing genuinely novel intermediate artefacts. [TheRundown](https://www.therundown.ai/p/google-deepmind-powerful-ai-co-mathematician)

**Enterprise agent platform launches (week of 11–17 May)** ⚠️ *single-source* (Agentic.ai roundup): **Xactly Fleet of Agents / Intelligence Studio** (Upside 2026, 14 May), **Freshworks AI Agent Studio in Freshservice** (Refresh 2026, 14 May), **Helport AI Labor** website (14 May), **ERP.net Operator.net** for in-stack ERP/CRM agents, **Lenovo AI Library** under Hybrid AI Advantage, **LTIMindtree BlueVerse M.A.X on Salesforce** (15 May, targeting ~30% marketing-ops efficiency). [Agentic.ai roundup](https://agentic.ai/news) · [Champaign Magazine](https://champaignmagazine.com/2026/05/17/ai-by-ai-weekly-top-5-may-11-17-2026/)

### 3. Multimodal AI

**Perceptron Mk1** — Released **12 May**, this video and embodied-reasoning model processes native video at up to **2 FPS over a 32K-token context window**, maintaining object identity across occlusions and returning structured outputs (timecodes, clips, points, bounding boxes). Pricing is **$0.15/M input, $1.50/M output** — Perceptron claims comparable image/video/embodied reasoning to Gemini Pro at ~10–20% of frontier-lab prices. Now available on OpenRouter and Puter.js. [Perceptron](https://www.perceptron.inc/blog/introducing-perceptron-mk1) · [VentureBeat](https://venturebeat.com/technology/perceptron-mk1-shocks-with-highly-performant-video-analysis-ai-model-80-90-cheaper-than-anthropic-openai-and-google) · [BenchLM](https://benchlm.ai/blog/posts/perceptron-mk1-frontier-video-models)

**DeepMind Magic Pointer** — Posted **12 May**: an AI-augmented cursor that "understands what you are looking at, listens to your voice, derives the context, and acts with Gemini" — slated to ship in the new "Googlebook" / Aluminium OS hardware later in 2026. The cursor-as-agent surface is a notable HID-layer interaction pattern. [DeepMind summary](https://pasqualepillitteri.it/en/news/2504/google-magic-pointer-deepmind-gemini-guide-2026)

### 4. Open Source & Ecosystem

**No major new open-weight frontier release inside the 11–17 May window** based on cross-pass evidence. Context: the leading open-weight model on Artificial Analysis's Intelligence Index remained **GLM 5.1** (744B-param MoE, 40B active, 200K context); Qwen3, Kimi K2.6 (~1.1T params, modified MIT) and Meta's CWM (32B, 131k context; 65.8% on SWE-bench Verified, 68.6% LiveCodeBench, 96.6% Math-500, 76.0% AIME 2024) were the freshest reference points. [llm-stats.com](https://llm-stats.com/llm-updates) · [HuggingFace state-of-OSS](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026) · [Meta AI: CWM](https://ai.meta.com/research/publications/cwm-an-open-weights-llm-for-research-on-code-generation-with-world-models/)

**ggml.ai joins Hugging Face** ⚠️ *date partly outside window* — Georgi Gerganov announced earlier in May that ggml.ai (the project behind llama.cpp) is joining Hugging Face while remaining open; the team continues maintenance full-time. [Adafruit](https://blog.adafruit.com/2026/02/20/open-source-ai-ggml-joins-hugging-face-llama-cpp-stays-open-local-ais-long-term-home/)

### 5. AI Infrastructure & Systems

**Inference-centric infrastructure pivot** — Industry analyses through May 2026 converged on inference now accounting for **>55% of AI-optimised infra spend**, projected to hit **70–80%** by year-end. Inference now represents **>80% of AI GPU spend** at production scale, with training racks pushing toward **1 MW** in frontier systems vs. **30–150 kW** for inference racks. [Data Center Knowledge](https://www.datacenterknowledge.com/networking/ai-inference-the-next-stress-test-for-global-data-center-infrastructure) · [Deloitte](https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/ai-infrastructure-compute-strategy.html)

**CoreWeave–Meta $21B expanded agreement (through Dec 2032)** — Includes some of the first NVIDIA Vera Rubin deployments. Combined with NVIDIA's multi-year multi-generational partnership with Meta (covering on-prem, cloud and millions of Blackwell + Rubin GPUs plus NVIDIA CPUs and networking), the week's posture confirms Meta as a top-tier Vera Rubin launch customer. [CoreWeave 8-K](https://www.sec.gov/Archives/edgar/data/1769628/000176962826000154/ex991.htm) · [NVIDIA Newsroom: Meta](https://nvidianews.nvidia.com/news/meta-builds-ai-infrastructure-with-nvidia)

**Defense AI capital surge** ⚠️ *single-source* — Week of 11 May saw **$6.2B in defense-AI venture funding (44% of total VC for the week)**; excluding Anduril and Helsing, non-defense AI funding shrank ~53% week-over-week per StartupHub.ai. [StartupHub](https://www.startuphub.ai/ai-news/ai-news/2026/defense-ai-6-2-billion-week-may-11-2026)

### 6. Compute Hardware

**Cerebras IPO (Nasdaq: CBRS) — 14 May** — Priced at **$185, raised $5.55B** (largest tech IPO since Uber 2019), opened at **$350 (intraday peak $385, +108%)**, closed up 68% at **$311.07**, market cap **~$95B**; demand >20× oversubscribed. CEO Andrew Feldman's stake worth ~**$3.2B**; CTO Sean Lie's ~**$1.7B**. Cerebras has separately agreed to supply OpenAI with **~750 MW of compute capacity for ~$20B** plus advance funding. AWS announced plans to combine Trainium3 + Cerebras WSE-3 for inference. The stock pulled back the next session on profit-taking. [CNBC: IPO debut](https://www.cnbc.com/2026/05/14/cerebras-cbrs-stock-trade-nasdaq-ipo.html) · [TechCrunch](https://techcrunch.com/2026/05/14/cerebras-raises-5-5b-kicking-off-2026s-ipo-season-with-a-bang/) · [The Register](https://www.theregister.com/ai-ml/2026/05/15/cerebras-wafer-scale-ai-bet-delivers-blockbuster-ipo/5240821) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-05-14/cerebras-shares-indicated-to-surge-89-after-year-s-top-ipo)

**NVIDIA Vera Rubin platform — momentum into the week** — Six-chip Rubin platform (Vera CPU + Rubin GPU + NVLink 6 Switch + ConnectX-9 SuperNIC + BlueField-4 DPU + Spectrum-6 Ethernet + integrated NVIDIA Groq 3 LPU) is in full production. Claims include up to **10× reduction in inference token cost** and **4× fewer GPUs to train MoE models** vs. Blackwell. Vera Rubin introduces a **combined GPU-HBM (CG-HBM)** memory design stacking memory directly on the chip. First cloud deployments: AWS, Google Cloud, Microsoft, OCI, CoreWeave, Lambda, Nebius and Nscale. [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer)

**Recursive Superintelligence stealth exit — 13 May** — Raised **$650M at a $4.65B valuation**, led by GV and Greycroft with NVIDIA and AMD participating. Founded by Richard Socher (ex-Salesforce AI) and Yuandong Tian (ex-Meta FAIR), with Peter Norvig as adviser. Target: a "Level 1" autonomous self-improving trainer with a public launch targeted for mid-2026. [TechCrunch](https://techcrunch.com/2026/05/14/what-happens-when-ai-starts-building-itself/) · [Tech.eu](https://tech.eu/2026/05/13/recursive-superintelligence-emerges-from-stealth-with-650m-raise/)

**AMD MI400 series momentum (context)** — MI400/MI450/Helios (MI455X) on track for H2-2026 launch with volumes ramping into 2027. MI430X carries **432 GB of HBM4** at **19.6 TB/s** (CDNA 5). Intel's **Crescent Island** inference GPU (Xe3P, **160 GB LPDDR5X**) is sampling in H2-2026. AMD and Intel were the dominant AI-chip-rotation trade through April–May, with Intel up ~240% YTD on AI exposure plus a new Apple manufacturing deal. [S&P Global](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/03/amd-s-next-generation-ai-chips-set-to-power-2026-data-center-growth) · [CNBC](https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html)

### 7. Memory & Storage

**HBM4 status entering the window** — HBM4 is in **mass production from all three suppliers** (SK hynix, Samsung, Micron), with **16-Hi stacks targeting Q4 2026**. **Full-year 2026 HBM4 production is sold out.** Bandwidth: up to **3.3 TB/s per stack** on a **2048-bit interface, 32 channels** (vs HBM3E's 1.2 TB/s / 36 GB); capacity to **64 GB/stack**. Designed-in: NVIDIA Rubin (up to **288 GB HBM4**), AMD MI430X (**432 GB HBM4 / 19.6 TB/s**). [Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report) · [Introl](https://introl.com/blog/ai-memory-supercycle-hbm-2026)

**Samsung CXL 3.1 (CMM-D) — Q4 mass production targeted** — 1 TB modules at **72 GB/s on PCIe 6.0**, double CXL 2.0's throughput. Penguin/Marvell analyses note that **CXL memory pooling delivered 3.8× speedup over 200G RDMA / 6.5× over 100G RDMA** for inference KV-cache offload; >90% of new servers are now CXL-capable. [The Korea Herald](https://www.koreaherald.com/article/10737182) · [Marvell](https://www.marvell.com/company/newsroom/marvell-next-gen-cxl-switch-memory-pooling-breaks-ai-memory-wall.html)

**SemiAnalysis read** — Margin dynamics for HBM have reversed in 2026; customers will likely pay above contracted prices for incremental supply. N3 utilisation is heading **>100%** in H2-2026; DRAM fabs running **>90%**. [SemiAnalysis: AI Silicon Shortage](https://newsletter.semianalysis.com/p/the-great-ai-silicon-shortage)

### 8. Networking & Interconnects

**POET Technologies × Lumilens — 14 May** — Strategic partnership for wafer-level photonic integration for next-gen AI optical networks. Lumilens placed an **initial $50M PO** with potential to scale to **$500M+ cumulative over five years**; active-alignment-free wafer-scale manufacturing aimed at displacing the largest cost/yield bottleneck in optical engines. Engineering samples late 2026; hyperscaler production ramp aligned to 2027. [POET press release](https://www.poet-technologies.com/news/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks) · [GlobeNewswire (14 May)](https://www.globenewswire.com/news-release/2026/05/14/3294762/0/en/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks.html)

**Co-packaged optics roadmap** — NVIDIA is bringing CPO into Ethernet with **Spectrum-X Photonics** in H2-2026; **Quantum-X InfiniBand switches** ship in early 2026 at **115 Tb/s per switch (144 × 800 Gb/s)**. Marvell continues to integrate **Celestial AI** photonic fabric IP; UALink hardware (rack-scale, up to **1,024 accelerators per pod**) is expected late 2026 (Upscale AI Q4-2026 target). [Tom's Hardware](https://www.tomshardware.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers) · [HPCwire: Upscale AI](https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/) · [UALink white paper (Jan 2026)](https://ualinkconsortium.org/wp-content/uploads/2026/01/UALink_White_Paper_Publication_Candidate_FINAL_VERSION.pdf)

### 9. Compiler & Kernel Optimization

No headline-grade compiler/runtime release landed inside the 11–17 May window. Background context confirmed during the pass: **vLLM v0.17.0** (early March 2026) upgraded to **PyTorch 2.10**, added **FlashAttention 4**, matured Model Runner V2 with pipeline-parallel + decode context parallel, shipped a `--performance-mode` flag and Anthropic API compatibility. **vLLM TPU** unified PyTorch and JAX behind a single JAX→XLA lowering path, delivering ~**20% higher throughput**. **llama.cpp** now ships a built-in MCP client (`--webui-mcp-proxy`) and RPC layer-splitting across machines. Production quantization remains dominated by AWQ (vLLM), GGUF (laptops), GPTQ (incumbent); kernel choice matters — AWQ on Marlin can be 10× faster than naive kernels. [PyTorch blog](https://pytorch.org/blog/pytorch-xla-2-7-release-usability-vllm-boosts-jax-bridge-gpu-build/) · [NVIDIA: vLLM release notes](https://docs.nvidia.com/deeplearning/frameworks/vllm-release-notes/index.html) · [TheAIEngineer: GPTQ vs AWQ vs GGUF](https://theaiengineer.substack.com/p/quantization-in-practice-gptq-vs)

### 10. AI Safety, Alignment & Policy

**Project Glasswing (Anthropic) — adoption phase** — Launch partners include AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, the Linux Foundation, Microsoft, NVIDIA and Palo Alto Networks; Anthropic committed up to **$100M in Mythos Preview usage credits** plus **$4M in direct grants** to open-source security orgs. **Verizon joined on 15 May** to test Mythos on its infrastructure; the Pentagon publicly signalled "opportunity." [Anthropic](https://www.anthropic.com/glasswing) · [GSMArena: Verizon](https://www.gsmarena.com/verizon_joins_project_glasswing_to_test_anthropics_claude_mythos_model_on_its_infrastructure-news-72850.php) · [GovConWire](https://www.govconwire.com/articles/anthropic-glasswing-claude-mythos-katherine-sutton-dow-cybersecurity)

**UK AI Security Institute — 32-step autonomous cyberattack chains** ⚠️ *single-source* — UK AISI documented frontier models running fully end-to-end attack chains without a human in the loop; Palo Alto Networks Unit 42 estimated defenders have a **3–5 month window** before similar capabilities propagate beyond frontier labs; Microsoft's internal AI auditor (**MDASH**) surfaced **16 previously undocumented Windows vulnerabilities**, several critical, all patched in this month's Patch Tuesday. [Shared Sapience / Century Report](https://sharedsapience.substack.com/p/the-century-report-weekly-may-11-17-2026)

**US AI evaluation regime** — The Center for AI Standards and Innovation (CAISI) finalised agreements with **Google DeepMind, Microsoft and xAI** allowing US government pre-release evaluation of frontier models. This complements existing Anthropic and OpenAI testing arrangements. [CNBC](https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html)

**Export controls posture** — Anthropic publicly reiterated its case (timed to Trump's China visit) that the US should not relax sales of top-end NVIDIA chips to China, citing **distillation attacks** via fraudulent accounts and **remote-access loopholes** (Alibaba/ByteDance reportedly training on US chips via offshore data centres). Congressional context: **RASA** (Remote Access Security Act, passed House 369–22 in January) would treat foreign remote compute access as an export transaction; the **AI OVERWATCH Act** advanced 21 Jan would prohibit Blackwell sales to entities of concern for two years; **BIS final rule (15 Jan 2026)** moved H200- and MI325X-equivalent reviews to a case-by-case posture. [Times of India: Anthropic paper](https://timesofindia.indiatimes.com/technology/tech-news/during-trumps-china-visit-anthropic-just-reminded-america-why-it-should-not-sell-top-end-nvidia-chips-to-china-since-most-/articleshow/131102724.cms) · [Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2026/01/administration-policies-on-advanced-ai-chips-codified) · [Morgan Lewis](https://www.morganlewis.com/pubs/2026/01/bis-revises-export-review-policy-for-advanced-ai-chips-destined-for-china-and-macau)

**Hallucination accountability** — South Africa withdrew its Draft National AI Policy 17 days after publication after at least **6 of 67 bibliography sources** were found to be AI hallucinations. US legal sanctions tied to AI-generated false citations reached **~$145K** in Q1 2026, the highest quarterly total on record, including a single **$109,700** penalty against an Oregon attorney. [Rest of World](https://restofworld.org/2026/government-ai-hallucinations-south-africa-deloitte/) · [ComplianceHub legal-AI tracker](https://compliancehub.wiki/legal-ai-hallucination-reckoning-2026/)

### 11. Applications & Industry

**Anthropic × Gates Foundation $200M / 4-year partnership — 14 May** — Targets global health (vaccines/therapeutics, polio, HPV, eclampsia/preeclampsia), K-12 education in the US, sub-Saharan Africa and India (with public-good benchmarks and knowledge graphs), and economic mobility (smallholder-farming agronomy, US portable skills records). Anthropic's half is delivered as Claude credits + technical staff; Gates supplies grants and programme design. [Anthropic](https://www.anthropic.com/news/gates-foundation-partnership) · [Gates Foundation](https://www.gatesfoundation.org/ideas/media-center/press-releases/2026/05/ai-anthropic-partnership)

**SAP Sapphire — Autonomous Enterprise** ⚠️ *single-source within window* — SAP unveiled the SAP Business AI Platform and SAP Autonomous Suite with **>50 domain-specific Joule Assistants** across finance, supply chain, procurement, HCM and CX, with deepened partnerships with Anthropic, AWS, Google Cloud, Microsoft, NVIDIA and Palantir. [SAP News](https://news.sap.com/2026/05/sap-sapphire-keynote-business-ai-platform-power-autonomous-enterprise/)

**Oracle OCI Enterprise AI** — Launched with first-class hosting for **Grok 4.3** and **NVIDIA Nemotron 3 Nano Omni**, plus prebuilt AI Accelerator Pack solutions. [Oracle Blog: What's New in AI](https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-may-2026)

**OpenAI × Malta — "AI for All" — 16 May** ⚠️ *single-source* — One year of ChatGPT Plus for any Maltese citizen who completes a University-of-Malta-designed AI literacy and safety course, overseen by the Malta Digital Innovation Authority. First country-wide programme of its kind. [Champaign Magazine summary](https://champaignmagazine.com/2026/05/17/ai-by-ai-weekly-top-5-may-11-17-2026/)

**Notion + MongoDB enterprise platforms** — Notion launched a Developer Platform with Workers, an External Agent API and database sync for in-Notion multi-step workflows; MongoDB announced new unified-AI-data-platform capabilities at MongoDB local London 2026. [PRNewswire: MongoDB](https://www.prnewswire.com/news-releases/mongodb-makes-enterprise-ai-production-ready-302764870.html)

**Robotics deployment phase** — Japan Airlines deployed humanoid robots (Unitree-based, via GMO AI & Robotics) at Tokyo Haneda in May; AGIBOT framed its annual conference around moving from R&D to deployment. Bessemer described the moment as the "GPT-2.5 of robotics." Venture funding for robotics hit **$40.7B annually**, with China committing a **$138B state guidance fund** to AI/robotics. [People's Daily: China embodied AI](https://en.people.cn/n3/2026/0506/c90000-20453012.html) · [Robot Report: AGIBOT World 2026](https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/)

### 12. Research Highlights — Top Papers

| Paper | Authors / Lab | Key Contribution | Link |
|-------|---------------|------------------|------|
| Prospective multi-pathogen disease forecasting using autonomous LLM-guided tree search | Sarah Martinson et al. | LLM-guided tree search for prospective multi-pathogen epidemiological forecasting. | [arXiv cs.AI list](https://arxiv.org/list/cs.AI/recent) |
| FORGE: Self-Evolving Agent Memory With No Weight Updates via Population Broadcast | Igor Bogdanov et al. | Population-broadcast memory updates for agentic systems without retraining the base model. | [arXiv cs.AI list](https://arxiv.org/list/cs.AI/recent) |
| Is Grep All You Need? How Agent Harnesses Reshape Agentic Search | Sahil Sen et al. | Argues that classic text-search primitives (grep) inside well-designed harnesses can dominate complex retrieval stacks for code agents. | [arXiv cs.CL list](https://arxiv.org/list/cs.CL/recent) |
| Text Knows What, Tables Know When: Clinical Timeline Reconstruction via Retrieval-Augmented Multimodal Alignment | Sayantan Kumar et al. | RAG + multimodal alignment for reconstructing patient clinical timelines from text and tabular EHR data. | [arXiv cs.CL list](https://arxiv.org/list/cs.CL/recent) |
| The Causal Description Gap: Information-Theoretic Separations Across Pearl's Hierarchy | Seyed Morteza Emadi | Information-theoretic separation results across Pearl's three rungs of causal inference. | [arXiv stat.ML list](https://arxiv.org/list/stat.ML/recent) |
| Sparser, Faster, Lighter Transformer Language Models (updated 8 May 2026) | (arXiv 2603.23198) | New sparse packing formats + CUDA kernels for sparse LLM inference/training; L1 regularisation can induce >99% sparsity with negligible quality loss. | [arXiv:2603.23198](https://arxiv.org/abs/2603.23198) |
| Litespark Inference on Consumer CPUs: Custom SIMD Kernels for Ternary Neural Networks (7 May 2026) | (arXiv 2605.06485) | Custom SIMD kernels for {-1, 0, +1} ternary models on consumer CPUs, replacing matmul with add/sub. | [arXiv:2605.06485](https://arxiv.org/html/2605.06485v1) |

⚠️ Several arXiv titles surfaced only through arXiv's recent-list rendering and the Century Report digest; treat author lists and exact submission dates as provisional until confirmed against the canonical arXiv record.

---

### Sources Consulted

**Frontier labs / models / agents**
- https://champaignmagazine.com/2026/05/17/ai-by-ai-weekly-top-5-may-11-17-2026/
- https://www.anthropic.com/glasswing
- https://www.anthropic.com/project/glasswing
- https://red.anthropic.com/2026/mythos-preview/
- https://www.anthropic.com/news/gates-foundation-partnership
- https://www.gatesfoundation.org/ideas/media-center/press-releases/2026/05/ai-anthropic-partnership
- https://openai.com/daybreak/
- https://openai.com/index/openai-launches-the-deployment-company/
- https://thehackernews.com/2026/05/openai-launches-daybreak-for-ai-powered.html
- https://www.cybersecuritydive.com/news/OpenAI-Daybreak-cyber-threats/820122/
- https://winbuzzer.com/2026/05/12/openai-announces-daybreak-to-bring-frontier-ai-int-xcxwbn/
- https://www.cnbc.com/2026/05/11/open-ai-dresser-enterprise-business.html
- https://www.therundown.ai/p/google-deepmind-powerful-ai-co-mathematician
- https://www.androidauthority.com/what-to-expect-from-google-io-2026-3664979/
- https://www.aixploria.com/en/ai-radar/google-io-2026-gemini-announcements-preview/
- https://pasqualepillitteri.it/en/news/2504/google-magic-pointer-deepmind-gemini-guide-2026
- https://www.perceptron.inc/blog/introducing-perceptron-mk1
- https://venturebeat.com/technology/perceptron-mk1-shocks-with-highly-performant-video-analysis-ai-model-80-90-cheaper-than-anthropic-openai-and-google
- https://benchlm.ai/blog/posts/perceptron-mk1-frontier-video-models
- https://www.businesswire.com/news/home/20260512066109/en/Perceptron-AI-Launches-Physical-AI-Model-That-Matches-Frontier-Labs-at-a-Fraction-of-the-Cost
- https://openrouter.ai/perceptron/perceptron-mk1
- https://techcrunch.com/2026/04/29/sources-anthropic-could-raise-a-new-50b-round-at-a-valuation-of-900b/
- https://www.pymnts.com/news/artificial-intelligence/2026/anthropic-valuation-could-eclipse-openai-50-billion-dollar-funding-round/
- https://techcrunch.com/2026/05/14/what-happens-when-ai-starts-building-itself/
- https://tech.eu/2026/05/13/recursive-superintelligence-emerges-from-stealth-with-650m-raise/
- https://siliconangle.com/2026/05/13/recursive-superintelligence-raises-650m-build-self-improving-ai-models/
- https://llm-stats.com/llm-updates
- https://llm-stats.com/ai-news
- https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026
- https://ai.meta.com/research/publications/cwm-an-open-weights-llm-for-research-on-code-generation-with-world-models/
- https://agentic.ai/news

**Hardware / silicon / infra**
- https://www.cnbc.com/2026/05/14/cerebras-cbrs-stock-trade-nasdaq-ipo.html
- https://www.cnbc.com/2026/05/15/cerebras-stock-ipo-debut-ai.html
- https://techcrunch.com/2026/05/14/cerebras-raises-5-5b-kicking-off-2026s-ipo-season-with-a-bang/
- https://www.theregister.com/ai-ml/2026/05/15/cerebras-wafer-scale-ai-bet-delivers-blockbuster-ipo/5240821
- https://www.bloomberg.com/news/articles/2026-05-14/cerebras-shares-indicated-to-surge-89-after-year-s-top-ipo
- https://www.cerebras.ai/press-release/cerebras-systems-announces-pricing-of-initial-public-offering
- https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer
- https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
- https://nvidianews.nvidia.com/news/meta-builds-ai-infrastructure-with-nvidia
- https://www.sec.gov/Archives/edgar/data/1769628/000176962826000154/ex991.htm
- https://www.cnbc.com/2026/05/08/wall-street-ai-chip-love-moves-from-nvidia-to-intel-amd-and-micron.html
- https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/03/amd-s-next-generation-ai-chips-set-to-power-2026-data-center-growth
- https://www.tomshardware.com/pc-components/gpus/hbm4-memory-to-double-speeds-in-2026-2048-bit-interface-to-revolutionize-artificial-intelligence-and-hpc-markets-report
- https://introl.com/blog/ai-memory-supercycle-hbm-2026
- https://www.koreaherald.com/article/10737182
- https://www.marvell.com/company/newsroom/marvell-next-gen-cxl-switch-memory-pooling-breaks-ai-memory-wall.html
- https://www.poet-technologies.com/news/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks
- https://www.globenewswire.com/news-release/2026/05/14/3294762/0/en/poet-technologies-and-lumilens-advance-wafer-level-photonic-integration-for-next-generation-ai-optical-networks.html
- https://www.tomshardware.com/networking/nvidia-outlines-plans-for-using-light-for-communication-between-ai-gpus-by-2026-silicon-photonics-and-co-packaged-optics-may-become-mandatory-for-next-gen-ai-data-centers
- https://www.hpcwire.com/2025/12/02/upscale-ai-eyes-late-2026-for-scale-up-ualink-switch/
- https://ualinkconsortium.org/wp-content/uploads/2026/01/UALink_White_Paper_Publication_Candidate_FINAL_VERSION.pdf
- https://newsletter.semianalysis.com/p/the-great-ai-silicon-shortage
- https://newsletter.semianalysis.com/p/cpus-are-back-the-datacenter-cpu
- https://www.datacenterknowledge.com/networking/ai-inference-the-next-stress-test-for-global-data-center-infrastructure
- https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/ai-infrastructure-compute-strategy.html

**Software / runtimes / quantisation**
- https://pytorch.org/blog/pytorch-xla-2-7-release-usability-vllm-boosts-jax-bridge-gpu-build/
- https://docs.nvidia.com/deeplearning/frameworks/vllm-release-notes/index.html
- https://blog.vllm.ai/2025/10/16/vllm-tpu.html
- https://theaiengineer.substack.com/p/quantization-in-practice-gptq-vs

**Safety, policy, applications**
- https://www.cnbc.com/2026/05/05/ai-oversight-trump-google-microsoft-xai.html
- https://timesofindia.indiatimes.com/technology/tech-news/during-trumps-china-visit-anthropic-just-reminded-america-why-it-should-not-sell-top-end-nvidia-chips-to-china-since-most-/articleshow/131102724.cms
- https://www.mayerbrown.com/en/insights/publications/2026/01/administration-policies-on-advanced-ai-chips-codified
- https://www.morganlewis.com/pubs/2026/01/bis-revises-export-review-policy-for-advanced-ai-chips-destined-for-china-and-macau
- https://restofworld.org/2026/government-ai-hallucinations-south-africa-deloitte/
- https://compliancehub.wiki/legal-ai-hallucination-reckoning-2026/
- https://sharedsapience.substack.com/p/the-century-report-weekly-may-11-17-2026
- https://www.gsmarena.com/verizon_joins_project_glasswing_to_test_anthropics_claude_mythos_model_on_its_infrastructure-news-72850.php
- https://www.govconwire.com/articles/anthropic-glasswing-claude-mythos-katherine-sutton-dow-cybersecurity
- https://news.sap.com/2026/05/sap-sapphire-keynote-business-ai-platform-power-autonomous-enterprise/
- https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/
- https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-may-2026
- https://www.prnewswire.com/news-releases/mongodb-makes-enterprise-ai-production-ready-302764870.html
- https://en.people.cn/n3/2026/0506/c90000-20453012.html
- https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/
- https://www.startuphub.ai/ai-news/ai-news/2026/defense-ai-6-2-billion-week-may-11-2026

**Research papers**
- https://arxiv.org/list/cs.AI/recent
- https://arxiv.org/list/cs.CL/recent
- https://arxiv.org/list/stat.ML/recent
- https://arxiv.org/abs/2603.23198
- https://arxiv.org/html/2605.06485v1
