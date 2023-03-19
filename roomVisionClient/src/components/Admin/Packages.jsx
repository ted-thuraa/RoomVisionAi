import React from "react";

export default function Packages() {
    return (
        <div class="relative w-full h-full overflow-x-auto p-5 shadow-md sm:rounded-lg">
            <div className="flex justify-between">
                <div className="">
                    <h2 className="font-bold text-2xl">Packages</h2>
                </div>
                <div className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                    </svg>
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Monthly Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Yearly Price
                        </th>
                    </tr>
                </thead>
                <hr />
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">Trial</td>
                        <td class="px-6 py-4">$0.00</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">Basic</td>
                        <td class="px-6 py-4">$19.09</td>
                        <td class="px-6 py-4">$29.99</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">Standard</td>
                        <td class="px-6 py-4">$29.99</td>
                        <td class="px-6 py-4">$59.99</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">Professional</td>
                        <td class="px-6 py-4">30.00</td>
                        <td class="px-6 py-4">$69.99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
