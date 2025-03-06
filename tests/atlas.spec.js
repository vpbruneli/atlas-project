import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/?lang=en_us');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByText('Log in').click();
  await page.getByText('Create').click();
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_FIRST_NAME').click();
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_FIRST_NAME').fill('Bruno Figueiredo');
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_EMAIL').fill('mestreqa@gmail.com');
  await expect(page.locator('body')).toContainText('Get Started');
  await expect(page.locator('#GEN_BTN_ACCOUNT_CREATE_INDEX').getByRole('img')).toBeVisible();
});