// 'use client'
// import { useEffect, useState } from "react";
// import { Button } from "../Button";
// // import Image from "next/image";

// const themeOptions = {
//   0: "light",
//   1: "dark",
// };

// const ThemeButton = () => {
//   const [theme, setTheme] = useState<number>(1);

//   useEffect(() => {
//     const themeSelected = JSON.stringify(localStorage.getItem("theme"));
//     if (!themeSelected) return setTheme(0);

//     setTheme(parseInt(themeSelected));
//   }, []);

//   const handleTheme = () => {};

//   return (
//     <>
//       {theme === 1 ? (
//         // dark
//         <Button onClick={handleTheme}>
//         </Button>
//       ) : (
//         <Button onClick={handleTheme}>Light</Button>
//       )}
//     </>
//   );
// };

// export default ThemeButton;
