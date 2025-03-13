import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      {/* max-w-[1240px]: Giới hạn chiều rộng tối đa là 1240px
          mx-auto: Căn giữa
          py-16: Padding trên dưới là 4rem (64px)
          px-4: Padding trái phải là 1rem (16px)
          grid: Sử dụng CSS Grid
          lg:grid-cols-3: Khi màn hình >= 1024px, chia thành 3 cột
          gap-8: Khoảng cách giữa các cột là 8 (32px)
          text-gray-300: Màu chữ xám nhạt */}

      {/* Phần logo và mô tả */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        {/* w-full: Chiếm toàn bộ chiều rộng cột
            text-3xl: Cỡ chữ lớn (30px)
            font-bold: Chữ đậm
            text-[#00df9a]: Màu chữ xanh ngọc */}

        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        {/* py-4: Padding trên dưới 16px */}

        {/* Các icon mạng xã hội */}
        <div className="flex justify-between md:w-[75%] my-6">
          {/* flex: Sử dụng flexbox
              justify-between: Cách đều các icon
              md:w-[75%]: Khi màn hình >= 768px, chiều rộng là 75%
              my-6: Margin trên dưới 24px */}
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
          {/* Mỗi icon có kích thước 30px */}
        </div>
      </div>

      {/* Danh mục liên kết */}
      <div className="lg:col-span-2 flex justify-between mt-6">
        {/* lg:col-span-2: Ở màn hình lớn (>=1024px), phần này chiếm 2 cột
            flex: Sử dụng flexbox để các danh mục nằm ngang
            justify-between: Cách đều các danh mục
            mt-6: Margin trên 24px */}

        {/* Cột Solutions */}
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          {/* font-medium: Độ đậm trung bình
              text-gray-400: Màu chữ xám đậm hơn */}
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
            {/* py-2: Padding trên dưới 8px
                text-sm: Cỡ chữ nhỏ hơn */}
          </ul>
        </div>

        {/* Cột Support */}
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>

        {/* Cột Company */}
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>

        {/* Cột Legal */}
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
