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
    id: "one-crore-portfolio",
    title: "How to Build a ₹1 Crore Portfolio by Age 40",
    excerpt: "Strategic investment plan combining equity mutual funds, PPF, and smart asset allocation to achieve your first crore through disciplined investing.",
    content: `
      <h2>The ₹1 Crore Goal</h2>
      <p>Building a portfolio worth ₹1 crore by age 40 is achievable with disciplined investing and the power of compounding. Let's create a roadmap.</p>
      
      <h3>Starting at Age 25</h3>
      <p>If you start at 25, you need to invest approximately ₹10,000 per month in equity mutual funds assuming 12% annual returns. That's just ₹330 per day!</p>
      
      <h2>Asset Allocation Strategy</h2>
      <p>Don't put all eggs in one basket. Here's a recommended allocation for building ₹1 crore:</p>
      <ul>
        <li><strong>70% in Equity Mutual Funds:</strong> For growth (₹7,000/month via SIP)</li>
        <li><strong>20% in PPF:</strong> For safety and tax benefits (₹2,000/month)</li>
        <li><strong>10% in Emergency Fund:</strong> For liquidity (₹1,000/month)</li>
      </ul>
      
      <h2>The Power of Compounding</h2>
      <p>At ₹10,000/month for 15 years with 12% returns, your total investment is ₹18 lakhs but grows to over ₹1 crore. That's ₹82 lakhs earned through compounding!</p>
      
      <h3>Step-up Your SIPs</h3>
      <p>Increase your SIP by 10% annually. If you start with ₹10,000 and increase it by 10% yearly, you'll reach ₹1 crore faster - in about 12 years instead of 15.</p>
      
      <h2>Starting Late? Don't Worry</h2>
      <p>Starting at 30? You'll need to invest around ₹18,000 per month. At 35? Around ₹35,000 per month. The earlier you start, the less you need to invest monthly.</p>
      
      <h2>Key Principles</h2>
      <ul>
        <li>Start early, even with small amounts</li>
        <li>Stay invested during market downturns</li>
        <li>Increase investments with salary hikes</li>
        <li>Review portfolio annually</li>
        <li>Avoid premature withdrawals</li>
      </ul>
    `,
    category: "Wealth Building",
    readTime: "10 min read",
    author: "Anita Desai",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    publishDate: "March 10, 2024"
  },
  {
    id: "creating-a-budget",
    title: "Creating a Budget and Sticking to It: An Indian Guide",
    excerpt: "Comprehensive guide to create a budget for your family to track expenses, save more, and achieve financial goals in the Indian context.",
    content: `
      <p> Growing up in India, managing money usually meant listening to elders talk about “living within your means”, but rarely anyone informed us of step-by-step guide. Even our schools lack basic education on personal financial. I felt this gap when I started working 3 years back and had to go through a lot of content to understand the nuances. In 21st century, with metropolitan lifestyles and scope for endless expenses, mastering budgeting has never been more essential for salaried professionals, freelancers, small- business owners, and families alike. </p>
      <h2>Why Budgeting Matters in India</h2>
      <p>Unlike many Western countries, Indian expenses often include festival spending, extended family support, unpredictable medical bills, and fluctuating monthly costs. Budgeting gives you control, security, and clarity, even when those unexpected expenses strike.​</p>
      
      <h3>Step 1: Know Your Money</h3>
      <p>Before you set limits, track your monthly income and every rupee spent for at least one month. Use a notebook, budgeting app (like Money Manager), or excel sheet. Count salary, freelance earnings, rent from properties, and irregular cash flows like bonuses or gifts.​</p>
      
      <h3>Step 2: Set Clear Financial Goals</h3>
      <p>Set your financial goals, are you saving for a house? EMI-free living? Festival shopping? International Vacation ?</p>
      <p>Clarity turns vague intentions into actionable plans. Write down short-term (next six months), medium-term (2–3 years), and far-term (retirement, children’s education) goals.​</p>

      <h3>Step 3: Choose a Proven Budgeting Framework</h3>

      <h4>The 50–30–20 Rule :</h4>
      <p> Add income from all the sources and distribute it according to the following:
          50% Needs: Rent, groceries, utilities, EMIs, and school fees.​
          30% Wants: Eating out, travel, mobile upgrades, festivals.
          20% Savings & Investments: FDs, SIPs, emergency fund, Stocks, Real Estate.
          </p>

      <h4>Envelope System:</h4>
      <p> I saw this in my childhood, my father used to get salary in cash every month, and he will give it to my mother. My mother will distribute it in different envelopes for all the major expense (groceries, school fees, rent, travel, entertainment) perfect for hands-on control.​</p>

      <h4>Zero-Based Budgeting:</h4>
      <p> Assign every rupee a “job” so there’s no mindless spending. If you earn ₹60,000, plan precisely how all ₹60,000 will be spent or saved.​</p>
     
     
      <h3>Step 4: Build a Budget Table</h3>
      <p>Here’s an example for a ₹75,000/month salary:</p>
      <img src="https://drive.google.com/file/d/1bacSjCs-PhdLh0hrYKBdxnPU-uNgck8k/view?usp=share_link" alt="alternatetext">
      
      <h3>Step 5: Stick to Your Budget : Desi Hacks</h3>
      <ul>
        <li>Automate Savings: Move funds for SIPs and FDs the moment your salary comes in.​</li>
        <li>‘No Spend’ Days: Dedicate days to not spending any discretionary money.​</li>
        <li>Make Lists: Write lists for groceries and shopping, and stick to them.</li>
        <li>Plan for Festivals: Set aside a festival fund monthly instead of scrambling last minute.​​</li>
        <li>Track Weekly: Review your spending each week apps like Money Manager, MoneyView, or Google Sheets are perfect.</li>
      </ul>


      <h3>Pro Tips for Indian Finance Success</h3>
      <ul>  
        <li>Always keep an emergency fund atleast equal to three months’ expenses.​</li>
        <li> Tackle high-interest loans (like personal loans) first to avoid increasing debt.​</li>
        <li> Find free ways to entertain: local parks, free events, govt. shows, learning.​</li>
        <li> Resist social pressure to spend like others: your budget, your rules.​</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Budgeting isn’t boring , it’s your ticket to guilt-free fun, festival shopping, and building wealth over time. Start simple, track honestly, and adjust as life changes. In our country, discipline and flexibility go hand-in-hand to make budgeting truly work for you.</p>
      
      `,
    category: "Wealth Building",
    readTime: "4 min read",
    author: "Dhruv Karir",
    image: "https://drive.google.com/file/d/1tjnX13y1bAcnw9oXbKoBiV2jXxJaxG0s/view?usp=share_link",
    publishDate: "Nov 9, 2025"
  },
  {
    id: "nifty-50-vs-next-50",
    title: "Nifty 50 vs Nifty Next 50: Where Should You Invest?",
    excerpt: "Detailed comparison of India's top two indices, their historical returns, risk profiles, and how to diversify across large and mid-cap stocks.",
    content: `
      <h2>Understanding the Indices</h2>
      
      <h3>Nifty 50</h3>
      <p>Nifty 50 represents the top 50 companies in India by market capitalization. It includes giants like Reliance, TCS, HDFC Bank, Infosys, and ITC. These are the most stable, blue-chip companies.</p>
      
      <h3>Nifty Next 50</h3>
      <p>Nifty Next 50 comprises the next 50 companies after the Nifty 50. These are large companies but slightly smaller than Nifty 50 constituents, often called emerging blue-chips.</p>
      
      <h2>Historical Performance Comparison</h2>
      <p>Over the last 10 years (2014-2024):</p>
      <ul>
        <li><strong>Nifty 50:</strong> CAGR of approximately 12-13%</li>
        <li><strong>Nifty Next 50:</strong> CAGR of approximately 14-15%</li>
      </ul>
      <p>Nifty Next 50 has historically outperformed Nifty 50, but with slightly higher volatility.</p>
      
      <h2>Risk Profile</h2>
      <p><strong>Nifty 50:</strong> Lower volatility, more stable during market corrections. Good for conservative investors.</p>
      <p><strong>Nifty Next 50:</strong> Higher volatility but better growth potential. Suitable for investors with moderate to high risk appetite.</p>
      
      <h2>Investment Strategy</h2>
      
      <h3>If You Want Stability</h3>
      <p>Invest primarily in Nifty 50 index funds. They're less volatile and provide steady returns with lower risk.</p>
      
      <h3>If You Want Growth</h3>
      <p>Consider Nifty Next 50 for higher growth potential. These companies have room to grow into the Nifty 50.</p>
      
      <h3>Best Approach: Combination</h3>
      <p>Allocate 60-70% to Nifty 50 and 30-40% to Nifty Next 50. This gives you stability with growth potential. Some Nifty 100 funds automatically cover both.</p>
      
      <h2>Cost Consideration</h2>
      <p>Index funds tracking these indices have very low expense ratios (0.10-0.30%). This makes them extremely cost-effective for long-term investing.</p>
      
      <h2>Which Fund to Choose?</h2>
      <p>Look for:</p>
      <ul>
        <li>Lowest expense ratio</li>
        <li>Lowest tracking error</li>
        <li>High trading volume (for ETFs)</li>
        <li>Fund house reputation</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both indices are excellent investment options. Your choice depends on your risk tolerance and investment goals. For most investors, a Nifty 100 fund (combining both) offers the best of both worlds.</p>
    `,
    category: "Stock Market",
    readTime: "15 min read",
    author: "Arjun Mehta",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    publishDate: "March 5, 2024"
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