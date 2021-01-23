import React from 'react';

export default function App() {
  return (
    <div>
      <h1 className='italic text-red-700'>
        Electron App with React and Tailwind
      </h1>
      <button
        className='mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg'
        onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
        }}
      >
        Notification
      </button>
    </div>
  );
}
