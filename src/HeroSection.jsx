import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [subscribers, setSubscribers] = useState(6000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubscribers((prev) => (prev < 6500 ? prev + 1 : 6000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-600 to-teal-400 opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 blur-2xl animate-pulse"></div>

      {/* Profile Section */}
      <div className="text-center relative flex flex-col items-center z-10">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-teal-400 shadow-xl">
          <img
            src="/public/60b0fb4d-86f5-49a0-8b82-b28506e0ccd8.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-300 text-transparent bg-clip-text">
          USDT Seller
        </h1>

        <p className="mt-3 text-lg md:text-xl font-semibold text-gray-300">
          India's No. 1 Trusted USDT Seller
        </p>

        <p className="mt-1 text-sm text-gray-400">
          Secure, Fast, and Reliable Transactions
        </p>
      </div>

      {/* Subscribers Counter */}
      <div className="mt-8 text-2xl md:text-3xl font-bold text-white relative z-10">
        Subscribers: <span className="text-gradient">{subscribers}+</span>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white relative z-10">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
            99.80%
          </h2>
          <p className="text-sm text-gray-300">Success Ratio</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            5-10 Minutes
          </h2>
          <p className="text-sm text-gray-300">USDT Deposits After Payment</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            24/7
          </h2>
          <p className="text-sm text-gray-300">Help Support</p>
        </div>
        <div>
          <CountdownTimer />
        </div>
      </div>

      {/* Join Telegram Section */}
      <div className="mt-12 relative z-10">
        <button
          className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300"
          onClick={() => window.open('https://t.me/bestsellerindia01', '_blank')}
        >
          Join Our Telegram Group
        </button>
      </div>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 3600000; // 1 hour countdown
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text">
        {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h2>
      <p className="text-sm text-gray-300">Time Left to Join</p>
    </div>
  );
};

export default HeroSection;
