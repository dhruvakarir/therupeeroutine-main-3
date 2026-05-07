import fs from "node:fs";
import vm from "node:vm";

const sourcePath = "src/pages/ArticleDetail.tsx";
const outputPath = "backend/blog/fixtures/articles.json";

const source = fs.readFileSync(sourcePath, "utf8");
const match = source.match(/const staticArticles = \[(.|\n|\r)*?\];/);

if (!match) {
  throw new Error("Could not find `staticArticles` in ArticleDetail.tsx");
}

const arrayCode = match[0]
  .replace(/^const staticArticles = /, "")
  .replace(/;$/, "");

const staticArticles = vm.runInNewContext(arrayCode);

const monthMap = {
  jan: "01",
  january: "01",
  feb: "02",
  february: "02",
  mar: "03",
  march: "03",
  apr: "04",
  april: "04",
  may: "05",
  jun: "06",
  june: "06",
  jul: "07",
  july: "07",
  aug: "08",
  august: "08",
  sep: "09",
  sept: "09",
  september: "09",
  oct: "10",
  october: "10",
  nov: "11",
  november: "11",
  dec: "12",
  december: "12",
};

function toIsoDate(value) {
  const cleaned = String(value).trim().replace(/\s+/g, " ");
  const [monthText, dayText, yearText] = cleaned.replace(",", "").split(" ");
  const month = monthMap[String(monthText).toLowerCase()] ?? "01";
  const day = String(dayText ?? "1").padStart(2, "0");
  const year = String(yearText ?? "1970");
  return `${year}-${month}-${day}`;
}

const fixture = staticArticles.map((article) => ({
  model: "blog.article",
  pk: article.id,
  fields: {
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
    category: article.category,
    read_time: article.readTime,
    author: article.author,
    image_url: article.image,
    publish_date: toIsoDate(article.publishDate),
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:00Z",
  },
}));

fs.mkdirSync("backend/blog/fixtures", { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(fixture, null, 2));

console.log(`Wrote ${fixture.length} articles to ${outputPath}`);

