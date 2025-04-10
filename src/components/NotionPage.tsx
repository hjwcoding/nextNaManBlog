import React, { useEffect, useState } from "react";

type NotionPageType = {
  id: string;
  properties: {
    Title: {
      title: { text: { content: string } }[];
    };
    Date: {
      date: { start: string };
    };
    Link: {
      rich_text: {plain_text: string}[];
    };
  };
};

const NotionPage: React.FC = () => {
  const [data, setData] = useState<NotionPageType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("📣 fetch from API route 시작");
      const res = await fetch("/api/notion");
      const json = await res.json();
      console.log("📦 받아온 데이터:", json);
      setData(json.results || []);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Featured</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">데이터가 없습니다.</p>
      ) : (
        <ul>
          {data.map((item) => {
            const title = item.properties?.Title?.title?.[0]?.text?.content || "제목 없음";
            const date = item.properties?.Date?.date?.start || "";
            const url = item.properties?.Link?.rich_text[0]?.plain_text || "";

            return (
              <li
                key={item.id}
                className="mb-2 flex justify-between items-center border-b border-gray-100 pb-1"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {title}
                </a>
                <span className="text-sm text-gray-500">{date}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NotionPage;
