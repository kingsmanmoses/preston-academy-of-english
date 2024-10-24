// import React from "react";
// import Select from "react-select";
// import Flag from "react-world-flags";
// import { languages } from "./languages";

// const LanguageSelector = ({ onChange }) => {
//   const customOption = (props) => (
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <Flag
//         code={props.data.flag}
//         style={{ width: 20, height: 15, marginRight: 10 }}
//       />
//       {props.data.label}
//     </div>
//   );

//   return (
//     <Select
//       options={languages}
//       getOptionLabel={(option) => customOption({ data: option })}
//       getOptionValue={(option) => option.value}
//       onChange={onChange}
//       styles={{
//         control: (base) => ({ ...base, minWidth: 200 }),
//         option: (base) => ({ ...base, display: "flex", alignItems: "center" }),
//       }}
//     />
//   );
// };

// export default LanguageSelector;

// import React from "react";
// import { useTranslation } from "react-i18next";
// import Select from "react-select";
// import "./select.css";
// import i18n from "./i18n";

// const options = [
//   {
//     value: "en",
//     label: (
//       <>
//         <img src="/flags/gb.svg" alt="English" width="20" /> English
//       </>
//     ),
//   },
//   {
//     value: "fr",
//     label: (
//       <>
//         <img src="/flags/fr.svg" alt="Français" width="20" /> Français
//       </>
//     ),
//   },
//   {
//     value: "de",
//     label: (
//       <>
//         <img src="/flags/de.svg" alt="Deutsch" width="20" /> Deutsch
//       </>
//     ),
//   },
//   {
//     value: "es",
//     label: (
//       <>
//         <img src="/flags/es.svg" alt="Español" width="20" /> Español
//       </>
//     ),
//   },
//   {
//     value: "zh",
//     label: (
//       <>
//         <img src="/flags/cn.svg" alt="中文" width="20" /> 中文
//       </>
//     ),
//   },
//   {
//     value: "ja",
//     label: (
//       <>
//         <img src="/flags/jp.svg" alt="日本語" width="20" /> 日本語
//       </>
//     ),
//   },
//   {
//     value: "ar",
//     label: (
//       <>
//         <img src="/flags/sa.svg" alt="العربية" width="20" /> العربية
//       </>
//     ),
//   },
//   {
//     value: "ru",
//     label: (
//       <>
//         <img src="/flags/ru.svg" alt="Русский" width="20" /> Русский
//       </>
//     ),
//   },
//   {
//     value: "pt",
//     label: (
//       <>
//         <img src="/flags/pt.svg" alt="Português" width="20" /> Português
//       </>
//     ),
//   },
//   {
//     value: "it",
//     label: (
//       <>
//         <img src="/flags/it.svg" alt="Italiano" width="20" /> Italiano
//       </>
//     ),
//   },
// ];

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();

//   const handleChange = (selectedOption) => {
//     i18n.changeLanguage(selectedOption.value);
//   };

//   return (
//     <Select className="select" options={options} onChange={handleChange} />
//   );
// };

// export default LanguageSelector;

import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import ReactCountryFlag from "react-world-flags";
import "./select.css";
import i18n from "./i18n";

const options = [
  {
    value: "en",
    label: (
      <>
        <ReactCountryFlag
          code="GB"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        English
      </>
    ),
  },
  {
    value: "fr",
    label: (
      <>
        <ReactCountryFlag
          code="FR"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        Français
      </>
    ),
  },
  {
    value: "de",
    label: (
      <>
        <ReactCountryFlag
          code="DE"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        Deutsch
      </>
    ),
  },
  {
    value: "es",
    label: (
      <>
        <ReactCountryFlag
          code="ES"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        Español
      </>
    ),
  },
  {
    value: "zh",
    label: (
      <>
        <ReactCountryFlag
          code="CN"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        中文
      </>
    ),
  },
  {
    value: "ja",
    label: (
      <>
        <ReactCountryFlag
          code="JP"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        日本語
      </>
    ),
  },
  {
    value: "ar",
    label: (
      <>
        <ReactCountryFlag
          code="SA"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        العربية
      </>
    ),
  },
  {
    value: "ru",
    label: (
      <>
        <ReactCountryFlag
          code="RU"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        Русский
      </>
    ),
  },
  {
    value: "pt",
    label: (
      <>
        <ReactCountryFlag
          code="PT"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        Português
      </>
    ),
  },
  {
    value: "it",
    label: (
      <>
        <ReactCountryFlag
          code="IT"
          svg
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        Italiano
      </>
    ),
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return <Select options={options} onChange={handleChange} />;
};

export default LanguageSelector;
