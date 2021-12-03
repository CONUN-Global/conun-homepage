export default function getYoutubeThumbUrl(youtubeUrl: string) {
  return `http://img.youtube.com/vi/${youtubeUrl.split("watch?v=")[1]}/0.jpg`;
}
