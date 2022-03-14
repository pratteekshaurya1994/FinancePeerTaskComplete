import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SizeConfig} from '../../constants/size-config';

export default class ApiScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => console.log(error));
  }
  renderItem = data => (
    <TouchableOpacity style={styles.list}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.darkText}>Name: </Text>
        <Text style={styles.lightText}>{data.item.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.darkText}>Email: </Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.darkText}>Company Name: </Text>
        <Text style={styles.lightText}>{data.item.company.name}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <HeaderComponent title="API Screen" /> */}
        {this.state.loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={COLORS.blackDark} />
          </View>
        ) : (
          <FlatList
            data={this.state.dataSource}
            renderItem={item => this.renderItem(item)}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: COLORS.whiteMedium,
  },
  darkText: {
    fontSize: SizeConfig.blockHeight * 2,
    fontWeight: '700',
    color: 'red',
  },
  lightText: {
    color: 'red',
  },
});
