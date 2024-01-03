import Link from "next/link";

const Header = () => {
	return (
		<header className="p-6 bg-stone-900 text-stone-100 flex items-center justify-between">
			<h2 className="text-2xl font-bold">Dashboard</h2>

			<div className="flex items-center gap-5 font-medium">
				<Link
					href={"/login"}
					className="rounded bg-emerald-500 py-2 px-3 hover:bg-emerald-600 ease-in transition-all"
				>
					Login
				</Link>
				<Link
					href={"/login"}
					className="rounded py-2 px-3 ring-inset ring-amber-500 ring-2 text-amber-500 hover:bg-amber-600 hover:text-inherit hover:ring-0 transition-all ease-in"
				>
					Register
				</Link>
			</div>
		</header>
	);
};

export default Header;
