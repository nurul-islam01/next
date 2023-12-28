import tikTokScraper from 'tiktok-scraper';

export default async (req, res) => {
  const { url } = req.query;
  const videoData = await tikTokScraper.getVideoMeta(url);
  const videoUrl = videoData.videoUrl;
  // handle the download
};
