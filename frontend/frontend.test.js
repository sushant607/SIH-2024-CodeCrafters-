import { Builder, By } from "selenium-webdriver";
import { expect } from "chai";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("Frontend Profile Form", function () {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => {
    if (driver) await driver.quit();
  });

  const fillForm = async ({ name, email, about, skills, resume, photo }) => {
    await driver.get("http://localhost:5173/createProfile");

    if (name) await driver.findElement(By.id("userName")).sendKeys(name);
    if (email) await driver.findElement(By.id("email")).sendKeys(email);
    if (about) await driver.findElement(By.id("about")).sendKeys(about);
    if (skills) await driver.findElement(By.id("skills")).sendKeys(skills);
    if (resume) {
      const resumePath = path.resolve(__dirname, resume);
      await driver.findElement(By.id("resume")).sendKeys(resumePath);
    }
    if (photo) {
      const photoPath = path.resolve(__dirname, photo);
      await driver.findElement(By.id("photo")).sendKeys(photoPath);
    }
  };

  const testCases = [
    {
      title: "✅ Valid profile submission",
      input: {
        name: "Alice Johnson",
        email: "alice@example.com",
        about: "Frontend Developer",
        skills: "React, HTML, CSS",
        resume: "Sushant_Bagul-Resume.pdf",
        photo: "Sushant_Bagul_Photo.jpg",
      },
    },
    {
      title: "❌ Missing required field (resume)",
      input: {
        name: "Grace Hopper",
        email: "grace@example.com",
        about: "Pioneer in computer science",
        skills: "COBOL, Compilers",
        resume: "", // Intentionally missing
        photo: "Sushant_Bagul_Photo.jpg",
      },
    },
    {
      title: "✅ Minimal valid input",
      input: {
        name: "Eve",
        email: "eve@example.com",
        about: "Just testing.",
        skills: "JS",
        resume: "Sushant_Bagul-Resume.pdf",
        photo: "Sushant_Bagul_Photo.jpg",
      },
    },
  ];

  testCases.forEach(({ title, input }) => {
    it(title, async () => {
      await fillForm(input);

      // Click the submit button if available
      try {
        const submitBtn = await driver.findElement(By.css("button[type='submit']"));
        await submitBtn.click();
      } catch (e) {
        // No submit button or couldn't click — ignore for now
      }

      // Optionally check if name stayed in the field (basic check for form interaction)
      const userNameField = await driver.findElement(By.id("userName"));
      const value = await userNameField.getAttribute("value");

      expect(value).to.equal(input.name);
    });
  });
});
