// components/Footer.tsx
import Image from "next/image";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNaver } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="text-gray-800 p-8 text-sm ">
      <div className="max-w-7xl mx-auto w-full">
        {/* 로고 + SNS 아이콘 */}
        <div className="flex flex-col items-start gap-4 mb-6 md:flex-row md:items-center md:justify-between">
          <a href="/">
            <Image
              src="/logo.png"
              alt="STARSHIP 로고"
              width={160}
              height={40}
              priority
            />
          </a>

          <div className="flex gap-4">
            <a href="#">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="#">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="#">
              <SiNaver className="w-6 h-6" />
            </a>
            <a href="#">
              <FaFacebookF className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* 회사 정보 텍스트 - 아래에 위치 */}
        <div className="text-xs text-gray-500 space-y-2 mb-8">
          <p>회사명 : (주)스타쉽엔터테인먼트 | 대표: 이훈희, 이진성</p>
          <p>사업자등록번호 : 114-86-65214</p>
          <p>주소 : 서울시 강남구 삼성로146길 4-5</p>
        </div>

        {/* 하단: 개인정보처리방침 & 카피라이트 */}
        <div className="text-xs flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
          <p className="mb-2 md:mb-0">개인정보처리방침</p>
          <p>© STARSHIP RE-DESIGN CODING. THANK YOU.</p>
        </div>
      </div>
    </footer>
  );
}
