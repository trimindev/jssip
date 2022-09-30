import React, { useEffect } from 'react';
import NumberDisplay from '../components/NumberDisplay';
import NumberPad from '../components/NumberPad';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import JsSIP from 'jssip';

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

const socket = new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');

var options = {
  eventHandlers: eventHandlers,
  mediaConstraints: { audio: true, video: false },
  sessionTimersExpires: 120,
};

const remoteAudio = new window.Audio();
remoteAudio.autoplay = true;

function Dialpad() {
  const dialpad = useSelector((state) => state.dialpad);

  const ip = useSelector((state) => state.ip);

  const URI = '105@' + ip + ':50061';

  const configuration = {
    sockets: [socket],
    uri: URI,
    password: 'test1105',
    session_timers: false,
  };

  const ua = new JsSIP.UA(configuration);

  ua.on('connected', function (e) {
    console.log('connected', e);
  });
  ua.on('newRTCSession', function (e) {
    console.log('newRTCSession', e);

    const session = e.session;

    if (session) session.terminate();

    session.on('addstream', function (e) {
      // incomingCallAudio.pause();
      remoteAudio.src = window.URL.createObjectURL(e.stream);
    });
    if (session.direction === 'incoming') {
      // incomingCallAudio.play();
    }
  });

  useEffect(() => {
    try {
      console.log(URI);
      ua.start();
    } catch (err) {
      console.log(err);
    }
  }, [ua]);

  return (
    <div className=" bg-[#242424] py-12 px-14 rounded-3xl mx-2 flex flex-col justify-between items-center gap-8">
      <NumberDisplay />
      <NumberPad />
      <button
        className=" flex justify-center items-center p-4 rounded-full bg-green-500"
        onClick={() => {
          ua.call(dialpad, options);
        }}
      >
        <Link to={'/call'}>
          <PhoneIcon className="h-8 w-8" />
        </Link>
      </button>
    </div>
  );
}

export default Dialpad;
