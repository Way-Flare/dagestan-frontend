module.exports = {
  extends: ["stylelint-scss", "stylelint-config-tailwindcss"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "no-descending-specificity": null,
    "no-irregular-whitespace": true,
    "declaration-empty-line-before": "never",
  },
}
