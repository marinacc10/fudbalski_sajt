"use client";

import { useState } from 'react';
import { competitions } from '../data/competitions';
import HlsPlayer from './HlsPlayer';  // Prilagodi ako je fajl na drugoj lokaciji

export default function Home() {
  const [activeStreamUrl, setActiveStreamUrl] = useState(null);
  const [activeMatchId, setActiveMatchId] = useState(null);

  const handleStreamClick = (matchId, url) => {
    if (activeStreamUrl === url) {
      setActiveStreamUrl(null);
      setActiveMatchId(null);
    } else {
      setActiveStreamUrl(url);
      setActiveMatchId(matchId);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-6 text-white">
      <h1 className="text-4xl font-bold mb-10">Utakmice uživo</h1>

      <div className="w-full max-w-4xl space-y-10">
        {competitions.map((comp) => (
          <div
            key={comp.id}
            className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <img
                src={comp.imageUrl}
                alt={`Logo ${comp.name}`}
                className="w-10 h-10 mr-4 rounded"
              />
              <h2 className="text-2xl font-semibold">{comp.name}</h2>
            </div>

            <div className="ml-10 max-w-[90%] space-y-4">
              {comp.matches.map((match) => (
                <div
                  key={match.id}
                  className="bg-gray-700 p-3 rounded shadow-md flex flex-col"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <img
                          src={match.homeTeam.logo}
                          alt={match.homeTeam.name}
                          className="w-8 h-8 rounded"
                        />
                        <span>{match.homeTeam.name}</span>
                      </div>

                      <span className="text-gray-400">-</span>

                      <div className="flex items-center space-x-2">
                        <span>{match.awayTeam.name}</span>
                        <img
                          src={match.awayTeam.logo}
                          alt={match.awayTeam.name}
                          className="w-8 h-8 rounded"
                        />
                      </div>
                    </div>

                    <div className="space-x-3">
                      {match.streams.map((stream) => (
                        <button
                          key={stream.id}
                          onClick={() => handleStreamClick(match.id, stream.url)}
                          className="text-blue-400 hover:underline text-sm"
                        >
                          {stream.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {activeMatchId === match.id && activeStreamUrl && (
                    <div className="mt-4">
                      <HlsPlayer src={activeStreamUrl} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
