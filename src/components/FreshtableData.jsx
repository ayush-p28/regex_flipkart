import React, { useState, useEffect } from 'react';

// FreshTable Component to render the dynamic rows
function FreshTable({ result }) {

    // State to store rows of data
    const [rows, setRows] = useState([]);

    // Function to format the current time as `YYYY-MM-DDTHH:MM:SS+HH:MM`
    const formatCurrentTime = () => {
        const date = new Date();
        return date.toISOString(); // Returns the time in the format "YYYY-MM-DDTHH:MM:SS.sssZ"
    };

    // Function to process the result string into a structured data format
    const processResult = (resultString) => {
        // Split the result string by commas to extract individual produce items
        const items = resultString.split(',').map(item => item.trim());

        // Process each item and create an object with `produce`, `freshness`, and `lifeSpan`
        return items.map(item => {
            const parts = item.split(' '); // Split by space, e.g. "1 fresh_apple"
            
            // Check if the item has the expected structure (e.g., "1 fresh_apple")
            if (parts.length < 3) {
                console.warn('Skipping invalid item:', item);
                return null; // Return null if the item is invalid
            }

            const count = parseInt(parts[0]); // Get the count (not used here but could be used for quantity)
            const freshness = parts[1]; // "fresh" or "rotten"
            const produceWithPrefix = parts[2]; // e.g., "fresh_apple" or "rotten_apple"
            
            // Remove the prefix ('fresh_' or 'rotten_') from the produce name
            const produce = produceWithPrefix.replace(/^(fresh_|rotten_)/, ''); // Remove the prefix

            return {
                produce,
                freshness,
                expectedLifeSpan: freshness === 'fresh' ? 5 : 1, // Assign 5 for fresh, 1 for rotten
            };
        }).filter(row => row !== null); // Remove null values (invalid items)
    };

    useEffect(() => {
        if (result) {
            // Process the result string and update rows state
            const processedRows = processResult(result);
            setRows(processedRows);
        }
    }, [result]); // Trigger this effect when `result` changes

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
            <table id="freshtableh" className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-950 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Sl no</th>
                        <th scope="col" className="px-6 py-3">Timestamp</th>
                        <th scope="col" className="px-6 py-3">Produce</th>
                        <th scope="col" className="px-6 py-3">Freshness</th>
                        <th scope="col" className="px-6 py-3">Expected life span (Days)</th>
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
