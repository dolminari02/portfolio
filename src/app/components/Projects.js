"use client";

import { useState } from "react";
import Image from 'next/image'


const projects = [
  {
    title: "하나증권 자문 일임",
    category: "모바일앱웹 · 웹접근성",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#LESS", "#CSS", "#FRISM", "#Figma"],
    description: "모바일 앱웹 자문일임 메뉴 화면 퍼블리싱\n* 하나증권앱 > 메뉴(연금/상품) > 투자자문사",
    images: [
      "/images/hana01.png",
      "/images/hana02.png",
      "/images/hana03.png",
      "/images/hana04.png",
      "/images/hana05.png",
      "/images/hana06.png",
      "/images/hana07.png",
      "/images/hana08.png",
    ],
    link: null,
  },
  {
    title: "엘지전자 통합 사이트 운영",
    category: "PC · 모바일 · 반응형",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#SCSS", "#CSS", "#GitHub", "#Figma"],
    description: "엘지전자 고객몰 · 사업자몰 · 임직원몰 운영 퍼블리싱",
    images: ["/images/lg01.png"],
    link: "https://www.lge.co.kr/",
  },
  {
    title: "KB빅데이터허브",
    category: "PC · 모바일",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "KB부동산 시세조회 정보화면 PC, MOBILE 퍼블리싱",
    images: [
      "/images/kb00.jpeg",
      "/images/kb01.jpeg",
      "/images/kb02.jpeg",
      "/images/kb03.jpeg",
      "/images/kb04.jpeg",
      "/images/kb05.jpeg",
      "/images/kb06.jpeg",
      "/images/kb07.jpeg",
    ],
    link: null,
  },
  {
    title: "KB 국민카드 중고차 거래 플랫폼",
    category: "PC · 모바일",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "KB차차차 중고차 거래 플랫품 PC, 모바일 적응형 퍼블리싱",
    images: ["/images/kbcar.jpeg"],
    link: "https://card.kbcard.com/FNC/DVIEW/HFEMCXPRIFICD0054",
  },
   {
    title: "빗썸",
    category: "PC · 모바일",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "빗썸 코인 거래화면 퍼블리싱",
    images: ["/images/coin.png"],
    link: "https://m.bithumb.com/trade/order/BTC",
  },
  {
    title: "한국투자 true Advisor 서비스",
    category: "PC",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "PC 웹사이트로 서비스 종료로 작업 이미지 대체",
    images: [
      "/images/ad00.jpeg",
      "/images/ad01.jpeg",
      "/images/ad02.jpeg",
      "/images/ad03.jpeg",
      "/images/ad04.jpeg",
      "/images/ad05.jpeg",
      "/images/ad06.jpeg",
      "/images/ad07.jpeg",
      "/images/ad08.jpeg",
      "/images/ad09.jpeg",
      "/images/ad010.jpeg",
      "/images/ad011.jpeg",
      "/images/ad012.jpeg",
      "/images/ad013.jpeg",
      "/images/ad014.jpeg",
    ],
    link: null,
  },
  {
    title: "용인 엘리시안 러닝센터",
    category: "PC · 반응형",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "반응형으로 제작된 PC 웹사이트",
    images: ["/images/ely.png"],
    link: "https://www.elysianlc.com/",
  },
  {
    title: "igaworks.com",
    category: "PC · 반응형",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "반응형으로 제작된 PC 웹사이트",
    images: [
      "/images/ig01.png",
      "/images/ig02.jpg",
      "/images/ig03.jpg",
      "/images/ig04.jpg",
      "/images/ig05.jpg",
    ],
    link: null,
  },
  {
    title: "[한국투자증권] HTS - 이북",
    category: "PC",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS", "#SVN",],
    description: "PC 전용 웹사이트로 제작되어 책넘기는 방식의 모션 적용",
    images: ["/images/ee01.jpeg"],
    link: "http://new.real.download.dws.co.kr/download/ebook/?truefriendstart",
  },
  {
    title: "[한국투자증권] els 체험하기",
    category: "PC",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS", "#SVN",],
    description: "원페이지 PC 웹사이트로 적용된 인터렉션은 직접 작성",
    images: ["/images/els.png"],
    link: "https://www.truefriend.com/main/mall/openels_new/info/Info.jsp",
  },
  {
    title: "라이프밸리",
    category: "PC · 웹접근성",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "에버랜드 라이프밸리 PC 웹사이트 및 키오스크 화면 퍼블리싱",
    images: [
      "/images/life01.png",
      "/images/life02.jpg",
      "/images/life03.png",
      "/images/life04.png",
      "/images/life05.png",
      "/images/life06.png",
    ],
    link: null,
  },
  {
    title: "미스터 라디오",
    category: "타이젠앱 · 모바일",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#CSS"],
    description: "타이젠 서비스 종료로 유트브 시연연상 링크",
    images: ["/images/radio.jpg"],
    link: "https://www.youtube.com/watch?v=InKQnzBUYjQ",
  },



];

export default function Projects() {
  const [modal, setModal] = useState({ open: false, images: [], index: 0 });

  const openModal = (images) => setModal({ open: true, images, index: 0 });
  const closeModal = () => setModal({ open: false, images: [], index: 0 });
  const prevImage = () =>
    setModal((m) => ({ ...m, index: (m.index - 1 + m.images.length) % m.images.length }));
  const nextImage = () =>
    setModal((m) => ({ ...m, index: (m.index + 1) % m.images.length }));

  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>
      <ul className="list-inside list-disc mb-12 max-w-6xl mx-auto">
        <li>내부 프로젝트 및 보안이슈 작업에 대한 포트폴리오는 제외하고 기재하였습니다.</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col"
          >
            {/* 썸네일 */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              {project.images.length > 0 ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            {/* 카드 내용 */}
            <div className="p-5 flex flex-col flex-1 border-t border-gray-300">
              <p className="text-xs text-gray-400 mb-1">{project.category}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 flex-1">{project.description}</p>

              {/* 버튼 */}
              <div className="mt-5">
                {project.link ? (
                  <a target="_blank"
                    href={project.link}
                    className="block w-full text-center text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 rounded-lg py-2 transition-colors"
                  >
                    사이트 보기
                  </a>
                ) : project.images.length > 1 ? (
                  <button
                    onClick={() => openModal(project.images)}
                    className="w-full text-sm font-medium text-gray-900 border border-gray-900 hover:bg-gray-100 rounded-lg py-2 transition-colors"
                  >
                    이미지 보기
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {modal.open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white flex flex-col w-screen h-screen rounded-none overflow-hidden md:w-[90%] md:max-w-[800px] md:h-auto md:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-900 text-2xl z-10 leading-none p-2 bg-white/80 hover:bg-white"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* 이미지 영역 */}
            <div className="relative w-full flex-1 bg-gray-100 md:flex-none md:h-[80vh] overflow-y-auto">
              {/* 스크롤 영역 */}
              <div className="flex w-full h-full py-4">
                <Image
                  src={modal.images[modal.index]}
                  alt={`이미지 ${modal.index + 1}`}
                  width={500}
                  height={300}
                  className="w-full object-contain"
                />
              </div>

              {/* 좌우 화살표 */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center text-xl shadow z-10"
                onClick={prevImage}
              >
                ‹
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center text-xl shadow z-10"
                onClick={nextImage}
              >
                ›
              </button>
            </div>

            {/* 인디케이터 */}
            <div className="flex justify-center gap-1.5 py-3">
              {modal.images.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === modal.index ? "bg-gray-900" : "bg-gray-300"
                  }`}
                  onClick={() => setModal((m) => ({ ...m, index: i }))}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}