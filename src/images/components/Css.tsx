import React from "react";

const SvgCss: React.FC<{ className: string }> = (props) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      style={{
        fill: "#1572b6",
      }}
      d="M5.902 27.201 3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z"
    />
    <path
      style={{
        fill: "#33a9dc",
      }}
      d="m16 27.858 8.17-2.265 1.922-21.532H16v23.797z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16v-3.091z"
    />
    <path
      style={{
        fill: "#ebebeb",
      }}
      d="m16.019 21.218-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004v-3.216z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007h-3.101z"
    />
    <path
      style={{
        fill: "#ebebeb",
      }}
      d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829h7.743zM16 13.191v3.091H12.601l-.062-.695-.14-1.567-.074-.829H16z"
    />
  </svg>
);

export default SvgCss;
