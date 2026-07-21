"use client";

import { useState } from "react";

const projects = [
  {
    title: "하나증권 자문 일임",
    category: "모바일앱웹 · 웹접근성",
    tags: ["#HTML", "#jQuery", "#JavaScript", "#LESS", "#CSS3", "#FRISM", "#Figma"],
    description: "모바일 앱웹 자문일임 메뉴 화면 퍼블리싱",
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
    tags: ["#HTML", "#jQuery", "#JavaScript", "#SCSS", "#CSS3", "#GitHub", "#Figma"],
    description: "고객몰 · 사업자몰 · 임직원몰 운영 퍼블리싱",
    images: ["/images/lg01.png"],
    link: "https://www.lge.co.kr/",
  },
  {
    title: "전북은행 주담대",
    category: "모바일웹",
    tags: ["#HTML", "#jQuery", "#CSS3", "#Figma", "#SVN", "#JSON"],
    description: "모바일 주담대 메뉴 화면 퍼블리싱",
    images: [],
    link: null,
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
        <li>접속결과 사이트가 전체 변경되거나, 삭제등 없어진 페이지는 포함하지 않았습니다.</li>
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
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            {/* 카드 내용 */}
            <div className="p-5 flex flex-col flex-1">
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
              <div className="w-full h-full py-4">
                <img
                  src={modal.images[modal.index]}
                  alt={`이미지 ${modal.index + 1}`}
                  className="w-full md:w-auto md:h-full md:m-auto"
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