import React, { useState, useEffect } from 'react';

function FreshTable({ result }) {
    const [rows, setRows] = useState([]);

    const formatCurrentTime = () => {
        const date = new Date();
        return date.toISOString();
    };

    const processResult = (resultString) => {
        const items = resultString.split(',').map(item => item.trim());
        return items.map(item => {
            const match = item.match(/^(\d+)\s+(fresh|rotten)_(\w+)$/);
            if (!match) {
                console.warn('Skipping invalid item:', item);
                return null;
            }
            const [, count, freshness, produce] = match;
            return {
                produce,
                freshness,
                expectedLifeSpan: freshness === 'fresh' ? 5 : 1,
            };
        }).filter(row => row !== null);
    };

    useEffect(() => {
        if (result) {
            const processedRows = processResult(result);
            setRows(processedRows);
        }
    }, [result]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
            <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-950 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Sl no</th>
                        <th className="px-6 py-3">Timestamp</th>
                        <th className="px-6 py-3">Produce</th>
                        <th className="px-6 py-3">Freshness</th>
                        <th className="px-6 py-3">Expected life span (Days)</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-950">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
                            <td className="px-6 py-4">{formatCurrentTime()}</td>
                            <td className="px-6 py-4">{row.produce}</td>
                            <td className="px-6 py-4">{row.freshness}</td>
                            <td className="px-6 py-4">{row.expectedLifeSpan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FreshTable;
