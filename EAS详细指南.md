# EAS Build 详细指南

## 🎯 快速开始 - 3-5分钟拿到APK

## 准备工作

### 1. 安装EAS CLI

```bash
# 方式1：使用 npm
npm install -g eas-cli

# 方式2：使用 Homebrew
brew install eas-cli
```

---

## 📱 EAS账号登录

```bash
# 登录
eas login
```

## 配置项目

```bash
# 进入项目目录
cd /Users/lyf/clawd/tv-live-app

# 配置项目（自动）
eas build:configure
```

---

## 构建APK

```bash
# 构建预览版本（快速，3-5分钟）
eas build --platform android --profile preview

# 或构建生产版本
eas build --platform android --profile production
```

---

## 查看构建状态

```bash
# 列出所有构建
eas build:list

# 查看特定构建详情
eas build:view --platform android --build-id <BUILD_ID>
```

## 下载APK

```bash
# 查看下载链接
eas build:view --platform android --build-id <BUILD_ID>
```

---

## 🔧 常见问题

### 1. EAS账号未创建？
```bash
# 检查状态
eas build:configure
```

如果提示"未登录"，先登录：
```bash
eas login
```

### 2. 构建失败？
```bash
# 查看错误信息
eas build --platform android --profile preview
```

### 3. APK未找到？
```bash
# 列出构建列表
eas build:list

# 如果构建成功：
```
{
  "builds": [...]
}
```

找到你的build：
```json
{
  "id": "<BUILD_ID>",
  "status": "succeeded" | "failed" | "cancelled",
  "platform": "android",
  "buildType": "preview" | "production",
  "appName": "tv-live-app",
  "buildUrl": "https://expo.dev/app/...",
  "artifactsUrl": "https://expo.dev/artifacts/...",
  "version": "1.0.0",
  "createdAt": "2026-01-29T...",
  "completedAt": "2026-01-29T..."
}
```

找到下载：
```bash
eas build:view --platform android --build-id <BUILD_ID> --artifact
```

---

## 📱 相关资源

- **Expo官网**：https://expo.dev
- **Expo CLI文档**：https://docs.expo.dev
- **EAS CLI文档**：https://docs.expo.dev/cli

---

## 💡 我可以帮你做什么？

1. **调试构建问题** - 如果构建失败，我帮你分析错误并修复配置
2. **优化构建** - 加快构建速度、减少构建失败率
3. **管理项目** - 帮你做版本管理、发布
4. **解决其他问题** - 随时回答技术问题

---

## 🚀 现在

**请告诉我：**

**我现在就可以开始帮你了吗？**

我准备好了！
