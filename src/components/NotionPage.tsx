import React, { useEffect, useState } from "react";

type NotionPageType = {
  id: string;
  url: string;
  properties: {
    이름: {
      title: { text: { content: string } }[];
    };
    생성일: {
      date: { start: string };
    };
  };
};

const NotionPage: React.FC = () => {
  const [data, setData] = useState<NotionPageType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("📣 fetch from API route 시작");
      console.log(process.env)
      console.log(process.env.NEXT_PUBLIC_DATABASE_ID);
      const res = await fetch("/api/notion");
      console.log(res);
      const json = await res.json();
      console.log("📦 받아온 데이터:", json);
      setData(json.results || []);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Featured</h2>
      <ul>
        {data.map((item) => {
          const title = item.properties.이름.title[0]?.text.content || "제목 없음";
          const date = item.properties.생성일.date.start;
          const url = item.url;

          return (
            <li key={item.id} className="mb-2 flex justify-between items-center">
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {title}
              </a>
              <span className="text-sm text-gray-500">{date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotionPage;
