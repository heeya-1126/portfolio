// 링크 공유 시 이미지 미리보기(썸네일) 제거용 Worker.
//
// 일반 방문자에게는 정적 자산(portfolio-brand/dist)을 그대로 서빙하므로
// 사이트 화면·디자인은 전혀 바뀌지 않는다.
//
// 카카오톡 등 일부 링크 미리보기 크롤러는 og:image가 없으면 본문의 첫
// <img>를 강제로 긁어 썸네일로 사용한다. 그래서 크롤러 요청에 한해서만
// HTML의 <img>와 og:image/twitter:image 메타를 제거해, 가져갈 이미지가
// 없도록 만든다. 텍스트(제목·설명) 카드만 노출된다.

const CRAWLER_UA =
  /kakaotalk-scrap|facebookexternalhit|facebot|twitterbot|slackbot|slack-imgproxy|discordbot|whatsapp|telegrambot|line-poker|linespider|skypeuripreview|linkedinbot|pinterest|redditbot|embedly|nuzzel|vkshare|googlebot|bingbot|naver|yeti|daum/i;

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    const ua = request.headers.get('user-agent') || '';
    if (!CRAWLER_UA.test(ua)) return response;

    const contentType = response.headers.get('content-type') || '';
    if (response.status !== 200 || !contentType.includes('text/html')) {
      return response;
    }

    return new HTMLRewriter()
      .on('img', { element(el) { el.remove(); } })
      .on('meta[property="og:image"]', { element(el) { el.remove(); } })
      .on('meta[property="og:image:secure_url"]', { element(el) { el.remove(); } })
      .on('meta[property="og:image:url"]', { element(el) { el.remove(); } })
      .on('meta[name="twitter:image"]', { element(el) { el.remove(); } })
      .transform(response);
  },
};
