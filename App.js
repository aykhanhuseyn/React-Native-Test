import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Vibration
} from 'react-native';
import ImagesExample from './src/components/ImageExample';
import { home as styles } from './src/layout/styles/homeStyle.js';

export default function App() {
  const [categories, setCategories] = useState([
    { key: Math.random().toString(), value: 'mobile' },
    { key: Math.random().toString(), value: 'communal' },
    { key: Math.random().toString(), value: 'land line' },
    { key: Math.random().toString(), value: 'government' },
    { key: Math.random().toString(), value: 'penalty' },
    { key: Math.random().toString(), value: 'mobile' },
    { key: Math.random().toString(), value: 'penalty' },
    { key: Math.random().toString(), value: 'mobile' },
    { key: Math.random().toString(), value: 'communal' },
    { key: Math.random().toString(), value: 'land line' },
    { key: Math.random().toString(), value: 'government' },
    { key: Math.random().toString(), value: 'penalty' }
  ]);
  const removeCategory = key => {
    setCategories(categories.filter(x => key !== x.key));
    Vibration.vibrate();
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 16 }}>Nətərsən</Text>
        <ImagesExample />
      </View>

      <View style={styles.container}>
        <View style={styles.contentTitle}>
          <Text style={styles.contentTitleText}>Categories</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.categoriesHolder}
          directionalLockEnabled={true}
          horizontal={false}
          canCancelContentTouches={true}
          indicatorStyle="black"
          persistentScrollbar={true}
        >
          {categories.map(category => (
            <TouchableOpacity key={category.key}>
              <View style={styles.category}>
                <Text
                  style={styles.categoryText}
                  onPress={removeCategory.bind(this, category.key)}
                >
                  {category.value}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}
