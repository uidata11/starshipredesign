import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNaver } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="text-gray-800 p-8 text-sm">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4 mb-6 md:flex-row md:items-center md:justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="STARSHIP 로고"
              width={160}
              height={40}
              priority
              placeholder="empty" // 👈 blur 이미지 없으면 empty라도 명시
            />
          </Link>

          <div className="flex gap-4">
            {/* 실제 SNS URL을 연결하거나 button 으로 변경 */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://naver.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Naver"
            >
              <SiNaver className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="text-xs text-gray-500 space-y-2 mb-8">
          <p>회사명 : (주)스타쉽엔터테인먼트</p>
          <p>사업자등록번호 : 114-86-xxxxxxx</p>
          <address className="not-italic">주소 : 서울시 강남구 xxxxx</address>
        </div>

        <div className="text-xs flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
          <p className="mb-2 md:mb-0">개인정보처리방침</p>
          <p>© STARSHIP RE-DESIGN CODING. THANK YOU.</p>
        </div>
      </div>
    </footer>
  );
}
