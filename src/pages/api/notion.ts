import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try{
    console.log("📣 getDatabase 호출됨"); // 이거 찍히는지 확인!
    const NOTION_API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;
    const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID as string;
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 10 }),
    });

    const data = await response.json();

    // Notion API 응답에 오류 있는지 확인
    if (!response.ok) {
      console.error("❌ Notion API Error:", data);
      return res.status(response.status).json({ error: data });
    }

    console.log("📦 Notion 데이터:", JSON.stringify(data, null, 2));

    return res.status(200).json(data);
  } catch(err){
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "서버 에러 발생" });
  }

}
