import React from 'react';
import {FlatList} from 'react-native';

const VirtualizedScrollView = (props: any) => {
  return (
    <FlatList
      contentContainerStyle={props.style}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
      data={[]}
      keyExtractor={(_, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  );
};

export default VirtualizedScrollView;
