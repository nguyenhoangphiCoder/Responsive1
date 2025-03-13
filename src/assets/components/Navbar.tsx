import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* text-white: Màu chữ trắng
          flex justify-between items-center: Sử dụng flexbox để căn giữa theo chiều ngang và chiều dọc
          h-24: Chiều cao của navbar là 24 (tương đương 96px)
          max-w-[1240px]: Giới hạn chiều rộng tối đa là 1240px
          mx-auto: Căn giữa navbar
          px-4: Padding ngang 16px */}

      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      {/* w-full: Chiếm toàn bộ chiều rộng của container
          text-3xl: Kích thước chữ lớn
          font-bold: Chữ đậm
          text-[#00df9a]: Màu chữ xanh ngọc */}

      {/* Menu cho màn hình lớn */}
      <ul className="md:flex hidden">
        {/* md:flex: Hiển thị dạng flex trên màn hình >= 768px (ẩn trên màn hình nhỏ)
            hidden: Ẩn trên màn hình nhỏ */}
        <li className="p-4 cursor-pointer hover:text-gray-400">Home</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">Company</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">Resource</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">About</li>
        <li className="p-4 cursor-pointer hover:text-gray-400">Contact</li>
        {/* p-4: Padding 16px
            cursor-pointer: Con trỏ chuột thành dạng pointer khi hover
            hover:text-gray-400: Đổi màu chữ khi hover */}
      </ul>

      {/* Icon Menu cho mobile */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {/* block: Hiển thị block (có thể click)
            md:hidden: Ẩn trên màn hình lớn
            cursor-pointer: Đổi con trỏ chuột thành pointer */}
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        {/* Nếu nav mở thì hiển thị icon Close, nếu không thì hiển thị icon Menu */}
      </div>

      {/* Menu Mobile */}
      <ul
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 
        ${nav ? "left-0" : "left-[-100%]"}`}
      >
        {/* fixed: Cố định vị trí
            left-0 top-0: Căn trái và trên cùng
            w-[60%]: Chiếm 60% chiều rộng màn hình
            h-full: Chiều cao 100%
            border-r border-gray-900: Có đường viền bên phải màu xám đậm
            bg-[#000300]: Màu nền đen
            ease-in-out duration-500: Hiệu ứng trượt mượt trong 500ms
            ${nav ? "left-0" : "left-[-100%]"}: Nếu nav mở thì hiển thị, nếu không thì ẩn */}

        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        {/* w-full: Chiếm toàn bộ chiều rộng
            text-3xl: Cỡ chữ lớn
            font-bold: Chữ đậm
            text-[#00df9a]: Màu xanh ngọc
            m-4: Margin 16px */}

        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-400">
          Home
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-400">
          Company
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-400">
          Resource
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-gray-400">
          About
        </li>
        <li className="p-4 cursor-pointer hover:text-gray-400">Contact</li>
        {/* border-b border-gray-600: Thêm đường viền phía dưới màu xám nhạt */}
      </ul>
    </div>
  );
}

export default Navbar;
