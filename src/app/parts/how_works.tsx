'use client'

import StepsSection from "@/components/global/Steps/StepsSection"
import Title from "@/components/global/title"
import React, { useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';


export const HowWorks = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleLinkClick = () => {
    sendGAEvent('event', 'Link_Click', {
      platform: 'telegram',
      location: 'how_works'
    });
  };

  return(
    <section className="w-full h-full pb-7 sm:pb-14" id="how_works">
      <Title>СКЕЛЬОВА ЯКІСТЬ</Title>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col-reverse justify-center gap-[35px] lg:flex-row py-6 px-4 xl:px-6 xl:py-[60px]">
          <div className="relative lg:w-1/2 ">
          {/* <div className="flex h-full w-full "> */}
          <svg viewBox="0 0 943 830" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="406" height="78" transform="translate(97.5 752)" fill="#E3B7F5" className={`fill-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'}`}/>
          <path d="M122.46 806.352V798.128H123.676C124.252 798.128 124.753 797.904 125.18 797.456C125.607 797.008 125.969 796.293 126.268 795.312C126.567 794.331 126.801 793.061 126.972 791.504C127.164 789.925 127.292 788.016 127.356 785.776L127.548 779.28H142.684V798.128H145.692V806.352H141.82V802H126.332V806.352H122.46ZM128.956 798.128H138.3V783.152H131.548L131.484 786.352C131.42 788.571 131.292 790.459 131.1 792.016C130.929 793.573 130.673 794.853 130.332 795.856C130.012 796.859 129.553 797.616 128.956 798.128ZM149.438 802V779.28H153.854V802H149.438ZM166.274 802.224C164.418 802.224 162.754 801.851 161.282 801.104C159.81 800.357 158.648 799.312 157.794 797.968L161.09 795.92C161.624 796.731 162.317 797.381 163.17 797.872C164.024 798.341 165.026 798.576 166.178 798.576C167.544 798.576 168.557 798.277 169.218 797.68C169.901 797.083 170.242 796.293 170.242 795.312C170.242 794.672 170.093 794.117 169.794 793.648C169.517 793.157 169.09 792.784 168.514 792.528C167.938 792.251 167.213 792.112 166.338 792.112H163.618V788.752H166.37C167.053 788.752 167.629 788.635 168.098 788.4C168.589 788.144 168.952 787.803 169.186 787.376C169.442 786.949 169.57 786.459 169.57 785.904C169.57 785.328 169.432 784.827 169.154 784.4C168.898 783.973 168.504 783.643 167.97 783.408C167.458 783.152 166.797 783.024 165.986 783.024C164.834 783.024 163.842 783.259 163.01 783.728C162.178 784.176 161.538 784.773 161.09 785.52L157.922 783.28C158.776 782.021 159.864 781.008 161.186 780.24C162.53 779.472 164.194 779.088 166.178 779.088C167.757 779.088 169.112 779.333 170.242 779.824C171.373 780.293 172.248 780.987 172.866 781.904C173.506 782.821 173.826 783.931 173.826 785.232C173.826 786.277 173.57 787.259 173.058 788.176C172.568 789.072 171.778 789.765 170.69 790.256C171.97 790.64 172.952 791.323 173.634 792.304C174.338 793.285 174.69 794.427 174.69 795.728C174.69 797.136 174.317 798.331 173.57 799.312C172.845 800.272 171.853 800.997 170.594 801.488C169.336 801.979 167.896 802.224 166.274 802.224ZM197.713 779.28V802H193.329V792.304H183.025V802H178.609V779.28H183.025V788.464H193.329V779.28H197.713ZM208.949 779.28H213.429L221.781 802H217.237L215.125 796.336H207.189L205.109 802H200.565L208.949 779.28ZM214.325 793.232L211.189 783.856L207.925 793.232H214.325ZM239.491 783.152H232.227V802H227.843V783.152H220.579V779.28H239.491V783.152ZM242.792 802V779.28H247.176V795.792L258.184 779.28H262.28V802H257.896V785.68L247.016 802H242.792ZM266.107 790.48C266.107 789.093 266.352 787.739 266.843 786.416C267.355 785.072 268.091 783.856 269.051 782.768C270.011 781.659 271.184 780.784 272.571 780.144C273.958 779.483 275.536 779.152 277.307 779.152C279.398 779.152 281.2 779.611 282.715 780.528C284.251 781.445 285.392 782.64 286.139 784.112L282.747 786.448C282.363 785.595 281.862 784.923 281.243 784.432C280.624 783.92 279.963 783.568 279.259 783.376C278.555 783.163 277.862 783.056 277.179 783.056C276.07 783.056 275.099 783.28 274.267 783.728C273.456 784.176 272.774 784.763 272.219 785.488C271.664 786.213 271.248 787.024 270.971 787.92C270.715 788.816 270.587 789.712 270.587 790.608C270.587 791.611 270.747 792.581 271.067 793.52C271.387 794.437 271.835 795.259 272.411 795.984C273.008 796.688 273.712 797.253 274.523 797.68C275.355 798.085 276.262 798.288 277.243 798.288C277.947 798.288 278.662 798.171 279.387 797.936C280.112 797.701 280.784 797.328 281.403 796.816C282.022 796.304 282.502 795.643 282.843 794.832L286.459 796.912C286.011 798.043 285.275 799.003 284.251 799.792C283.248 800.581 282.118 801.179 280.859 801.584C279.6 801.989 278.352 802.192 277.115 802.192C275.494 802.192 274.011 801.861 272.667 801.2C271.323 800.517 270.16 799.621 269.179 798.512C268.219 797.381 267.462 796.123 266.907 794.736C266.374 793.328 266.107 791.909 266.107 790.48ZM289.804 802V779.28H294.188V787.408H298.86C300.546 787.408 301.964 787.707 303.116 788.304C304.29 788.901 305.175 789.744 305.772 790.832C306.391 791.899 306.7 793.168 306.7 794.64C306.7 796.091 306.402 797.371 305.804 798.48C305.228 799.589 304.375 800.453 303.244 801.072C302.114 801.691 300.738 802 299.116 802H289.804ZM294.188 798.416H298.508C299.362 798.416 300.066 798.245 300.62 797.904C301.175 797.563 301.58 797.115 301.836 796.56C302.092 795.984 302.22 795.344 302.22 794.64C302.22 794.021 302.092 793.435 301.836 792.88C301.602 792.325 301.207 791.877 300.652 791.536C300.119 791.173 299.394 790.992 298.476 790.992H294.188V798.416ZM318.351 802V779.28H334.735V783.088H322.735V788.56H328.911C331.449 788.56 333.359 789.157 334.639 790.352C335.919 791.547 336.559 793.147 336.559 795.152C336.559 796.496 336.281 797.68 335.727 798.704C335.172 799.728 334.351 800.539 333.263 801.136C332.175 801.712 330.799 802 329.135 802H318.351ZM322.735 798.192H328.527C329.38 798.192 330.063 798.043 330.575 797.744C331.087 797.424 331.46 797.029 331.695 796.56C331.929 796.069 332.047 795.557 332.047 795.024C332.047 794.491 331.94 794 331.727 793.552C331.535 793.083 331.183 792.709 330.671 792.432C330.159 792.133 329.423 791.984 328.463 791.984H322.735V798.192ZM339.982 802V779.28H344.398V802H339.982ZM363.922 802V783.152H357.266L357.138 786.992C357.031 790 356.786 792.485 356.402 794.448C356.018 796.411 355.463 797.957 354.738 799.088C354.013 800.197 353.095 800.987 351.986 801.456C350.898 801.904 349.586 802.128 348.05 802.128V798.32C348.839 798.32 349.522 798.149 350.098 797.808C350.674 797.467 351.154 796.848 351.538 795.952C351.943 795.056 352.263 793.787 352.498 792.144C352.733 790.501 352.893 788.379 352.978 785.776L353.202 779.28H368.306V802H363.922ZM373.467 802V779.28H377.851V787.408H382.523C384.208 787.408 385.627 787.707 386.779 788.304C387.952 788.901 388.838 789.744 389.435 790.832C390.054 791.899 390.363 793.168 390.363 794.64C390.363 796.091 390.064 797.371 389.467 798.48C388.891 799.589 388.038 800.453 386.907 801.072C385.776 801.691 384.4 802 382.779 802H373.467ZM377.851 798.416H382.171C383.024 798.416 383.728 798.245 384.283 797.904C384.838 797.563 385.243 797.115 385.499 796.56C385.755 795.984 385.883 795.344 385.883 794.64C385.883 794.021 385.755 793.435 385.499 792.88C385.264 792.325 384.87 791.877 384.315 791.536C383.782 791.173 383.056 790.992 382.139 790.992H377.851V798.416ZM393.942 802V779.28H398.358V798.128H405.302V779.28H409.718V798.128H416.662V779.28H421.078V802H393.942ZM441.913 798.128V802H426.137V779.28H441.625V783.152H430.553V788.624H440.121V792.208H430.553V798.128H441.913Z" fill="#030303"/>
          <path d="M461.5 800L479.5 782M479.5 782V796M479.5 782H466" stroke="black" stroke-width="3"/>
          <path d="M66 829.5L89.5 752.5H117L119.5 829.5H66Z" fill="#E3B7F5" className={`fill-current transition-colors duration-300 ${isHovered ? 'text-[#95D4F8]' : 'text-[#E3B7F5]'}`}/>
          <path d="M0 0H943V830H514.364V740.5H81.5L51.5 830H0V0Z" fill="#B5B0FF"/>
          <path d="M59.282 77V75.31C58.1553 75.258 57.0807 75.0327 56.058 74.634C55.0527 74.2353 54.16 73.6807 53.38 72.97C52.6173 72.2593 52.0107 71.4187 51.56 70.448C51.1267 69.46 50.91 68.3767 50.91 67.198C50.91 65.95 51.144 64.8407 51.612 63.87C52.08 62.882 52.704 62.0413 53.484 61.348C54.264 60.6373 55.148 60.0913 56.136 59.71C57.1413 59.3287 58.19 59.112 59.282 59.06V57.656H62.064V59.06C63.1733 59.112 64.2307 59.3373 65.236 59.736C66.2413 60.1347 67.134 60.6807 67.914 61.374C68.694 62.0673 69.3093 62.908 69.76 63.896C70.2107 64.884 70.436 65.9847 70.436 67.198C70.436 68.4113 70.202 69.512 69.734 70.5C69.2833 71.4707 68.668 72.3113 67.888 73.022C67.108 73.7153 66.2153 74.2613 65.21 74.66C64.2047 75.0413 63.156 75.258 62.064 75.31V77H59.282ZM59.36 72.944V61.426C58.3547 61.478 57.4273 61.7467 56.578 62.232C55.746 62.7 55.0787 63.35 54.576 64.182C54.0907 65.014 53.848 66.0193 53.848 67.198C53.848 68.082 53.9953 68.8793 54.29 69.59C54.602 70.2833 55.0093 70.8727 55.512 71.358C56.032 71.826 56.6213 72.1987 57.28 72.476C57.956 72.7533 58.6493 72.9093 59.36 72.944ZM62.012 72.944C63 72.892 63.91 72.632 64.742 72.164C65.574 71.6787 66.2413 71.02 66.744 70.188C67.2467 69.3387 67.498 68.342 67.498 67.198C67.498 66.314 67.3507 65.5253 67.056 64.832C66.7787 64.1387 66.38 63.5493 65.86 63.064C65.34 62.5613 64.7507 62.1713 64.092 61.894C63.4333 61.6167 62.74 61.4607 62.012 61.426V72.944ZM81.1289 77.13C79.7942 77.13 78.5896 76.87 77.5149 76.35C76.4402 75.83 75.5129 75.128 74.7329 74.244C73.9529 73.3427 73.3462 72.3373 72.9129 71.228C72.4969 70.1013 72.2889 68.9487 72.2889 67.77C72.2889 66.5393 72.5142 65.3693 72.9649 64.26C73.4156 63.1333 74.0396 62.1367 74.8369 61.27C75.6342 60.386 76.5702 59.6927 77.6449 59.19C78.7369 58.67 79.9156 58.41 81.1809 58.41C82.4982 58.41 83.6942 58.6787 84.7689 59.216C85.8609 59.7533 86.7882 60.4727 87.5509 61.374C88.3309 62.2753 88.9289 63.2807 89.3449 64.39C89.7782 65.4993 89.9949 66.6347 89.9949 67.796C89.9949 69.0267 89.7696 70.2053 89.3189 71.332C88.8856 72.4413 88.2702 73.438 87.4729 74.322C86.6756 75.1887 85.7309 75.8733 84.6389 76.376C83.5642 76.8787 82.3942 77.13 81.1289 77.13ZM75.2529 67.77C75.2529 68.6367 75.3916 69.4773 75.6689 70.292C75.9462 71.1067 76.3362 71.8347 76.8389 72.476C77.3589 73.1 77.9829 73.594 78.7109 73.958C79.4389 74.322 80.2536 74.504 81.1549 74.504C82.0909 74.504 82.9229 74.3133 83.6509 73.932C84.3789 73.5507 84.9856 73.0393 85.4709 72.398C85.9736 71.7393 86.3549 71.0113 86.6149 70.214C86.8749 69.3993 87.0049 68.5847 87.0049 67.77C87.0049 66.9033 86.8662 66.0713 86.5889 65.274C86.3289 64.4593 85.9389 63.74 85.4189 63.116C84.8989 62.4747 84.2749 61.972 83.5469 61.608C82.8362 61.244 82.0389 61.062 81.1549 61.062C80.2189 61.062 79.3869 61.2527 78.6589 61.634C77.9309 62.0153 77.3156 62.5267 76.8129 63.168C76.3102 63.8093 75.9202 64.5287 75.6429 65.326C75.3829 66.1233 75.2529 66.938 75.2529 67.77ZM93.0097 77V58.54H100.758C101.59 58.54 102.352 58.7133 103.046 59.06C103.739 59.4067 104.346 59.866 104.866 60.438C105.386 61.01 105.784 61.6513 106.062 62.362C106.339 63.0727 106.478 63.8007 106.478 64.546C106.478 65.5687 106.244 66.548 105.776 67.484C105.325 68.4027 104.675 69.148 103.826 69.72C102.994 70.292 102.023 70.578 100.914 70.578H95.9217V77H93.0097ZM95.9217 68.004H100.732C101.286 68.004 101.772 67.8567 102.188 67.562C102.604 67.25 102.924 66.834 103.15 66.314C103.392 65.794 103.514 65.2047 103.514 64.546C103.514 63.87 103.375 63.272 103.098 62.752C102.82 62.232 102.456 61.8333 102.006 61.556C101.572 61.2613 101.096 61.114 100.576 61.114H95.9217V68.004ZM124.731 77V63.844L119.297 73.828H117.581L112.121 63.844V77H109.209V58.54H112.329L118.439 69.824L124.549 58.54H127.669V77H124.731ZM137.162 58.54H139.918L147.094 77H144.026L142.076 71.982H134.952L133.028 77H129.934L137.162 58.54ZM141.504 69.824L138.54 61.738L135.472 69.824H141.504ZM161.222 61.114H155.086V77H152.148V61.114H145.986V58.54H161.222V61.114Z" fill="#040000"/>
          <path d="M861.5 58.5H885V76.5M885 76.5L893 68M885 76.5L877.5 68" stroke="#040000" stroke-width="2"/>
          <path d="M249.321 337.672C248.94 341.104 247.761 344.12 245.785 346.72C243.809 349.285 241.209 351.279 237.985 352.7C234.796 354.121 231.121 354.832 226.961 354.832C222.42 354.832 218.451 353.983 215.053 352.284C211.656 350.585 209.004 348.211 207.097 345.16C205.225 342.109 204.289 338.556 204.289 334.5C204.289 330.444 205.225 326.891 207.097 323.84C209.004 320.789 211.656 318.415 215.053 316.716C218.451 315.017 222.42 314.168 226.961 314.168C231.121 314.168 234.796 314.879 237.985 316.3C241.209 317.721 243.809 319.732 245.785 322.332C247.761 324.897 248.94 327.896 249.321 331.328H238.505C238.159 329.664 237.483 328.26 236.477 327.116C235.472 325.937 234.155 325.036 232.525 324.412C230.931 323.788 229.076 323.476 226.961 323.476C224.535 323.476 222.437 323.927 220.669 324.828C218.901 325.695 217.549 326.96 216.613 328.624C215.677 330.253 215.209 332.212 215.209 334.5C215.209 336.788 215.677 338.764 216.613 340.428C217.549 342.057 218.901 343.323 220.669 344.224C222.437 345.091 224.535 345.524 226.961 345.524C229.076 345.524 230.931 345.229 232.525 344.64C234.155 344.051 235.472 343.167 236.477 341.988C237.483 340.809 238.159 339.371 238.505 337.672H249.321ZM294.8 315V354H284.036V319.68L288.872 324.568H259.44L264.276 319.68V354H253.512V315H294.8ZM301.019 315H311.783V354H301.019V315ZM324.507 315H362.779V354H351.963V319.68L356.851 324.568H330.539L335.063 320.98C335.34 323.268 335.531 325.469 335.635 327.584C335.739 329.664 335.791 331.64 335.791 333.512C335.791 338.504 335.34 342.577 334.439 345.732C333.537 348.852 332.116 351.14 330.175 352.596C328.233 354.052 325.72 354.78 322.635 354.78C321.283 354.78 319.948 354.641 318.631 354.364C317.348 354.087 316.169 353.671 315.095 353.116V344.172C316.62 344.761 318.024 345.056 319.307 345.056C321.56 345.056 323.172 344.033 324.143 341.988C325.148 339.943 325.651 336.597 325.651 331.952C325.651 329.699 325.547 327.168 325.339 324.36C325.165 321.552 324.888 318.432 324.507 315ZM368.967 354V315H379.679V345.42L376.819 343.184L398.919 315H410.307L378.691 354H368.967ZM387.583 335.384L395.487 328.832L410.827 354H398.607L387.583 335.384ZM422.377 354L429.397 341.78H429.553L444.789 315H456.489L434.077 354H422.377ZM429.241 348.748L409.741 315H421.649L436.885 341.52L429.241 348.748ZM485.521 334.916L486.405 332.888C489.421 332.957 491.9 333.425 493.841 334.292C495.817 335.124 497.291 336.303 498.261 337.828C499.232 339.319 499.717 341.052 499.717 343.028C499.717 345.143 499.232 347.032 498.261 348.696C497.291 350.325 495.835 351.625 493.893 352.596C491.987 353.532 489.595 354 486.717 354H457.909L460.925 333.98L457.909 315H485.677C489.283 315 492.091 315.849 494.101 317.548C496.112 319.212 497.117 321.535 497.117 324.516C497.117 326.145 496.736 327.705 495.973 329.196C495.211 330.687 493.98 331.952 492.281 332.992C490.617 333.997 488.364 334.639 485.521 334.916ZM468.569 351.504L464.409 346.46H483.805C485.365 346.46 486.579 346.079 487.445 345.316C488.312 344.553 488.745 343.496 488.745 342.144C488.745 340.792 488.277 339.717 487.341 338.92C486.405 338.088 485.019 337.672 483.181 337.672H467.165V330.288H481.725C482.973 330.288 484.013 329.924 484.845 329.196C485.712 328.433 486.145 327.411 486.145 326.128C486.145 325.088 485.781 324.239 485.053 323.58C484.325 322.887 483.285 322.54 481.933 322.54H464.461L468.569 317.496L471.221 333.98L468.569 351.504ZM509.634 346.512V337.828H536.518V346.512H509.634ZM530.382 315L548.114 354H536.622L521.75 319.576H524.87L509.946 354H498.454L516.186 315H530.382ZM550.768 315H561.532V354H550.768V315ZM581.448 315H592.264V354H581.448V315ZM556.8 329.404H585.92V338.972H556.8V329.404ZM598.528 315H609.292V354H598.528V315ZM629.208 315H640.024V354H629.208V315ZM604.56 329.404H633.68V338.972H604.56V329.404ZM676.241 332.316V339.96H659.965L659.913 339.752C656.932 339.752 654.314 339.249 652.061 338.244C649.842 337.239 648.109 335.817 646.861 333.98C645.648 332.143 645.041 329.993 645.041 327.532C645.041 325.001 645.648 322.817 646.861 320.98C648.109 319.108 649.842 317.652 652.061 316.612C654.314 315.537 656.932 315 659.913 315H683.729V354H672.913V317.86L677.749 322.696H661.473C659.705 322.696 658.318 323.129 657.313 323.996C656.342 324.828 655.857 326.007 655.857 327.532C655.857 329.023 656.342 330.201 657.313 331.068C658.318 331.9 659.705 332.316 661.473 332.316H676.241ZM669.793 335.748L656.481 354H644.001L657.729 335.748H669.793ZM709.171 354L716.191 341.78H716.347L731.583 315H743.283L720.871 354H709.171ZM716.035 348.748L696.535 315H708.443L723.679 341.52L716.035 348.748ZM297.739 381.732H308.555V416H297.739V381.732ZM282.867 377H323.427V386.568H282.867V377ZM360.365 392.6V400.4H331.817V392.6H360.365ZM339.149 396.5L336.601 412.152L332.233 407.264H362.081V416H325.837L328.801 396.5L325.837 377H361.821V385.736H332.233L336.601 380.848L339.149 396.5ZM378.043 377V411.216L373.207 406.432H402.379V416H367.279V377H378.043ZM439.282 392.6V400.4H410.734V392.6H439.282ZM418.066 396.5L415.518 412.152L411.15 407.264H440.998V416H404.754L407.718 396.5L404.754 377H440.738V385.736H411.15L415.518 380.848L418.066 396.5ZM485.521 399.1C485.417 401.457 484.932 403.711 484.065 405.86C483.233 407.975 482.003 409.864 480.373 411.528C478.779 413.192 476.768 414.492 474.341 415.428C471.949 416.364 469.159 416.832 465.969 416.832C462.919 416.832 460.059 416.399 457.389 415.532C454.72 414.631 452.363 413.313 450.317 411.58C448.307 409.847 446.729 407.715 445.585 405.184C444.476 402.653 443.921 399.759 443.921 396.5C443.921 393.241 444.493 390.347 445.637 387.816C446.781 385.285 448.376 383.153 450.421 381.42C452.501 379.687 454.893 378.387 457.597 377.52C460.336 376.619 463.317 376.168 466.541 376.168C470.84 376.168 474.549 376.827 477.669 378.144C480.789 379.461 483.303 381.264 485.209 383.552C487.116 385.84 488.347 388.492 488.901 391.508H478.033C477.687 390.191 476.976 389.064 475.901 388.128C474.861 387.157 473.544 386.429 471.949 385.944C470.389 385.424 468.604 385.164 466.593 385.164C464.167 385.164 462.069 385.597 460.301 386.464C458.533 387.296 457.164 388.561 456.193 390.26C455.223 391.924 454.737 394.004 454.737 396.5C454.737 399.031 455.257 401.163 456.297 402.896C457.337 404.629 458.811 405.929 460.717 406.796C462.659 407.663 464.929 408.096 467.529 408.096C470.06 408.096 472.296 407.749 474.237 407.056C476.179 406.328 477.721 405.271 478.865 403.884C480.044 402.497 480.72 400.833 480.893 398.892L485.521 399.1ZM468.569 403.416V395.824H489.265V416H481.621L480.113 400.556L482.141 403.416H468.569ZM502.102 394.056H516.298C518.032 394.056 519.384 393.657 520.354 392.86C521.325 392.063 521.81 390.953 521.81 389.532C521.81 388.076 521.325 386.967 520.354 386.204C519.384 385.407 518.032 385.008 516.298 385.008H500.594L505.43 379.86V416H494.666V377H517.806C520.788 377 523.388 377.537 525.606 378.612C527.825 379.652 529.558 381.108 530.806 382.98C532.054 384.817 532.678 387.001 532.678 389.532C532.678 391.993 532.054 394.16 530.806 396.032C529.558 397.904 527.825 399.36 525.606 400.4C523.388 401.44 520.788 401.96 517.806 401.96H502.102V394.056ZM507.926 397.748H520.042L534.03 416H521.55L507.926 397.748ZM544.687 408.512V399.828H571.571V408.512H544.687ZM565.435 377L583.167 416H571.675L556.803 381.576H559.923L544.999 416H533.507L551.239 377H565.435ZM642.813 377V416H632.569V380.848L634.857 381.108L619.777 416H608.857L593.725 381.212L596.065 380.952V416H585.821V377H602.461L616.449 410.488H612.289L626.173 377H642.813ZM647.302 423.696L652.658 412.464L653.23 416.364C652.121 416.364 651.115 416.104 650.214 415.584C649.313 415.064 648.585 414.353 648.03 413.452C647.51 412.551 647.25 411.563 647.25 410.488C647.25 409.379 647.51 408.391 648.03 407.524C648.585 406.623 649.313 405.912 650.214 405.392C651.115 404.872 652.121 404.612 653.23 404.612C654.374 404.612 655.397 404.872 656.298 405.392C657.199 405.912 657.91 406.64 658.43 407.576C658.95 408.477 659.21 409.5 659.21 410.644C659.21 411.684 658.95 412.793 658.43 413.972C657.945 415.151 657.095 416.659 655.882 418.496L652.45 423.696H647.302ZM276.532 439V478H265.768V443.68L270.604 448.568H241.172L246.008 443.68V478H235.244V439H276.532ZM316.083 454.6V462.4H287.535V454.6H316.083ZM294.867 458.5L292.319 474.152L287.951 469.264H317.799V478H281.555L284.519 458.5L281.555 439H317.539V447.736H287.951L292.319 442.848L294.867 458.5ZM344.888 439C348.147 439 350.955 439.555 353.312 440.664C355.704 441.773 357.524 443.351 358.772 445.396C360.02 447.407 360.644 449.764 360.644 452.468C360.644 455.137 360.02 457.495 358.772 459.54C357.524 461.551 355.704 463.111 353.312 464.22C350.955 465.329 348.147 465.884 344.888 465.884H327.988V457.252H344.212C345.946 457.252 347.298 456.836 348.268 456.004C349.239 455.137 349.724 453.959 349.724 452.468C349.724 450.943 349.239 449.764 348.268 448.932C347.298 448.065 345.946 447.632 344.212 447.632H328.924L333.76 442.64V478H322.996V439H344.888ZM397.488 454.6V462.4H368.94V454.6H397.488ZM376.272 458.5L373.724 474.152L369.356 469.264H399.204V478H362.96L365.924 458.5L362.96 439H398.944V447.736H369.356L373.724 442.848L376.272 458.5ZM445.689 439V478H434.925V443.68L439.761 448.568H410.329L415.165 443.68V478H404.401V439H445.689ZM451.908 478V439H462.516V472.332L459.552 471.656L481.652 439H495.744V478H485.084V444.044L488.1 444.72L465.584 478H451.908ZM545.32 461.672C544.939 465.104 543.76 468.12 541.784 470.72C539.808 473.285 537.208 475.279 533.984 476.7C530.795 478.121 527.12 478.832 522.96 478.832C518.419 478.832 514.45 477.983 511.052 476.284C507.655 474.585 505.003 472.211 503.096 469.16C501.224 466.109 500.288 462.556 500.288 458.5C500.288 454.444 501.224 450.891 503.096 447.84C505.003 444.789 507.655 442.415 511.052 440.716C514.45 439.017 518.419 438.168 522.96 438.168C527.12 438.168 530.795 438.879 533.984 440.3C537.208 441.721 539.808 443.732 541.784 446.332C543.76 448.897 544.939 451.896 545.32 455.328H534.504C534.158 453.664 533.482 452.26 532.476 451.116C531.471 449.937 530.154 449.036 528.524 448.412C526.93 447.788 525.075 447.476 522.96 447.476C520.534 447.476 518.436 447.927 516.668 448.828C514.9 449.695 513.548 450.96 512.612 452.624C511.676 454.253 511.208 456.212 511.208 458.5C511.208 460.788 511.676 462.764 512.612 464.428C513.548 466.057 514.9 467.323 516.668 468.224C518.436 469.091 520.534 469.524 522.96 469.524C525.075 469.524 526.93 469.229 528.524 468.64C530.154 468.051 531.471 467.167 532.476 465.988C533.482 464.809 534.158 463.371 534.504 461.672H545.32ZM549.511 478V439H560.223V469.42L557.363 467.184L579.463 439H590.851L559.235 478H549.511ZM568.127 459.384L576.031 452.832L591.371 478H579.151L568.127 459.384ZM601.309 470.512V461.828H628.193V470.512H601.309ZM622.057 439L639.789 478H628.297L613.425 443.576H616.545L601.621 478H590.129L607.861 439H622.057ZM651.641 455.848H680.345V463.804H651.641V455.848ZM679.877 455.848H708.581V463.804H679.877V455.848ZM272.557 501H283.321V540H272.557V501ZM303.237 501H314.053V540H303.237V501ZM278.589 515.404H307.709V524.972H278.589V515.404ZM327.91 532.512V523.828H354.794V532.512H327.91ZM348.658 501L366.39 540H354.898L340.026 505.576H343.146L328.222 540H316.73L334.462 501H348.658ZM385.673 540.832C381.548 540.832 377.925 540.26 374.805 539.116C371.72 537.972 369.311 536.343 367.577 534.228C365.879 532.113 364.96 529.635 364.821 526.792H375.637C375.88 528.664 376.851 530.103 378.549 531.108C380.248 532.079 382.623 532.564 385.673 532.564C388.551 532.564 390.769 532.183 392.329 531.42C393.889 530.623 394.669 529.444 394.669 527.884C394.669 526.532 393.993 525.544 392.641 524.92C391.324 524.296 389.14 523.984 386.089 523.984H378.965V516.86H385.933C387.736 516.86 389.209 516.704 390.353 516.392C391.497 516.045 392.347 515.56 392.901 514.936C393.491 514.312 393.785 513.584 393.785 512.752C393.785 511.816 393.456 511.036 392.797 510.412C392.173 509.753 391.255 509.268 390.041 508.956C388.863 508.609 387.424 508.436 385.725 508.436C382.917 508.436 380.716 508.921 379.121 509.892C377.527 510.828 376.591 512.18 376.313 513.948H365.601C365.809 511.383 366.711 509.06 368.305 506.98C369.935 504.9 372.257 503.253 375.273 502.04C378.289 500.792 381.947 500.168 386.245 500.168C389.955 500.168 393.196 500.636 395.969 501.572C398.743 502.473 400.892 503.756 402.417 505.42C403.977 507.049 404.757 508.956 404.757 511.14C404.757 512.908 404.22 514.52 403.145 515.976C402.105 517.432 400.441 518.593 398.153 519.46C395.9 520.327 392.971 520.76 389.365 520.76V519.668C392.763 519.495 395.675 519.72 398.101 520.344C400.563 520.968 402.452 521.973 403.769 523.36C405.087 524.747 405.745 526.532 405.745 528.716C405.745 531.073 404.965 533.171 403.405 535.008C401.845 536.811 399.575 538.232 396.593 539.272C393.612 540.312 389.972 540.832 385.673 540.832ZM416.119 532.512V523.828H443.003V532.512H416.119ZM436.867 501L454.599 540H443.107L428.235 505.576H431.355L416.431 540H404.939L422.671 501H436.867ZM483.669 520.916L484.553 518.888C487.569 518.957 490.047 519.425 491.989 520.292C493.965 521.124 495.438 522.303 496.409 523.828C497.379 525.319 497.865 527.052 497.865 529.028C497.865 531.143 497.379 533.032 496.409 534.696C495.438 536.325 493.982 537.625 492.041 538.596C490.134 539.532 487.742 540 484.865 540H456.057L459.073 519.98L456.057 501H483.825C487.43 501 490.238 501.849 492.249 503.548C494.259 505.212 495.265 507.535 495.265 510.516C495.265 512.145 494.883 513.705 494.121 515.196C493.358 516.687 492.127 517.952 490.429 518.992C488.765 519.997 486.511 520.639 483.669 520.916ZM466.717 537.504L462.557 532.46H481.953C483.513 532.46 484.726 532.079 485.593 531.316C486.459 530.553 486.893 529.496 486.893 528.144C486.893 526.792 486.425 525.717 485.489 524.92C484.553 524.088 483.166 523.672 481.329 523.672H465.313V516.288H479.873C481.121 516.288 482.161 515.924 482.993 515.196C483.859 514.433 484.293 513.411 484.293 512.128C484.293 511.088 483.929 510.239 483.201 509.58C482.473 508.887 481.433 508.54 480.081 508.54H462.609L466.717 503.496L469.369 519.98L466.717 537.504ZM496.802 540L512.194 514.832L520.046 521.384L509.022 540H496.802ZM557.33 540L546.358 521.384L554.21 514.832L569.55 540H557.33ZM538.506 530.172L535.542 529.132L557.642 501H569.03L537.154 540H529.25L497.374 501H508.71L530.862 529.132L527.846 530.172V501H538.506V530.172ZM569.521 547.852V530.484H577.945L581.377 530.588H608.417L611.121 530.484H622.457V547.852H612.369V540H579.609V547.852H569.521ZM577.633 501H615.749V536.984H604.933V505.524L609.821 510.412H583.353L587.825 506.824C588.102 508.419 588.258 509.961 588.293 511.452C588.362 512.943 588.397 514.364 588.397 515.716C588.397 519.772 588.033 523.187 587.305 525.96C586.612 528.733 585.554 530.831 584.133 532.252C582.746 533.673 580.996 534.384 578.881 534.384L574.357 530.64C575.744 529.011 576.766 526.792 577.425 523.984C578.084 521.141 578.413 517.64 578.413 513.48C578.413 511.573 578.344 509.58 578.205 507.5C578.066 505.42 577.876 503.253 577.633 501ZM626.586 540V501H637.194V534.332L634.23 533.656L656.33 501H670.422V540H659.762V506.044L662.778 506.72L640.262 540H626.586Z" fill="#040000"/>
          </svg>
          {/* </div>  */}
            <div 
              className="absolute bottom-0 left-[6%] w-[200px] h-[35px] z-2 sm:w-[300px] sm:h-[55px] md:w-[350px] md:h-[60px] lg:h-[40px] lg:w-[230px] xl:h-[50px] xl:w-[290px] 2xl:h-[100px] 2xl:w-[580px] group-hover:cursor-pointer"
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)} 
            >
              <a href="https://t.me/skelya_careers" onClick={handleLinkClick} className="h-full w-full absolute"></a>
            </div>
          </div>
          <div className="h-full lg:w-1/2 ">
            <StepsSection/>
          </div>
        </div>
      </div>
    </section>
  )
}