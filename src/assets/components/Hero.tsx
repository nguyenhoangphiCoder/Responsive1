function Hero() {
  return (
    <div className="text-white">
      {/* text-white: Màu chữ trắng */}

      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {/* max-w-[800px]: Giới hạn chiều rộng tối đa là 800px
            mt-[-96px]: Dịch phần tử lên trên 96px (giảm khoảng trắng thừa)
            w-full: Chiếm toàn bộ chiều rộng
            h-screen: Chiều cao bằng 100% màn hình
            mx-auto: Căn giữa theo chiều ngang
            text-center: Căn giữa chữ
            flex flex-col: Sử dụng flexbox, sắp xếp các phần tử theo cột
            justify-center: Căn giữa nội dung theo chiều dọc */}

        <p className="uppercase text-[#00df9a] font-bold p-2">
          grow with data analytics
        </p>
        {/* uppercase: Chữ in hoa
            text-[#00df9a]: Màu chữ xanh ngọc
            font-bold: Chữ đậm
            p-2: Padding 8px */}

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        {/* md:text-7xl: Cỡ chữ 7xl (tương đương 4.5rem) trên màn hình >= 768px
            sm:text-6xl: Cỡ chữ 6xl (tương đương 3.75rem) trên màn hình >= 640px
            text-4xl: Cỡ chữ mặc định là 4xl (2.25rem)
            font-bold: Chữ đậm
            md:py-6: Padding trên dưới 24px trên màn hình lớn */}

        <div className="flex justify-center items-center">
          {/* flex: Sử dụng flexbox
              justify-center: Căn giữa theo chiều ngang
              items-center: Căn giữa theo chiều dọc */}
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          {/* md:text-5xl: Cỡ chữ lớn hơn trên màn hình >= 768px
              sm:text-4xl: Cỡ chữ trung bình trên màn hình >= 640px
              text-xl: Cỡ chữ mặc định là xl (1.25rem)
              font-bold: Chữ đậm
              py-4: Padding trên dưới 16px */}
        </div>

        <p className="md:text-2xl text-xl font-bold text-gray-50">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        {/* md:text-2xl: Cỡ chữ 2xl (1.5rem) trên màn hình lớn
            text-xl: Cỡ chữ mặc định là xl (1.25rem)
            font-bold: Chữ đậm
            text-gray-50: Màu chữ xám nhạt */}

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00bf8f] transition duration-300">
          Get started
        </button>
        {/* bg-[#00df9a]: Màu nền xanh ngọc
            w-[200px]: Chiều rộng 200px
            rounded-md: Bo góc trung bình
            font-medium: Độ đậm trung bình
            my-6: Margin trên dưới 24px
            mx-auto: Căn giữa theo chiều ngang
            py-3: Padding trên dưới 12px
            text-black: Chữ màu đen
            hover:bg-[#00bf8f]: Khi hover đổi màu nền sang xanh đậm hơn
            transition duration-300: Hiệu ứng chuyển đổi mượt trong 300ms */}
      </div>
    </div>
  );
}

export default Hero;
