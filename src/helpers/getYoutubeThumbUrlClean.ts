export default function getYoutubeThumbUrlClean(youtubeUrl: string) {
  return `http://img.youtube.com/vi/${
    youtubeUrl.split("watch?v=")[1]
  }/maxresdefault.jpg`;
}
