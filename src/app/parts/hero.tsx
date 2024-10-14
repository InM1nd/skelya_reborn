'use client'

import React, { useState, useEffect } from 'react';
import Header from "@/components/global/header"

export const Hero = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Устанавливаем значение при монтировании
    window.addEventListener('resize', handleResize); // Отслеживаем изменение ширины

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Header/>
    <section className="h-svh w-full flex flex-col items-center pt-[88px] 2xl:px-[50px] 2xl:pt-[50px] lg:h-screen lg:min-h-[900px]">
      <div className="container relative">
        <div className="w-full relative mb-6">
            {isMobile ? (
              <svg viewBox="0 0 1180 1366" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1179.86 0L420.583 591.072L774.283 0H134.937V246.514L0.859375 0V777.05V1172.71H781L737 1364.5H1179.86L1123.27 1188.9L1046.24 970.841H906.331L1179.86 0Z" fill="#6D61FF"/>
              <rect width="716" height="171.032" transform="translate(1 1193.98)" fill="#E3B7F5" className={`fill-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'}`}/>
              <path d="M66.1066 1275.09H69.98L84.9203 1254.89H95.7105L78.0727 1278.62L97.3014 1304H86.6495L70.8792 1283.66H66.1066V1304H56.6306V1254.89H66.1066V1275.09ZM121.304 1304.35C117.708 1304.35 114.434 1303.65 111.482 1302.27C108.577 1300.84 106.064 1298.97 103.943 1296.67C101.868 1294.32 100.254 1291.64 99.1014 1288.64C97.9486 1285.65 97.3722 1282.58 97.3722 1279.45C97.3722 1276.17 97.9717 1273.04 99.1706 1270.04C100.416 1267.04 102.099 1264.39 104.22 1262.08C106.387 1259.78 108.946 1257.96 111.897 1256.62C114.849 1255.24 118.053 1254.54 121.512 1254.54C125.062 1254.54 128.29 1255.28 131.195 1256.76C134.147 1258.19 136.66 1260.08 138.735 1262.43C140.81 1264.78 142.424 1267.46 143.576 1270.45C144.729 1273.45 145.306 1276.49 145.306 1279.58C145.306 1282.86 144.706 1285.99 143.507 1288.99C142.308 1291.94 140.648 1294.57 138.527 1296.88C136.406 1299.14 133.87 1300.96 130.919 1302.34C127.968 1303.68 124.763 1304.35 121.304 1304.35ZM107.056 1279.45C107.056 1281.57 107.379 1283.62 108.024 1285.6C108.67 1287.58 109.592 1289.34 110.791 1290.86C112.036 1292.38 113.534 1293.6 115.287 1294.52C117.085 1295.45 119.114 1295.91 121.373 1295.91C123.679 1295.91 125.708 1295.45 127.46 1294.52C129.259 1293.56 130.757 1292.29 131.956 1290.72C133.201 1289.15 134.123 1287.4 134.723 1285.46C135.368 1283.48 135.691 1281.47 135.691 1279.45C135.691 1277.32 135.345 1275.27 134.654 1273.29C134.008 1271.31 133.063 1269.55 131.818 1268.03C130.619 1266.51 129.12 1265.31 127.322 1264.44C125.57 1263.51 123.587 1263.05 121.373 1263.05C119.068 1263.05 117.016 1263.54 115.218 1264.51C113.419 1265.43 111.921 1266.67 110.722 1268.24C109.523 1269.76 108.6 1271.51 107.955 1273.5C107.355 1275.43 107.056 1277.42 107.056 1279.45ZM194.751 1254.89V1304H185.275V1283.04H163.003V1304H153.458V1254.89H163.003V1274.74H185.275V1254.89H194.751ZM202.911 1279.1C202.911 1276.1 203.442 1273.15 204.502 1270.25C205.609 1267.29 207.2 1264.67 209.275 1262.36C211.35 1260.06 213.886 1258.19 216.883 1256.76C219.88 1255.33 223.293 1254.61 227.12 1254.61C231.639 1254.61 235.535 1255.61 238.809 1257.59C242.129 1259.57 244.596 1262.15 246.21 1265.34L238.879 1270.38C238.233 1269 237.449 1267.85 236.527 1266.93C235.605 1265.96 234.613 1265.2 233.553 1264.64C232.492 1264.09 231.385 1263.7 230.233 1263.47C229.08 1263.19 227.95 1263.05 226.843 1263.05C224.446 1263.05 222.347 1263.54 220.549 1264.51C218.797 1265.47 217.321 1266.74 216.122 1268.31C214.97 1269.83 214.093 1271.58 213.494 1273.57C212.894 1275.5 212.595 1277.44 212.595 1279.38C212.595 1281.54 212.941 1283.64 213.632 1285.67C214.324 1287.65 215.292 1289.41 216.537 1290.93C217.828 1292.45 219.35 1293.67 221.102 1294.59C222.901 1295.52 224.861 1295.98 226.982 1295.98C228.088 1295.98 229.241 1295.84 230.44 1295.56C231.639 1295.28 232.769 1294.85 233.829 1294.25C234.936 1293.65 235.95 1292.89 236.873 1291.96C237.795 1291 238.533 1289.84 239.086 1288.51L246.902 1293C246.118 1294.85 244.988 1296.48 243.513 1297.91C242.083 1299.3 240.446 1300.47 238.602 1301.44C236.804 1302.41 234.867 1303.15 232.792 1303.65C230.717 1304.16 228.688 1304.42 226.705 1304.42C223.201 1304.42 219.996 1303.68 217.091 1302.2C214.186 1300.73 211.673 1298.81 209.551 1296.46C207.476 1294.06 205.839 1291.37 204.64 1288.37C203.488 1285.32 202.911 1282.24 202.911 1279.1ZM262.157 1304.48C261.65 1304.48 261.096 1304.44 260.497 1304.35C259.897 1304.3 259.275 1304.21 258.629 1304.07C257.984 1303.93 257.338 1303.75 256.693 1303.52C256.093 1303.29 255.563 1303.01 255.102 1302.69L256.347 1294.8C256.854 1295.08 257.546 1295.4 258.422 1295.77C259.344 1296.09 260.289 1296.25 261.258 1296.25C262.595 1296.25 263.748 1295.88 264.716 1295.15C265.731 1294.36 266.607 1292.98 267.344 1291L249.292 1254.89H259.598L271.633 1281.38L282.838 1254.89H292.867L275.575 1292.24C274.561 1294.45 273.57 1296.35 272.601 1297.91C271.633 1299.43 270.618 1300.7 269.558 1301.72C268.543 1302.69 267.437 1303.4 266.238 1303.86C265.039 1304.28 263.679 1304.48 262.157 1304.48ZM308.621 1270.73C308.114 1277.05 307.422 1282.35 306.546 1286.64C305.67 1290.93 304.471 1294.41 302.949 1297.08C301.428 1299.71 299.537 1301.6 297.277 1302.75C295.018 1303.91 292.251 1304.48 288.977 1304.48L288.424 1295.91C289.992 1295.77 291.352 1295.38 292.505 1294.73C293.704 1294.09 294.718 1292.82 295.548 1290.93C296.424 1289.04 297.162 1286.34 297.762 1282.83C298.361 1279.28 298.914 1274.58 299.422 1268.72L300.598 1254.89H330.34V1304H320.864V1263.26H309.244L308.621 1270.73ZM341.776 1254.89H351.252V1272.18H360.659C363.149 1272.18 365.431 1272.53 367.506 1273.22C369.627 1273.91 371.449 1274.93 372.97 1276.26C374.492 1277.6 375.668 1279.26 376.498 1281.24C377.328 1283.18 377.743 1285.42 377.743 1287.95C377.743 1290.54 377.328 1292.82 376.498 1294.8C375.668 1296.78 374.492 1298.47 372.97 1299.85C371.495 1301.19 369.72 1302.22 367.645 1302.96C365.616 1303.65 363.402 1304 361.004 1304H341.776V1254.89ZM351.252 1295.91H360.105C362.78 1295.91 364.786 1295.19 366.123 1293.76C367.46 1292.33 368.129 1290.37 368.129 1287.88C368.129 1285.53 367.437 1283.62 366.054 1282.14C364.67 1280.62 362.687 1279.86 360.105 1279.86H351.252V1295.91ZM416.206 1263.26H400.505V1304H391.029V1263.26H375.328V1254.89H416.206V1263.26ZM432.103 1254.89H440.542L459.217 1304H449.395L444.83 1291.76H427.676L423.18 1304H413.359L432.103 1254.89ZM443.101 1285.05L436.322 1265.75L429.267 1285.05H443.101ZM502.023 1304H465.572V1254.89H475.048V1295.63H494.207V1254.89H503.683V1295.63H511.015V1316.24H502.023V1304ZM518.273 1304V1254.89H527.818V1304H518.273ZM564.684 1304V1285.81H556.868L545.801 1304H535.288L547.323 1284.63C544.51 1283.48 542.251 1281.64 540.545 1279.1C538.838 1276.56 537.985 1273.64 537.985 1270.32C537.985 1268.24 538.377 1266.28 539.161 1264.44C539.945 1262.59 541.029 1260.95 542.412 1259.52C543.795 1258.1 545.432 1256.97 547.323 1256.14C549.26 1255.31 551.358 1254.89 553.617 1254.89H574.16V1304H564.684ZM564.684 1263.05H554.655C553.733 1263.05 552.856 1263.24 552.026 1263.61C551.196 1263.93 550.436 1264.41 549.744 1265.06C549.098 1265.66 548.568 1266.42 548.153 1267.34C547.784 1268.22 547.6 1269.21 547.6 1270.32C547.6 1272.53 548.245 1274.3 549.536 1275.64C550.874 1276.98 552.511 1277.65 554.447 1277.65H564.684V1263.05Z" fill="#040000"/>
              <path d="M618.795 1300.22L658.7 1260.32M658.7 1260.32V1291.36M658.7 1260.32H628.771" stroke="#040000" stroke-width="6.288"/>
              <path d="M709.3 1195.11H753.75L717.686 1356.83L709.3 1195.11Z" fill="#E3B7F5" stroke="#E3B7F5" stroke-width="2.21692" className={`fill-current stroke-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'} ${isHovered ? 'stroke-[#95D4F8]' : 'stroke-[#E3B7F5]'}`}/>
              </svg>
             ) : (
              <svg viewBox="0 0 1820 543" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M304.637 237.204L279.135 0.00264702L0 342.437V404.991V454H333.5H353L333.5 543H538.442H688.508H1266.17H1820L1678.87 306.328L1564.49 341.794L1347.11 121.889L1458.81 459.809L1022.05 341.794L1222.03 0.00264702L425.402 210.884L688.508 0.00264702L406.674 0L304.637 237.204Z" fill="#6D61FF"/>
              <rect width="323" height="78" transform="translate(0 465)" fill="#E3B7F5" className={`fill-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'}`}/>
              <path d="M30.848 501.624H32.64L39.552 492.28H44.544L36.384 503.256L45.28 515H40.352L33.056 505.592H30.848V515H26.464V492.28H30.848V501.624ZM56.3848 515.16C54.7208 515.16 53.2061 514.84 51.8408 514.2C50.4968 513.539 49.3341 512.675 48.3527 511.608C47.3927 510.52 46.6461 509.283 46.1127 507.896C45.5794 506.509 45.3127 505.091 45.3127 503.64C45.3127 502.125 45.5901 500.675 46.1447 499.288C46.7207 497.901 47.4994 496.675 48.4808 495.608C49.4834 494.541 50.6674 493.699 52.0328 493.08C53.3981 492.44 54.8808 492.12 56.4808 492.12C58.1234 492.12 59.6168 492.461 60.9608 493.144C62.3261 493.805 63.4888 494.68 64.4488 495.768C65.4088 496.856 66.1554 498.093 66.6888 499.48C67.2221 500.867 67.4888 502.275 67.4888 503.704C67.4888 505.219 67.2114 506.669 66.6568 508.056C66.1021 509.421 65.3341 510.637 64.3528 511.704C63.3714 512.749 62.1981 513.592 60.8328 514.232C59.4674 514.851 57.9848 515.16 56.3848 515.16ZM49.7927 503.64C49.7927 504.621 49.9421 505.571 50.2407 506.488C50.5394 507.405 50.9661 508.216 51.5208 508.92C52.0968 509.624 52.7901 510.189 53.6007 510.616C54.4328 511.043 55.3714 511.256 56.4167 511.256C57.4834 511.256 58.4221 511.043 59.2327 510.616C60.0648 510.168 60.7581 509.581 61.3127 508.856C61.8888 508.131 62.3154 507.32 62.5928 506.424C62.8914 505.507 63.0408 504.579 63.0408 503.64C63.0408 502.659 62.8808 501.709 62.5608 500.792C62.2621 499.875 61.8248 499.064 61.2488 498.36C60.6941 497.656 60.0008 497.101 59.1688 496.696C58.3581 496.269 57.4408 496.056 56.4167 496.056C55.3501 496.056 54.4008 496.28 53.5688 496.728C52.7368 497.155 52.0434 497.731 51.4887 498.456C50.9341 499.16 50.5074 499.971 50.2087 500.888C49.9314 501.784 49.7927 502.701 49.7927 503.64ZM90.3643 492.28V515H85.9802V505.304H75.6762V515H71.2602V492.28H75.6762V501.464H85.9802V492.28H90.3643ZM94.1395 503.48C94.1395 502.093 94.3848 500.728 94.8755 499.384C95.3875 498.019 96.1235 496.803 97.0835 495.736C98.0435 494.669 99.2168 493.805 100.603 493.144C101.99 492.483 103.569 492.152 105.339 492.152C107.43 492.152 109.233 492.611 110.747 493.528C112.284 494.445 113.425 495.64 114.171 497.112L110.779 499.448C110.481 498.808 110.118 498.275 109.691 497.848C109.265 497.4 108.806 497.048 108.316 496.792C107.825 496.536 107.313 496.355 106.78 496.248C106.246 496.12 105.723 496.056 105.211 496.056C104.102 496.056 103.131 496.28 102.299 496.728C101.489 497.176 100.806 497.763 100.251 498.488C99.7182 499.192 99.3128 500.003 99.0355 500.92C98.7582 501.816 98.6195 502.712 98.6195 503.608C98.6195 504.611 98.7795 505.581 99.0995 506.52C99.4195 507.437 99.8675 508.248 100.443 508.952C101.041 509.656 101.745 510.221 102.555 510.648C103.387 511.075 104.294 511.288 105.275 511.288C105.787 511.288 106.321 511.224 106.875 511.096C107.43 510.968 107.953 510.765 108.443 510.488C108.955 510.211 109.425 509.859 109.851 509.432C110.278 508.984 110.62 508.451 110.875 507.832L114.492 509.912C114.129 510.765 113.606 511.523 112.924 512.184C112.262 512.824 111.505 513.368 110.652 513.816C109.819 514.264 108.923 514.605 107.964 514.84C107.003 515.075 106.065 515.192 105.148 515.192C103.526 515.192 102.043 514.851 100.699 514.168C99.3555 513.485 98.1928 512.6 97.2115 511.512C96.2515 510.403 95.4942 509.155 94.9395 507.768C94.4062 506.36 94.1395 504.931 94.1395 503.48ZM121.549 515.224C121.314 515.224 121.058 515.203 120.781 515.16C120.504 515.139 120.216 515.096 119.917 515.032C119.618 514.968 119.32 514.883 119.021 514.776C118.744 514.669 118.498 514.541 118.285 514.392L118.861 510.744C119.096 510.872 119.416 511.021 119.821 511.192C120.248 511.341 120.685 511.416 121.133 511.416C121.752 511.416 122.285 511.245 122.733 510.904C123.202 510.541 123.608 509.901 123.949 508.984L115.597 492.28H120.365L125.933 504.536L131.117 492.28H135.757L127.757 509.56C127.288 510.584 126.829 511.459 126.381 512.184C125.933 512.888 125.464 513.475 124.973 513.944C124.504 514.392 123.992 514.723 123.437 514.936C122.882 515.128 122.253 515.224 121.549 515.224ZM143.045 499.608C142.811 502.531 142.491 504.984 142.085 506.968C141.68 508.952 141.125 510.563 140.421 511.8C139.717 513.016 138.843 513.891 137.797 514.424C136.752 514.957 135.472 515.224 133.957 515.224L133.701 511.256C134.427 511.192 135.056 511.011 135.589 510.712C136.144 510.413 136.613 509.827 136.997 508.952C137.403 508.077 137.744 506.829 138.021 505.208C138.299 503.565 138.555 501.389 138.789 498.68L139.333 492.28H153.093V515H148.709V496.152H143.333L143.045 499.608ZM158.384 492.28H162.768V500.28H167.12C168.272 500.28 169.328 500.44 170.288 500.76C171.269 501.08 172.112 501.549 172.816 502.168C173.52 502.787 174.064 503.555 174.448 504.472C174.832 505.368 175.024 506.403 175.024 507.576C175.024 508.771 174.832 509.827 174.448 510.744C174.064 511.661 173.52 512.44 172.816 513.08C172.133 513.699 171.312 514.179 170.352 514.52C169.413 514.84 168.389 515 167.28 515H158.384V492.28ZM162.768 511.256H166.864C168.101 511.256 169.029 510.925 169.648 510.264C170.267 509.603 170.576 508.696 170.576 507.544C170.576 506.456 170.256 505.571 169.616 504.888C168.976 504.184 168.059 503.832 166.864 503.832H162.768V511.256ZM192.819 496.152H185.555V515H181.171V496.152H173.907V492.28H192.819V496.152ZM200.173 492.28H204.077L212.717 515H208.173L206.061 509.336H198.125L196.045 515H191.501L200.173 492.28ZM205.261 506.232L202.125 497.304L198.861 506.232H205.261ZM232.521 515H215.657V492.28H220.041V511.128H228.905V492.28H233.289V511.128H236.681V520.664H232.521V515ZM240.039 515V492.28H244.455V515H240.039ZM261.511 515V506.584H257.895L252.775 515H247.911L253.479 506.04C252.177 505.507 251.132 504.653 250.343 503.48C249.553 502.307 249.159 500.952 249.159 499.416C249.159 498.456 249.34 497.549 249.703 496.696C250.065 495.843 250.567 495.085 251.207 494.424C251.847 493.763 252.604 493.24 253.479 492.856C254.375 492.472 255.345 492.28 256.391 492.28H265.895V515H261.511ZM261.511 496.056H256.871C256.444 496.056 256.039 496.141 255.655 496.312C255.271 496.461 254.919 496.685 254.599 496.984C254.3 497.261 254.055 497.613 253.863 498.04C253.692 498.445 253.607 498.904 253.607 499.416C253.607 500.44 253.905 501.261 254.503 501.88C255.121 502.499 255.879 502.808 256.775 502.808H261.511V496.056Z" fill="#040000"/>
              <path d="M286 513.5L304 495.5M304 495.5V509.5M304 495.5H290.5" stroke="#040000" stroke-width="3"/>
              <path d="M319.526 465.5H339.379L323.308 539.24L319.526 465.5Z" fill="#E3B7F5" stroke="#E3B7F5"
              className={`fill-current stroke-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'} ${isHovered ? 'stroke-[#95D4F8]' : 'stroke-[#E3B7F5]'}`} />
              </svg>
            )}
            <div 
              className="absolute bottom-0 w-[260px] h-[60px] z-2 sm:w-[120px] sm:h-[30px] md:w-[140px] md:h-[35px] lg:h-[45px] lg:w-[190px] xl:h-[60px] xl:w-[240px] 2xl:h-[85px] 2xl:w-[350px]  group-hover:cursor-pointer"
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href='#products' className="h-full w-full absolute"></a>
            </div>
        </div>
        <div className="flex flex-col justify-start items-start relative px-4">
          <img src={"/svg/Hero_Words.svg"} alt='' className="w-full pb-4 lg:pb-8 " />
          <p className="hidden md:block self-stretch flex-grow-0 flex-shrink-0 text-xl font-medium text-left uppercase text-[#f3f3f3] md:text-2xl 2xl:text-[46px]">
            твоя Кар’єрна підтримка в пошуку роботи
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl font-medium text-left uppercase text-[#f3f3f3] block md:hidden">
            твоя Кар’єрна підтримка 
          </p>
        </div>
      </div>
      </section>
      </>
  )
}