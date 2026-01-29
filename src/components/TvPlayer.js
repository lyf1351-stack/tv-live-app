import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Keyboard,
  BackHandler,
  Platform,
} from 'react-native';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('window');

/**
 * 电视直播播放器组件
 * 支持遥控器操作
 */
const TvPlayer = ({channel, onChannelChange, onClose}) => {
  const [currentUrl, setCurrentUrl] = useState(channel?.url || '');
  const [isFocused, setIsFocused] = useState(true);

  // 处理遥控器按键
  const handleKeyDown = useCallback(
    event => {
      const key = event.nativeEvent?.key || event.key;

      switch (key) {
        case 'ArrowUp':
          onChannelChange?.('previous');
          break;
        case 'ArrowDown':
        case 'DPadDown':
          onChannelChange?.('next');
          break;
        case 'DPadUp':
          onChannelChange?.('previous');
          break;
        case 'DPadDown':
          onChannelChange?.('next');
          break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          onChannelChange?.('number', parseInt(key, 10));
          break;
        case 'Enter':
        case 'DPadCenter':
          // 确认键，可以用于显示频道列表
          break;
        case 'Back':
          onClose?.();
          break;
        default:
          console.log('Unhandled key:', key);
      }
    },
    [onChannelChange, onClose],
  );

  // Android后退键处理
  const handleBackPress = useCallback(() => {
    onClose?.();
    return true;
  }, [onClose]);

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    };
  }, [handleBackPress]);

  React.useEffect(() => {
    if (channel?.url) {
      setCurrentUrl(channel.url);
    }
  }, [channel]);

  // WebView injected JavaScript for video handling
  const injectedJavaScript = `
    (function() {
      'use strict';

      // Auto-fullscreen for videos
      function setupVideoFullscreen() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          video.addEventListener('click', function() {
            if (video.requestFullscreen) {
              video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
              video.webkitRequestFullscreen();
            }
          });

          // Auto-play
          video.autoplay = true;
          video.playsInline = true;
        });
      }

      // Run setup
      setupVideoFullscreen();

      // Watch for new videos
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeName === 'VIDEO') {
              setupVideoFullscreen();
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Hide scrollbars
      const style = document.createElement('style');
      style.innerHTML = \`
        *::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
      \`;
      document.head.appendChild(style);

    })();
    true;
  `;

  if (!channel) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>未选择频道</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: currentUrl}}
        style={styles.webview}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
        androidLayerType="hardware"
        onKeyDown={handleKeyDown}
        onShouldStartLoadWithRequest={request => {
          // Only allow navigation within the same domain
          return true;
        }}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('HTTP error: ', nativeEvent);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
    width,
    height,
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default TvPlayer;
