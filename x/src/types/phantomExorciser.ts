export type AllowedTags = {
  [key: string]: {
    [key: string]: (attribute: string | null) => string | null;
  };
};

export type AllowedCSS = string[];
