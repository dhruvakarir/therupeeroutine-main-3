import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, Share2 } from "lucide-react";

const articles = [
  {
    id: "ppf-vs-nps",
    title: "PPF vs NPS: Which Retirement Option is Better for You?",
    excerpt: "Compare Public Provident Fund and National Pension System to understand tax benefits, returns, and liquidity for your retirement planning in India.",
    content: `
      <h2>Understanding PPF and NPS</h2>
      <p>Both Public Provident Fund (PPF) and National Pension System (NPS) are popular retirement planning tools in India, but they serve different purposes and come with distinct features.</p>
      
      <h3>Public Provident Fund (PPF)</h3>
      <p>PPF is a government-backed savings scheme with a 15-year lock-in period. It offers guaranteed returns and tax benefits under Section 80C. The current interest rate is around 7.1% per annum, revised quarterly by the government.</p>
      
      <h3>National Pension System (NPS)</h3>
      <p>NPS is a market-linked pension scheme where your contributions are invested in equity, corporate bonds, and government securities. It offers higher potential returns but comes with market risks.</p>
      
      <h2>Tax Benefits Comparison</h2>
      <p>PPF contributions up to ₹1.5 lakh qualify for deduction under Section 80C. The interest earned and maturity amount are completely tax-free.</p>
      <p>NPS offers additional tax benefits with an extra deduction of ₹50,000 under Section 80CCD(1B), over and above the ₹1.5 lakh limit under Section 80C.</p>
      
      <h2>Which One Should You Choose?</h2>
      <p>Choose PPF if you prefer guaranteed returns, complete safety, and tax-free maturity. It's ideal for risk-averse investors.</p>
      <p>Choose NPS if you're comfortable with market risks and want higher potential returns. The additional tax benefit makes it attractive for high-income earners.</p>
      
      <h2>Conclusion</h2>
      <p>Consider having both in your portfolio - PPF for stability and NPS for growth potential. A balanced approach often works best for long-term retirement planning.</p>
    `,
    category: "Retirement Planning",
    readTime: "8 min read",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    publishDate: "March 15, 2024"
  },
  {
    id: "sip-mutual-funds",
    title: "Complete Guide to Investing in Mutual Funds via SIP",
    excerpt: "Learn how Systematic Investment Plans work, choosing the right mutual funds, and building wealth through disciplined monthly investments.",
    content: `
      <h2>What is SIP?</h2>
      <p>Systematic Investment Plan (SIP) is a method of investing a fixed amount regularly in mutual funds. It's like a recurring deposit but in mutual funds, helping you benefit from rupee cost averaging.</p>
      
      <h3>Benefits of SIP Investing</h3>
      <p>SIP helps you invest systematically without timing the market. When markets are high, you buy fewer units, and when markets are low, you buy more units, averaging out your purchase cost.</p>
      
      <h2>How to Choose the Right Mutual Fund</h2>
      <p>Consider these factors: your investment goal, time horizon, and risk appetite. For long-term goals like retirement, equity funds work well. For short-term goals, debt funds are better.</p>
      
      <h3>Types of Mutual Funds for SIP</h3>
      <ul>
        <li><strong>Large Cap Funds:</strong> Invest in top 100 companies, lower risk</li>
        <li><strong>Mid Cap Funds:</strong> Medium-sized companies, moderate risk</li>
        <li><strong>Small Cap Funds:</strong> Smaller companies, higher risk and returns</li>
        <li><strong>Index Funds:</strong> Track Nifty/Sensex, low cost</li>
        <li><strong>Flexi Cap Funds:</strong> Invest across market caps, balanced approach</li>
      </ul>
      
      <h2>How Much Should You Invest?</h2>
      <p>Start with whatever amount is comfortable - even ₹500 per month works. The key is consistency. Increase your SIP amount annually as your income grows.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <p>Don't stop SIP during market downturns - that's when you accumulate more units. Don't chase past performance - analyze the fund's consistency. Don't invest in too many funds - 3-4 good funds are enough.</p>
    `,
    category: "Mutual Funds",
    readTime: "12 min read",
    author: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    publishDate: "March 12, 2024"
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
      <h2>Why Invest in Gold?</h2>
      <p>Gold is a traditional hedge against inflation and currency fluctuations. Indians have a cultural affinity for gold, and it serves as both an investment and emotional asset.</p>
      
      <h2>Investment Options Compared</h2>
      
      <h3>1. Physical Gold (Jewelry & Coins)</h3>
      <p><strong>Pros:</strong> Tangible asset, cultural value, can be used for personal occasions</p>
      <p><strong>Cons:</strong> Making charges (10-25%), storage risks, purity concerns, no passive income</p>
      <p><strong>Best For:</strong> Traditional purchases, weddings, but not as pure investment</p>
      
      <h3>2. Digital Gold</h3>
      <p><strong>Pros:</strong> Buy from ₹1, no storage worries, can convert to physical, 24K purity</p>
      <p><strong>Cons:</strong> Platform risk, no regulation, GST of 3% applies</p>
      <p><strong>Best For:</strong> Small, regular investments without storage concerns</p>
      
      <h3>3. Gold ETFs</h3>
      <p><strong>Pros:</strong> Trade on stock exchange, low expense ratio (0.5-1%), high liquidity, pure gold exposure</p>
      <p><strong>Cons:</strong> Requires demat account, capital gains tax applicable</p>
      <p><strong>Best For:</strong> Investors with demat accounts wanting liquidity</p>
      
      <h3>4. Gold Mutual Funds</h3>
      <p><strong>Pros:</strong> No demat needed, SIP available, professional management</p>
      <p><strong>Cons:</strong> Slightly higher expense ratio than ETFs</p>
      <p><strong>Best For:</strong> Investors wanting SIP in gold without demat</p>
      
      <h3>5. Sovereign Gold Bonds (SGBs)</h3>
      <p><strong>Pros:</strong> 2.5% annual interest, no capital gains tax if held till maturity (8 years), government-backed</p>
      <p><strong>Cons:</strong> Lock-in period, limited issue windows</p>
      <p><strong>Best For:</strong> Long-term investors wanting returns beyond gold price appreciation</p>
      
      <h2>Taxation Comparison</h2>
      <ul>
        <li><strong>Physical Gold:</strong> No GST on selling, but LTCG/STCG tax applies</li>
        <li><strong>Digital Gold:</strong> 3% GST on buy, LTCG/STCG on selling</li>
        <li><strong>Gold ETFs/Funds:</strong> LTCG 20% with indexation after 3 years</li>
        <li><strong>SGBs:</strong> Interest taxable, but maturity proceeds completely tax-free</li>
      </ul>
      
      <h2>Recommended Strategy</h2>
      <p>For most investors:</p>
      <ul>
        <li><strong>70% in SGBs:</strong> For long-term holding with interest income</li>
        <li><strong>30% in Gold ETFs:</strong> For liquidity and flexibility</li>
      </ul>
      
      <h2>How Much Gold in Portfolio?</h2>
      <p>Financial experts recommend 10-15% of your portfolio in gold. It provides diversification and acts as a hedge during equity market downturns.</p>
      
      <h2>Conclusion</h2>
      <p>SGBs are the best option for long-term investors. Gold ETFs work for those seeking liquidity. Avoid physical gold for investment purposes - buy it for personal use or cultural needs, not as investment.</p>
    `,
    category: "Alternative Investments",
    readTime: "11 min read",
    author: "Neha Singh",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
    publishDate: "March 1, 2024"
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