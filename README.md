# TV Live App - React Native

React Native电视直播应用，支持遥控器操作。

## 功能特点

- 📺 WebView加载电视直播页面
- 🎮 支持遥控器操作
  - 上下键换台
  - 数字键换台（0-9）
  - 确认键
  - 返回键
- 📡 内置频道列表（CCTV、卫视、地方台等）
- 🔄 多直播源支持
- 📱 适配手机、平板、电视、车机

## 项目结构

```
tv-live-app/
├── src/
│   ├── components/
│   │   ├── TvPlayer.js      # 播放器组件
│   │   └── ChannelList.js   # 频道列表组件
│   ├── screens/
│   │   └── TvScreen.js      # 主屏幕
│   ├── data/
│   │   └── channels.js      # 频道列表数据
│   ├── hooks/               # 自定义Hooks
│   └── utils/               # 工具函数
├── android/                 # Android原生代码
├── ios/                     # iOS原生代码
└── package.json
```

## 安装运行

### 前置条件

- Node.js 18+
- React Native CLI
- Android Studio (Android开发)
- Xcode (iOS开发，仅Mac)

### 安装依赖

```bash
npm install
```

### 运行

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

## 遥控器操作

| 按键 | 功能 |
|------|------|
| ↑ / DPadUp | 上一个频道 |
| ↓ / DPadDown | 下一个频道 |
| 0-9 | 数字键换台 |
| Enter / DPadCenter | 确认 |
| Back | 返回/显示频道列表 |

## 频道列表

频道列表位于 `src/data/channels.js`，包含：
- CCTV（1-6, 13）
- 卫视（湖南、浙江、江苏等）
- 地方台
- 综艺频道
- 新闻频道

### 自定义频道列表

编辑 `src/data/channels.js`：

```javascript
export const channelList = [
  {
    id: 1,
    name: '频道名称',
    logo: 'https://example.com/logo.png',
    url: 'https://example.com/live',
    category: '类别',
    number: 1
  },
  // 添加更多频道...
];
```

## WebView配置

播放器使用 `react-native-webview`，主要配置：

```javascript
<WebView
  source={{uri: currentUrl}}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  mediaPlaybackRequiresUserAction={false}
  allowsInlineMediaPlayback={true}
  allowsFullscreenVideo={true}
  androidLayerType="hardware"
/>
```

### 自动全屏视频

播放器会自动检测页面中的视频元素，点击即可全屏播放：

```javascript
// Injected JavaScript
video.addEventListener('click', function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
});
```

## 参考项目

本项目参考并改进自：
- https://github.com/hxh19950701/WebViewTvLive

主要改进：
- 使用React Native替代原生开发
- 更好的遥控器支持
- 模块化的组件设计
- TypeScript支持（可选）

## 待开发功能

- [ ] 播放异常自动换源/刷新
- [ ] 自定义播放列表源
- [ ] 局域网远程设置
- [ ] 手势调节屏幕亮度和音量
- [ ] 适配回看功能
- [ ] 频道收藏功能
- [ ] 播放历史记录

## 注意事项

- 播放内容来自官方网站，版权归原网站所有
- 应用仅用于学习研究用途
- 不提供任何视频资源，不储存、不转发
- 若原站点内容变更或限制访问，本应用不作任何修复和破解

## 许可证

MIT

## 贡献

欢迎提交Issue和Pull Request！
