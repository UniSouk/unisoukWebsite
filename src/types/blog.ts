export type RichTextChild = {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  url?: string;
  children?: RichTextChild[];
};

export type CmsImageFormat = {
  url: string;
  width?: number;
  height?: number;
};

export type CmsImage = {
  url: string;
  name?: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
  formats?: Record<string, CmsImageFormat>;
};

export type BlogBodyItem = {
  type: string;
  children?: RichTextChild[];
  format?: string;
  level?: number;
  language?: string;
  image?: CmsImage;
};

export type BlogAuthor = {
  name: string;
  url?: string | null;
};

export type BlogArticle = {
  id: number;
  documentId: string;
  slug?: string | null;
  title: string;
  tag?: string | null;
  description?: string | null;
  publishDate?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
  body?: BlogBodyItem[];
  conclusion?: string | null;
  image?: CmsImage | null;
  author?: BlogAuthor | string | null;
  relatedArticle?: BlogArticle[];
};
