import React from "react";
import Laptop from "../assets/laptop.jpg";
function Analytics() {
  return (
    <div className=" w-full bg-white py-16 px-4">
      {/* w-full → Chiều rộng (width) 100% của phần tử cha.
bg-white → Màu nền trắng.
py-16 → Padding trên và dưới là 16 (tương ứng 4rem).
px-4 → Padding trái và phải là 4 (tương ứng 1rem). */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* max-w-[1240px] → Giới hạn chiều rộng tối đa là 1240px.
mx-auto → Canh giữa phần tử (margin left & right = auto).
grid → Kích hoạt CSS Grid.
md:grid-cols-2 → Khi màn hình ≥ 768px (md - medium), chia thành 2 cột. */}
        <img className=" w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        {/* w-[500px] → Chiều rộng của ảnh là 500px.
mx-auto → Canh giữa ảnh.
my-4 → Margin trên và dưới là 4 (1rem). */}
        <div className="flex flex-col justify-center">
          <p className=" text-[#00df9a] font-bold uppercase">
            {/* text-[#00df9a] → Màu chữ xanh ngọc (hex code).
font-bold → Chữ in đậm.
uppercase → Viết hoa toàn bộ chữ. */}
            data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {/* md:text-4xl → Khi màn hình ≥ 768px, kích thước chữ là 4xl (36px).
sm:text-3xl → Khi màn hình ≥ 640px, kích thước chữ là 3xl (30px).
text-2xl → Mặc định chữ là 2xl (24px).
font-bold → Chữ in đậm.
py-2 → Padding trên dưới là 2 (0.5rem). */}
            Manage Data Analytics Centrally
          </h1>
          <p className="text-white">
            {/* text-white → Màu chữ trắng. */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui
            quis consequuntur ratione architecto! Sequi ad fugiat dolor id ea
            voluptatem optio rerum rem tempora ipsa? Quia quam perspiciatis
            labore?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx auto md:mx-0 py-3">
            {/* bg-black → Nền đen.
text-[#00df9a] → Màu chữ xanh ngọc.
w-[200px] → Chiều rộng nút là 200px.
rounded-md → Bo góc vừa phải (medium).
font-medium → Độ đậm chữ trung bình.
my-6 → Margin trên dưới là 6 (1.5rem).
mx-auto → Căn giữa nút theo chiều ngang.
md:mx-0 → Khi màn hình ≥ 768px, bỏ mx-auto (tức là nút sẽ căn trái).
py-3 → Padding trên dưới là 3 (0.75rem). */}
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
