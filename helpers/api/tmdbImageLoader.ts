export const tmdbSmallSizeImageLoader = ({ src }: { src: string }) =>
  `https://www.themoviedb.org/t/p/w440_and_h660_face/${src}`;

export const tmdbBigSizeImageLoader = ({ src }: { src: string }) =>
  `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${src}`;

export const tmdbCastImageLoader = ({ src }: { src: string }) =>
  `https://www.themoviedb.org/t/p/w276_and_h350_face/${src}`;
