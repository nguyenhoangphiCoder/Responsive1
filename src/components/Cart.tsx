import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cart() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      {/* w-full: Chiều rộng 100% 
          py-[10rem]: Padding trên và dưới là 10rem (160px)
          px-4: Padding trái phải là 1rem (16px)
          bg-white: Nền trắng */}

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* max-w-[1240px]: Giới hạn chiều rộng tối đa là 1240px
            mx-auto: Canh giữa
            grid: Sử dụng CSS Grid
            md:grid-cols-3: Khi màn hình >= 768px, chia thành 3 cột
            gap-8: Khoảng cách giữa các cột là 8 (32px) */}

        {/* Card 1 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* w-full: Chiếm toàn bộ chiều rộng cột
              shadow-xl: Đổ bóng lớn
              flex flex-col: Sử dụng flexbox, sắp xếp theo chiều dọc
              p-4: Padding 1rem (16px)
              my-4: Margin trên dưới là 4 (16px)
              rounded-lg: Bo góc lớn
              hover:scale-105: Khi hover, phóng to 5%
              duration-300: Hiệu ứng kéo dài 300ms */}

          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          {/* w-20: Chiều rộng ảnh 80px
              mx-auto: Canh giữa ảnh
              mt-[-3rem]: Dịch lên trên 3rem (-48px)
              bg-white: Nền trắng */}

          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          {/* text-2xl: Cỡ chữ 24px
              font-bold: Chữ đậm
              text-center: Canh giữa văn bản
              py-8: Padding trên dưới 2rem (32px) */}

          <p className="text-center text-4xl font-bold">$14.99</p>
          {/* text-center: Canh giữa
              text-4xl: Cỡ chữ lớn (36px)
              font-bold: Chữ đậm */}

          <div className="text-center font-medium text-white">
            {/* text-center: Canh giữa nội dung
                font-medium: Độ đậm trung bình
                text-white: Màu chữ trắng */}

            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
            {/* py-2: Padding trên dưới 8px
                border-b: Đường kẻ dưới
                mx-8: Margin trái phải 32px
                mt-8: Margin trên 32px */}
          </div>

          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start trial
          </button>
          {/* bg-[#00df9a]: Nền màu xanh ngọc
              w-[200px]: Chiều rộng 200px
              rounded-md: Bo góc vừa phải
              font-medium: Độ đậm trung bình
              my-6: Margin trên dưới 24px
              mx-auto: Canh giữa
              px-6: Padding trái phải 24px
              py-3: Padding trên dưới 12px */}
        </div>

        {/* Card 2 */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          {/* bg-gray-100: Nền xám nhạt
              md:my-0: Khi màn hình >= 768px, bỏ margin trên dưới
              my-8: Khi màn hình nhỏ hơn, margin trên dưới 32px */}

          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          {/* bg-transparent: Nền trong suốt */}

          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>

          <div className="text-center font-medium text-white">
            <p className="py-2 border-b mx-8 mt-8">1TB Storage</p>
            <p className="py-2 border-b mx-8">5 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 10GB</p>
          </div>

          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
          {/* bg-black: Nền đen
              text-[#00df9a]: Chữ màu xanh ngọc */}
        </div>

        {/* Card 3 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />

          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$199</p>

          <div className="text-center font-medium text-white">
            <p className="py-2 border-b mx-8 mt-8">2TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 20GB</p>
          </div>

          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
