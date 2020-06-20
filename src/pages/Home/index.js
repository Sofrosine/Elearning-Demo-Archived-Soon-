import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {SwipeDemo, Gap} from '../../components';
import {colors} from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Swipe1Image, Swipe2Image} from '../../assets';
import {copilot} from 'react-native-copilot';
import {walkthroughable, CopilotStep} from '@okgrow/react-native-copilot';

const Home = ({start}) => {
  const [isDemo, setDemo] = useState(true);
  const [step, setStep] = useState(false);

  const handleEndSwipe = async () => {
    await setDemo(false);
    setTimeout(() => {
      setStep(true);
      start()
    }, 500);
  };

  // useEffect(() => {
  //   start();
  // }, []);

  const CopilotItem = walkthroughable(TouchableOpacity);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.circleView} />
          <Gap height={24} />
          {/* NAVBAR */}
          <View style={styles.navbar}>
            <View style={styles.inputContainer}>
              <Icon name="search" size={16} style={styles.searchIcon} />
              <TextInput
                placeholder="Cari kuliah atau event"
                style={styles.searchInput}
              />
            </View>
            <TouchableOpacity>
              <Icon name="bell" color={colors.white} size={24} />
            </TouchableOpacity>
          </View>
          <Gap height={24} />
          {/* WELCOME */}
          <View style={{paddingHorizontal: 24}}>
            <Text style={styles.titleWhite}>Hai, Jane Doe</Text>
            <Gap height={8} />
            <Text style={styles.textWhite}>Mau apa hari ini?</Text>
          </View>
          <Gap height={24} />
          {/* MENU ITEM */}

          <View style={styles.menuContainer}>
            <CopilotStep
              active={step}
              text="Yuk Mulai Kuliah!"
              order={1}
              name="hello">
              <CopilotItem style={styles.menuItem}>
                <Icon name="desktop" size={36} />
                <Gap height={8} />
                <Text style={styles.text}>Kuliah</Text>
              </CopilotItem>
            </CopilotStep>

            <TouchableOpacity style={styles.menuItem}>
              <Icon name="code" size={36} />
              <Gap height={8} />
              <Text style={styles.text}>Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="star" size={36} />
              <Gap height={8} />
              <Text style={[styles.text, {textAlign: 'center', maxWidth: 70}]}>
                Bintang Akademia
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="user" size={36} />
              <Gap height={8} />
              <Text style={styles.text}>Mentor</Text>
            </TouchableOpacity>
          </View>
          <Gap height={24} />
          {/* INFO BARU */}
          <Text style={[styles.title, {marginLeft: 24}]}>Info Baru</Text>
          <Gap height={16} />
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 24}}
            style={{maxHeight: 100}}>
            <Image style={styles.infoImage} source={Swipe1Image} />
            <Gap width={16} />
            <Image style={styles.infoImage} source={Swipe2Image} />
          </ScrollView>
          <Gap height={24} />
          {/* KULIAH POPULER */}
          <View style={[styles.rowBetween, {paddingHorizontal: 24}]}>
            <Text style={styles.title}>Kuliah Populer</Text>
            <TouchableOpacity>
              <Text style={styles.textOrange}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <Gap height={16} />
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 24}}
            style={{maxHeight: 100}}>
            <Image style={styles.infoImage} source={Swipe1Image} />
            <Gap width={16} />
            <Image style={styles.infoImage} source={Swipe2Image} />
          </ScrollView>
          <Gap height={24} />
          {/* PROGRAM KULIAH */}
          <View style={[styles.rowBetween, {paddingHorizontal: 24}]}>
            <Text style={styles.title}>Program Kuliah</Text>
            <TouchableOpacity>
              <Text style={styles.textOrange}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <Gap height={16} />
          <Text style={[styles.textGray, {marginHorizontal: 24}]}>
            Ikuti rangkaian kuliah dengan topik pembelajaran yang sama
          </Text>
          <Gap height={16} />
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 24}}
            style={{maxHeight: 100}}>
            <Image style={styles.infoImage} source={Swipe1Image} />
            <Gap width={16} />
            <Image style={styles.infoImage} source={Swipe2Image} />
          </ScrollView>
          <Gap height={24} />
        </ScrollView>
      </View>
      {isDemo && <SwipeDemo onEnd={handleEndSwipe} />}
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  circleView: {
    position: 'absolute',
    backgroundColor: colors.primary,
    height: 240,
    width: '100%',
    borderBottomRightRadius: 240 / 2,
    borderBottomLeftRadius: 240 / 2,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: colors.white,
    padding: 0,
    width: 220,
    borderRadius: 20,
    paddingRight: 16,
    paddingLeft: 36,
    paddingVertical: 4,
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 999,
    top: 10,
    left: 8,
  },
  titleWhite: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black1,
  },
  text: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.black1,
  },
  textWhite: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.white,
  },
  textGray: {
    fontSize: 12,
    fontWeight: '800',
    color: 'gray',
  },
  textOrange: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
  },
  menuContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    paddingVertical: 16,
    elevation: 4,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  menuItem: {
    alignItems: 'center',
    width: 80,
  },
  infoImage: {
    width: 240,
    height: 100,
    borderRadius: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const copilotStyle = {
  backgroundColor: colors.white,
  borderRadius: 10,
  paddingTop: 5,
};

const circleSvgPath = ({position, canvasSize}) =>
  `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${position.x._value},${
    position.y._value
  }Za50 50 0 1 0 100 0 50 50 0 1 0-100 0`;

export default copilot({
  tooltipStyle: copilotStyle,
  animated: true,
  overlay: 'svg',
  svgMaskPath: circleSvgPath,
  verticalOffset: 50,
  androidStatusBarVisible: false,
})(Home);
