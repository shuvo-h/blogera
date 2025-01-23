import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation';
import { FAMILIES } from '../../theme/fonts';


type TBlogsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BlogDetail'>;
type TBlog = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string }; // We'll pass the full content here
};

export default function Blogs() {
  const navigation = useNavigation<TBlogsScreenNavigationProp>();
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);


  const fetchBlogs = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://buddhist.im/wp-json/wp/v2/posts?per_page=10&page=${page}&_embed`);
      // const response = await fetch(`https://eventsliker.com/wp-json/wp/v2/posts?per_page=10&page=${page}&_embed`);
      const data: TBlog[] = await response.json();
      if (data.length > 0) {
        // console.log(data[0]);

        setBlogs(prevBlogs => [...prevBlogs, ...data]);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs(page);
  }, [page, fetchBlogs]);

  // Handle when user scrolls to the bottom (trigger more data load)
  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };


  const renderBlogItem = ({ item }: { item: TBlog }) => {
    const imgUrl = (item as any)._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.thumbnail?.source_url;


    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('BlogDetail', { blog: item })} // Navigate to BlogDetail with the full blog data
        
      >
        <View style={styles.card}>
          <Text style={styles.title}>{item.title.rendered}</Text>
          <View style={styles.content}>
            <View style={styles.aside_left}>
              <Text style={styles.excerpt}>
                {item.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").slice(0,70)}...
              </Text>
            </View>
            <View style={styles.aside_right}>
              <Image style={{ width: '100%', height: 50 }} source={{ uri: imgUrl }} />
            </View>
          </View>
          
          
          
        </View>
      </TouchableOpacity>
    )
  };






  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
        renderItem={renderBlogItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginHorizontal: 15,
  },
  card: {

    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: FAMILIES.title_popins,
  },
  content:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  aside_left:{
    width: "74%",
  },
  aside_right:{
    width: "25%",
  },
  excerpt: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});
