import React, { useState, useEffect } from 'react';

function FreshTable({ result }) {
    const [rows, setRows] = useState([]);

    const formatCurrentTime = () => {
        const date = new Date();
        return date.toISOString();
    };

    const processResult = (resultString) => {
        // Remove resolution prefix and timing suffix
        const mainPart = resultString.split(' ').slice(1).join(' ').split('ms')[0];
        
        // Split into individual product entries
        const productEntries = mainPart.split(',').filter(entry => entry.trim());
        
        // Process each entry
        return productEntries.map(entry => {
            // Use regex to match number and product name
            const match = entry.trim().match(/(\d+)\s+(\w+)/);
            if (match) {
                const [_, count, product] = match;
                return {
                    product: product,
                    Count: parseInt(count)
                };
            }
            return null;
        }).filter(Boolean); // Remove any null entries
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
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-950">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
                            <td className="px-6 py-4">{formatCurrentTime()}</td>
                            <td className="px-6 py-4">{row.product}</td>
                            <td className="px-6 py-4">{row.Count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FreshTable;