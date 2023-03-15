import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function GuestLayout() {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/design" />;
    }
    return (
        <div className="flex  mx-auto flex-col items-center justify-center bg-white py-2 min-h-screen">
            <div className="flex min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
