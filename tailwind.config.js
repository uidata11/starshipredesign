// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 이건 보통 Next.js에서 src 폴더를 사용할 경우
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"), // ✅ 요기에 추가
  ],
};
