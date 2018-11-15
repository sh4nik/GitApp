import React, { Component } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import conf from '../../config';
import { listRepos } from '../actions/repoActions';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos(conf.gitUser);
  }
  renderItem = ({ item }) => (
    <TouchableOpacity
    style={styles.item}
    onPress={() => this.props.navigation.navigate('Detail', { name: item.name })}
    >
        <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repoContext.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);