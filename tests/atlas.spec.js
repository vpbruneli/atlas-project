import { test, expect } from '@playwright/test';

test('Criar usuário', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/?lang=en_us');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByText('Log in').click();
  await page.getByText('Create').click();
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_FIRST_NAME').click();
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_FIRST_NAME').fill('Vinicius Bruneli');
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_EMAIL').fill('vpbruneli92@gmail.com');
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_PASSWORD').click();
  await page.locator('#GEN_INPUT_ACCOUNT_CREATE_PASSWORD').fill('Vini081292!');
  await expect(page.locator('body')).toContainText('Get Started');
  await expect(page.locator('#GEN_BTN_ACCOUNT_CREATE_INDEX').getByRole('img')).toBeVisible();
});

test('Login', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/account_login?lang=en_us');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').fill('vpbruneli92@gmail.com');
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').click(); 
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').fill('Vini081292!');
  await page.getByRole('button', { name: 'Log in' }).click();
  //await expect(page.locator('body')).toContainText('Get Started');
  //await expect(page.locator('#GEN_BTN_ACCOUNT_CREATE_INDEX').getByRole('img')).toBeVisible();
});

test.only('Atualizar Perfil', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/account_login?lang=en_us');
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').fill('vpbruneli92@gmail.com');
  await page.getByText('Password', { exact: true }).click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').fill('Vini081292!');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  //await page.pause();
  //await page.goto('https://app.go2atlas.com/version-test/account_home/1741545954825x572971492873610500?lang=pt_br');
  await page.locator('#GEN_BTN_HOME_MENU div').click();
  await page.getByRole('button', { name: 'Atualizar perfil' }).click();
  await page.locator('#GEN_INPUT_ACCOUNT_PROFILE_FIRST_NAME').click();
  await page.locator('#GEN_INPUT_ACCOUNT_PROFILE_FIRST_NAME').fill('Vinicius Atualizar Perfil');
  await page.getByRole('button', { name: 'Salvar' }).click();
});

