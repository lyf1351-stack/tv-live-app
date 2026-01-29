/**
 * 频道列表数据
 * 来源：参考 hxh19950701/WebViewTvLive 项目
 */

export const channelList = [
  // CCTV
  {
    id: 1,
    name: 'CCTV-1',
    logo: 'https://example.com/cctv1.png',
    url: 'https://tv.cctv.com/live/cctv1/',
    category: '央视',
    number: 1
  },
  {
    id: 2,
    name: 'CCTV-2',
    logo: 'https://example.com/cctv2.png',
    url: 'https://tv.cctv.com/live/cctv2/',
    category: '央视',
    number: 2
  },
  {
    id: 3,
    name: 'CCTV-3',
    logo: 'https://example.com/cctv3.png',
    url: 'https://tv.cctv.com/live/cctv3/',
    category: '央视',
    number: 3
  },
  {
    id: 4,
    name: 'CCTV-4',
    logo: 'https://example.com/cctv4.png',
    url: 'https://tv.cctv.com/live/cctv4/',
    category: '央视',
    number: 4
  },
  {
    id: 5,
    name: 'CCTV-5',
    logo: 'https://example.com/cctv5.png',
    url: 'https://tv.cctv.com/live/cctv5/',
    category: '央视',
    number: 5
  },
  {
    id: 6,
    name: 'CCTV-6',
    logo: 'https://example.com/cctv6.png',
    url: 'https://tv.cctv.com/live/cctv6/',
    category: '央视',
    number: 6
  },
  {
    id: 7,
    name: 'CCTV-13',
    logo: 'https://example.com/cctv13.png',
    url: 'https://tv.cctv.com/live/cctv13/',
    category: '央视',
    number: 13
  },

  // 卫视
  {
    id: 101,
    name: '湖南卫视',
    logo: 'https://example.com/hunan.png',
    url: 'https://m.mgtv.com/live',
    category: '卫视',
    number: 101
  },
  {
    id: 102,
    name: '浙江卫视',
    logo: 'https://example.com/zhejiang.png',
    url: 'https://tv.cztv.com/live',
    category: '卫视',
    number: 102
  },
  {
    id: 103,
    name: '江苏卫视',
    logo: 'https://example.com/jiangsu.png',
    url: 'https://live.jstv.com',
    category: '卫视',
    number: 103
  },
  {
    id: 104,
    name: '东方卫视',
    logo: 'https://example.com/dongfang.png',
    url: 'https://live.kankanews.com',
    category: '卫视',
    number: 104
  },
  {
    id: 105,
    name: '北京卫视',
    logo: 'https://example.com/beijing.png',
    url: 'https://live.brtv.cn',
    category: '卫视',
    number: 105
  },

  // 地方台
  {
    id: 201,
    name: '北京卫视',
    logo: 'https://example.com/bjtv.png',
    url: 'https://live.brtv.cn',
    category: '地方台',
    number: 201
  },
  {
    id: 202,
    name: '上海电视台',
    logo: 'https://example.com/smg.png',
    url: 'https://live.kankanews.com',
    category: '地方台',
    number: 202
  },
  {
    id: 203,
    name: '广东卫视',
    logo: 'https://example.com/guangdong.png',
    url: 'https://www.gdtv.cn/live',
    category: '地方台',
    number: 203
  },
  {
    id: 204,
    name: '四川卫视',
    logo: 'https://example.com/sichuan.png',
    url: 'https://www.sctv.com/live',
    category: '地方台',
    number: 204
  },
  {
    id: 205,
    name: '深圳卫视',
    logo: 'https://example.com/shenzhen.png',
    url: 'https://www.szmgi.com/live',
    category: '地方台',
    number: 205
  },

  // 综艺
  {
    id: 301,
    name: '芒果TV',
    logo: 'https://example.com/mgtv.png',
    url: 'https://m.mgtv.com/live',
    category: '综艺',
    number: 301
  },
  {
    id: 302,
    name: '优酷直播',
    logo: 'https://example.com/youku.png',
    url: 'https://v.youku.com/live',
    category: '综艺',
    number: 302
  },
  {
    id: 303,
    name: '爱奇艺直播',
    logo: 'https://example.com/iqiyi.png',
    url: 'https://www.iqiyi.com/live',
    category: '综艺',
    number: 303
  },

  // 新闻
  {
    id: 401,
    name: '央视新闻',
    logo: 'https://example.com/cctvnews.png',
    url: 'https://news.cctv.com/live',
    category: '新闻',
    number: 401
  },
  {
    id: 402,
    name: '凤凰资讯',
    logo: 'https://example.com/ifeng.png',
    url: 'https://v.ifeng.com/live',
    category: '新闻',
    number: 402
  },
  {
    id: 403,
    name: '澎湃新闻',
    logo: 'https://example.com/thepaper.png',
    url: 'https://www.thepaper.cn/live',
    category: '新闻',
    number: 403
  },
];

/**
 * 根据类别获取频道
 */
export function getChannelsByCategory(category) {
  if (!category) return channelList;
  return channelList.filter(channel => channel.category === category);
}

/**
 * 根据编号获取频道
 */
export function getChannelByNumber(number) {
  return channelList.find(channel => channel.number === number);
}

/**
 * 获取所有类别
 */
export function getCategories() {
  const categories = new Set(channelList.map(channel => channel.category));
  return Array.from(categories);
}
