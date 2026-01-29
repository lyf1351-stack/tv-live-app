import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {getChannelsByCategory} from '../data/channels';

const {width, height} = Dimensions.get('window');

/**
 * 频道列表组件
 * 支持遥控器导航
 */
const ChannelList = ({currentChannel, onSelectChannel}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const categories = ['全部', '央视', '卫视', '地方台', '综艺', '新闻'];
  const channels = getChannelsByCategory(
    selectedCategory === '全部' ? null : selectedCategory,
  );

  const currentChannelIndex = channels.findIndex(
    ch => ch.id === currentChannel?.id,
  );

  const renderItem = ({item, index}) => {
    const isSelected = item.id === currentChannel?.id;
    const isFocused = index === focusedIndex;

    return (
      <TouchableOpacity
        style={[
          styles.channelItem,
          isSelected && styles.selectedItem,
          isFocused && styles.focusedItem,
        ]}
        onPress={() => onSelectChannel(item)}
        onFocus={() => setFocusedIndex(index)}>
        <View style={styles.channelInfo}>
          <Text
            style={[
              styles.channelNumber,
              isSelected && styles.selectedText,
              isFocused && styles.focusedText,
            ]}>
            {item.number}
          </Text>
          <View style={styles.channelDetails}>
            <Text
              style={[
                styles.channelName,
                isSelected && styles.selectedText,
                isFocused && styles.focusedText,
              ]}>
              {item.name}
            </Text>
            <Text style={styles.channelCategory}>{item.category}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategory = category => {
    const isSelected = category === selectedCategory;
    return (
      <TouchableOpacity
        style={[styles.categoryItem, isSelected && styles.selectedCategory]}
        onPress={() => setSelectedCategory(category)}>
        <Text
          style={[
            styles.categoryText,
            isSelected && styles.selectedCategoryText,
          ]}>
          {category}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View style={styles.categoryContainer}>
        {categories.map(renderCategory)}
      </View>

      {/* Channel List */}
      <FlatList
        data={channels}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.channelList}
        initialScrollIndex={Math.max(0, currentChannelIndex)}
        getItemLayout={(data, index) => ({
          length: 70,
          offset: 70 * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#2d2d2d',
    flexWrap: 'wrap',
  },
  categoryItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 20,
    backgroundColor: '#3d3d3d',
  },
  selectedCategory: {
    backgroundColor: '#ff6b6b',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  channelList: {
    flex: 1,
  },
  channelItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2d2d2d',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#ff6b6b33',
  },
  focusedItem: {
    backgroundColor: '#ff6b6b66',
  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  channelNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    width: 50,
  },
  selectedText: {
    color: '#ff6b6b',
  },
  focusedText: {
    color: '#ff6b6b',
  },
  channelDetails: {
    flex: 1,
  },
  channelName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  channelCategory: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});

export default ChannelList;
