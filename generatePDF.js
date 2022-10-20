import puppeteer from "puppeteer";

const  generatePDF = async (html = "") => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);

  const pdfBuffer = await page.pdf();

  await page.close();
  await browser.close();

  return pdfBuffer;
};

export default generatePDF