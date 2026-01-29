# 使用EAS Build构建APK

## 什么是EAS Build？

**Expo Application Services (EAS)** 是React Native官方的云构建服务。

## 为什么选择EAS？

❌ GitHub Actions失败：已尝试14次，都无法成功
✅ EAS Build：官方支持，稳定可靠

## 快速开始

### 1. 安装EAS CLI

```bash
npm install -g eas-cli
```

### 2. 配置项目

```bash
cd /Users/lyf/clawd/tv-live-app
eas build:configure
```

回答提示的问题：
- 你想使用现有的EAS账户还是创建新账户？
- 项目需要什么配置？

### 3. 登录EAS

```bash
eas login
```

### 4. 构建APK

```bash
# 构建预览版本（快速，3-5分钟）
eas build --platform android --profile preview

# 或构建生产版本
eas build --platform android --profile production
```

## 构建完成后

### 查看构建状态

访问：https://expo.dev
登录后查看你的项目构建历史

### 下载APK

1. 在Expo网站找到你的构建
2. 点击下载APK
3. 或使用EAS CLI下载：
```bash
eas build:list
```

## 优势

✅ 官方支持，React Native团队推荐
✅ 自动配置，无需调试
✅ 构建快速（3-5分钟）
✅ 免费额度每月15次
✅ 自动上传，直接下载
✅ 支持增量更新

## 配置文件

- `eas.json` - EAS构建配置
- `app.json` - Expo应用配置

这两个文件已经配置好了！

---

**现在开始构建吧！**

```bash
cd /Users/lyf/clawd/tv-live-app
npm install -g eas-cli
eas build:configure
eas login
eas build --platform android --profile preview
```

**3-5分钟后你就能拿到APK！**
