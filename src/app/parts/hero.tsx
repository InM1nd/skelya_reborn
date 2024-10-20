'use client'

import React, { useState, useEffect, useRef  } from 'react';
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

  const sectionRef = useRef<HTMLDivElement>(null); // Создаём ссылку на секцию

  useEffect(() => {
    // Вычисляем высоту экрана только при загрузке и фиксируем её
    const initialVh = window.innerHeight;
    if (sectionRef.current) {
      sectionRef.current.style.height = `${initialVh}px`; // Задаём фиксированную высоту
    }
  }, []);

  return (
    <>
    <Header/>
    <section ref={sectionRef} className="w-full flex flex-col justify-end items-center pb-2 pt-[88px] sm:pb-5 sm:justify-end 2xl:px-[50px] 2xl:pt-[50px] lg:h-screen lg:pb-5">
      <div className="container relative">
        <div className="w-full relative mb-6">
            {isMobile ? (
              <svg viewBox="0 0 1180 1366" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1179.86 0L420.583 591.072L774.283 0H134.937V246.514L0.859375 0V777.05V1172.71H781L737 1364.5H1179.86L1123.27 1188.9L1046.24 970.841H906.331L1179.86 0Z" fill="#6D61FF"/>
              <rect width="716" height="171.032" transform="translate(1 1193.98)" fill="#E3B7F5" className={`fill-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'}`}/>
              <path d="M77.381 1304.35C73.7843 1304.35 70.5103 1303.65 67.5592 1302.27C64.6541 1300.89 62.141 1299.02 60.0199 1296.67C57.9448 1294.27 56.3309 1291.6 55.1781 1288.64C54.0253 1285.65 53.4489 1282.58 53.4489 1279.45C53.4489 1276.17 54.0484 1273.06 55.2473 1270.11C56.4923 1267.11 58.1754 1264.46 60.2965 1262.15C62.4638 1259.8 65 1257.96 67.905 1256.62C70.8562 1255.24 74.084 1254.54 77.5885 1254.54C81.1392 1254.54 84.367 1255.26 87.272 1256.69C90.2232 1258.12 92.7363 1260.03 94.8114 1262.43C96.8864 1264.83 98.5003 1267.5 99.6531 1270.45C100.806 1273.4 101.382 1276.45 101.382 1279.58C101.382 1282.81 100.783 1285.92 99.584 1288.92C98.385 1291.87 96.702 1294.52 94.5347 1296.88C92.4135 1299.18 89.8774 1301 86.9262 1302.34C84.0212 1303.68 80.8394 1304.35 77.381 1304.35ZM63.1324 1279.45C63.1324 1281.57 63.4552 1283.62 64.1008 1285.6C64.7463 1287.58 65.6686 1289.36 66.8675 1290.93C68.1125 1292.45 69.6112 1293.67 71.3634 1294.59C73.1618 1295.47 75.1907 1295.91 77.4502 1295.91C79.7558 1295.91 81.8078 1295.45 83.6061 1294.52C85.4045 1293.56 86.9032 1292.29 88.1021 1290.72C89.301 1289.11 90.2002 1287.33 90.7996 1285.39C91.4452 1283.41 91.768 1281.43 91.768 1279.45C91.768 1277.32 91.4221 1275.3 90.7305 1273.36C90.0849 1271.38 89.1396 1269.62 87.8946 1268.1C86.6956 1266.53 85.197 1265.31 83.3986 1264.44C81.6464 1263.51 79.6636 1263.05 77.4502 1263.05C75.0985 1263.05 73.0234 1263.54 71.2251 1264.51C69.4728 1265.43 67.9972 1266.67 66.7983 1268.24C65.5994 1269.81 64.6772 1271.56 64.0316 1273.5C63.4321 1275.43 63.1324 1277.42 63.1324 1279.45ZM109.534 1304V1254.89H144.948V1263.12H119.01V1274.95H132.36C137.847 1274.95 141.974 1276.24 144.741 1278.82C147.508 1281.41 148.891 1284.86 148.891 1289.2C148.891 1292.1 148.292 1294.66 147.093 1296.88C145.894 1299.09 144.118 1300.84 141.767 1302.13C139.415 1303.38 136.441 1304 132.844 1304H109.534ZM119.01 1295.77H131.53C133.374 1295.77 134.85 1295.45 135.957 1294.8C137.063 1294.11 137.87 1293.26 138.377 1292.24C138.885 1291.18 139.138 1290.07 139.138 1288.92C139.138 1287.77 138.908 1286.71 138.447 1285.74C138.032 1284.73 137.271 1283.92 136.164 1283.32C135.057 1282.67 133.467 1282.35 131.392 1282.35H119.01V1295.77ZM156.29 1304V1254.89H177.109C179.369 1254.89 181.444 1255.35 183.335 1256.27C185.225 1257.2 186.862 1258.44 188.245 1260.01C189.675 1261.58 190.782 1263.33 191.566 1265.27C192.349 1267.2 192.741 1269.19 192.741 1271.21C192.741 1273.98 192.096 1276.61 190.805 1279.1C189.514 1281.59 187.738 1283.62 185.479 1285.19C183.219 1286.75 180.545 1287.54 177.455 1287.54H165.835V1304H156.29ZM165.835 1279.17H176.902C178.055 1279.17 179.092 1278.85 180.014 1278.2C180.937 1277.55 181.674 1276.63 182.228 1275.43C182.781 1274.19 183.058 1272.78 183.058 1271.21C183.058 1269.51 182.735 1268.06 182.089 1266.86C181.49 1265.66 180.683 1264.76 179.669 1264.16C178.7 1263.56 177.64 1263.26 176.487 1263.26H165.835V1279.17ZM209.846 1254.89H219.529L237.582 1304H227.76L223.195 1291.76H206.042L201.546 1304H191.724L209.846 1254.89ZM221.466 1285.05L214.688 1264.78L207.632 1285.05H221.466ZM275.863 1263.26H260.162V1304H250.686V1263.26H234.985V1254.89H275.863V1263.26ZM282.997 1304V1254.89H292.473V1290.58L316.267 1254.89H325.12V1304H315.644V1268.72L292.127 1304H282.997ZM350.701 1279.1C350.701 1276.1 351.231 1273.17 352.292 1270.32C353.399 1267.41 354.989 1264.78 357.065 1262.43C359.14 1260.03 361.676 1258.14 364.673 1256.76C367.67 1255.33 371.083 1254.61 374.91 1254.61C379.429 1254.61 383.325 1255.61 386.599 1257.59C389.919 1259.57 392.386 1262.15 394 1265.34L386.668 1270.38C385.838 1268.54 384.755 1267.09 383.418 1266.03C382.08 1264.92 380.651 1264.16 379.129 1263.74C377.607 1263.28 376.109 1263.05 374.633 1263.05C372.235 1263.05 370.137 1263.54 368.339 1264.51C366.587 1265.47 365.111 1266.74 363.912 1268.31C362.713 1269.88 361.814 1271.63 361.215 1273.57C360.661 1275.5 360.385 1277.44 360.385 1279.38C360.385 1281.54 360.73 1283.64 361.422 1285.67C362.114 1287.65 363.082 1289.43 364.327 1291C365.618 1292.52 367.14 1293.74 368.892 1294.66C370.691 1295.54 372.65 1295.98 374.772 1295.98C376.293 1295.98 377.838 1295.72 379.406 1295.22C380.974 1294.71 382.426 1293.9 383.763 1292.79C385.101 1291.69 386.138 1290.26 386.876 1288.51L394.692 1293C393.724 1295.45 392.133 1297.52 389.919 1299.23C387.752 1300.93 385.308 1302.22 382.588 1303.1C379.867 1303.98 377.169 1304.42 374.495 1304.42C370.99 1304.42 367.786 1303.7 364.881 1302.27C361.975 1300.8 359.462 1298.86 357.341 1296.46C355.266 1294.02 353.629 1291.3 352.43 1288.3C351.277 1285.26 350.701 1282.19 350.701 1279.1ZM435.885 1295.63V1304H401.785V1254.89H435.262V1263.26H411.33V1275.09H432.011V1282.83H411.33V1295.63H435.885ZM444.018 1304V1254.89H464.837C467.097 1254.89 469.172 1255.35 471.063 1256.27C472.953 1257.2 474.59 1258.44 475.973 1260.01C477.403 1261.58 478.51 1263.33 479.294 1265.27C480.077 1267.2 480.469 1269.19 480.469 1271.21C480.469 1273.98 479.824 1276.61 478.533 1279.1C477.242 1281.59 475.466 1283.62 473.207 1285.19C470.947 1286.75 468.273 1287.54 465.183 1287.54H453.563V1304H444.018ZM453.563 1279.17H464.63C465.783 1279.17 466.82 1278.85 467.743 1278.2C468.665 1277.55 469.403 1276.63 469.956 1275.43C470.509 1274.19 470.786 1272.78 470.786 1271.21C470.786 1269.51 470.463 1268.06 469.818 1266.86C469.218 1265.66 468.411 1264.76 467.397 1264.16C466.428 1263.56 465.368 1263.26 464.215 1263.26H453.563V1279.17ZM527.369 1291.34C527.369 1294.11 526.654 1296.44 525.224 1298.33C523.795 1300.17 521.858 1301.58 519.414 1302.55C517.016 1303.52 514.388 1304 511.529 1304H487.804V1254.89H514.088C516.394 1254.89 518.377 1255.51 520.037 1256.76C521.743 1257.96 523.034 1259.52 523.91 1261.46C524.832 1263.35 525.294 1265.34 525.294 1267.41C525.294 1269.76 524.694 1272 523.495 1274.12C522.296 1276.24 520.544 1277.81 518.238 1278.82C521.051 1279.65 523.265 1281.15 524.879 1283.32C526.539 1285.49 527.369 1288.16 527.369 1291.34ZM517.754 1289.54C517.754 1288.3 517.501 1287.19 516.993 1286.22C516.486 1285.21 515.794 1284.43 514.918 1283.87C514.088 1283.27 513.12 1282.97 512.013 1282.97H497.35V1295.91H511.529C512.682 1295.91 513.719 1295.63 514.642 1295.08C515.61 1294.48 516.371 1293.69 516.924 1292.73C517.478 1291.76 517.754 1290.7 517.754 1289.54ZM497.35 1263.05V1275.43H510.077C511.137 1275.43 512.105 1275.18 512.982 1274.67C513.858 1274.17 514.549 1273.45 515.057 1272.53C515.61 1271.61 515.887 1270.5 515.887 1269.21C515.887 1267.96 515.633 1266.88 515.126 1265.96C514.665 1265.04 514.019 1264.32 513.189 1263.81C512.405 1263.31 511.506 1263.05 510.492 1263.05H497.35ZM535.509 1304V1254.89H545.054V1304H535.509ZM553.017 1279.1C553.017 1276.1 553.548 1273.17 554.608 1270.32C555.715 1267.41 557.306 1264.78 559.381 1262.43C561.456 1260.03 563.992 1258.14 566.989 1256.76C569.987 1255.33 573.399 1254.61 577.226 1254.61C581.745 1254.61 585.642 1255.61 588.916 1257.59C592.236 1259.57 594.703 1262.15 596.317 1265.34L588.985 1270.38C588.155 1268.54 587.071 1267.09 585.734 1266.03C584.397 1264.92 582.967 1264.16 581.446 1263.74C579.924 1263.28 578.425 1263.05 576.95 1263.05C574.552 1263.05 572.454 1263.54 570.655 1264.51C568.903 1265.47 567.427 1266.74 566.229 1268.31C565.03 1269.88 564.13 1271.63 563.531 1273.57C562.978 1275.5 562.701 1277.44 562.701 1279.38C562.701 1281.54 563.047 1283.64 563.739 1285.67C564.43 1287.65 565.399 1289.43 566.644 1291C567.935 1292.52 569.456 1293.74 571.209 1294.66C573.007 1295.54 574.967 1295.98 577.088 1295.98C578.61 1295.98 580.154 1295.72 581.722 1295.22C583.29 1294.71 584.743 1293.9 586.08 1292.79C587.417 1291.69 588.455 1290.26 589.192 1288.51L597.008 1293C596.04 1295.45 594.449 1297.52 592.236 1299.23C590.068 1300.93 587.625 1302.22 584.904 1303.1C582.183 1303.98 579.486 1304.42 576.811 1304.42C573.307 1304.42 570.102 1303.7 567.197 1302.27C564.292 1300.8 561.779 1298.86 559.658 1296.46C557.583 1294.02 555.946 1291.3 554.747 1288.3C553.594 1285.26 553.017 1282.19 553.017 1279.1Z" fill="#040000"/>
              <path d="M636.795 1300.22L676.7 1260.32M676.7 1260.32V1291.36M676.7 1260.32H646.771" stroke="#040000" stroke-width="6.288"/>
              <path d="M709.3 1195.11H753.75L717.686 1356.83L709.3 1195.11Z" fill="#E3B7F5" stroke="#E3B7F5" stroke-width="2.21692" className={`fill-current stroke-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'} ${isHovered ? 'stroke-[#95D4F8]' : 'stroke-[#E3B7F5]'}`}/>
              </svg>
             ) : (
              <svg viewBox="0 0 1820 543" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M304.637 237.204L279.135 0.00264702L0 342.437V404.991V454H333.5H353L333.5 543H538.442H688.508H1266.17H1820L1678.87 306.328L1564.49 341.794L1347.11 121.889L1458.81 459.809L1022.05 341.794L1222.03 0.00264702L425.402 210.884L688.508 0.00264702L406.674 0L304.637 237.204Z" fill="#6D61FF"/>
              <rect width="323" height="78" transform="translate(0 465)" fill="#E3B7F5" className={`fill-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'}`}/>
              <path d="M36.064 515.16C34.4 515.16 32.8853 514.84 31.52 514.2C30.176 513.56 29.0133 512.696 28.032 511.608C27.072 510.499 26.3253 509.261 25.792 507.896C25.2587 506.509 24.992 505.091 24.992 503.64C24.992 502.125 25.2693 500.685 25.824 499.32C26.4 497.933 27.1787 496.707 28.16 495.64C29.1627 494.552 30.336 493.699 31.68 493.08C33.0453 492.44 34.5387 492.12 36.16 492.12C37.8027 492.12 39.296 492.451 40.64 493.112C42.0053 493.773 43.168 494.659 44.128 495.768C45.088 496.877 45.8347 498.115 46.368 499.48C46.9013 500.845 47.168 502.253 47.168 503.704C47.168 505.197 46.8907 506.637 46.336 508.024C45.7813 509.389 45.0027 510.616 44 511.704C43.0187 512.771 41.8453 513.613 40.48 514.232C39.136 514.851 37.664 515.16 36.064 515.16ZM29.472 503.64C29.472 504.621 29.6213 505.571 29.92 506.488C30.2187 507.405 30.6453 508.227 31.2 508.952C31.776 509.656 32.4693 510.221 33.28 510.648C34.112 511.053 35.0507 511.256 36.096 511.256C37.1627 511.256 38.112 511.043 38.944 510.616C39.776 510.168 40.4693 509.581 41.024 508.856C41.5787 508.109 41.9947 507.288 42.272 506.392C42.5707 505.475 42.72 504.557 42.72 503.64C42.72 502.659 42.56 501.72 42.24 500.824C41.9413 499.907 41.504 499.096 40.928 498.392C40.3733 497.667 39.68 497.101 38.848 496.696C38.0373 496.269 37.12 496.056 36.096 496.056C35.008 496.056 34.048 496.28 33.216 496.728C32.4053 497.155 31.7227 497.731 31.168 498.456C30.6133 499.181 30.1867 499.992 29.888 500.888C29.6107 501.784 29.472 502.701 29.472 503.64ZM50.9395 515V492.28H67.3235V496.088H55.3235V501.56H61.4995C64.0382 501.56 65.9475 502.157 67.2275 503.352C68.5075 504.547 69.1475 506.147 69.1475 508.152C69.1475 509.496 68.8702 510.68 68.3155 511.704C67.7608 512.728 66.9395 513.539 65.8515 514.136C64.7635 514.712 63.3875 515 61.7235 515H50.9395ZM55.3235 511.192H61.1155C61.9688 511.192 62.6515 511.043 63.1635 510.744C63.6755 510.424 64.0488 510.029 64.2835 509.56C64.5182 509.069 64.6355 508.557 64.6355 508.024C64.6355 507.491 64.5288 507 64.3155 506.552C64.1235 506.083 63.7715 505.709 63.2595 505.432C62.7475 505.133 62.0115 504.984 61.0515 504.984H55.3235V511.192ZM72.5705 515V492.28H82.2025C83.2478 492.28 84.2078 492.493 85.0825 492.92C85.9572 493.347 86.7145 493.923 87.3545 494.648C88.0158 495.373 88.5278 496.184 88.8905 497.08C89.2532 497.976 89.4345 498.893 89.4345 499.832C89.4345 501.112 89.1358 502.328 88.5385 503.48C87.9412 504.632 87.1198 505.571 86.0745 506.296C85.0292 507.021 83.7918 507.384 82.3625 507.384H76.9865V515H72.5705ZM76.9865 503.512H82.1065C82.6398 503.512 83.1198 503.363 83.5465 503.064C83.9732 502.765 84.3145 502.339 84.5705 501.784C84.8265 501.208 84.9545 500.557 84.9545 499.832C84.9545 499.043 84.8052 498.371 84.5065 497.816C84.2292 497.261 83.8558 496.845 83.3865 496.568C82.9385 496.291 82.4478 496.152 81.9145 496.152H76.9865V503.512ZM97.3477 492.28H101.828L110.18 515H105.636L103.524 509.336H95.5877L93.5077 515H88.9637L97.3477 492.28ZM102.724 506.232L99.5877 496.856L96.3237 506.232H102.724ZM127.89 496.152H120.626V515H116.242V496.152H108.978V492.28H127.89V496.152ZM131.19 515V492.28H135.574V508.792L146.582 492.28H150.678V515H146.294V498.68L135.414 515H131.19ZM162.513 503.48C162.513 502.093 162.759 500.739 163.249 499.416C163.761 498.072 164.497 496.856 165.457 495.768C166.417 494.659 167.591 493.784 168.977 493.144C170.364 492.483 171.943 492.152 173.713 492.152C175.804 492.152 177.607 492.611 179.121 493.528C180.657 494.445 181.799 495.64 182.545 497.112L179.153 499.448C178.769 498.595 178.268 497.923 177.649 497.432C177.031 496.92 176.369 496.568 175.665 496.376C174.961 496.163 174.268 496.056 173.585 496.056C172.476 496.056 171.505 496.28 170.673 496.728C169.863 497.176 169.18 497.763 168.625 498.488C168.071 499.213 167.655 500.024 167.377 500.92C167.121 501.816 166.993 502.712 166.993 503.608C166.993 504.611 167.153 505.581 167.473 506.52C167.793 507.437 168.241 508.259 168.817 508.984C169.415 509.688 170.119 510.253 170.929 510.68C171.761 511.085 172.668 511.288 173.649 511.288C174.353 511.288 175.068 511.171 175.793 510.936C176.519 510.701 177.191 510.328 177.809 509.816C178.428 509.304 178.908 508.643 179.249 507.832L182.865 509.912C182.417 511.043 181.681 512.003 180.657 512.792C179.655 513.581 178.524 514.179 177.265 514.584C176.007 514.989 174.759 515.192 173.521 515.192C171.9 515.192 170.417 514.861 169.073 514.2C167.729 513.517 166.567 512.621 165.585 511.512C164.625 510.381 163.868 509.123 163.313 507.736C162.78 506.328 162.513 504.909 162.513 503.48ZM201.923 511.128V515H186.147V492.28H201.635V496.152H190.563V501.624H200.131V505.208H190.563V511.128H201.923ZM205.686 515V492.28H215.318C216.363 492.28 217.323 492.493 218.198 492.92C219.072 493.347 219.83 493.923 220.47 494.648C221.131 495.373 221.643 496.184 222.006 497.08C222.368 497.976 222.55 498.893 222.55 499.832C222.55 501.112 222.251 502.328 221.654 503.48C221.056 504.632 220.235 505.571 219.19 506.296C218.144 507.021 216.907 507.384 215.478 507.384H210.102V515H205.686ZM210.102 503.512H215.222C215.755 503.512 216.235 503.363 216.662 503.064C217.088 502.765 217.43 502.339 217.686 501.784C217.942 501.208 218.07 500.557 218.07 499.832C218.07 499.043 217.92 498.371 217.622 497.816C217.344 497.261 216.971 496.845 216.502 496.568C216.054 496.291 215.563 496.152 215.03 496.152H210.102V503.512ZM244.247 509.144C244.247 510.424 243.916 511.501 243.255 512.376C242.594 513.229 241.698 513.88 240.567 514.328C239.458 514.776 238.242 515 236.919 515H225.943V492.28H238.103C239.17 492.28 240.087 492.568 240.855 493.144C241.644 493.699 242.242 494.424 242.647 495.32C243.074 496.195 243.287 497.112 243.287 498.072C243.287 499.16 243.01 500.195 242.455 501.176C241.9 502.157 241.09 502.883 240.023 503.352C241.324 503.736 242.348 504.429 243.095 505.432C243.863 506.435 244.247 507.672 244.247 509.144ZM239.799 508.312C239.799 507.736 239.682 507.224 239.447 506.776C239.212 506.307 238.892 505.944 238.487 505.688C238.103 505.411 237.655 505.272 237.143 505.272H230.359V511.256H236.919C237.452 511.256 237.932 511.128 238.359 510.872C238.807 510.595 239.159 510.232 239.415 509.784C239.671 509.336 239.799 508.845 239.799 508.312ZM230.359 496.056V501.784H236.247C236.738 501.784 237.186 501.667 237.591 501.432C237.996 501.197 238.316 500.867 238.551 500.44C238.807 500.013 238.935 499.501 238.935 498.904C238.935 498.328 238.818 497.827 238.583 497.4C238.37 496.973 238.071 496.643 237.687 496.408C237.324 496.173 236.908 496.056 236.439 496.056H230.359ZM248.013 515V492.28H252.429V515H248.013ZM256.113 503.48C256.113 502.093 256.359 500.739 256.849 499.416C257.361 498.072 258.097 496.856 259.057 495.768C260.017 494.659 261.191 493.784 262.577 493.144C263.964 492.483 265.543 492.152 267.313 492.152C269.404 492.152 271.207 492.611 272.721 493.528C274.257 494.445 275.399 495.64 276.145 497.112L272.753 499.448C272.369 498.595 271.868 497.923 271.249 497.432C270.631 496.92 269.969 496.568 269.265 496.376C268.561 496.163 267.868 496.056 267.185 496.056C266.076 496.056 265.105 496.28 264.273 496.728C263.463 497.176 262.78 497.763 262.225 498.488C261.671 499.213 261.255 500.024 260.977 500.92C260.721 501.816 260.593 502.712 260.593 503.608C260.593 504.611 260.753 505.581 261.073 506.52C261.393 507.437 261.841 508.259 262.417 508.984C263.015 509.688 263.719 510.253 264.529 510.68C265.361 511.085 266.268 511.288 267.249 511.288C267.953 511.288 268.668 511.171 269.393 510.936C270.119 510.701 270.791 510.328 271.409 509.816C272.028 509.304 272.508 508.643 272.849 507.832L276.465 509.912C276.017 511.043 275.281 512.003 274.257 512.792C273.255 513.581 272.124 514.179 270.865 514.584C269.607 514.989 268.359 515.192 267.121 515.192C265.5 515.192 264.017 514.861 262.673 514.2C261.329 513.517 260.167 512.621 259.185 511.512C258.225 510.381 257.468 509.123 256.913 507.736C256.38 506.328 256.113 504.909 256.113 503.48Z" fill="#040000"/>
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