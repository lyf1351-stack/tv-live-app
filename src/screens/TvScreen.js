import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import TvPlayer from '../components/TvPlayer';
import ChannelList from '../components/ChannelList';
import {channelList, getChannelByNumber} from '../data/channels';

const {width, height} = Dimensions.get('window');

/**
 * 主播放页面
 */
const TvScreen = () => {
  const [currentChannel, setCurrentChannel] = useState(channelList[0]);
  const [showChannelList, setShowChannelList] = useState(false);

  const handleChannelChange = (action, value) => {
    const currentIndex = channelList.findIndex(
      ch => ch.id === currentChannel.id,
    );

    let newIndex;
    switch (action) {
      case 'next':
        newIndex = (currentIndex + 1) % channelList.length;
        break;
      case 'previous':
        newIndex = (currentIndex - 1 + channelList.length) % channelList.length;
        break;
      case 'number':
        const channel = getChannelByNumber(value);
        if (channel) {
          setCurrentChannel(channel);
        }
        return;
      default:
        return;
    }

    setCurrentChannel(channelList[newIndex]);
  };

  const handleSelectChannel = channel => {
    setCurrentChannel(channel);
    setShowChannelList(false);
  };

  if (showChannelList) {
    return (
      <ChannelList
        currentChannel={currentChannel}
        onSelectChannel={handleSelectChannel}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TvPlayer
        channel={currentChannel}
        onChannelChange={handleChannelChange}
        onClose={() => setShowChannelList(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default TvScreen;
