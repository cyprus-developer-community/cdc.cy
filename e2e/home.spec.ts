import { test, expect } from '@playwright/test'

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should check page title', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        name: 'Cyprus Developer Community',
        level: 1
      })
    ).toBeVisible()
    await expect(page).toHaveTitle('Cyprus Developer Community | CDC.cy')
  })

  test.describe('header', () => {
    test('should navigate on groups page', async ({ page }) => {
      await page.getByRole('link', { name: 'Groups' }).click()
      await expect(page).toHaveURL(/\/groups$/)
    })

    test('should navigate on events page', async ({ page }) => {
      await page.getByRole('link', { name: 'Events' }).click()
      await expect(page).toHaveURL(/\/events$/)
    })
  })
})
