import { test, expect } from '@playwright/test'

test.describe('Groups', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/groups')
  })

  test('should check the page title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Participating Groups', level: 1 })
    ).toBeVisible()
    await expect(page).toHaveTitle('Cyprus Developer Community | CDC.cy')
  })
})
