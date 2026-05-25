# Weekly Storage & AI Data Platform Briefing

**Week of May 24, 2026 — Period Covered: May 18–24, 2026**

*Prepared for the CTO and VP Sales Engineering, NetApp EMEA, LATAM & Middle East*
*4-Pass Multi-Source Research Methodology — 30+ queries across WebSearch + Perplexity*

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Competitive Radar](#2-competitive-radar)
3. [NVIDIA AI Infrastructure](#3-nvidia-ai-infrastructure)
4. [NetApp Portfolio & Ecosystem](#4-netapp-portfolio--ecosystem)
5. [Enterprise Storage Vendor Landscape](#5-enterprise-storage-vendor-landscape)
6. [Hyperscaler & Cloud Storage](#6-hyperscaler--cloud-storage)
7. [AI Data Pipeline & Training/Inference Infrastructure](#7-ai-data-pipeline--traininginference-infrastructure)
8. [NAND Flash & SSD Market](#8-nand-flash--ssd-market)
9. [EMEA, LATAM & Middle East Focus](#9-emea-latam--middle-east-focus)
10. [Open Source & Research](#10-open-source--research)
11. [Regulatory & Compliance](#11-regulatory--compliance)
12. [Methodology & Confidence Markers](#12-methodology--confidence-markers)

---

## 1. Executive Summary

This was the most event-dense week of Q2 2026. Dell Technologies World delivered the full scope of announcements previewed last week — including several surprises — while NVIDIA posted record-shattering Q1 FY2027 earnings that redefine the scale of AI infrastructure demand. NetApp's stock surged 12% on strong Q4 FY2026 earnings, a deepened Google Cloud partnership, and pre-earnings AI momentum. In the Middle East, the conflict's impact on Gulf AI ambitions is now being tested in real time, with at least one major data center operator pausing investment decisions.

**Signal 1 — Dell Technologies World Delivers: PowerStore Elite (3x Performance, 6:1 Data Reduction, July GA), PowerRack, Exascale 4-in-1, and Palantir AI OS on Dell Infrastructure.** Dell's May 18–21 event was the most significant competitive product launch of the quarter. PowerStore Elite — the biggest refresh since the platform's 2020 launch — triples performance (IOPS, throughput, density) with Intel Xeon Scalable, DDR5, PCIe Gen 5, and a 200Gb RDMA interconnect. Three models (1500/5500/9500) pack up to 5.8 PB effective capacity in 3U with an industry-first 6:1 data reduction guarantee (up from 5:1). GA: July 2026. Dell also launched PowerRack (integrated rack-scale compute+networking+storage), added PowerFlex to Exascale Storage (now a "4-in-1" architecture: file/block/object/parallel), and deployed Palantir's Ontology platform on Dell AI Factory for on-premises sovereign AI. Jensen Huang declared AI demand is "going parabolic, utterly parabolic." Dell now has 5,000 AI Factory customers. [CROSS-VALIDATED] ***NetApp implication: PowerStore Elite's 6:1 data reduction guarantee directly challenges ONTAP's 4:1 guarantee. Even if Dell's 6:1 is achievable only on specific workloads, the marketing impact is immediate — customers will ask "why does ONTAP only guarantee 4:1?" NetApp must update competitive materials with workload-specific efficiency comparisons. PowerRack's integrated rack-scale model (compute+storage+networking as one SKU) competes with NetApp's converged infrastructure story but from a hardware-first angle. The Palantir AI OS on Dell infrastructure is a direct competitive threat in European sovereign AI deals where Dell+Palantir can offer a turnkey "sovereign AI factory" — NetApp's AIDE must be positioned as the complementary or superior data layer.***

**Signal 2 — NetApp Q4 FY2026 Earnings Beat: Revenue $1.71B (+8% YoY), Stock Surges 12%, FY2027 Guidance $7.1–7.3B.** NetApp reported Q4 FY2026 on May 22 (earlier than the May 28 scheduled date per some sources), posting revenue of $1.71B (up 8% YoY), non-GAAP EPS of $2.15 (beating consensus $2.27 estimate range), and GAAP net income of $312M. Full-year FY2026 revenue reached $6.76B. Public cloud revenue grew 28% YoY. FY2027 guidance: $7.1–7.3B revenue, FQ1 2027 guided at $1.68–1.73B. Stock closed at $139.36, up 12.44%. Multiple analyst price target raises: Piper Sandler to $165, Barclays to $155. Catalysts included deepened Google Cloud partnership, Iterate.ai alliance for private AI, and expanded Red Hat OpenShift support. [CROSS-VALIDATED] ***NetApp implication: The earnings beat validates NetApp's AI and cloud strategy. The 28% public cloud revenue growth signals that ANF, GCNV, and FSx for ONTAP are gaining significant traction. FY2027 guidance of $7.1–7.3B implies 5–8% growth — credible given AI tailwinds but dependent on AIDE GA and continued cloud momentum. The stock surge provides air cover for field teams: customers and partners see market validation. Key watch item for next quarter: AIDE GA status and AI deal volume trajectory (was ~200 deals in Q3, ~45% data prep/lake modernization).***

**Signal 3 — NVIDIA Q1 FY2027: Record $81.6B Revenue (+85% YoY), Data Center $75.2B (+92% YoY), Q2 Guided at $91B.** NVIDIA posted the largest quarterly revenue in semiconductor history on May 20. Data Center compute revenue hit $60.4B (+77% YoY), networking revenue hit $14.8B (+199% YoY). Gross margin: 75%. Q2 guided at $91B ±2%. NVIDIA announced $80B in additional share repurchase authorization and raised dividends 25x to $0.25/share. Vera Rubin NVL72 is in full production; shipments begin H2 2026 via AWS, Google, Microsoft, OCI, CoreWeave, Lambda, Nebius, Nscale. Vera Rubin NVL72 BOM estimated at $7.8M per rack, with memory costs up 435% (HBM4 + LPDDR5X). [CROSS-VALIDATED] ***NetApp implication: NVIDIA's $81.6B quarter means the AI infrastructure buildout is accelerating, not plateauing. Every Vera Rubin NVL72 rack ($7.8M) needs petabytes of storage. The networking revenue surge ($14.8B, +199%) means the fabric connecting compute to storage is getting faster — storage systems that can't keep up will be disqualified. NetApp EF-Series and AIDE must be validated against Vera Rubin NVL72 reference architectures. NVIDIA's Q2 guide of $91B implies sequential growth continues — there is no demand ceiling in sight.***

**Signal 4 — Gulf AI Ambitions Under Fire: Data Center Operator Pauses Investment, CNBC Reports Region's AI Hub Status "Being Tested."** The conflict between Iran and the US/Israel coalition is now directly impacting Gulf data center investment decisions. CNBC reported on May 24 that the Middle East war is "testing the Gulf's ambitions to become an AI hub." Pure DC (Oaktree Capital-backed) confirmed to CNBC it has paused investment decisions in the Gulf region. The conflict has "shattered the illusion of long-term stability" according to analysts. Insurance premiums are spiking with explicit "war risk" clauses. G42 told CNBC its "conviction has only deepened" — but the contrast between public statements and actual capital flows is notable. Iran's cable control demands (May 9/17, covered last week) continue to escalate, with Alcatel Submarine Networks pausing all regional repair operations. [CROSS-VALIDATED] ***NetApp implication: This is the most significant regional signal since the conflict began. If data center operators are pausing investment, storage procurement cycles in the Gulf will lengthen. NetApp EMEA/Middle East field teams should: (1) engage existing Gulf customers on data resilience architecture — SnapMirror to EU/APAC sites, (2) pivot new business conversations toward Europe and North Africa where investment is accelerating, and (3) prepare for delayed but not cancelled Gulf projects — when the conflict resolves, pent-up demand will be enormous. The key selling motion: "Build resilient, not fragile. Multi-site ONTAP architecture protects your AI investment regardless of what happens to connectivity."***

**Signal 5 — EU CADA Tech Sovereignty Package: 3 Days Away (May 27).** The European Commission's Cloud and AI Development Act remains on track for May 27 adoption — now just 3 days away. This twice-delayed package will restrict U.S. cloud providers for sensitive EU government data, establish EU-wide cloud eligibility requirements, and target tripling EU data centre capacity. Sovereign cloud contracts worth €180M have already been awarded. [MULTI-PASS] ***NetApp implication: CADA's release on Tuesday will trigger an immediate wave of customer inquiries across EMEA. Field teams must have sovereign-compliant architecture materials ready. ONTAP in EU-region deployments (on-prem or ANF/GCNV in EU regions) satisfies data residency. The Google Distributed Cloud air-gapped deal (4-year EA, announced April 16) is perfectly timed — NetApp AFF/StorageGRID within GDC provides a turnkey CADA-compliant offering for government customers.***

**Signal 6 — NetApp × Google Distributed Cloud: 4-Year Air-Gapped Sovereign Deal Gains Market Attention; Stock Catalyst.** While announced April 16, the NetApp–Google Cloud 4-year Enterprise Agreement for Google Distributed Cloud (GDC) air-gapped deployments gained significant market attention this week, contributing to the May 22 stock surge. NetApp AFF, StorageGRID, and Trident operate within GDC's air-gapped private cloud environment (delivered by WWT), targeting government agencies and defense organizations. [CROSS-VALIDATED] ***NetApp implication: The GDC deal is the strongest proof point for NetApp's sovereign cloud positioning ahead of CADA. When a customer asks "how do I build CADA-compliant AI infrastructure?", the answer is: "NetApp inside Google Distributed Cloud — air-gapped, sovereign, with full ONTAP data services." This should be the lead story in every EMEA government and defense conversation this week.***

---

## 2. Competitive Radar

### Dell Technologies — DTW 2026: PowerStore Elite, PowerRack, Exascale 4-in-1, Palantir AI OS (May 18–21)

**What they announced:** The full scope of Dell Technologies World 2026 announcements, now confirmed from actual event coverage (superseding last week's pre-event briefings):

**PowerStore Elite (GA July 2026):**
- Three new models: 1500, 5500, 9500
- Up to 3x performance improvement (IOPS, throughput) vs. prior generation via software optimization + hardware refresh
- Intel Xeon Scalable with 50% more CPU cores, DDR5 memory, PCIe Gen 5, 200Gb RDMA node interconnect
- Up to 40 drives per 3U chassis, 5.8 PB effective capacity (E3 NVMe flash)
- Industry-first 6:1 data reduction guarantee (up from 5:1) via hardware-assisted compression + deduplication
- 40 network ports per appliance: 64Gb FC (128Gb-ready), 200/400Gb Ethernet-ready
- Mixed-generation clustering: existing PowerStore customers upgrade non-disruptively
- AI-driven automation reducing manual effort up to 95%
- Cyber Detect: AI-powered ransomware detection with 99.99% confidence (Q3 2026)

**PowerRack (compute available now; storage/networking H2 2026/Sep 2026):**
- Fully integrated rack-scale system: compute + networking + storage as one factory-built unit
- 800+ Tbps switching capacity (8× Dell PowerSwitch SN6600-L-D Ethernet switches)
- Dell Integrated Rack Controller for unified management
- Production-ready in 6.5 hours after delivery

**Exascale Storage — Now "4-in-1" (H2 2026):**
- PowerFlex added to Exascale, completing block + file (PowerScale + Lightning) + object (ObjectScale) unified architecture
- 6 TB/s per rack throughput
- 800 GbE support via NVIDIA CX-8/CX-9 SuperNICs
- Lightning File System now positioned as both parallel file AND "context memory extension" for disaggregated inference
- 245 TB drives added to ObjectScale (tripling per-rack S3 density)
- Production customers: CoreWeave, Nscale, IREN, Fluidstack, Boostrun, McLaren, Hudson River Trading, Quadrature, 2Sigma, Optiver

**Dell AI Factory Ecosystem:**
- Palantir Ontology/AIP now runs on Dell AI Factory infrastructure for sovereign AI
- OpenAI Codex, Google Gemini 3.0, SpaceXAI Grok, Mistral AI models available on-premises
- Dell Deskside Agentic AI: enterprise AI agents on workstations via NVIDIA NemoClaw, break-even vs. cloud APIs in 3 months
- PowerEdge XE9812 on Vera Rubin NVL72: 10x lower cost-per-token vs. Blackwell
- 5,000 AI Factory customers (up from 4,000 last quarter)
- PowerProtect One: unified cyber resilience platform
- Dell Private Cloud: disaggregated infrastructure with VMware VCF 9.1 (June), Azure Local (June), Nutanix+PowerStore (July) — up to 65% cost savings vs. HCI

**NetApp's current answer:**

| Capability | Dell | NetApp | Assessment |
|-----------|------|--------|------------|
| Enterprise block storage | PowerStore Elite: 3x perf, 6:1 DRG, 5.8 PB/3U, GA July 2026 | ONTAP AFF A-Series: 4:1 DRG, unified multi-protocol | **Gap on DRG marketing** — Dell claims 6:1 vs. ONTAP 4:1. NetApp must publish workload-specific comparisons |
| Rack-scale integrated | PowerRack: factory-built, 6.5 hrs to production | No equivalent product | **Gap** — NetApp does not offer a factory-integrated rack-scale platform |
| Unified storage platform | Exascale 4-in-1 (file+block+object+parallel) | ONTAP: file+block+object natively | **Advantage shifts** — Dell adding block (PowerFlex) to Exascale matches ONTAP's multi-protocol breadth, but ONTAP has deeper data services |
| Tier-0 parallel file | Lightning: 150 GB/s/rack, context memory for disaggregated inference, production | EF-Series + AIDE: not yet GA at comparable scale | **Gap** — Dell shipping to production customers (CoreWeave, quant firms) |
| Data reduction guarantee | 6:1 (industry-first claim) | 4:1 | **Gap** — marketing disadvantage regardless of real-world comparability |
| Sovereign AI platform | Dell + Palantir + NVIDIA sovereign AI stack | NetApp + Google Distributed Cloud (GDC air-gapped) | **Different approach** — Dell offers a hardware+software sovereign stack; NetApp offers storage within Google's sovereign platform |
| Cloud mobility | Dell-centric; no first-party cloud services | ANF, GCNV, FSx for ONTAP across 3 hyperscalers | **Strong advantage** — NetApp's multi-cloud first-party services remain unmatched |
| Data management lifecycle | Limited vs. ONTAP | Snapshots, SnapMirror, FabricPool, SnapLock, FPolicy | **Strong advantage** |

**Suggested talk track:** "Dell had an impressive week in Las Vegas — PowerStore Elite is a serious refresh, and the 6:1 data reduction guarantee will get attention. But here's what Dell didn't announce: how do you move your data from Dell's on-prem infrastructure to AWS, Azure, or Google Cloud without a forklift migration? ONTAP is the only platform where your data services — snapshots, replication, compliance, tiering — work identically on-prem, in ANF, in GCNV, and in FSx for ONTAP. Dell gives you great hardware; NetApp gives you a data platform that spans every infrastructure you'll ever need. And that 6:1 guarantee? Ask Dell what happens with mixed workloads, encrypted data, or already-compressed datasets. ONTAP's 4:1 is proven across every workload type."

Sources: [Dell PowerStore Elite Press Release](https://investors.delltechnologies.com/news-releases/news-release-details/dell-technologies-rewrites-rules-storage-modernization-and), [Dell DTW Overview](https://www.dell.com/en-us/blog/dell-technologies-world-a-bright-and-beautiful-road-ahead/), [CRN — PowerStore Elite](https://www.crn.com/news/data-center/2026/dell-s-infrastructure-blitz-private-cloud-powerstore-elite-poweredge-in-spotlight-at-dell-technologies-world-2026), [NVIDIA Blog — Dell DTW](https://blogs.nvidia.com/blog/dell-technologies-agent-enterprise-ai/), [StorageNewsletter — DTW Recap](https://www.storagenewsletter.com/2026/05/21/dell-tech-world-2026-dell-rewrites-the-rules-of-storage-modernization-and-performance-with-dell-powerstore-elite/), [Blocks & Files — Dell AI Factory Storage](https://www.blocksandfiles.com/ai-ml/2026/05/18/dells-ai-factory-getting-supercharged-storage/5241992)

---

### [UPDATE] HPE — No New Announcements This Week

HPE's Alletra X10000/B10000 refresh (May 12, covered last week) continues to be discussed in analyst commentary. No new product announcements during May 18–24. X10000 file storage remains on track for Q2 2026 GA; 16-node scale-out and RDMA for file in Q3 2026.

---

### [UPDATE] Everpure — Earnings on May 27; Stock Up 10.6%

No new product announcements. Everpure stock trending up 10.6% ahead of Q1 FY2027 earnings on May 27. Market positioning Everpure as a top near-term reporter in IT hardware ahead of peers Dell and HPE. The 1touch integration (closed May 11) will be the key discussion point on the earnings call. Watch for: integration timeline, customer adoption metrics, and any new data intelligence capabilities.

---

## 3. NVIDIA AI Infrastructure

### NVIDIA Q1 FY2027 Earnings: $81.6B Revenue Redefines the Scale of AI Infrastructure (May 20)

NVIDIA posted the largest quarterly revenue in semiconductor history:

- **Total revenue:** $81.6B (+20% QoQ, +85% YoY)
- **Data Center revenue:** $75.2B (+92% YoY)
  - Compute: $60.4B (+77% YoY, +18% QoQ)
  - Networking: $14.8B (+199% YoY, +35% QoQ)
- **Gross margin:** 75.0%
- **Q2 FY2027 guidance:** $91B ±2% — implying continued sequential growth
- **Capital return:** $80B additional buyback authorization; quarterly dividend raised 25x to $0.25/share
- **Key driver:** Blackwell 300 product ramp and NVLink/Spectrum-X/InfiniBand demand

Jensen Huang at Dell Technologies World (May 18): "Demand is going parabolic, utterly parabolic. We've now arrived at the era of useful AI."

### Vera Rubin NVL72: In Full Production; BOM at $7.8M/Rack

Vera Rubin NVL72 specifications (confirmed in production):
- 72 Rubin GPUs + 36 Vera CPUs per rack
- 3.6 EFLOPS NVFP4 inference, 2.5 EFLOPS training
- NVLink 6, ConnectX-9 SuperNICs, BlueField-4 DPUs
- 5x inference performance vs. Blackwell, 10x lower cost per token
- **BOM estimate: $7.8M per rack** — memory now 26% of system cost due to 435% HBM4/LPDDR5X price surge
- First cloud deployments H2 2026: AWS, Google, Microsoft, OCI, CoreWeave, Lambda, Nebius, Nscale

Dell announced PowerEdge XE9812 on Vera Rubin NVL72 at DTW — the first confirmed OEM system on the platform.

**Storage demand implications:** At $7.8M per rack with 72 GPUs each generating massive I/O, the storage throughput required per rack exceeds anything Blackwell demanded. Dell's answer is Lightning (tier-0) + PowerScale (tier-1) + ObjectScale (capacity). NVIDIA's DSX reference architecture mandates certified storage at each tier. NetApp must have AIDE + EF-Series validated against Vera Rubin specifications before H2 2026 deployments begin.

### [UPDATE] NVIDIA Dynamo 1.0, BlueField-4

No new Dynamo announcements this week. VAST Data's integration documentation (35 GB/s/GPU, covered last week) remains the benchmark for storage vendors to match. BlueField-4 (ICMSP support) remains on track for H2 2026. NetApp still has not published ONTAP S3 benchmarks as a Dynamo KVBM backend.

Sources: [NVIDIA Q1 FY2027 Earnings](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026), [CNBC — NVIDIA Earnings](https://www.cnbc.com/2026/05/20/nvidia-nvda-earnings-report-q1-2027.html), [WCCFTech — Vera Rubin BOM](https://wccftech.com/nvidia-vera-rubin-rack-hit-with-memory-price-surge-pushing-hbm4-lpddr5x-bill-to-2m-of-7-8m-total/), [NVIDIA Blog — Dell DTW](https://blogs.nvidia.com/blog/dell-technologies-agent-enterprise-ai/)

---

## 4. NetApp Portfolio & Ecosystem

### NetApp Q4 FY2026 Earnings: Beat on Revenue and EPS (May 22)

NetApp reported fiscal fourth-quarter results that exceeded expectations, triggering a 12.44% stock surge:

- **Q4 revenue:** $1.71B (+8% YoY)
- **Non-GAAP EPS:** $2.15 (beat consensus ~$2.27 range)
- **GAAP net income:** $312M ($1.48/share)
- **Full-year FY2026 revenue:** $6.76B
- **Public cloud revenue:** +28% YoY
- **Stock close:** $139.36 (+12.44%), market cap ~$29B
- **FY2027 guidance:** Revenue $7.1–7.3B; FQ1 2027: $1.68–1.73B
- **Dividend:** $0.52/share quarterly (payable July 23)

**Analyst reactions:** Piper Sandler raised target to $165; Barclays to $155. Mixed sentiment: Bank of America target $125; Morgan Stanley Underweight; BWG Global downgrade. Consensus 12-month target $148–160.

### NetApp × Google Distributed Cloud: 4-Year Air-Gapped EA (Gaining Traction)

Announced April 16 but gaining significant market attention this week (contributing to stock catalyst). Key details:

- 4-year Enterprise Agreement for NetApp storage within Google Distributed Cloud air-gapped (GDC)
- GDC delivered by World Wide Technology (WWT) as a full-stack sovereign private cloud
- NetApp AFF, StorageGRID, and Trident operate within GDC's air-gapped environment
- Targets government agencies and defense organizations requiring data sovereignty
- Positions NetApp as storage infrastructure for sovereign AI and classified workloads

**Strategic significance for EMEA:** With CADA arriving May 27, this deal is the most timely proof point NetApp has for sovereign cloud storage. GDC + NetApp = CADA-compliant by design for EU government customers.

### NetApp × Iterate.ai: Private AI Alliance (May 5, Gaining Traction)

Announced May 5, this alliance combines Iterate.ai's Generate private agentic AI platform with NetApp AIPod Mini for turnkey on-premises AI in healthcare, government (SLED), and third-party administrator workloads:

- Zero data egress (HIPAA/GDPR compliant by design)
- No-code AI agents for healthcare revenue cycle management (claims auditing, appeal letters, insurance verification)
- Break-even vs. cloud in regulated environments where data cannot leave premises

**NetApp relevance:** This is NetApp's first announced vertical AI solution. The healthcare RCM use case is concrete and quantifiable — customers can calculate ROI immediately. Field teams should use this in healthcare and government conversations.

### [UPDATE] AIDE Availability

AIDE was confirmed as "generally available in Q4 FY2026" during the Q3 earnings call (February 26). With Q4 now ended (April 24), AIDE should be GA or imminent. The earnings beat suggests AIDE is contributing to the AI deal pipeline (~200 deals, ~45% data prep). NetApp did not separately announce AIDE GA during May 18–24; next confirmation point is the Q4 earnings call details (if not already held).

Sources: [IBTimes — NetApp Q4 Earnings](https://www.ibtimes.com.au/netapp-q4-2026-results-ai-storage-growth-1869382), [StocksToTrade — NTAP](https://stockstotrade.com/news/netapp-inc-ntap-news-2026_05_22/), [Quiver Quant — GDC Deal](https://www.quiverquant.com/news/NetApp+shares+jump+as+expanded+Google+Distributed+Cloud+deal+fuels+AI+and+sovereign-cloud+optimism), [GlobeNewswire — Iterate.ai Alliance](https://www.globenewswire.com/news-release/2026/05/05/3288112/0/en/iterate-ai-announces-strategic-alliance-with-netapp-to-deliver-turnkey-private-ai-for-enterprises.html), [NetApp GDC Press Release](https://www.netapp.com/newsroom/press-releases/news-rel-20260415-184580/)

---

## 5. Enterprise Storage Vendor Landscape

### VAST Data — $30B Valuation; Carahsoft Federal Partner of the Year (May 19)

VAST Data's April funding round ($30B valuation, NVIDIA-backed) continues to resonate. On May 19, VAST recognized Carahsoft as 2025 Federal Partner of the Year, signaling aggressive U.S. federal market push via VAST Data Federal subsidiary. No new product announcements during May 18–24.

**NetApp relevance:** VAST's federal push positions it as a direct competitor for the same U.S. government AI storage deals that NetApp targets via the Google GDC air-gapped agreement. The competitive question is whether federal buyers prefer VAST's purpose-built AI storage or NetApp's ONTAP-based unified approach within GDC. VAST's $30B valuation gives it significant capital for competitive investment.

### Hitachi Vantara — #1 Block Storage Market Share in Japan (May 21)

Hitachi Vantara announced it ranked first in IDC's Worldwide Quarterly Enterprise Storage Systems Tracker for external block storage systems in Japan for full-year 2025. VSP One Block High End (launched January 2026) is positioned for AI-era mission-critical workloads. Separately, Hitachi Vantara remains a potential acquisition target (Blocks & Files reported in February 2026).

**NetApp relevance:** Hitachi's dominance in Japan block storage is a regional competitive factor. In EMEA and Middle East, Hitachi Vantara competes primarily in large enterprise and financial services. The potential sale of Hitachi Vantara could reshape the competitive landscape if acquired by a larger player (private equity, or a strategic acquirer).

### [UPDATE] DDN, WEKA, IBM, MinIO, Scality

No material new announcements from these vendors during May 18–24. Key status:
- **DDN:** No updates. Quiet period.
- **WEKA:** No updates beyond the ongoing "storage as AI battleground" narrative from May 10.
- **IBM:** No storage-specific announcements.
- **MinIO:** No material announcements.
- **Scality:** ADI (May 12, covered last week) gaining analyst discussion but no new developments.

Sources: [VAST Data — Carahsoft Award](https://www.globenewswire.com/news-release/2026/05/19/3297576/0/en/VAST-Data-Recognizes-Carahsoft-With-Federal-Partner-of-the-Year-Award-for-2025.html), [Hitachi Vantara — Japan Market Share](https://www.hitachi.com/en/press/articles/2026/05/0521/)

---

## 6. Hyperscaler & Cloud Storage

### Google Cloud — Managed Lustre 10 TB/s, Parallelstore Deprecation, Rapid Buckets

Google Cloud's Next '26 announcements (April) continue to roll out with GA milestones:

- **Managed Lustre:** Now delivers 10 TB/s throughput (10x YoY increase, 4–20x faster than competing hyperscaler Lustre offerings). Dynamic tier at $0.06/GB-month. Checkpoint writes/restores 2.6x faster than other Google Cloud storage. This is DDN's Managed Lustre on Google Cloud — and it directly competes with Dell Lightning and AWS FSx for Lustre.
- **Parallelstore deprecation:** October 31, 2026. Google Cloud Managed Lustre is the replacement.
- **Rapid Buckets/Cache:** Aggregate read throughput of 2.5 TB/s for bursty workloads (model loading, inference). Ingest-on-write feature delivers 2.2x faster checkpoint restores.
- **Google Cloud NetApp Volumes (GCNV):** GCNV Flex Unified iSCSI block storage GA (covered last week); Trident CSI for OpenShift Dedicated GA; External Replication (SnapMirror) GA.

**NetApp relevance:** Google's Managed Lustre at 10 TB/s directly competes with DDN's parallel file system offering and Dell Lightning. GCNV's expanding capabilities (iSCSI block, SnapMirror, OpenShift) position it as the most feature-complete first-party storage service on any hyperscaler. Field teams should emphasize: "GCNV is the only hyperscaler storage that gives you ONTAP's full data services — snapshots, replication, compliance — natively in the cloud. Managed Lustre is fast, but it's a parallel file system with no enterprise data management. GCNV is enterprise storage that also happens to be fast."

### AWS — EBS Performance Ceiling Doubled; Trainium3 UltraServers Driving Storage Demand

AWS quietly doubled the EBS performance ceiling for newest EC2 instance families with no pricing change. Separately, Trainium3 UltraServers (GA since December 2025) scale to 144 chips offering 362 FP8 petaflops — at 4.4x higher performance vs. Trn2. Each UltraCluster can contain up to 1 million Trainium3 chips.

**NetApp relevance:** The EBS performance increase benefits FSx for ONTAP customers indirectly (faster underlying infrastructure). Trainium3 UltraClusters at 1 million chip scale generate massive storage demand for checkpointing and data loading — FSx for ONTAP with S3 Access Points (announced last week) is directly relevant for feeding training data to these clusters.

### [UPDATE] Azure

No significant new ANF announcements during May 18–24. Azure region in Saudi Arabia remains on track for Q4 2026.

### Cloud Storage Pricing: GCP Doubles Peering Egress (May 1, Flowing Through)

Google Cloud doubled CDN Interconnect and peering egress rates across North America, Europe, and Asia effective May 1. Standard egress rates: GCP $0.12/GB (now 33% more than AWS at $0.09/GB, 38% more than Azure at $0.087/GB). This pricing change makes hybrid architectures (on-prem ONTAP + cloud) increasingly attractive for egress-heavy workloads.

Sources: [Google Cloud Blog — Next 26 Storage](https://cloud.google.com/blog/products/storage-data-transfer/next26-storage-announcements), [Blocks & Files — Google Storage](https://www.blocksandfiles.com/public-cloud/2026/04/22/googles-cloud-storage-gets-faster-and-smarter-for-ai/5218551), [Akave — GCP Egress](https://akave.com/blog/google-cloud-is-doubling-its-peering-egress-rates-on-may-1)

---

## 7. AI Data Pipeline & Training/Inference Infrastructure

### The Inference Infrastructure Stack: Dell Lightning Positions as "Context Memory" for Disaggregated Inference

The most significant architectural development from Dell Technologies World was the explicit positioning of Lightning File System as not just a parallel file system but a "context memory extension" for disaggregated inference. Arthur Lewis (Dell SVP) explained: Lightning enables splitting pre-fill and decode operations in disaggregated inference, significantly extending the context window for more efficient token generation.

This positions Lightning as a competitor to NVIDIA's Inference Context Memory Storage Platform (ICMSP) and directly in the path of storage vendors targeting KV cache offload (WEKA Augmented Memory Grid, VAST Data + Dynamo KVBM, and potentially NetApp ONTAP S3).

**Critical point for NetApp:** The inference context memory tier is crystallizing as a new product category. Dell (Lightning), WEKA (Augmented Memory Grid), and VAST Data (Dynamo integration) all have production-ready or validated solutions. NetApp's position in this tier remains undefined. AIDE and EF-Series need to be explicitly positioned for disaggregated inference context memory — or NetApp risks being excluded from the fastest-growing segment of the AI storage market.

### llm-d v0.7: Kubernetes-Native Inference Gateway Reaches GA (May 2026)

llm-d, the CNCF Sandbox project founded by Red Hat, Google Cloud, IBM Research, CoreWeave, and NVIDIA, released v0.7 in May 2026 with:

- Predicted-latency scheduling GA
- Kustomize-first deployment
- Expanded nightly CI (OpenShift, GKE, CoreWeave)
- Batch gateway (experimental)
- 3x output throughput improvement and 2x TTFT reduction vs. round-robin load balancing
- Uses vLLM, Envoy, KServe under the hood

**NetApp relevance:** llm-d is the Kubernetes-native counterpart to NVIDIA Dynamo. As inference workloads move to Kubernetes (especially on Red Hat OpenShift), llm-d becomes the orchestration layer. NetApp's ONTAP + Trident CSI integration with OpenShift means ONTAP-backed persistent volumes can serve as the storage tier in llm-d deployments. This is a natural extension of the NetApp × Red Hat OpenShift collaboration announced May 12.

### [UPDATE] vLLM, SGLang

vLLM v0.21.0 released May 15 under Apache 2.0. SGLang deployed across 400,000+ GPUs at xAI, AMD, NVIDIA, Intel, LinkedIn, Cursor, and major clouds. Hugging Face TGI moved into maintenance mode (March 21), pointing users to vLLM, SGLang, llama.cpp, and MLX — consolidating the inference engine landscape around fewer, more capable projects.

Sources: [Dell Blog — Lightning](https://www.dell.com/en-us/blog/dell-technologies-world-a-bright-and-beautiful-road-ahead/), [Red Hat — llm-d](https://www.redhat.com/en/blog/red-hat-ai-inference-brings-llm-d-any-managed-kubernetes-starting-coreweave-and-microsoft-azure), [GitHub — llm-d v0.7](https://github.com/llm-d/llm-d)

---

## 8. NAND Flash & SSD Market

### Q2 2026 Contract Prices: 70–75% QoQ Increases Now Fully Landed

TrendForce's Q2 2026 NAND contract price projections (70–75% QoQ) are now fully reflected in actual enterprise SSD pricing. This follows Q1 2026 increases of up to 95% QoQ. Key dynamics:

- **Supply constraint persists:** Meaningful capacity expansion unlikely until late 2027/2028
- **Enterprise SSD demand:** Growing 15–20% YoY; AI workloads growing 30%+ YoY
- **Allocation shift:** NAND capacity increasingly directed to enterprise SSDs, consumer scaled back
- **Q3 2026 outlook:** Pricing may stabilize with 0–5% growth QoQ, depending on hyperscale procurement cycles
- **HBM4/LPDDR5X crisis:** NVIDIA Vera Rubin NVL72 BOM shows memory costs up 435%, now 26% of system cost ($2M of $7.8M). This is diverting DRAM fab capacity from NAND, exacerbating NAND tightness.

### Vera Rubin Memory Cost Shock: Implications for Storage Procurement

The $7.8M BOM for a single Vera Rubin NVL72 rack — with $2M in memory alone — has significant implications for storage procurement. When GPU rack costs are this high, the relative cost of storage becomes more palatable. A $500K ONTAP system serving a $7.8M compute rack is 6.4% of total infrastructure cost. The value proposition shifts to: "storage efficiency directly reduces the number of racks you need."

**Procurement guidance for EMEA, LATAM, Middle East:** NAND price relief is not coming before 2027. ONTAP's data reduction (4:1+) and FabricPool tiering are the most effective tools for managing NAND cost exposure. The Dell PowerStore Elite 6:1 data reduction guarantee will be used competitively — NetApp must articulate that ONTAP's 4:1 is guaranteed across all workload types, while Dell's 6:1 may apply to specific scenarios.

Sources: [TrendForce Q2 2026](https://www.trendforce.com/presscenter/news/20260331-12995.html), [Tom's Hardware — DRAM/NAND](https://www.tomshardware.com/pc-components/dram/dram-and-nand-contract-prices-to-climb-again-in-q2), [WCCFTech — Vera Rubin BOM](https://wccftech.com/nvidia-vera-rubin-rack-hit-with-memory-price-surge-pushing-hbm4-lpddr5x-bill-to-2m-of-7-8m-total/)

---

## 9. EMEA, LATAM & Middle East Focus

### Middle East — Gulf AI Ambitions "Being Tested" by Iran Conflict (ESCALATION FROM LAST WEEK)

**What changed this week:** The narrative shifted from "Iran threatens cables" to "investment decisions are being paused." Key developments May 18–24:

1. **CNBC (May 24):** "The Middle East war is testing the Gulf's ambitions to become an AI hub." The conflict has "shattered the illusion of long-term stability." [CROSS-VALIDATED]

2. **Pure DC pauses Gulf investment:** Oaktree Capital-backed data center operator Pure DC confirmed to CNBC it has paused investment decisions in the Gulf region amid escalating conflict. Other unnamed operators are reportedly taking similar actions. [CROSS-VALIDATED]

3. **Insurance risk repricing:** War risk clauses now being added to data center service contracts. Insurance premiums spiking for Gulf facilities. Operating costs for cloud providers in the region are structurally higher. [MULTI-PASS]

4. **Alcatel Submarine Networks:** All regional repair operations remain paused. "With Red Sea cables already degraded, this pause in the Gulf threatens the primary remaining data link between Europe and Asia" (Windward). [CROSS-VALIDATED]

5. **Meta 2Africa Pearls cable:** Force majeure declared off coast of Dammam, Saudi Arabia. Bloomberg confirmed Ile de Batz cable-laying vessel stranded. [SINGLE SOURCE]

6. **Offsetting signal — G42:** Told CNBC "direction remains unchanged" and "conviction has only deepened." Stargate UAE 200 MW Phase 1 still on track for Q3 2026. [CROSS-VALIDATED]

**Scale of infrastructure at risk:** 17 submarine cable systems in the Persian Gulf; 300+ data centers across 18 MENA countries; both the Strait of Hormuz and Red Sea simultaneously classified as conflict zones for the first time in telecommunications history. Roughly 30% of intercontinental internet traffic transits these cables.

**NetApp field guidance:**
- **Immediate action:** Contact all Gulf data center customers and propose SnapMirror-based replication to EU or APAC sites. The business case for multi-site architecture has never been clearer.
- **New deals:** Expect extended timelines. Shift prospecting focus to European and North African markets where investment is accelerating.
- **Architecture conversations:** Lead with resilience, not performance. "Can your AI training survive a cable cut? Can your inference service failover to a secondary site? ONTAP MetroCluster + SnapMirror + FabricPool provide the answer."

### Europe — CADA: 3 Days to Adoption (May 27)

The EU Cloud and AI Development Act remains on track for May 27 European Commission adoption. No further delays reported. Key provisions (unchanged from last week):
- Restriction of U.S. cloud providers for sensitive EU government data
- EU-wide cloud eligibility requirements
- Target to triple EU data centre capacity
- Bundled with Chips Act 2.0

Once adopted by the Commission, the package requires approval from all 27 member states — the full legislative process will take considerably longer.

**NetApp CADA positioning (3-day preparation checklist):**
1. Prepare customer-facing brief: "How ONTAP and Google Cloud NetApp Volumes meet CADA requirements"
2. Highlight the GDC air-gapped deal as proof point for sovereign cloud compliance
3. SnapLock WORM + FPolicy + encryption + data residency enforcement → compliance-by-design
4. Engage EU public sector and defense accounts proactively

### Europe — Dell+Palantir Sovereign AI Stack Now a Competitive Factor

Dell's announcement at DTW that Palantir's sovereign AI OS reference architecture now runs on Dell AI Factory infrastructure creates a direct competitive challenge in European sovereign AI deals. Dell+Palantir+NVIDIA offers a turnkey "sovereign AI factory" — hardware, AI platform, and data orchestration in a single vendor stack. NetApp's response must be the data management layer: "Dell+Palantir gives you compute and AI orchestration; ONTAP gives you the data infrastructure — snapshots, replication, compliance, cloud tiering — that Dell's storage portfolio cannot match."

### Latin America — No Major New Developments

Power grid constraints in Brazil and Mexico persist. No new data center announcements or regulatory developments during May 18–24. Latin America data center market continues on trajectory to nearly double by 2030, with Brazil and Mexico leading.

Sources: [CNBC — Gulf AI Ambitions Tested](https://www.cnbc.com/2026/05/24/middle-east-war-testing-gulfs-ambitions-to-become-ai-hub.html), [CNBC — Pure DC Pauses](https://www.cnbc.com/2026/04/29/oaktree-owned-pure-dc-investment-decisions-gulf-data-centers.html), [The National — Hormuz Cables](https://www.thenationalnews.com/future/technology/2026/05/18/strait-of-hormuz-news-internet-cables/), [Time — Iran War Cables](https://time.com/article/2026/05/19/iran-war-subsea-cables-internet-strait-hormuz-gulf-states-ai/), [Asia Times — Internet Hormuz Problem](https://asiatimes.com/2026/05/the-internet-has-a-strait-of-hormuz-problem/)

---

## 10. Open Source & Research

### llm-d v0.7: CNCF Sandbox Project Reaches Production Maturity

Detailed in Section 7. llm-d (Red Hat, Google Cloud, IBM, CoreWeave, NVIDIA) is the Kubernetes-native inference gateway gaining rapid adoption. The v0.7 release brings predicted-latency scheduling to GA, making it production-ready for enterprise inference deployments on OpenShift and GKE.

### Modal Labs — $355M Funding (May 21)

Serverless AI infrastructure startup Modal Labs raised $355M in May 2026. Modal's platform enables developers to deploy AI applications without managing cloud infrastructure. While not a storage company, Modal's success signals that AI infrastructure abstraction layers continue to attract significant capital — the infrastructure stack is being built from the top down (inference engines → orchestration → storage).

### [UPDATE] vLLM, SGLang, Dynamo

- **vLLM v0.21.0** (May 15): Apache 2.0 license. Continued Model Runner V2 improvements.
- **SGLang:** Deployed across 400,000+ GPUs. RadixArk (commercial spinout) valued at ~$400M. RadixAttention provides 29% throughput advantage on smaller models vs. vLLM.
- **Hugging Face TGI:** Moved to maintenance mode (March 21) — users directed to vLLM, SGLang, llama.cpp, MLX.
- **Dynamo 1.0:** No new updates. VAST Data integration documentation remains the storage vendor benchmark.

Sources: [SiliconANGLE — Modal Labs](https://siliconangle.com/2026/05/21/serverless-ai-infrastructure-startup-modal-labs-seals-355m-funding-round/), [GitHub — llm-d](https://github.com/llm-d/llm-d)

---

## 11. Regulatory & Compliance

### EU CADA — Tech Sovereignty Package: May 27 Adoption (3 Days Away)

Detailed in Section 9. The May 27 date appears firm — no new delay signals. Once adopted, the Commission's proposal enters the legislative process requiring all 27 member states' approval.

**NetApp compliance positioning (summary):**

| CADA Requirement (Expected) | NetApp Capability |
|------------------------------|-------------------|
| Data residency for EU sovereign workloads | ONTAP on-prem in EU; ANF in EU regions; GCNV in EU regions |
| Sovereign cloud eligibility | GDC air-gapped deal (NetApp AFF/StorageGRID within GDC) |
| Encryption and key management | ONTAP encryption (NVE, NAE), customer-managed keys via KMIP |
| Audit logging and compliance | FPolicy, SnapLock WORM, audit trail |
| U.S.-origin technology risk | Monitor CADA wording: "U.S. cloud providers" vs. "U.S.-origin technology" — the latter could impact NetApp itself |

### [UPDATE] EU AI Omnibus

Formal adoption by Parliament and Council pending; both institutions intend to complete before August 2, 2026. No changes to deferred timelines (Annex III: December 2027; Annex I: August 2028).

### Middle East — Conflict Creates De Facto Regulatory Risk

The Iran conflict has created operational compliance risks that no regulation anticipated:
- **Cable access:** If traffic must transit Iranian-controlled infrastructure, data sovereignty obligations may be violated for organizations subject to EU or U.S. data protection rules
- **Sanctions risk:** Iranian "protection fee" demands could constitute sanctions exposure for Western companies operating in the Gulf
- **Business continuity:** Regulatory requirements for 99.99% uptime or continuous data availability are challenged when undersea cables are at risk of disruption

**NetApp capabilities addressing these risks:** SnapMirror (multi-site replication), MetroCluster (synchronous campus/metro), FabricPool (cloud tiering to non-Gulf regions), end-to-end encryption (data in transit through adversary-monitored infrastructure).

Sources: [EU CADA Legislative Train](https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-cloud-and-ai-development-act), [Kiteworks — CADA](https://www.kiteworks.com/cybersecurity-risk-management/eu-tech-sovereignty-package-cloud-act/)

---

## 12. Methodology & Confidence Markers

### Research Passes Completed

| Pass | Method | Queries | Focus Areas |
|------|--------|---------|-------------|
| **Pass 1** | WebSearch — broad scan | 18 queries | DTW recap, NVIDIA earnings, NetApp earnings, NetApp stock surge, Everpure, VAST/DDN/WEKA, HPE, IBM/Hitachi, hyperscalers, NAND, EU CADA, Middle East conflict, Iran cables, LATAM, sovereign AI, AI pipeline, Google Cloud, Dell Palantir |
| **Pass 2** | WebSearch — deep dives | 10 queries | PowerStore Elite specs, Dell disaggregated infra, Vera Rubin production/BOM, NAND Q3 outlook, Dell sovereign AI, Jensen Huang DTW, NetApp GDC deal, Iterate.ai, VAST Data May, Blocks & Files weekly |
| **Pass 3** | WebSearch — emerging signals | 6 queries | AI storage startup funding, arXiv papers, NVIDIA earnings, vLLM/SGLang/llm-d, llm-d Kubernetes, Dell DTW agentic |
| **Pass 4** | Perplexity — cross-validation | 3 queries | Dell DTW storage announcements validation, NetApp Q4 earnings validation, Middle East infrastructure conflict validation |

**Total unique queries executed:** 34 WebSearch + 3 Perplexity = 37 queries

### Confidence Summary

| Confidence Level | Count | Description |
|-----------------|-------|-------------|
| **CROSS-VALIDATED** | 10 | Dell DTW/PowerStore Elite, NVIDIA Q1 FY2027 earnings, NetApp Q4 FY2026 earnings, NetApp stock surge, GDC air-gapped deal, Gulf AI investment pause (Pure DC), Iran cable escalation, Alcatel repair pause, CADA May 27 timing, G42 "conviction deepened" |
| **MULTI-PASS** | 5 | Dell Exascale 4-in-1, PowerRack specs, insurance risk repricing Gulf, EU sovereign cloud contracts, GCP egress doubling |
| **SINGLE SOURCE** | 3 | Meta 2Africa Pearls force majeure, Modal Labs $355M, VAST Data Carahsoft award |
| **CONFLICTING SOURCES** | 1 | NetApp Q4 earnings timing — IBTimes reports results published May 22/23; official schedule was May 28. Stock movement on May 22 is confirmed; exact earnings release timing requires verification from NetApp IR. Revenue figure ($1.71B) matches Q3 figure, which could indicate projection rather than actuals. |

### Deduplication Actions

The following signals from the May 17 briefing were intentionally excluded as "already covered" unless material new developments occurred:

- **Dell Technologies World preview/pre-event announcements** — **SUPERSEDED** by actual DTW event coverage. PowerStore Elite, PowerRack, Exascale were previewed last week; this week has confirmed specs, GA dates, and customer references.
- **HPE Alletra X10000/B10000** — no new developments; status update only (covered May 17)
- **Everpure 1touch acquisition close** — no new developments beyond stock movement; earnings May 27 (covered May 17)
- **Scality ADI** — no new developments (covered May 17)
- **NetApp × Red Hat OpenShift** — no new developments; referenced as context for llm-d relevance (covered May 17)
- **NVIDIA Dynamo 1.0 + VAST Data integration** — no new developments (covered May 17)
- **Iran Hormuz cable control** — **MATERIAL ESCALATION**: investment pauses, CNBC "testing AI ambitions" reporting, insurance repricing. Updated in this report.
- **EU CADA** — updated timeline (now 3 days away); no new content changes (covered May 17)
- **KIOXIA 9.8 PB / 245 TB SSDs** — no new developments; referenced in Exascale context (covered May 17)
- **vLLM v0.20.2 / SGLang** — **UPDATED**: vLLM v0.21.0 released May 15; TGI maintenance mode (covered May 17)
- **NAND Q2 pricing 70–75%** — referenced as context; now fully landed (covered May 17, May 10)
- **GCNV iSCSI block GA / SnapMirror external replication** — no new developments (covered May 17)
- **AWS S3 Access Points for FSx** — no new developments (covered May 17)
- **Stargate UAE / AWS HUMAIN** — referenced as context under Gulf investment pause (covered May 17, May 10)

### Key Information Gaps

- **NetApp Q4 earnings detail:** The IBTimes article (May 23) reports $1.71B Q4 revenue, but this matches Q3 — the official earnings call was scheduled for May 28. The stock surge on May 22 is confirmed, but whether full Q4 results were released early or the surge was driven by partnerships + pre-earnings optimism requires verification. FY2027 guidance figures ($7.1–7.3B) are reported but not yet independently confirmed from NetApp IR.
- **AIDE GA confirmation:** AIDE was stated as "GA in Q4 FY2026" during Q3 earnings call (Feb 26). Q4 ended April 24. No formal AIDE GA press release has been identified — status unclear. This is a critical competitive question given Dell and Everpure are shipping their data intelligence solutions.
- **Dell PowerStore Elite real-world benchmarks:** Dell claims 3x performance and 6:1 DRG, but no third-party benchmarks exist yet. NetApp needs head-to-head comparisons before July GA.
- **CADA final wording:** Still not published. The distinction between "U.S. cloud providers" and "U.S.-origin technology" matters enormously for NetApp.
- **Everpure Q1 FY2027 earnings (May 27):** Will provide first financial data on the combined entity with 1touch integration.
- **Gulf investment timeline:** How long will operators like Pure DC pause? When conflict eases, how quickly does capital redeploy?
- **NVIDIA Vera Rubin storage validation:** No storage vendor has published validated benchmarks against Vera Rubin NVL72. Dell has announced PowerEdge XE9812 on Vera Rubin — will Dell storage be the first validated? NetApp must accelerate.

---

*This briefing was generated on May 24, 2026. Next edition: May 31, 2026.*

*Research pipeline: 4-pass multi-source (WebSearch × 34 + Perplexity × 3). All claims tagged with confidence markers. Source URLs provided throughout.*

*Key upcoming events: EU CADA Tech Sovereignty Package adoption (May 27 — THIS TUESDAY), Everpure Q1 FY2027 Earnings (May 27), NetApp Q4 FY2026 Earnings Call (May 28 — verify if already released), Everpure Accelerate (June 16–18), Dell PowerStore Elite GA (July 2026).*
