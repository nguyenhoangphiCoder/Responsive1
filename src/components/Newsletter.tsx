import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      {/* w-full → Chiều rộng 100% theo phần tử cha.
py-16 → Padding trên và dưới 16 (4rem).
text-white → Màu chữ trắng.
px-4 → Padding trái và phải 4 (1rem). */}
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        {/* max-w-[1240px] → Giới hạn chiều rộng tối đa là 1240px.
mx-auto → Canh giữa.
grid → Kích hoạt CSS Grid.
lg:grid-cols-3 → Khi màn hình ≥ 1024px, chia thành 3 cột. */}
        <div className="lg:col-span-2 my-4">
          {/* lg:col-span-2 → Khi màn hình lớn (lg), phần này sẽ chiếm 2 cột.
        my-4 → Margin trên và dưới 4 (1rem). */}
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {/* md:text-4xl → Khi ≥ 768px, chữ có cỡ 4xl (36px).
sm:text-3xl → Khi ≥ 640px, chữ có cỡ 3xl (30px).
text-2xl → Mặc định chữ là 2xl (24px).
font-bold → Chữ in đậm.
py-2 → Padding trên dưới 2 (0.5rem). */}
            Want tip & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            {/* flex flex-col → Mặc định các phần tử xếp theo chiều dọc.
sm:flex-row → Khi ≥ 640px, đổi sang xếp ngang.
items-center → Canh giữa các phần tử theo chiều dọc.
justify-between → Canh đều hai phần tử trong hàng ngang.
w-full → Chiếm toàn bộ chiều rộng. */}
            <input
              className="p-3 flex w-full rounded-md text-white border border-cyan-50  "
              type="
              email
            "
              placeholder="Enter your email"
            />
            {/* p-3 → Padding 3 (0.75rem). flex → Không có tác dụng trong input, có
            thể bỏ. w-full → Chiếm toàn bộ chiều rộng. rounded-md → Bo góc vừa
            phải. text-white → Màu chữ trắng. border-cyan-50 →  */}
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify me
            </button>
            {/* bg-[#00df9a] → Nền xanh ngọc.
text-black → Màu chữ đen.
rounded-md → Bo góc vừa phải.
font-medium → Chữ có độ đậm trung bình.
w-[200px] → Chiều rộng 200px.
ml-4 → Margin trái 4 (1rem).
my-6 → Margin trên và dưới 6 (1.5rem).
px-6 py-3 → Padding trái phải 6 (1.5rem), padding trên dưới 3 (0.75rem). */}
          </div>
          <p> We care bout the protection of your data. Read our{""} </p>
          <span className="text-[#00df9a]">Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
