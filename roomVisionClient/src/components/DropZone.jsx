import React, { useCallback } from "react";
import axiosClient from "../axios-client.js";
import { useDropzone } from "react-dropzone";

export default function Dropzone(props) {
    const changeImage = (img, name) => {
        props.onOriginalImgChange(img, name);
    };
    const setRestoredImg = (img) => {
        props.onRestoredImgChange(img);
    };
    const setErr = (err) => {
        props.onError(err);
    };

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const Filename = file.name;
            const reader = new FileReader();
            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result;
                changeImage(binaryStr, Filename);
                console.log(binaryStr);
            };
            reader.readAsDataURL(file);
        });
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles: 1,
    });

    return (
        <div
            {...getRootProps()}
            className="w-full mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-700 hover:border-gray-300 px-6 pt-5 pb-6"
        >
            <div className="space-y-1 text-center">
                <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                >
                    <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div className="bg-rgb rounded-xl text-white font-medium px-4 py-3 sm:mt-6 mt-6 hover:bg-black/80">
                    <label className="relative cursor-pointer rounded-md  font-medium text-slate-100  hover:text-white">
                        <span>Upload a file</span>
                    </label>
                </div>

                <input {...getInputProps()} />
                <div className="flex text-sm text-gray-600">
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                </p>
            </div>
        </div>
    );
}
