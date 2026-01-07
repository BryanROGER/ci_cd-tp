module.exports = {
    // ... tes autres configs
    reporters: [
        "default",
        ["allure-jest", { outputDir: "allure-results" }]
    ],
};