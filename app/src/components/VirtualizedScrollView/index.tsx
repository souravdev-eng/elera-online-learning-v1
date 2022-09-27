import React from 'react';
import {FlatList} from 'react-native';

const VirtualizedScrollView = (props: any) => {
  return (
    <FlatList
      contentContainerStyle={props.style}
      {...props}
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  );
};

export default VirtualizedScrollView;
