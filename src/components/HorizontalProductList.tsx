import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import useTheme from '../styles/useTheme'
import { CatalogItem } from '../styles/catalog-item'

interface HorizontalProductListProps {
  items: Array<CatalogItem>
  style?: StyleProp<TextStyle> | undefined
  imageSize?: {
    width: number
    height: number
  }
  onPress: (id: number) => void
  testID?: string | undefined
}

const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  items,
  style,
  imageSize,
  onPress,
  testID = ''
}) => {
  const theme = useTheme()
  const { colors } = theme

  const styles = StyleSheet.create({
    trips: {
      flexDirection: 'row'
    },
    tripImage: {
      borderRadius: 30,
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
    },
    tripDetails: {
      position: 'absolute',
      left: 0,
      bottom: 8,
      zIndex: 1000
    },
    tripText: {
      fontSize: 16
    },
    heart: {
      backgroundColor: '#ddd',
      width: 28,
      height: 28,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center'
    },
    description: {
      flexDirection: 'row',
      paddingHorizontal: 4,
      paddingVertical: 2,
      color: colors.TEXT
    },
    tripImageOverlay: {
      backgroundColor: '#000',
      height: '100%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.65,
      borderRadius: 30
    }
  })

  const getTripImageSize = () => {
    if (!imageSize) {
      return {
        width: Dimensions.get('window').width * 0.65,
        height: Dimensions.get('window').width * 0.65 * 1.22
      }
    } else {
      return imageSize
    }
  }

  const renderItem = ({
    item,
    index
  }: {
    item: CatalogItem
    index: number
  }) => {
    return (
      <TouchableOpacity
        testID={`${testID}-horizontal-product-list-${item.id}`}
        key={item.id}
        onPress={() => onPress(item.id)}>
        <View>
          <View
            style={[
              {
                width: getTripImageSize().width,
                height: getTripImageSize().height,
                marginRight: index < items.length - 1 ? 25 : 0
              }
            ]}>
            <Image source={item.image} style={styles.tripImage} />
            <View style={styles.tripImageOverlay} />
            <View
              style={[styles.tripDetails, { width: getTripImageSize().width }]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}>
                <View>
                  <View
                    style={[
                      styles.description,
                      {
                        borderTopLeftRadius: 3,
                        borderTopRightRadius: 3
                      }
                    ]}>
                    <Text style={[styles.tripText, { color: colors.TEXT }]}>
                      {item.title}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.tripText,
                      styles.description,
                      {
                        borderBottomLeftRadius: 3,
                        borderBottomRightRadius: 3
                      }
                    ]}>
                    {item.description}
                  </Text>
                </View>

                <View style={styles.heart}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size={16}
                    color={colors.ACCENT}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={items}
      horizontal={true}
      renderItem={renderItem}
      style={[styles.trips, style]}
    />
  )
}

export default HorizontalProductList
