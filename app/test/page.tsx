'use client'
import Link from "next/link";
import { useState } from "react";

export default function TestPage() {
  const [apiData, setApiData] = useState<string>("");
  const [apiUrl, setApiUrl] = useState<string>("");

  const handleTestClick = async () => {
    try {
      const url = apiUrl.trim() || '/api/users';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setApiData(data);
      console.log('API 호출 성공:', data);
    } catch (error) {
      console.error('API 호출 실패:', error);
      setApiData("에러가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <input
        type="text"
        value={apiUrl}
        onChange={(e) => setApiUrl(e.target.value)}
        placeholder="/api/users"
        className="w-64 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleTestClick}
        className="text-2xl font-bold hover:text-blue-500 cursor-pointer"
      >
        test
      </button>
      {apiData && (
        <div className="p-4 border rounded-lg max-w-md">
          <h3 className="text-lg font-semibold mb-2">API 응답:</h3>
          <p className="whitespace-pre-wrap">{apiData}</p>
        </div>
      )}
      <Link
        href="/"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        Go back home
      </Link>
    </div>
  );
}