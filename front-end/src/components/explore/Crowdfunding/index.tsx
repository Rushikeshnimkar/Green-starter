"use client"
import React, { useState } from 'react';

const BoxComponent = () => {
  const [loading, setLoading] = useState(false);
  const [showMint, setShowMint] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const progressValue = 10; // Constant progress value for 0.4 ETH

  const handleStakeTokenClick = () => {
    setLoading(true);
    // Simulate an asynchronous action, like an API call
    setTimeout(() => {
      setLoading(false);
      setShowMint(true); // Show "Mint" after "Stacking"
    }, 2000); // 2 seconds

    // You can perform additional actions here if needed
  };

  const handleMintClick = () => {
    setLoading(true);
    // Simulate an asynchronous action, like an API call
    setTimeout(() => {
      setLoading(false);
      setShowButtons(true); // Show the three buttons after "Minting..."
    }, 2000); // 2 seconds

    // You can perform additional actions here if needed
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">car</h1>
        <p className="text-gray-700 mb-4">description </p>
        {!showButtons && (
          <>
            {!showMint && (
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'cursor-not-allowed' : ''}`}
                onClick={handleStakeTokenClick}
                disabled={loading} // Disable button while loading
              >
                {loading ? 'Stacking...' : 'Stake Token'}
              </button>
            )}
            {showMint && (
              <>
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'cursor-not-allowed' : ''}`}
                  onClick={handleMintClick}
                  disabled={loading} // Disable button while loading
                >
                  {loading ? 'Minting...' : 'Mint'}
                </button>
                {loading && <p>Loading...</p>}
                {!loading && (
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Funding Progress</p>
                    <div className="bg-gray-300 h-8 rounded-lg">
                      <div
                        className="bg-blue-500 h-full rounded-lg"
                        style={{ width: `${progressValue}%` }} // Set the width dynamically based on the progress
                      ></div>
                    </div>
                    <p className="mt-2">0.4 ETH</p>
                  </div>
                )}
              </>
            )}
          </>
        )}
        {showButtons && (
          <>
            <div className="mt-4 space-x-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Withdraw Funds
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Dispute
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Call Me Back
              </button>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Funding Progress</p>
              <div className="bg-gray-300 h-8 rounded-lg">
                <div
                  className="bg-blue-500 h-full rounded-lg"
                  style={{ width: `${progressValue}%` }} // Set the width dynamically based on the progress
                ></div>
              </div>
              <p className="mt-2">0.4 ETH</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BoxComponent;
