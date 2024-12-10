function fresh(){
    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto mt-8">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-950 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl no
                </th>
                <th scope="col" className="px-6 py-3">
                    Timestamp
                </th>
                <th scope="col" className="px-6 py-3">
                    Produce
                </th>
                <th scope="col" className="px-6 py-3">
                    Freshness
                </th>
                <th scope="col" className="px-6 py-3">
                    Expected life span (Days)
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-950">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </td>
                <td className="px-6 py-4">
                    2024-12-05 10:00 AM
                </td>
                <td className="px-6 py-4">
                    Apples
                </td>
                <td className="px-6 py-4">
                    Fresh
                </td>
                <td className="px-6 py-4">
                    15
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-950">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </td>
                <td className="px-6 py-4">
                    2024-12-05 11:30 AM
                </td>
                <td className="px-6 py-4">
                    Bananas
                </td>
                <td className="px-6 py-4">
                    Slightly Ripe
                </td>
                <td className="px-6 py-4">
                    7
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-950">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    3
                </td>
                <td className="px-6 py-4">
                    2024-12-05 01:00 PM
                </td>
                <td className="px-6 py-4">
                    Grapes
                </td>
                <td className="px-6 py-4">
                    Fresh
                </td>
                <td className="px-6 py-4">
                    10
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </>
    )

}

export default fresh;