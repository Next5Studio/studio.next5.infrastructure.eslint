/**
 * Basic eslint rules.
 */
module.exports = {
  extends: ["alloy"],
  rules: {
    // define your custom rules.
    complexity: ["error", { max: 4 }],
    "max-depth": ["error", 3]
  }
}
