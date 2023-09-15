<script lang="ts">
	export let title: string;
</script>

<div
	class="bg-white flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 pb-4"
>
	<h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white mb-0">{title}</h1>
	<div
		class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700"
	>
		<a
			href="#"
			class="inline-flex items-center justify-center w-1/2 px-3 py-2 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
		>
			<svg class="w-5 h-5 mr-2 -ml-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1h8.239A.969.969 0 0 1 17 2v16a.969.969 0 0 1-.933 1H3.933A.97.97 0 0 1 3 18v-2M8 1v4a1 1 0 0 1-1 1H3m-2 6h10M9.061 9.232 11.828 12l-2.767 2.768"/>
			  </svg>
			Nhập danh sách
		</a>

		<button
			class="text-white bg-sky-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600
                dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex"
			type="button"
		>
		<svg
		class="w-5 h-5 mr-2 -ml-1"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
			clip-rule="evenodd"
		/></svg
	>
			Thêm mới
		</button>
	</div>
</div>
