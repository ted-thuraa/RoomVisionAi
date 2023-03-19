import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";

export default function ClientForm(props) {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        country: "",
        status: "",
        phone: "",
    });

    if (props.client) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/admin/users/${props.client.id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data.data);
                    console.log(data);
                })
                .catch((err) => {
                    setLoading(false);
                });
        }, []);
    }

    const initiateUntoggle = (ev) => {
        props.unToggleModal(ev);
    };

    console.log(props);

    const onSubmit = (ev) => {
        ev.preventDefault();

        if (user.id) {
            console.log(user);
            axiosClient
                .put(`/admin/users/${user.id}`, user)
                .then(() => {
                    initiateUntoggle();
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status == 422) {
                        if (response.data.errors) {
                            setErrors(response.data.errors);
                        } else {
                            setErrors({
                                email: [response.data.message],
                            });
                        }
                    }
                });
        } else {
            axiosClient
                .post("/admin/users", user)
                .then(() => {
                    initiateUntoggle();
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status == 422) {
                        if (response.data.errors) {
                            setErrors(response.data.errors);
                        } else {
                            setErrors({
                                email: [response.data.message],
                            });
                        }
                    }
                });
        }
    };

    return (
        <div
            id="popup-modal"
            tabindex="-1"
            class="fixed flex top-0 left-0 right-0 z-50 bg-sky-700/50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-screen"
        >
            <div class="relative w-full h-full mx-60 md:h-auto">
                <div class="relative  bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        onClick={(ev) => initiateUntoggle(ev)}
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>

                    <div class="p-8 text-start overflow-y-scroll overflow-x-hidden">
                        <div className="mb-4 border-b-1 border-gray-300">
                            {user.id && (
                                <h3 class="text-xl pb-2 font-bold text-gray-900 dark:text-white">
                                    {user.name}
                                </h3>
                            )}
                            {!user.id && (
                                <h3 class="text-xl pb-2 font-bold text-gray-900 dark:text-white">
                                    New User
                                </h3>
                            )}
                        </div>
                        {errors && (
                            <div
                                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                                role="alert"
                            >
                                {Object.keys(errors).map((key) => (
                                    <span key={key} class="block sm:inline">
                                        {errors[key][0]}
                                    </span>
                                ))}
                                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                    <svg
                                        class="fill-current h-6 w-6 text-red-500"
                                        role="button"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <title>Close</title>
                                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                    </svg>
                                </span>
                            </div>
                        )}
                        <div className="mt-5  md:col-span-2 md:mt-0 ">
                            {!loading && (
                                <form onSubmit={onSubmit}>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Photo
                                    </label>
                                    <div className="mt-2 flex items-center">
                                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                            <svg
                                                className="h-full w-full text-gray-300"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                        <button
                                            type="button"
                                            className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                                        >
                                            Change
                                        </button>
                                    </div>
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="first-name"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        onChange={(ev) =>
                                                            setUser({
                                                                ...user,
                                                                name: ev.target
                                                                    .value,
                                                            })
                                                        }
                                                        value={user.name}
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="email-address"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Email address
                                                    </label>
                                                    <input
                                                        onChange={(ev) =>
                                                            setUser({
                                                                ...user,
                                                                email: ev.target
                                                                    .value,
                                                            })
                                                        }
                                                        value={user.email}
                                                        type="text"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="country"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Country
                                                    </label>
                                                    <select
                                                        onChange={(ev) =>
                                                            setUser({
                                                                ...user,
                                                                country:
                                                                    ev.target
                                                                        .value,
                                                            })
                                                        }
                                                        value={user.country}
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    >
                                                        <option>
                                                            United States
                                                        </option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="country"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Status
                                                    </label>
                                                    <select
                                                        onChange={(ev) =>
                                                            setUser({
                                                                ...user,
                                                                status: ev
                                                                    .target
                                                                    .value,
                                                            })
                                                        }
                                                        value={user.status}
                                                        id="status"
                                                        name="status"
                                                        autoComplete="Status"
                                                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    >
                                                        <option>Active</option>
                                                        <option>
                                                            UnActive
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                    <label
                                                        htmlFor="postal-code"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Phone
                                                    </label>
                                                    <input
                                                        onChange={(ev) =>
                                                            setUser({
                                                                ...user,
                                                                phone: ev.target
                                                                    .value,
                                                            })
                                                        }
                                                        value={user.phone}
                                                        type="text"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        autoComplete="Phone"
                                                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                    <label
                                                        htmlFor="postal-code"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        password
                                                    </label>
                                                    <input
                                                        onChange={(ev) =>
                                                            setUser({
                                                                ...user,
                                                                password:
                                                                    ev.target
                                                                        .value,
                                                            })
                                                        }
                                                        type="password"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        autoComplete="password"
                                                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                                    <label
                                                        htmlFor="postal-code"
                                                        className="block text-sm font-medium leading-6 text-gray-900"
                                                    >
                                                        Password Confirmation
                                                    </label>
                                                    <input
                                                        onChange={(ev) =>
                                                            setUser({
                                                                ...user,
                                                                password_confirmation:
                                                                    ev.target
                                                                        .value,
                                                            })
                                                        }
                                                        type="password"
                                                        name="password"
                                                        id="password-confirm"
                                                        autoComplete="password_confirmation"
                                                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
