export default function Contact() {
  return (
    <footer className="py-10 px-4 text-center">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm  mb-4">
        <span>이건우</span>
        <span className="text-gray-600">|</span>
        <a href="tel:01037197304" className="hover:text-white transition-colors">
          TEL. 010-3719-7304
        </a>
        <span className="text-gray-600">|</span>
        <a href="mailto:sorroh@naver.com" className="hover:text-white transition-colors">
          E-MAIL. sorroh@naver.com
        </a>
      </div>
      <p className="text-xs text-gray-500">
        Copyright© 2026 LGW All Rights Reserved
      </p>
    </footer>
  );
}