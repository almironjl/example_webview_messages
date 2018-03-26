import React from 'react';
import {AppRegistry, Text, View, TouchableHighlight, WebView} from "react-native";

export default class App extends React.Component {
  constructor( props ) {
        super( props );

        this.webView = null;
    }

    onMessage( event ) {
        console.log( "On Message", event.nativeEvent.data );
    }

    sendPostMessage() {
        console.log( "Sending post message" );
        this.webView.postMessage( "Post message from react native" );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableHighlight style={{padding: 10, backgroundColor: 'blue', marginTop: 20}} onPress={() => this.sendPostMessage()}>
                    <Text style={{color: 'white'}}>Send post message from react native</Text>
                </TouchableHighlight>
                <WebView
                    style={{flex: 1}}
                    source={{uri: 'http://192.168.1.163:3000/games/space/testMessage.html'}}
                    ref={( webView ) => this.webView = webView}
                    onMessage={this.onMessage}
                />
            </View>
        );
    }
}
