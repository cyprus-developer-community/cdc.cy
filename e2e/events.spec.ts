import { test, expect } from '@playwright/test'

test.describe('Events', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/events')
  })

  test('should check the page title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Events', level: 1 })
    ).toBeVisible()
    await expect(page).toHaveTitle('Cyprus Developer Community | CDC.cy')
  })
})
