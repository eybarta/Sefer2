import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const CommentaryView = ({ commentaries }) => {
  return (
    <ScrollView style={styles.container}>
      {commentaries.map((commentary, index) => (
        <View key={index} style={styles.commentaryContainer}>
          <Text style={styles.source}>{commentary.source}</Text>
          <Text style={styles.content}>{commentary.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  commentaryContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  source: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
});

export default CommentaryView;