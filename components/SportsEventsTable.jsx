// components/SportsEventsTable.jsx

import React from 'react';

const SportsEventsTable = ({ sportsData }) => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Sports Events</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border dark:text-gray-900">Title</th>
            <th className="py-2 px-4 border dark:text-gray-900">Category</th>
            <th className="py-2 px-4 border dark:text-gray-900">Game Format</th>
            <th className="py-2 px-4 border dark:text-gray-900">Season</th>
            <th className="py-2 px-4 border dark:text-gray-900">Start Date</th>
            <th className="py-2 px-4 border dark:text-gray-900">End Date</th>
            <th className="py-2 px-4 border dark:text-gray-900">Total Matches</th>
            <th className="py-2 px-4 border dark:text-gray-900">Total Rounds</th>
            <th className="py-2 px-4 border dark:text-gray-900">Total Teams</th>
          </tr>
        </thead>
        <tbody>
          {sportsData.map((event) => (
            <tr key={event.cid}>
              <td className="py-2 px-4 border">{event.title}</td>
              <td className="py-2 px-4 border">{event.category}</td>
              <td className="py-2 px-4 border">{event.game_format}</td>
              <td className="py-2 px-4 border">{event.season}</td>
              <td className="py-2 px-4 border">{event.datestart}</td>
              <td className="py-2 px-4 border">{event.dateend}</td>
              <td className="py-2 px-4 border">{event.total_matches}</td>
              <td className="py-2 px-4 border">{event.total_rounds}</td>
              <td className="py-2 px-4 border">{event.total_teams}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SportsEventsTable;
