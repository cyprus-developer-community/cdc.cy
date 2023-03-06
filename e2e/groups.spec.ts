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

  test('should select a group and navigate to it', async ({ page }) => {
    const group = page.getByTestId('participating-group-card').first()
    const groupTitle = await group.textContent()
    await group.click()
    await expect(
      page.getByRole('heading', { name: groupTitle, level: 1 })
    ).toBeVisible()
  })
})
