import { View, TouchableOpacity } from 'react-native'
import React, { FC, useState, useCallback, useRef } from 'react'
import Video from 'react-native-video-controls';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme';
import styles from './styles';

interface VideoPlayerProps {
    poster?: string;
    videoUrl: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ poster, videoUrl }) => {
    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(true);

    const handlePlay = useCallback(() => {
        setIsPaused(false);
    }, [isPaused]);


    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={{ uri: videoUrl }}
                poster={poster}
                style={styles.videoPlayer}
                showOnStart={false}
                posterResizeMod="cover"
                paused={isPaused}
                seekColor={colors.light.primary}
                disableBack={true}
                disableVolume={true}
                disablePlayPause={true}
                tapAnywhereToPause={true}
            />
            {isPaused === true && (
                <TouchableOpacity
                    onPress={handlePlay}
                    style={styles.playIconContainer}>
                    <Ionicons
                        name="ios-play-circle"
                        size={40}
                        color={colors.light.PrimaryLight}
                        style={{
                            alignSelf: 'center',
                            marginLeft: 2,
                            opacity: 0.8,
                        }}
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default VideoPlayer