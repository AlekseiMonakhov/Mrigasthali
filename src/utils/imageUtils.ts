type WebpackContext = {
  keys(): string[];
  (id: string): string;
  <T>(id: string): T;
};

export function importAll(r: WebpackContext) {
  let images: { [key: string]: string } = {};
  r.keys().forEach((item: string) => { images[item.replace('./', '')] = r(item) });
  return images;
}