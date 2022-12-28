import React, {FC} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNotificationLayout} from './useNotificationLayout';
import {GoBack} from '../../components';
import {Icons} from '../../theme';
import styles from './styles';

type NotificationType = 'new-offer' | 'payment' | 'account';

interface CardProps {
  time: string;
  title: string;
  subTitle: string;
  messageType: NotificationType;
}

const Card: FC<CardProps> = ({
  messageType,
  subTitle,
  title,
  time = 'Today',
}) => {
  const {renderIcon} = useNotificationLayout();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>{renderIcon(messageType)}</View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View>
        <Text style={styles.heading} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subHeading} numberOfLines={1}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

const NotificationScreen = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      <GoBack title="Notification" iconName={Icons.More} />
      <View style={styles.container}>
        <Card
          title="Payment Successful!"
          subTitle="You have made a successful payment"
          messageType={'payment'}
          time="Today"
        />
        <Card
          title="Payment Successful!"
          subTitle="You have made a successful payment"
          messageType={'account'}
          time="23/09/2022"
        />
        <Card
          title="Payment Successful!"
          subTitle="You have made a successful payment"
          messageType={'new-offer'}
          time="12/06/2022"
        />
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;
