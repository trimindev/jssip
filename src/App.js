import JsSIP from 'jssip';
import { useEffect } from 'react';

const socket = new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');

const configuration = {
  sockets: [socket],
  uri: '105@2-test1.gcalls.vn:50061',
  password: 'test1105',
};

const ua = new JsSIP.UA(configuration);

const eventHandlers = {
  progress: function (e) {
    console.log('call is in progress');
  },
  failed: function (e) {
    console.log('call failed with cause: ' + e.data.cause);
  },
  ended: function (e) {
    console.log('call ended with cause: ' + e.data.cause);
  },
  confirmed: function (e) {
    console.log('call confirmed');
  },
};

var options = {
  eventHandlers: eventHandlers,
  mediaConstraints: { audio: true, video: false },
};

function App() {
  useEffect(() => {
    try {
      ua.start();
      // var session =
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={() => {
          console.log('abc');
          ua.call('0399536474', options);
        }}
      >
        Call
      </button>
    </div>
  );
}

export default App;
