// components/Table.js
import React from 'react';

const Table = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#0F0F0F] text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-[#0F0F0F]' : 'bg-[#141414]'}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-white">
                  {item[header.toLowerCase().replace(/\s+/g, '')]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
