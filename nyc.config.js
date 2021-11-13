module.exports = {
    extends: "@istanbuljs/nyc-config-typescript",
    all: true,
    checkCoverage: true,
    reporter: ["text", "html"]
}
