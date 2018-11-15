import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import conf from '../../config';
import { getUser } from '../actions/userActions';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };
  componentDidMount() {
    this.props.getUser(conf.gitUser);
  }

  render() {
    const { user, loadingProfile } = this.props;

    if (loadingProfile) return <Text>Loading...</Text>;

    const { name, login } = user;
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userContext.user,
    loadingProfile: state.userContext.loadingProfile
  };
};

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);