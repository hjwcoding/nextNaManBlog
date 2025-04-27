export type Post = {
    id: string;
    tags: string[];
    slug: string;
    title: string;
    date: string;
    pinned?: string; // true, false
  };

  export enum Theme {
    dark = 'dark',
    light = 'light',
  }

  export type NotionPageType = {
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