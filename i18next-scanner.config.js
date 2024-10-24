module.exports = {
  input: ["src/**/*.{js,jsx}"],
  output: "./src/locales",
  options: {
    lngs: ["en", "fr", "de", "es", "zh", "ja", "ar", "ru", "pt", "it"],
    ns: ["translation"],
    defaultLng: "en",
    defaultNs: "translation",
    resource: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
      savePath: "locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    keySeparator: false,
    nsSeparator: false,
  },
};
