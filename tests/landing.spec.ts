import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:4173/maxsim-flutter-landingpage/';

test('page loads without white screen', async ({ page }) => {
  await page.goto(BASE);
  const root = page.locator('#root');
  await expect(root).not.toBeEmpty();
});

test('page title contains "maxsim"', async ({ page }) => {
  await page.goto(BASE);
  const title = await page.title();
  expect(title.toLowerCase()).toContain('maxsim');
});

test('at least one visible h1 element exists', async ({ page }) => {
  await page.goto(BASE);
  const h1 = page.locator('h1').first();
  await expect(h1).toBeVisible();
});

test('no console errors on load', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  await page.goto(BASE);
  expect(errors).toHaveLength(0);
});
