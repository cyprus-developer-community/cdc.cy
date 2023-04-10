import { test, expect } from '@playwright/test'

test.describe('Events', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('header').getByRole('link', { name: 'Events' }).click()
  })

  test('should check the page title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Events', level: 1 })
    ).toBeVisible()
    await expect(page).toHaveTitle('Cyprus Developer Community | CDC.cy')
  })

  test.describe('Upcoming events', () => {
    test('should show the correct title', async ({ page }) => {
      await expect(
        page
          .getByTestId('upcoming-events-section')
          .getByRole('heading', { name: 'Upcoming events', level: 2 })
      ).toBeVisible()
    })

    test('should select an upcoming event', async ({ page }) => {
      const upcomingEvent = page
        .getByTestId('upcoming-events-section')
        .getByTestId('event-card')
        .first()
      const upcomingEventTitle = await upcomingEvent
        .getByRole('heading')
        .textContent()
      await upcomingEvent.click()
      await expect(
        page.getByRole('heading', { name: upcomingEventTitle, level: 1 })
      ).toBeVisible()
    })
  })

  test.describe('Past events', () => {
    test('should show the correct title', async ({ page }) => {
      await expect(
        page
          .getByTestId('past-events-section')
          .getByRole('heading', { name: 'Past events', level: 2 })
      ).toBeVisible()
    })

    test('should select an upcoming event', async ({ page }) => {
      const pastEvent = page
        .getByTestId('past-events-section')
        .getByTestId('event-card')
        .first()
      const pastEventTitle = await pastEvent.getByRole('heading').textContent()
      await pastEvent.click()
      await expect(
        page.getByRole('heading', { name: pastEventTitle, level: 1 })
      ).toBeVisible()
    })
  })
})
