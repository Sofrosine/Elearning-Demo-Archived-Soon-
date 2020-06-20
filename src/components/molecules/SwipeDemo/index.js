import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap} from '../../atoms';
import {Swipe1Image, Swipe2Image, Swipe3Image} from '../../../assets';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SwipeDemo = ({onEnd}) => {
  const [swipeIndex, setSwipeIndex] = useState(0);

  useState(() => {
    console.log('swiwp', swipeIndex);
  }, [swipeIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Swiper
          index={swipeIndex}
          onIndexChanged={val => setSwipeIndex(val)}
          activeDotColor="#fc8c03"
          showsButtons={true}
          loop={false}
          containerStyle={styles.cardSwiper}
          horizontal={true}
          prevButton={<View />}
          dotStyle={{marginBottom: swipeIndex === 2 ? 0 : 24}}
          activeDotStyle={{marginBottom: swipeIndex === 2 ? 0 : 24}}
          buttonWrapperStyle={styles.buttonWrapperStyle}
          nextButton={
            <View style={styles.circleButton}>
              <Icon name="chevron-right" />
            </View>
          }>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Selamat Datang di Paytren Academy</Text>
            <Gap height={24} />
            <Image style={styles.image} source={Swipe1Image} />
            <Gap height={24} />
            <Text style={styles.subtitle}>
              Belajar banyak ilmu baru dengan cara menyenangkan
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>
              Belajar banyak hal sesuai minat kamu
            </Text>
            <Gap height={24} />
            <Image style={styles.image} source={Swipe2Image} />
            <Gap height={24} />
            <Text style={styles.subtitle}>
              Beragam pilihan kuliah untuk kamu pilih
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>
              Belajar sesuai dengan gaya belajar kamu
            </Text>
            <Gap height={24} />
            <Image style={styles.image} source={Swipe3Image} />
            <Gap height={24} />
            <Text style={styles.subtitle}>
              Belajar dengan materi interaktif,dilengkapi forum untuk diskusi
            </Text>
          </View>
        </Swiper>
        <Gap height={64} />
        {swipeIndex === 2 && (
          <TouchableOpacity onPress={onEnd} style={styles.secondaryButton}>
            <Text>Lihat Aplikasi</Text>
          </TouchableOpacity>
        )}
        <Gap height={24} />
      </View>
    </View>
  );
};

export default SwipeDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardSwiper: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: -24,
    marginBottom: -48,
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    color: 'gray',
    maxWidth: '60%',
  },
  image: {
    width: 200,
    height: 240,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    color: 'gray',
    maxWidth: '80%',
    marginBottom: 24,
  },
  circleButton: {
    backgroundColor: '#E8E8E8',
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  buttonWrapperStyle: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: -64,
    marginTop: 0,
  },
  secondaryButton: {
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 4,
  },
});
