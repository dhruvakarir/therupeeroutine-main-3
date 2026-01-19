import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, Share2 } from "lucide-react";

const articles = [
  {
    id: "lazy-investing",
    title: "Lazy investment portfolio for Indians Investors",
    excerpt: "A simple, low-maintenance investment portfolio strategy tailored for Indian investors seeking long-term wealth building with minimal effort.",
    content: `
      <p>
    All of us have a desire to be wealthy, or at least get financially independent from jobs or business.
    But only a handful of us actually want to spend weekends staring at stock charts, analysing P/E ratios,
    or panicking because a certain CEO tweeted something controversial.
  </p>

  <p><em>I certainly don't. I'd rather be riding my motorbike, planning my next trip, or just sleeping in.</em></p>

  <p>
    If you are a salaried professional in India, whether you're writing code in Bengaluru,
    crunching financial numbers in Mumbai, or managing brands in Gurgaon, you are already working hard for your money.
    Your money should not require more hard work to grow.
  </p>

  <p>
    This is where people often recommend entering the <strong>Lazy Portfolio</strong>.
    This is not about being slothful; it is about being efficient.
    The strategy was popularized by the <em>Bogleheads</em> (followers of John Bogle, founder of Vanguard),
    based on a simple truth: <strong>Simplicity often beats complexity</strong>.
  </p>

  <p>
    Today, let's decode how to build the famous <strong>3-Fund Portfolio</strong> with an Indian twist.
  </p>

  <h2>What is a 3-Fund Portfolio?</h2>

  <p>
    The concept originated in the US and suggests that we only need three things to build wealth:
  </p>

  <ul>
    <li>Total US Stock Market Fund</li>
    <li>Total International Stock Market Fund</li>
    <li>Total Bond Market Fund</li>
  </ul>

  <p>
    But we earn in Rupees, spend in Rupees, and live in India.
    We cannot apply this framework directly.
    We need a <em>"Desi"</em> version that accounts for higher inflation and strong domestic growth.
  </p>

  <p>The Indian version of the Lazy Portfolio looks like this:</p>

  <ul>
    <li><strong>The Growth Engine:</strong> Indian Equity</li>
    <li><strong>The Global Hedge:</strong> International Equity (US)</li>
    <li><strong>The Safety Net:</strong> Indian Debt</li>
  </ul>

  <h2>Bucket 1: The Growth Engine (Indian Equity)</h2>

  <p><strong>Recommended Allocation:</strong> 40% – 60%</p>

  <p>
    This is the heart of the portfolio.
    India is a developing economy with a long growth runway,
    and this allocation allows us to participate in the growth of Indian businesses.
  </p>

  <p>
    <strong>The “Lazy” Pick:</strong>
    <em>Do not hunt for the "next HDFC" or "next Infosys". Just buy the whole haystack.</em>
  </p>

  <p><strong>The Instrument:</strong> Nifty 50 Index Fund or Nifty 500 Index Fund</p>

  <ul>
    <li>
      <strong>Nifty 50:</strong>
      Top 50 listed companies in India.
      <em>Stable giants like Reliance and TCS, but relatively slower growth.</em>
    </li>
    <li>
      <strong>Nifty 500:</strong>
      Covers the top 500 companies, including mid and small caps.
      <em>Higher growth potential without stock picking.</em>
    </li>
  </ul>

  <h2>Bucket 2: The Global Hedge (International Equity)</h2>

  <p><strong>Recommended Allocation:</strong> 10% – 20%</p>

  <p>Why invest outside India?</p>

  <ul>
    <li>
      <strong>Diversification:</strong>
      Indian markets make up only 3–4% of global markets.
      <em>Exposure to the remaining 96% reduces concentration risk.</em>
    </li>
    <li>
      <strong>Tech Giants:</strong>
      India does not own Google, Apple, Microsoft, or Nvidia.
      <em>We use them daily, so we should benefit from their growth.</em>
    </li>
    <li>
      <strong>Dollar Hedge:</strong>
      The Rupee historically depreciates against the Dollar.
      <em>US assets protect purchasing power in INR terms.</em>
    </li>
  </ul>

  <p>
    <strong>The “Lazy” Pick:</strong>
    S&amp;P 500 Index Fund or Nasdaq 100 Fund of Fund (FoF)
  </p>

  <p>
    <em>
      Note: International funds are now taxed at income slab rates.
      Treat them as long-term compounders, not trading instruments.
    </em>
  </p>

  <h2>Bucket 3: The Safety Net (Debt / Fixed Income)</h2>

  <p><strong>Recommended Allocation:</strong> 20% – 40%</p>

  <p>
    This bucket is not meant to make you rich.
    It is meant to keep you calm when markets crash.
    <em>For example, during Covid-19, debt remained relatively stable.</em>
  </p>

  <p><strong>The “Lazy” Pick:</strong> Government-backed instruments</p>

  <ul>
    <li>
      <strong>EPF:</strong>
      Excellent debt allocation for salaried individuals.
      <em>Currently ~8.25% tax-free interest.</em>
    </li>
    <li>
      <strong>PPF:</strong>
      Long-term, tax-free compounding.
      <em>Ideal for conservative wealth building.</em>
    </li>
  </ul>

  <h2>Real-Life Examples</h2>

  <h3>Scenario A: The Aggressive Techie (Age 26)</h3>

  <p><strong>Profile:</strong> High salary, single, high risk appetite, FIRE aspirant</p>

  <ul>
    <li>50% Nifty 500 / Nifty Next 50 Index Fund</li>
    <li>30% Nasdaq 100 FoF</li>
    <li>20% EPF + Liquid Fund</li>
  </ul>

  <p>
    <em>
      Why it works: Fewer responsibilities and higher risk tolerance allow aggressive equity exposure.
    </em>
  </p>

  <h3>Scenario B: The Balanced Family Man (Age 35)</h3>

  <p><strong>Profile:</strong> Married, one child, saving for home and education</p>

  <ul>
    <li>40% Nifty 50 Index Fund</li>
    <li>20% S&amp;P 500 Index Fund</li>
    <li>40% EPF + PPF + Corporate Bond Fund</li>
  </ul>

  <p>
    <em>
      Why it works: Debt provides stability while US equity offers currency diversification.
    </em>
  </p>

  <h2>Rebalancing: The Lazy Magic</h2>

  <p>
    The Lazy Portfolio only needs attention once a year.
    Rebalancing keeps risk in check.
  </p>

  <p>
    <em>
      Example: If your target is 50% Equity and 50% Debt,
      and markets push equity to 60%, sell 10% equity and move it to debt.
    </em>
  </p>

  <p>
    This automatically enforces <strong>Buy Low, Sell High</strong> without emotions.
  </p>

  <h2>Summary</h2>

  <ul>
    <li>
      Analyse your risk profile and build a portfolio that survives bad markets.
    </li>
    <li>
      Keep costs low.
      <em>A 1.5% expense ratio difference compounded over 20 years can buy a luxury car.</em>
    </li>
    <li>
      Automate with SIPs and avoid checking apps frequently.
    </li>
    <li>
      Do not change your portfolio based on random advice.
      <em>Evaluate it during annual rebalancing, or ignore it.</em>
    </li>
  </ul>
    `,
    category: "Retirement Planning",
    readTime: "5 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    publishDate: "Jan 15, 2026"
  },
  {
    id: "renting-vs-buying-a-home",
    title: "Renting v/s Buying a Home",
    excerpt: "Writing this article to help individuals make informed decisions about pros and cons of renting versus buying a home in the Indian real estate market.",
    content: `

      <p>In Indian Families, renting is often seen as a waste of money, because if we look in the long-term, that money is gone for nothing. And buying a house is seen as a success in life. I have seen some people preferring grooms who own their own house in a typical arranged marriage setup. Let us explore this topic today with data-backed research.</p>

      <p>The answer to this question is not a simple binary response to the "EMI is equal to rent" calculation. It's a lifestyle, flexibility, and risk decision that sits at the heart of our long-term financial plan in Indian Tier-1 cities like Mumbai, Bengaluru, Delhi-NCR, Hyderabad, Chennai, and Pune, where property prices and rents behave very haphazardly.</p>

      <h3>Why Tier-1 Makes the Question Tricky</h3>
      <p>After Covid, Tier-1 cities have seen a steep rise in property prices but a relatively modest increase in rental yields (typically around 3.5–4% per year of the property value). That means a flat worth ₹1.5 crore in Bangalore might rent for only ₹45,000–₹50,000 a month, making renting look cheap compared to buying when you factor in other expenses like EMI interest, maintenance, and down payment.</p>

      <p>At the same time, these cities also offer strong income potential, better infrastructure, and long-term appreciation, which pulls many people towards ownership despite the heavy EMI burden. The tension between "having own home" and "living with peace & flexibility" is what makes the rent vs buy framework important.</p>

      <h2>A Simple Framework for Rent vs Buy</h2>
      <p>For simplifying this decision, I would recommend following this four-part framework: Affordability and Cash Flow, Flexibility and Career Plans, Numbers: Rent Yield and Cost of Ownership, Behaviour and Peace of Mind. This framework lets us plug in our own numbers and priorities rather than rely on generic advice.</p>

      <h3>1. Affordability and Cash Flow</h3>
      <p>Primary check: Can we comfortably afford the house we want without burdening our monthly budget? I have seen lenders using a thumb rule that total EMIs (including all the loans) should not exceed 40–45% of the take-home income.</p>

      <p>In Tier-1 cities, EMIs for a 2BHK flat can easily cross 50–60% of a typical upper-middle-income salary, especially if taken in the early years of career.</p>

      <ul>
      <li><strong>Taking an example from Bangalore for a 2BHK:</strong> Property price: ₹1.2 crore. (Say Whitefield, Sarjapur or Indiranagar)</li>
      <li>Down payment: ₹24 lakh (Suppose 20%)</li>
      <li>Loan: ₹96 lakh at 8.5% for 20 years → EMI ~₹83,500/month</li>
      <li>Rent for a similar flat in the same society: ~₹40,000/month (rental yield ~3.5–4%)</li>
      <li>If the monthly family take-home is ₹1.6 lakh: Buying: EMI alone is ~52% of income, excluding maintenance charges, property tax, and interiors. Renting: Rent is ~22–25% of income, leaving space to invest aggressively in equities/properties in Tier-2.</li>
      </ul>

      <p>Rule of thumb: If EMI for the same house is more than 1.5–1.7 times the market rent and forces you above 40–45% of income, renting usually makes more sense at this stage.</p>

      <h3>2. Flexibility and Career Plans</h3>
      <p>Careers in Tier-1 are dynamic: job switches, role changes, and even city shifts are common. Renting gives us: Freedom to move closer to a new office or a better school without worrying about selling. Ability to "test" different neighbourhoods (Whitefield vs ORR in Bengaluru, Gurgaon vs Noida in NCR) before committing. Coming out of a wrong decision.</p>

      <p>Buying ties you to: One specific location, which binds us to a specific place even though life changes and family expands. Regular EMI for 15–25 years.</p>

      <p>If you expect major changes in: Job location, Relationship status (like, getting married in next 2–3 years), Family size (kids, parents moving in) over the next 5–7 years, renting usually wins on flexibility.</p>

      <h3>3. Numbers: Rent Yield and True Cost of Ownership</h3>
      <p>Go beyond EMI vs rent and look at rental yield and ownership costs: Rental yield = Annual rent / Property value. In Tier-1 cities, this is often 2.5–3.5%, while home loan interest rates hover around 8–9%.</p>

      <h4>Ownership Costs to Include</h4>
      <p>When you buy, your true annual cost is roughly: Interest component of EMI (Considering Principal as an investment), Maintenance & society charges, Property tax, insurance, Occasional big-ticket repairs or upgrades.</p>

      <p>If this total annual cash outflow is much higher than rent for a similar house, the financial argument for buying weakens unless: We expect a strong price appreciation, maybe due to a newly proposed IT Park or expansion of the city in your favourable direction. One values stability and security very highly.</p>

      <ul>
      <li><strong>Let's take an example from Mumbai 1.5BHK:</strong> Price: ₹1.8 crore. (Average location like Ghatkoper)</li>
      <li>Rent: ₹55,000/month (~3.7% yield)</li>
      <li>Year 1 interest outgo: ~₹12–13 lakh</li>
      <li>Maintenance + tax: say ₹1.2 lakh/year</li>
      <li>Total yearly "cost" to own: ~₹13–14 lakh vs rent ~₹6.6 lakh.</li>
      </ul>

      <p>In this case, you're paying roughly double to own vs rent in the short term. If you invest the difference (₹40–45k/month) smartly in equity, your net wealth after 15–20 years can rival or exceed a buyer, especially if property appreciation is moderate.</p>

      <h3>4. Behaviour and Peace of Mind</h3>
      <p>Not all the decisions are made on spreadsheets; some decisions are driven by priorities and the lifestyle. So, one can analyse which bucket among the following two suits them the best.</p>

      <p>Buying may be better if, One's family sleeps better knowing "yeh chat apni hai, koi hme nikal nhi skta", One is disciplined enough to keep EMIs manageable and not stretch for a "status" address.</p>

      <p>Renting may be better if: One value lifestyle flexibility more than owning a particular flat. One is genuinely disciplined at investing the difference between rent and EMI every month in equity or diversified funds, not just letting it sit idle.</p>

      <p>From what I have seen, many people who stay on rent fail here, they save on EMI but don't invest the surplus. Then owning might actually be a useful "forced savings plan."</p>

      <h2>Practical Scenarios: When Renting Wins</h2>
      <ul>
      <li><strong>Scenario 1: Early-career tech couple in Bengaluru</strong> Combined take-home: ₹2 lakh/month. Want a 2BHK near ORR tech parks. Rent: ₹45,000; Buy: EMI ~₹1 lakh+ for similar property. Here, renting + investing the ₹55k difference in equity funds makes sense until they have clarity on career, long-term place to settle, and time to build a large down payment.</li>
      <li><strong>Scenario 2: Single marketing professional in Gurgaon</strong> Salary: ₹1.3 lakh/month. Renting 1BHK for ₹30,000 near Cyber City. Buying means moving to distant outskirts with a long commute to keep EMI affordable. Here, renting close to work and aggressively investing surplus can maximise both time and money.</li>
      </ul>

      <h2>Practical Scenarios: When Buying Wins</h2>
      <ul>
      <li><strong>Scenario 3: Settled family in Pune</strong> Age: mid-30s. Stable jobs, plan to stay in the city long term. Looking at 3BHK in a decent location in the city. EMI ~1.3x current rent and within 35–40% of take-home. Here, buying starts making sense if kids' schooling and routines benefit from stability. A decent property appreciation + timely principal repayment builds long-term wealth. And the possibility of moving cities is very less.</li>
      <li><strong>Scenario 4: Investor mindset in Tier-1</strong> If you step upon a property where: Rental yield is decent (3.5–4%+), Location has a strong infrastructure growth story, You can comfortably afford EMI. Then buying can be attractive both as a home and as a long-term asset.</li>
      </ul>

      <h2>A Simple Checklist Before Deciding</h2>
      <p>Ask yourself:</p>
      <ul>
      <li><strong>Tenure:</strong> Am I 80–90% sure I'll stay in this city and roughly this area for the next 10 years at least?</li>
      <li><strong>Cash Flow:</strong> Will my EMI (plus all house costs) stay under 40–45% of take-home?</li>
      <li><strong>Comparison:</strong> Is EMI ≤ 1.5–1.7× rent for a similar house?</li>
      <li><strong>Buffer:</strong> Will I still be able to invest at least 20–25% of my income after EMI?</li>
      <li><strong>Behaviour:</strong> If I rent, will I truly invest the savings every month?</li>
      </ul>

      <p>If the answer is no to most of these, renting in a Tier-1 city and investing the surplus usually gives you better financial and lifestyle outcomes. If the answer is yes, buying can be a powerful wealth and stability anchor for your family.</p>

      <p>Ultimately, I feel, in Tier-1 India, "rent vs buy" should not be about ego or social pressure; it's more about designing a life where the house supports long-term goals instead of silently choking cash flow.</p>

`,
    category: "Retirement Planning",
    readTime: "4 min read",
    author: "Dhruv Karir",
    image: "https://plus.unsplash.com/premium_photo-1678208875073-046e2f7a29e0?q=80&w=1740",
    publishDate: "Dec 12, 2025"
  },
  {
    id: "ctc-vs-in-hand",
    title: "Indian Salary structure decoded: CTC vs in-hand salary",
    excerpt: "Understand the difference between CTC and in-hand salary, and learn how to optimize your salary structure for maximum benefits.",
    content: `
     <p>When a company quotes your CTC, it’s telling you what it spends on you in a year including salary, benefits, bonuses, even retirement/voluntary contributions. Your in-hand salary is what actually lands in your bank after tax and other employee specific deductions. Think of CTC as the company’s budget, and in-hand as your real cash flow.</p>

<h3>What does a CTC include</h3>
<ul>
  <li><strong>Fixed pay:</strong> Basic salary, HRA, LTA, and special/other allowances. These largely define your taxable income.</li>
  <li><strong>Employer-side benefits:</strong> Employer EPF (often 12% of Basic) or 1800 for startup employees, gratuity provisioning, group health/term insurance premiums, and employer NPS (80CCD(2)). These sit inside CTC but don’t hit your account monthly.</li>
  <li><strong>Variable/bonuses:</strong> Annual performance pay, joining/retention bonuses; paid on achievement/timing and taxed in the year of receipt.</li>
  <li><strong>Equity (ESOPs/RSUs):</strong> Part of the CTC headline. RSUs are taxed as perquisite on vest, and future gains are capital gains on sale; ESOPs have exercise tax implications. They can be valuable but don’t increase monthly cash.</li>
</ul>

<h3>What does in-hand salary include</h3>
<p>Starts from gross (Basic + HRA + LTA + other allowances) and subtracts employee EPF, TDS (income tax), Professional Tax, and any recoveries (loans, insurance add-ons).</p>
<p>Basic anchors EPF and gratuity; HRA can lower tax in the old regime if you pay rent; LTA can be exempt (old regime) for eligible domestic travel in notified blocks. Under the new regime, popular exemptions like HRA/LTA generally don’t apply.</p>

<h3>How to maximise the in-hand salary</h3>
<ul>
  <li><strong>Balance Basic Component thoughtfully:</strong> A very high Basic boosts EPF/gratuity (great long-term) but lowers present take-home. Too low hurts future benefits and HRA headroom. Aim for a middle ground aligned with your goals.</li>
  <li><strong>Align salary structure to your tax regime:</strong><br>
    <em>Old regime:</em> Optimize HRA (metro/non-metro), Leave Travel Allowance, and 80C/80D/80CCD(1B). Ensure rent proofs and investment documentation are present.<br>
    <em>New regime:</em> Leverage standard deduction; ask about employer NPS (80CCD(2)) and focus on health/term cover and performance pay design instead of exemptions you can’t use.</li>
  <li><strong>Clarify variable and equity:</strong> Confirm payout timing, targets, and taxes. Treat one-time bonuses and vesting events separately from your monthly planning.</li>
  <li><strong>Use calculators before signing:</strong> Run both regimes with your exact breakup to compare monthly net. Small shifts between HRA vs special allowance or adding employer NPS can lift take-home without changing headline CTC.</li>
  <li><strong>Reduce leakage:</strong> Opt out of optional deductions you don’t need, avoid credit interest costs by paying full card statements, and automate SIPs after payday to avoid idle cash sitting in bank accounts.</li>
</ul>

<h3>Conclusion</h3>
<p>CTC is the story your employer tells the market; in-hand is the reality you live with each month. Decode the split, right-size Basic component, align your structure with the tax regime you’ll actually use, and pressure-test with numbers before you accept an offer. A transparent breakup and a few informed tweaks can improve monthly take-home, without changing the headline CTC , while still preserving the long-term benefits that build your wealth.</p>

    `,
    category: "Salary Structure",
    readTime: "10 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1729077537326-91749c1c9197?q=80&w=800",
    publishDate: "March 10, 2025"
  },
  {
    id: "creating-a-budget",
    title: "Creating a Budget and Sticking to It: An Indian Guide",
    excerpt: "Comprehensive guide to create a budget for your family to track expenses, save more, and achieve financial goals in the Indian context.",
    content: `
      <p> Growing up in India, managing money usually meant listening to elders talk about “living within your means”, but rarely anyone informed us of step-by-step guide. Even our schools lack basic education on personal financial. I felt this gap when I started working 3 years back and had to go through a lot of content to understand the nuances. In 21st century, with metropolitan lifestyles and scope for endless expenses, mastering budgeting has never been more essential for salaried professionals, freelancers, small- business owners, and families alike. <br></br></p>
      <h2><b>Why Budgeting Matters in India</b></h2>
      <p>Unlike many Western countries, Indian expenses often include festival spending, extended family support, unpredictable medical bills, and fluctuating monthly costs. Budgeting gives you control, security, and clarity, even when those unexpected expenses strike. <br>​</p>
      
      <h3><b>Step 1: Know Your Money</b></h3>
      <p>Before you set limits, track your monthly income and every rupee spent for at least one month. Use a notebook, budgeting app (like Money Manager), or excel sheet. Count salary, freelance earnings, rent from properties, and irregular cash flows like bonuses or gifts<br></br></p>
      
      <h3><b>Step 2: Set Clear Financial Goals</b></h3>
      <p>Set your financial goals, are you saving for a house? EMI-free living? Festival shopping? International Vacation ?</p>
      <p>Clarity turns vague intentions into actionable plans. Write down short-term (next six months), medium-term (2–3 years), and far-term (retirement, children’s education) goals.<br>​</p>

      <h3><b>Step 3: Choose a Proven Budgeting Framework</b></h3>

      <h4><b>The 50–30–20 Rule :</b></h4>
      <p> Add income from all the sources and distribute it according to the following:
          50% Needs: Rent, groceries, utilities, EMIs, and school fees.​
          30% Wants: Eating out, travel, mobile upgrades, festivals.
          20% Savings & Investments: FDs, SIPs, emergency fund, Stocks, Real Estate.
          </p>

      <h4><b>Envelope System:</b></h4>
      <p> I saw this in my childhood, my father used to get salary in cash every month, and he will give it to my mother. My mother will distribute it in different envelopes for all the major expense (groceries, school fees, rent, travel, entertainment) perfect for hands-on control.​</p>

      <h4><b>Zero-Based Budgeting:</b></h4>
      <p> Assign every rupee a “job” so there’s no mindless spending. If you earn ₹60,000, plan precisely how all ₹60,000 will be spent or saved.​</p>
     
     
      <h3><b>Step 4: Build a Budget Table</b></h3>
      <p>Here’s an example for a ₹75,000/month salary:</p>
      <img src="https://drive.google.com/file/d/1bacSjCs-PhdLh0hrYKBdxnPU-uNgck8k/view?usp=share_link" alt="alternatetext">
      
      <h3><b>Step 5: Stick to Your Budget : Desi Hacks</b></h3>
      <ul>
        <li>Automate Savings: Move funds for SIPs and FDs the moment your salary comes in.​</li>
        <li>‘No Spend’ Days: Dedicate days to not spending any discretionary money.​</li>
        <li>Make Lists: Write lists for groceries and shopping, and stick to them.</li>
        <li>Plan for Festivals: Set aside a festival fund monthly instead of scrambling last minute.​​</li>
        <li>Track Weekly: Review your spending each week apps like Money Manager, MoneyView, or Google Sheets are perfect.</li>
      </ul>
      <br>


      <h3><b>Pro Tips for Indian Finance Success</b></h3>
      <ul>  
        <li>Always keep an emergency fund atleast equal to three months’ expenses.​</li>
        <li> Tackle high-interest loans (like personal loans) first to avoid increasing debt.​</li>
        <li> Find free ways to entertain: local parks, free events, govt. shows, learning.​</li>
        <li> Resist social pressure to spend like others: your budget, your rules.​</li>
      </ul>
      <br>

      <h3><b>Conclusion</b></h3>
      <p>Budgeting isn’t boring , it’s your ticket to guilt-free fun, festival shopping, and building wealth over time. Start simple, track honestly, and adjust as life changes. In our country, discipline and flexibility go hand-in-hand to make budgeting truly work for you.</p>
      
      `,
    category: "Wealth Building",
    readTime: "4 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1652422485192-d959b9a8d16e?q=80&w=1740",
    publishDate: "Nov 9, 2025"
  },
  {
     id: "building-emergency-fund",
    title: "Step 1 in Money: Building Emergency Fund",
    excerpt: "Essential guide to creating an emergency fund covering 6 months of expenses to ensure financial security during unforeseen events.",
    content: `
      <main>
  <section>
    <h2>What an Emergency Fund Solves</h2>
    <p><strong>Timing:</strong> Liquidity should be available today, not just in two days or two months—emergencies don’t follow schedules.</p>
    <p><strong>Certainty:</strong> Capital safety is paramount; returns are secondary.</p>
    <p><strong>Friction:</strong> Aim for fewer clicks, minimal penalties, and predictable access when money is needed immediately.</p>
  </section>

  <section>
    <h2>How Much to Keep</h2>
    <p><strong>Minimum:</strong> 3–6 months of essential expenses if you have stable employment and adequate medical/life insurance.</p>
    <p><strong>Preferred:</strong> 6–9 months if you’re self-employed, on variable pay, or planning a transition (job switch, MBA, relocation).</p>
  </section>

  <section>
    <h2>Where to Park the Fund</h2>
    <p><strong>Design principle:</strong> Blend instant-access cash with very low-risk T+0/T+1 options, and keep a small sleeve for slightly higher yield while maintaining safety.</p>

    <article>
      <h3>Overnight mutual funds</h3>
      <p>Very low-risk funds investing in one-day money market instruments; suitable for ultra-short parking.</p>
      <ul>
        <li>Liquidity: Typically T+1; sometimes same-day during cutoffs.</li>
        <li>Use case: Idle cash for days to a few weeks with minimal credit/interest rate risk.</li>
        <li>Examples: HDFC Overnight, SBI Overnight, ICICI Prudential Overnight.</li>
      </ul>
    </article>

    <article>
      <h3>Liquid mutual funds</h3>
      <p>Short-duration debt funds with T+1 liquidity; many offer limited instant redemption; suited for 1–90 day needs.</p>
      <ul>
        <li>Liquidity: T+1 standard; some AMCs offer instant redemption limits.</li>
        <li>Use case: Quick access with low volatility for short-term buffers.</li>
        <li>Examples: Nippon Liquid, SBI Liquid, HDFC Liquid.</li>
      </ul>
    </article>

    <article>
      <h3>Ultra-short/low duration debt funds</h3>
      <p>Conservative debt funds with slightly longer maturity than liquid; aim for stability over 1–6 month holding.</p>
      <ul>
        <li>Liquidity: Usually T+1/T+2; modest NAV movement risk exists.</li>
        <li>Use case: Tier where access can wait a couple of days.</li>
        <li>Examples: ICICI Prudential Ultra Short, Axis Ultra Short, Kotak Low Duration.</li>
      </ul>
    </article>

    <article>
      <h3>Arbitrage mutual funds</h3>
      <p>Exploit cash–futures spreads; equity-oriented for tax; typical holding 2–6 months; settlement T+2.</p>
      <ul>
        <li>Liquidity: T+2 redemption; low-to-moderate NAV volatility vs cash-like debt.</li>
        <li>Use case: Secondary sleeve for funds not needed instantly but within weeks.</li>
        <li>Examples: Kotak Arbitrage, Edelweiss Arbitrage, Nippon India Arbitrage.</li>
      </ul>
    </article>

    <article>
      <h3>High-interest savings account</h3>
      <p>Instant access via UPI/IMPS/ATM; safest for the first layer of emergencies; rate depends on bank.</p>
      <ul>
        <li>Liquidity: Instant, 24x7 (subject to transfer limits).</li>
        <li>Use case: First 1–2 months of expenses for true immediacy.</li>
        <li>Examples: IDFC FIRST, AU Small Finance, RBL.</li>
      </ul>
    </article>

    <article>
      <h3>Savings with sweep-in FD</h3>
      <p>Auto-transfers surplus to FDs for better yield and auto-break on demand; balances yield and access.</p>
      <ul>
        <li>Liquidity: Near-instant via sweep-in; minimizes penalty vs breaking a large FD.</li>
        <li>Use case: Middle tier to add yield without sacrificing quick access.</li>
        <li>Examples: SBI MOD/Sweep, HDFC Sweep-in, ICICI Money Multiplier.</li>
      </ul>
    </article>

    <article>
      <h3>Fixed deposits (FDs)</h3>
      <p>Time deposits with assured rates; premature withdrawal allowed with penalty; consider DICGC coverage.</p>
      <ul>
        <li>Liquidity: Breakable with penalty; ladder to reduce penalty and improve access cadence.</li>
        <li>Use case: Outer tier for 3–12 month runway; pair with liquid cash tier.</li>
        <li>Tips: Distribute across banks to maximize DICGC insurance coverage where relevant.</li>
      </ul>
    </article>

    <article>
      <h3>Treasury bills (T‑bills)</h3>
      <p>91/182/364‑day sovereign bills; best held to maturity for clarity and safety; invest via RBI Retail Direct or brokers.</p>
      <ul>
        <li>Liquidity: Secondary market exists but can be thin; maturity ensures certainty.</li>
        <li>Use case: Planned runway beyond the first couple of months.</li>
        <li>Examples: 91‑day, 182‑day, 364‑day T‑bills.</li>
      </ul>
    </article>
  </section>

  <section>
    <h2>Practical Portfolio Structure</h2>
    <p><strong>Tier 1 (Instant):</strong> High-yield savings + sweep-in for 1–2 months’ expenses.</p>
    <p><strong>Tier 2 (T+0/T+1):</strong> Liquid/overnight funds for the next 1–3 months.</p>
    <p><strong>Tier 3 (Planned access):</strong> Ultra-short/arbitrage/FD ladder/T-bills for the remaining months.</p>
  </section>

  <section>
    <h2>Key Points to Remember</h2>
    <ul>
      <li>Diversify across instruments to avoid access issues on bank/market holidays and platform outages.</li>
      <li>Use FD laddering and multi-bank distribution to optimize liquidity and insurance coverage limits.</li>
      <li>Set up and test access methods (apps, UPI, broker) in advance.</li>
    </ul>
  </section>

  <section>
    <h2>Taxation and Penalties</h2>
    <p><strong>Savings/FD interest:</strong> Taxed at slab; premature FD breakage usually incurs a rate cut/penalty.</p>
    <p><strong>Debt funds (liquid/ultra-short):</strong> Short-term gains taxed at income slab rates; prioritize liquidity over tax arbitrage.</p>
    <p><strong>Arbitrage funds:</strong> Equity taxation typically applies; short-term gains often taxed at 20%, while long-term gains may be at concessional rates per prevailing rules.</p>
    <p><strong>T‑bills/G‑Secs:</strong> Discount/interest taxed at slab; benefit is sovereign safety and clarity.</p>
  </section>

  <section>
    <h2>“Atta ka Drum” Discipline</h2>
    <p>Keep the corpus separate, fund it monthly, don’t chase returns, and tap it only for true emergencies—the goal is certainty and speed, not maximum yield.</p>
  </section>
</main>
    `,
    category: "Wealth Building",
    readTime: "8 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    publishDate: "Nov 4, 2025"
  },
  {
    id: "gold-investment-options",
    title: "Gold Investment Options: Physical vs Digital vs Sovereign Bonds",
    excerpt: "Compare physical gold, digital gold, gold ETFs, and Sovereign Gold Bonds to make informed decisions about gold investments in your portfolio.",
    content: `
<h2><strong>Gold Rally: Mothers Were Right All Along!</strong></h2>
<p>Seeing a huge upward rally in Gold within the last 12–18 months, there is an upward trend in gold investment. Almost everyone realised that when our mothers advised us to invest in gold, they were right all this time! In the past few months, I have seen almost all my friends aspiring to invest in gold in one way or the other.</p>

<p>But here comes the next problem: which product to choose, how to reduce tax liability, and get gold for most of the invested value? In this article, we explore various avenues to invest in Gold, their respective pros and cons.</p>

<h2><strong>1. Gold Jewellery</strong></h2>
<p>Buying a piece of gold jewellery from a gold jeweller. This is undoubtedly the best way to make our mothers, sisters and wives happy. But have you ever wondered if it's a good way to invest in Gold?</p>

<h3><strong>Pros</strong></h3>
<ul>
  <li>We get physical gold which works as a soluble asset in emergencies</li>
  <li>Our families will be happy</li>
</ul>

<h3><strong>Cons</strong></h3>
<ul>
  <li>Making charges and taxes take a big chunk of the amount</li>
  <li>Purity becomes a question</li>
  <li>Security of the asset is a concern</li>
</ul>

<h2><strong>2. Digital Gold</strong></h2>
<p>This is similar to physical gold except for the fact that storage and purity is guaranteed by the issuing organisation. This is held in a gold vault at the organisation level and can be traded at the will of the investor. Some providers provide an option to take delivery of this gold in physical format like coins.</p>

<h3><strong>Pros</strong></h3>
<ul>
  <li>No worries for storage and purity</li>
  <li>Convenient to buy and sell</li>
</ul>

<h3><strong>Cons</strong></h3>
<ul>
  <li>Lack of any regulator (like SEBI) to act as an intermediary</li>
  <li>Taxes like physical gold will still be applicable</li>
</ul>

<h2><strong>3. Gold Exchange-Traded Funds (Gold ETFs)</strong></h2>
<p>These are funds that track the value of gold, and move up and down analogous to the value of physical gold. These are listed on stock markets in India, and can be bought in a demat format. For every rupee we invest in these ETFs, the fund purchases equivalent gold to maintain its sanctity.</p>

<h3><strong>Pros</strong></h3>
<ul>
  <li>Highly liquid (can be bought and sold on the stock market)</li>
  <li>Purity and storage is not a concern</li>
  <li>Minimal taxes and charges for purchase</li>
</ul>

<h3><strong>Cons</strong></h3>
<ul>
  <li>Requires a demat account</li>
  <li>Might have tracking error with the price of gold</li>
</ul>

<h2><strong>4. Gold ETF Mutual Funds</strong></h2>
<p>These are funds that invest in Gold ETFs, they buy and sell an equivalent amount of ETFs as per the orders they receive from investors.</p>

<h3><strong>Pros</strong></h3>
<ul>
  <li>No demat required</li>
  <li>Investors can do a SIP and invest for the long term</li>
</ul>

<h3><strong>Cons</strong></h3>
<ul>
  <li>Higher transaction costs than ETFs (due to the added expense ratio at the mutual fund level)</li>
</ul>

<h2><strong>5. Sovereign Gold Bonds</strong></h2>
<p>These are issued by Government of India, and like digital gold, they are also backed by physical gold. On top of it, they also provide an interest of 2.5% per annum on invested value. They have a lock-in of 8 years, but the returns are tax free on maturity. Also, there is an option to get them in your demat account, so that they can be traded as per requirement.</p>

<h3><strong>Pros</strong></h3>
<ul>
  <li>Added yearly interest on investment</li>
  <li>Secure and safe</li>
  <li>No extra cost or taxes</li>
</ul>

<h3><strong>Cons</strong></h3>
<ul>
  <li>Illiquid, very low number of trades for these bonds on the market</li>
  <li>Very high holding period</li>
</ul>

<h2><strong>Points to Keep in Mind Before Investing</strong></h2>
<ul>
  <li>Buy gold as a hedge to inflation and currency depreciation, but keep in mind not to put all your savings in this asset class</li>
  <li>Decide on an investment horizon before investing and invest accordingly</li>
  <li>Select the product that aligns with your liquidity requirements</li>
  <li>Added costs: Keep in mind the different types of costs that are added which different gold products have. Like, making charges in jewellery, expense ratio in mutual funds and transaction charges in ETFs</li>
</ul>
 
    `,
    category: "Alternative Investments",
    readTime: "6 min read",
    author: "Dhruv Karir",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
    publishDate: "Oct 1, 2025"
  }
];

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen font-body">
        <Header />
        <main className="pt-16 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Article Not Found</h1>
            <Button onClick={() => navigate('/articles')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-body">
      <Header />
      <main className="pt-16">
        <article className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              variant="ghost" 
              className="mb-6"
              onClick={() => navigate('/articles')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>

            <div className="mb-6">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                {article.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
                <span>{article.publishDate}</span>
              </div>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-foreground prose-ul:mb-6
                prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles
                .filter(a => a.id !== article.id && a.category === article.category)
                .slice(0, 2)
                .map(relatedArticle => (
                  <div 
                    key={relatedArticle.id}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/articles/${relatedArticle.id}`)}
                  >
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Badge className="mb-2 bg-secondary text-secondary-foreground">
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {relatedArticle.title}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;