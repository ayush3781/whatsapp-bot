module.exports = options = (headless, start) => {
    const options = {
        sessionId: 'BarBar',
        headless: headless,
        qrTimeout: 0,
        authTimeout: 0,
        restartOnCrash: start,
        cacheEnabled: false,
        useChrome: false,
        // executablePath: './node_modules/puppeteer/.local-chromium/win64-884014/chrome-win/chrome.exe',
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
        chromiumArgs: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--aggressive-cache-discard',
            '--disable-cache',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0'
        ]
    }
    return options
}
