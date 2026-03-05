import { test, expect } from '@playwright/test'

const ORIGINAL_URL = 'https://sandboxes.y.org/'
const LOCAL_URL = 'http://localhost:4173/'

const viewports = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
]

for (const vp of viewports) {
  test(`visual comparison — ${vp.name} (${vp.width}x${vp.height})`, async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    })

    const originalPage = await context.newPage()
    await originalPage.goto(ORIGINAL_URL, { waitUntil: 'networkidle' })
    await originalPage.waitForTimeout(2000)
    const originalScreenshot = await originalPage.screenshot({ fullPage: true })

    const localPage = await context.newPage()
    await localPage.goto(LOCAL_URL, { waitUntil: 'networkidle' })
    await localPage.waitForTimeout(2000)
    const localScreenshot = await localPage.screenshot({ fullPage: true })

    await originalPage.screenshot({
      fullPage: true,
      path: `tests/results/original-${vp.name}.png`,
    })
    await localPage.screenshot({
      fullPage: true,
      path: `tests/results/local-${vp.name}.png`,
    })

    expect(localScreenshot).toMatchSnapshot(`reference-${vp.name}.png`, {
      maxDiffPixelRatio: 0.05,
    })

    await context.close()
  })
}

test('side-by-side screenshot generation', async ({ browser }) => {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    })

    const originalPage = await context.newPage()
    await originalPage.goto(ORIGINAL_URL, { waitUntil: 'networkidle' })
    await originalPage.waitForTimeout(2000)
    await originalPage.screenshot({
      fullPage: true,
      path: `tests/results/original-${vp.name}.png`,
    })

    const localPage = await context.newPage()
    await localPage.goto(LOCAL_URL, { waitUntil: 'networkidle' })
    await localPage.waitForTimeout(2000)
    await localPage.screenshot({
      fullPage: true,
      path: `tests/results/local-${vp.name}.png`,
    })

    await context.close()
  }
})
