<script>
	import { Select, Label } from 'flowbite-svelte';
	let countries = [
		{ value: '01', name: 'DATA 01' },
		{ value: '02', name: 'DATA 02' }
	];
</script>

<div class="items-center justify-between lg:flex pt-4">
	<div class="mb-4 lg:mb-0">
		<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Danh sách</h3>
		<span class="text-base font-normal text-gray-500 dark:text-gray-400">Có tất cả 100 bản ghi</span
		>
	</div>
	<div class="items-center sm:flex">
		<div class="flex items-center">
			<Select
				class="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
				focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
				dark:hover:border-gray-600 dark:focus:ring-gray-700"
				items={countries}
				placeholder="Loại"
			/>

			<Select
				class="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none 
				hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 
				dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
				items={countries}
				placeholder="Thể loại"
			/>
		</div>
		<form action="#" method="GET" class="hidden lg:block lg:pl-3.5">
			<label for="topbar-search" class="sr-only">Tìm kiếm</label>
			<div class="relative mt-1 lg:w-96">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						class="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/></svg
					>
				</div>
				<input
					type="text"
					name="email"
					id="topbar-search"
					class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Nhập để tìm kiếm theo mã"
				/>
			</div>
		</form>
	</div>
</div>
