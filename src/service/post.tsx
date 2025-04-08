export async function getDatabase() {
    const NOTION_API_KEY = process.env.REACT_APP_NOTION_API_KEY as string;
    const DATABASE_ID = process.env.REACT_APP_DATABASE_ID as string;
    console.log("📣 getDatabase 호출됨"); // 이거 찍히는지 확인!
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    console.log("📦 Notion 데이터:", JSON.stringify(data, null, 2));
    return data; // NotionPage[] 형태
  }
