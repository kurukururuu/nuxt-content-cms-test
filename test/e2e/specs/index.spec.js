describe('Test', () => {
  test('open app correctly', (browser) => {
    const main = browser.page.main()
    main.navigate()
    main.assert.visible('.title')

    browser.end()
  })
  test('navigate all routes properly', (browser) => {
    const routes = [
      'main', 'blog', 'author'
    ]

    routes.forEach((route) => {
      checkRoutes({ route, browser })
    })

    browser.end()
  })
})

function checkRoutes ({ route, browser }) {
  const page = browser.page[route]()
  page.navigate()
  page.assert.visible('.title')
}
