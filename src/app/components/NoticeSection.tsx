"use client";

import Link from "next/link";

const dummyNotices = [
  {
    title: "[영화] 채수빈 <전지적 독자 시점> 개봉 안내",
    date: "2025.07.23",
  },
  {
    title: "[방송] 김태리, tvN 새 드라마 <시간의 문> 캐스팅 확정",
    date: "2025.07.21",
  },
  {
    title: "[음악] BTS 정국, 두 번째 솔로 앨범 <Dreamscape> 발표",
    date: "2025.07.18",
  },
  {
    title: "[패션] 블랙핑크 제니, 샤넬과 글로벌 앰버서더 재계약",
    date: "2025.07.15",
  },
  {
    title: "[콘서트] 아이유, 아시아 투어 일정 발표…10개국 순회",
    date: "2025.07.12",
  },
  {
    title: "[예능] 유재석, 새로운 넷플릭스 예능 <빅 브레인> 출연",
    date: "2025.07.10",
  },
  {
    title: "[영화] 박서준, 마블 <캡틴 마블3> 출연 루머 확산",
    date: "2025.07.08",
  },
  {
    title: "[방송] 이영지, tvN <놀라운 토요일> 고정 출연 확정",
    date: "2025.07.05",
  },
];

export default function NoticeSection() {
  return (
    <>
      <div className="flex items-center mt-20 mb-10 sm:px-10 px-0">
        <p className="text-lg px-4 sm:px-0 sm:text-4xl text-zinc-700 font-semibold">
          NOTICE
        </p>
        <span className="border border-zinc-700 w-full sm:mx-10" />
      </div>

      <section className="py-10 max-w-7xl mx-auto px-4">
        <ul className="space-y-2">
          {dummyNotices.map((notice, index) => (
            <li
              key={index}
              className="flex justify-between border-amber-300 py-2 text-sm sm:text-base"
            >
              <span>{notice.title}</span>
              <span className="text-gray-500">{notice.date}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end mt-6">
          <Link
            href="/notice"
            className="text-sm text-blue-600 hover:underline"
          >
            더보기
          </Link>
        </div>
      </section>
    </>
  );
}
