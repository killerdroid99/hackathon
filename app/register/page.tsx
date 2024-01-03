"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function Register() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<main>
			<Header />

			<form className="mt-16 max-w-3xl mx-auto p-10 grid gap-5 bg-stone-200">
				<div className="flex flex-col-reverse gap-2">
					<input
						type="text"
						className="border-none outline-none p-2 text-lg ring-2 ring-stone-500 focus-visible:ring-blue-500 peer"
						id="name"
					/>
					<label htmlFor="name" className="peer-focus-visible:text-blue-500">
						Name
					</label>
				</div>

				<div className="flex flex-col-reverse gap-2">
					<input
						type="email"
						className="border-none outline-none p-2 text-lg ring-2 ring-stone-500 focus-visible:ring-blue-500 peer"
						id="email"
					/>
					<label htmlFor="email" className="peer-focus-visible:text-blue-500">
						Email
					</label>
				</div>
				<div className="flex flex-col-reverse gap-2 relative">
					<input
						type={showPassword ? "text" : "password"}
						className="border-none outline-none p-2 text-lg ring-2 ring-stone-500 focus-visible:ring-blue-500 peer"
						id="pwd"
					/>
					<label htmlFor="pwd" className="peer-focus-visible:text-blue-500">
						Password
					</label>

					<div
						title={showPassword ? "hide password" : "show password"}
						className="bottom-[10px] right-3 absolute cursor-pointer"
						onClick={() => setShowPassword((prev) => !prev)}
					>
						{!showPassword ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.5em"
								height="1.5em"
								viewBox="0 0 256 256"
							>
								<path
									fill="currentColor"
									d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64Zm0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
								></path>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.5em"
								height="1.5em"
								viewBox="0 0 256 256"
							>
								<path
									fill="currentColor"
									d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.23 123.23 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133.06 133.06 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.23 123.23 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.47 153.47 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.47 153.47 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11"
								></path>
							</svg>
						)}
					</div>
				</div>

				<div className="flex flex-col-reverse gap-2 relative">
					<input
						type={showPassword ? "text" : "password"}
						className="border-none outline-none p-2 text-lg ring-2 ring-stone-500 focus-visible:ring-blue-500 peer"
						id="pwd"
					/>
					<label htmlFor="pwd" className="peer-focus-visible:text-blue-500">
						Confirm password
					</label>

					<div
						title={showPassword ? "hide password" : "show password"}
						className="bottom-[10px] right-3 absolute cursor-pointer"
						onClick={() => setShowPassword((prev) => !prev)}
					>
						{!showPassword ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.5em"
								height="1.5em"
								viewBox="0 0 256 256"
							>
								<path
									fill="currentColor"
									d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64Zm0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
								></path>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.5em"
								height="1.5em"
								viewBox="0 0 256 256"
							>
								<path
									fill="currentColor"
									d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.23 123.23 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133.06 133.06 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.23 123.23 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.47 153.47 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.47 153.47 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11"
								></path>
							</svg>
						)}
					</div>
				</div>

				<button className="border-none outline-none rounded bg-emerald-500 py-2 px-3 hover:bg-emerald-600 ease-in transition-all text-white font-semibold text-lg focus-visible:ring-4 ring-offset-2 ring-offset-stone-200 ring-emerald-500">
					Submit
				</button>
			</form>
		</main>
	);
}
