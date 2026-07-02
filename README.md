# wax-defi-retention-metric-suite — DeFi Retention Metric Suite

> **Status:** 🔒 Private (In Development) | Target Public Release: August 2026  
> **Category:** Advanced DeFi & Concentrated Liquidity Visualizers  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**A multi-vector retention health dashboard for DeFi protocols on WAX, scoring LP duration, fee reinvestment behavior, and asset stability with clear visualizations.**

---

## 1. Overview & Goal

This blueprint provides a comprehensive retention health dashboard for DeFi protocols and liquidity pools on WAX. It goes beyond simple TVL to measure how "sticky" liquidity and users really are through duration, reinvestment behavior, and stability metrics.

**Why it matters for WAX/Antelope:**
Many dashboards show flashy TVL numbers that can be misleading. This tool helps protocols and users understand true retention and loyalty, enabling better decisions and healthier ecosystem growth.

Uses exclusively **public infrastructure** (Alcor, Hyperion, on-chain data).

**Target users:** Protocol teams, DAO operators, LP providers, analysts, investors.

**Success metrics:**
- Accurate multi-factor retention scoring
- Clear, actionable visualizations
- Transparent methodology

---

## 2. Concepts & Inspiration

**Core concepts:**
- LP duration and holding periods
- Fee reinvestment vs. extraction behavior
- Asset stability and concentration risk
- Weighted multi-vector health scores

**User pain points:**
Current tools focus on volume and TVL. Protocols need deeper insight into retention quality to design better incentives.

**Inspirations:**
- DeFiLlama retention metrics
- Professional fund health dashboards
- Loyalty and churn analytics in SaaS

**Related blueprints:** Pairs beautifully with `wax-yield-farming-opportunity-aggregator`, `wax-lp-behavioral-profiler`, `wax-alcor-lp-behavioral-profiler`, and `wax-concentrated-liquidity-roi-matrix`.

---

## 3. Design Specifications (Pixel Journey Standards)

### 3.1 Visual & Interaction Design
- Dashboard layout with key health scorecards
- Clean charts showing duration distributions, reinvestment rates, and stability trends
- Color coding for health levels (green/amber/red)
- Interactive filters by protocol, pool, time period
- Responsive and beautiful on all devices

### 3.2 Key Views / Components
- `RetentionHealthScore.tsx` — Prominent overall health score with breakdown
- `DurationDistribution.tsx` — Chart showing how long LPs stay
- `ReinvestmentBehavior.tsx` — Visualization of fee handling patterns
- `StabilityTrends.tsx` — Time-series of key stability metrics

### 3.3 Accessibility (A11y) & Inclusive Design
- WCAG 2.2 AA
- Clear explanations of each metric
- Keyboard and screen reader support
- High contrast mode

### 3.4 Performance & Optimization Targets
- Efficient data aggregation
- Smart caching
- Fast client-side filtering

---

## 4. Technical Architecture

### 4.1 Core Tech Stack (Standardized)
- **Framework:** Next.js 15 (App Router) + TypeScript (strict)
- **Styling:** Tailwind CSS + shadcn/ui
- **State & Data:** @tanstack/react-query + zod
- **Blockchain Data:** Alcor + Hyperion for LP actions, durations, and fee behavior
- **Visualization:** Recharts
- **Utilities:** date-fns, lucide-react, sonner

### 4.2 Data Flow Diagram
```
Alcor + Hyperion Data (LP actions, durations, fees)
    ↓
Client-side Feature Extraction & Scoring
    ↓
React Query Cache
    ↓
Beautiful Dashboard with Scorecards + Charts
```

### 4.3 Folder Structure
Standard blueprint structure with components/dashboard, lib/wax/retention-scorer.ts, hooks/useRetentionMetrics.ts, etc.

### 4.4 Security & Privacy Notes
- Read-only public data
- No PII
- Clear methodology explanations

---

## 5. Implementation Examples & Code Snippets

**Core retention scoring example**
```ts
// lib/wax/retention-scorer.ts
export function calculateRetentionHealth(poolData: PoolData, lpActions: Action[]) {
  const durationScore = calculateDurationScore(lpActions);
  const reinvestmentScore = calculateReinvestmentScore(lpActions);
  const stabilityScore = calculateStabilityScore(poolData);
  return weightedHealthScore;
}
```

---

## 6. Demo & Testing Strategy
- Live Demo with mock and mainnet data
- Strong test coverage for scoring logic
- Playwright e2e flows
- Excellent educational explanations

---

## 7. Roadmap & Development Phases
Follows the standard 4-phase template.

---

## 8. Visual References & Mockups
The dashboard should feel professional and trustworthy — like a fund health report but tailored for WAX DeFi. Clear scorecards with drill-down capability.

---

## 9. Related Blueprints & Ecosystem Fit
- `wax-yield-farming-opportunity-aggregator` — Yield context
- `wax-lp-behavioral-profiler` — Behavioral insights
- `wax-concentrated-liquidity-roi-matrix` — ROI depth

---

## 10. License, Contributing & Credits
- MIT License
- Built with public Alcor and Hyperion infrastructure
- Pixel Journey Design System

**Pixel Journey — Beautiful interfaces for public blockchain data.**
