const { test, expect } = require('@playwright/test');

test('verify super islam app', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Check Home Page
  await expect(page.locator('h2')).toContainText('Assalamualaikum');
  await page.screenshot({ path: 'screenshots/home.png' });

  // Check Quran Page
  await page.click('button:has-text("Al-Qur\'an")');
  await expect(page.locator('h2')).toContainText('Al-Qur\'an');
  await page.screenshot({ path: 'screenshots/quran.png' });

  // Check Prayer Page
  await page.click('button:has-text("Shalat")');
  await expect(page.locator('h2')).toContainText('Waktu Shalat');
  await page.screenshot({ path: 'screenshots/prayer.png' });

  // Check Qibla Page
  await page.click('button:has-text("Kiblat")');
  await expect(page.locator('h2')).toContainText('Arah Kiblat');
  await page.screenshot({ path: 'screenshots/qibla.png' });

  // Check More Page
  await page.click('button:has-text("Lainnya")');
  await expect(page.locator('h2')).toContainText('Fitur Lengkap');
  await page.screenshot({ path: 'screenshots/more.png' });
});
