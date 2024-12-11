function table(){
    return(
        <>
            

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table id="producttableh" className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto mt-8">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-950 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sl no
                </th>
                <th scope="col" className="px-6 py-3">
                    Timestamp
                </th>
                <th scope="col" className="px-6 py-3">
                    Brand
                </th>
                <th scope="col" className="px-6 py-3">
                    Expiry date
                </th>
                <th scope="col" className="px-6 py-3">
                    Count
                </th>
                <th scope="col" className="px-6 py-3">
                    Expired
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
                    Brand A
                </td>
                <td className="px-6 py-4">
                    2024-12-31
                </td>
                <td className="px-6 py-4">
                    50
                </td>
                <td className="px-6 py-4">
                    No
                </td>
                <td className="px-6 py-4">
                    30
                </td>
            </tr>
        </tbody>
    </table>
</div>


        </>
    )
}

export default table;