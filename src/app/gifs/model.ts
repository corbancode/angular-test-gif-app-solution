export type SearchTerm = string;

export interface IGifImageProperties {
    height: string;
    url: string;
}

export interface IGifImage {
    downsized_large: IGifImageProperties;
    fixed_height_small_still: IGifImageProperties;
    original: IGifImageProperties;
}

export interface IGifUser {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    is_verified: string;
}

export interface IGif {
  id: string;
  type: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: string;
  import_datetime: string;
  trending_datetime: string;
  images: IGifImage;
  user: IGifUser;
}

export interface IGifList {
  items: {};
  loading: boolean;
  error: any;
}

export interface IShowOneGifList {
    item: {};
}

export const fromServer = (record: any): IGif => ({
  id: record.id,
  type: record.type,
  url: record.url,
  slug: record.slug,
  bitly_gif_url: record.bitly_gif_url,
  bitly_url: record.bitly_url,
  embed_url: record.embed_url,
  username: record.username,
  source: record.source,
  title: record.title,
  rating: record.rating,
  content_url: record.content_url,
  source_tld: record.source_tld,
  source_post_url: record.source_post_url,
  is_sticker: record.is_sticker,
  import_datetime: record.import_datetime,
  trending_datetime: record.trending_datetime,
  images: record.images,
  user: record.user,
});
