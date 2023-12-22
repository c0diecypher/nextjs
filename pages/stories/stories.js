
const Stories = () => {
    const handleZipperApp = () => {
        // Вызываем метод Telegram.WebApp.openLink с опциями
        window.Telegram.WebApp.openLink('https://teletype.in/@zipperstore/zipperapp', { try_instant_view: true });
      };
    
      const handleDelivery = () => {
        window.Telegram.WebApp.openLink('https://teletype.in/@zipperstore/delivery', { try_instant_view: true });
      };
    
      const handleSize = () => {
        window.Telegram.WebApp.openLink('https://teletype.in/@zipperstore/size', { try_instant_view: true }); 
      }
    return (
        <>
        <div className="Stories-box">
      
      <button className="Stories"  onClick={handleZipperApp}>
        <span className="Stories-item">
          
        </span>
        <div
          className="Story-item-content"
        >
          <div className="story-bg" style={{
          background:
            "linear-gradient(rgb(83,185, 242) 5%, rgb(13,154,253) 100%)", opacity: '1'
        }}></div>
          <div className="Story-item-image">
          <div className="Story-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="314" height="251" viewBox="0 0 314 251" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M34.25 34.0459C3.311 64.7629 0 68.3619 0 71.2859C0 74.1889 2.748 77.2589 26.75 101.159C51.595 125.9 56.173 130.008 58.899 130.008C59.466 130.008 61.521 128.611 63.465 126.904L67 123.801L67.032 185.654C67.057 235.502 67.321 247.848 68.392 249.258C69.639 250.901 75.047 251.008 156.95 251.008H244.179L246.056 248.758C247.846 246.612 247.935 243.685 247.967 185.584L248 124.659L250.25 126.76C251.488 127.915 253.774 129.176 255.33 129.562C257.994 130.224 259.801 128.628 286.08 102.41C311.466 77.0839 314 74.2539 314 71.2279C314 68.1839 311.083 65.0059 279.785 33.9539L245.569 0.00789157H217.32C185.74 0.00789157 187.995 -0.538101 186.55 7.4529C185.573 12.8509 181.754 20.0999 177.806 24.0479C170.838 31.0159 158.373 33.7119 147.601 30.5799C137.855 27.7469 129.476 18.1139 127.548 7.5259C126.08 -0.532103 128.293 0.00588986 96.715 0.0248899L68.5 0.0418882L34.25 34.0459Z" style={{fill: 'white'}}/>
        </svg>
        </div>
          </div>
          <div className="Story-item-title" style={{ color: "var(--tg-text)" }}>
            Что умеет Zipper Store?
          </div>
        </div>
      </button>
    
    <button className="Stories" >
      <span className="Stories-item">
      </span>
      <div
        className="Story-item-content"
        style={{
          background:
            "linear-gradient(rgb(250, 218, 92) 0%, rgb(250, 218, 92) 100%)"
        }}
      >
        <div className="Story-item-image">
          <img
            className="Story-item-image-image"
            draggable="false"
            width="30"
            height="30"
            decoding="async"
            src="../images/svg/gift.png"
          />
        </div>
        <div className="Story-item-title">Зови друзей! +500₽ </div>
      </div>
    </button>

    <button className="Stories" onClick={handleDelivery}>
      <span className="Stories-item">
      </span>
      <div
        className="Story-item-content"
        style={{
          background:
            "linear-gradient(rgb(250, 92, 124) 0%, rgb(248,18,64) 100%)"
        }}
      >
        <div className="Story-item-image">
          <img
            className="Story-item-image-images"
            draggable="false"
            decoding="async"
            src="/img/svg/rocket.png"
          />
        </div>
        <div className="Story-item-title" style={{ color: "#fef0f3" }}>
          Доставка{""}
        </div>
      </div>
    </button>

    <button className="Stories" onClick={handleSize}>
      <span className="Stories-item">
      </span>
      <div
        className="Story-item-content"
      >
        <div className="story-bg"></div>
        <div className="Story-item-image">
          
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="384" viewBox="0 0 512 384">
          <path fillRule="evenodd" clipRule="evenodd" d="M178.883 0.470499C143.575 3.8025 123.48 7.7935 98.699 16.3945C84.151 21.4445 58.1 34.6105 46.896 42.5755C28.261 55.8255 12.81 73.8255 5.98497 90.2385C-0.236032 105.196 -0.222032 104.949 0.117968 195.32C0.463968 287.109 0.00196886 281.062 7.95197 297.757C25.738 335.104 73.277 364.799 135.335 377.323C166.316 383.575 157.946 383.32 333.383 383.32C487.509 383.32 493.511 383.252 496.883 381.458C501.769 378.859 506.672 374.035 509.221 369.32C511.371 365.341 511.383 364.984 511.383 302.82C511.383 242.733 511.307 240.167 509.421 236.363C508.342 234.187 505.738 230.736 503.634 228.695C496.641 221.908 495.9 221.82 445.705 221.82H400.883V167.408C400.883 108.551 400.587 104.435 395.442 91.7735C375.797 43.4265 310.015 8.0555 226.383 0.8715C215.353 -0.0755 187.193 -0.313501 178.883 0.470499ZM239.383 19.2595C305.329 27.7405 357.454 54.7625 375.91 90.0335C383.634 104.795 385.587 118.836 381.915 133.197C375.557 158.053 354.987 179.363 321.513 195.767C299.497 206.556 279.915 212.674 252.591 217.302C202.984 225.704 147.201 221.425 102.304 205.775C90.311 201.594 69.194 191.19 59.425 184.649C49.454 177.973 34.905 164.216 29.684 156.527C14.874 134.718 13.15 113.724 24.33 91.3205C43.43 53.0455 102.029 24.3055 174.081 17.8735C188.227 16.6105 224.83 17.3875 239.383 19.2595ZM171.383 43.9265C158.563 45.4675 139.923 49.5175 128.636 53.2145C87.703 66.6235 63.926 92.0305 68.857 117.092C74.979 148.211 116.793 171.865 176.313 177.88C191.214 179.385 223.429 178.58 237.883 176.341C257.858 173.246 274.222 168.477 289.703 161.238C302.602 155.207 311.655 148.944 319.107 140.896C330.574 128.51 334.788 115.375 331.531 102.175C329.243 92.9065 324.805 85.9405 315.786 77.4615C299.307 61.9715 275.496 51.8115 241.383 45.7165C231.7 43.9865 224.557 43.5135 204.383 43.2695C190.633 43.1025 175.783 43.3985 171.383 43.9265ZM225.383 60.8155C244.786 62.9265 261.99 66.9555 276.552 72.7985C289.672 78.0635 296.33 82.2835 305.044 90.8605C311.603 97.3155 312.947 99.2335 314.389 104.194C316.283 110.708 315.854 114.996 312.689 121.201C310.141 126.197 301.939 134.938 297.615 137.266C294.385 139.006 294.224 138.989 287.857 136.292C270.691 129.023 249.219 123.256 229.883 120.72C217.641 119.115 183.125 119.115 170.883 120.72C151.571 123.252 130.072 129.025 112.964 136.27C105.404 139.472 104.759 139.301 96.798 132.025C81.972 118.475 81.714 104.023 96.052 90.1695C111.096 75.6335 137.432 65.4865 170.883 61.3395C183.63 59.7585 213.065 59.4765 225.383 60.8155ZM227.909 137.869C247.107 140.246 276.925 148.099 273.669 149.921C270.557 151.662 247.079 157.667 236.261 159.488C220.903 162.074 178.892 162.064 164.383 159.47C152.682 157.378 136.941 153.408 130.192 150.846L125.441 149.042L135.412 145.999C146.488 142.618 161.967 139.185 171.883 137.91C181.432 136.681 218.102 136.655 227.909 137.869ZM23.816 175.6C30.353 183.322 45.571 195.686 57.137 202.672C85.963 220.084 119.461 230.844 163.883 236.961C169.791 237.774 206.007 238.251 282.633 238.527L392.883 238.926V249.922C392.883 257.738 393.317 261.758 394.382 263.818C396.761 268.419 402.009 271.784 408.442 272.831C418.07 274.398 423.908 282.182 425.999 296.245C427.834 308.576 424.58 320.759 417.427 328.344C414.329 331.627 413.244 332.081 405.524 333.328C402.986 333.738 400.247 335.273 397.524 337.812L393.383 341.673L392.883 353.996L392.383 366.32L375.133 366.594L357.883 366.867V348.426C357.883 338.283 357.603 329.256 357.262 328.366C356.92 327.475 355.312 326.059 353.689 325.22C349.53 323.069 345.208 324.239 342.814 328.165C341.107 330.965 340.89 333.319 340.887 349.07L340.883 366.82H323.883H306.883V356.876C306.883 347.855 306.663 346.676 304.513 344.176C301.191 340.314 295.575 340.314 292.253 344.176C290.103 346.676 289.883 347.855 289.883 356.876V366.82H272.883H255.883V348.376C255.883 330.413 255.821 329.86 253.513 327.176C251.707 325.077 250.246 324.421 247.383 324.421C244.52 324.421 243.059 325.077 241.253 327.176C238.945 329.86 238.883 330.413 238.883 348.376V366.82H221.974H205.065L204.724 356.345C204.423 347.102 204.121 345.61 202.155 343.646C199.107 340.601 193.738 340.668 190.41 343.794C188.04 346.021 187.883 346.779 187.883 355.995V365.82L180.633 365.734C176.645 365.687 169.108 365.125 163.883 364.484L154.383 363.32L153.883 342.148C153.394 321.443 153.33 320.919 150.959 318.398C147.951 315.2 143.207 314.991 139.518 317.893L136.883 319.965V339.893C136.883 355.171 136.591 359.819 135.633 359.814C134.946 359.81 129.26 358.46 122.999 356.814C116.737 355.167 111.45 353.82 111.249 353.82C111.048 353.82 110.883 348.445 110.883 341.876C110.883 330.913 110.698 329.721 108.633 327.375C107.396 325.968 104.939 324.541 103.173 324.202C100.489 323.687 99.465 324.084 96.923 326.626C94.005 329.544 93.883 330.014 93.883 338.31C93.883 348.555 94.987 348.397 78.883 340.482L68.383 335.32L67.883 310.48C67.387 285.86 67.362 285.623 65.022 283.73C62.67 281.827 58.495 281.265 55.437 282.439C52.074 283.729 51.388 287.159 50.883 305.193L50.383 323.064L43.213 316.423C34.587 308.432 27.005 298.441 22.884 289.637C17.182 277.451 16.919 274.326 16.9 218.37C16.891 190.347 17.247 167.848 17.691 168.37C18.136 168.892 20.892 172.146 23.816 175.6ZM383.883 194.82V221.82L344.133 221.784L304.383 221.746L313.339 218.241C335.982 209.379 354.679 197.079 371.883 179.725C378.208 173.345 383.496 168.055 383.633 167.972C383.77 167.888 383.883 179.97 383.883 194.82ZM491.96 241.743L494.883 244.667V302.82V360.974L491.96 363.897L489.037 366.82H449.46H409.883V358.431V350.043L413.586 349.349C425.586 347.098 435.403 336.865 440.957 320.82C442.751 315.639 443.213 312.088 443.233 303.32C443.272 286.309 439.849 275.974 431.065 266.583C425.871 261.031 420.7 258.026 414.539 256.978L410.383 256.271L410.094 247.546L409.805 238.82H449.421H489.037L491.96 241.743ZM463.338 284.275C460.935 286.677 460.883 287.069 460.883 302.82C460.883 318.571 460.935 318.964 463.338 321.366C467.464 325.493 473.906 324.419 476.72 319.137C478.511 315.773 478.274 289.477 476.42 285.892C473.908 281.035 467.384 280.228 463.338 284.275Z" style={{fill: 'var(--tg-text)'}}/>
        </svg>
        </div>
        <div className="Story-item-title" style={{ color: "var(--tg-text)" }}>
          Как выбрать размер правильно
        </div>
      </div>
    </button>
  </div>
  </>
    );
};

export default Stories;