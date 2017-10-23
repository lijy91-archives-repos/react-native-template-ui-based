import React, { Component } from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';
import Lang from '../utilities/Lang';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.done = this.done.bind(this);

    this.state = {
      modalVisible: false,
    };
  }

  start() {
    this.setState({ modalVisible: true });
  }

  done() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { props } = this;
    const message = (props.message && props.message !== '') ? props.message : Lang.get('components.loader.messageProgressing');

    return (
      <Modal
        style={{
          zIndex: 1000,
        }}
        animationType="none"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {}}
        ref={(ref) => {
          this.modal = ref;
        }}
      >
        <View
          style={{
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignSelf: 'stretch',
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: -26,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator
                color="#ffffff"
                size="large"
              />
              <Text
                style={{
                  marginTop: 20,
                  textAlign: 'center',
                  color: '#ffffff',
                }}
              >
                {message}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default Loader;
