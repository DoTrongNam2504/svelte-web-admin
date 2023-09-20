<script lang="ts">
	import { Select, Label } from 'flowbite-svelte';
	let countries = [
		{ value: '01', name: 'DATA 01' },
		{ value: '02', name: 'DATA 02' }
	];
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import type { ColumnsTable } from '$lib/type.js';
	import { Button } from 'flowbite-svelte';

	let tableData = [
		{
			prop1: 'HC 11011',
			prop2: 'Athenol tuyệt đối',
			prop3: 'Hóa chẩt',
			prop4: 'Hóa chất cơ bản',
			prop5: '10 000 000'
		}
	];
	let columns: ColumnsTable[] = [
		{
			key: 'prop1',
			dataIndex: 'prop1',
			title: 'MÃ '
		},
		{
			key: 'prop2',
			dataIndex: 'prop2',
			title: 'TÊN'
		},
		{
			key: 'prop3',
			dataIndex: 'prop3',
			title: 'LOẠI'
		},
		{
			key: 'prop4',
			dataIndex: 'prop4',
			title: 'MÔ TẢ '
		},
		
	];
	const actions = [ 'edit', 'delete'];
</script>

<div class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64">
	<main>
		<div class="px-4 pt-3 pb-4 relative">
			<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
				<div class="bg-white flex items-center justify-between border-b border-gray-200 pb-4">
					<h1 class="text-xl font-semibold text-gray-900 sm:text-2xl mb-0">
						Quản lý danh mục thể loại
					</h1>
					<div class="items-center justify-between flex">
						<Button
							class=" item-center text-white bg-sky-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5
							 focus:outline-none flex"
						>
							Thêm mới
							<svg
								class="w-5 h-5 mr-2 ml-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
									clip-rule="evenodd"
								/></svg
							>
						</Button>
					</div>
				</div>

				<!--  header filter -->

				<div class="items-center justify-between lg:flex pt-4">
					<div class="mb-4 lg:mb-0">
						<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Danh sách</h3>
						<span class="text-base font-normal text-gray-500 dark:text-gray-400"
							>Có tất cả 100 bản ghi</span
						>
					</div>
					<div class="items-center sm:flex">
						
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
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
									placeholder="Nhập để tìm kiếm theo mã hóa chất"
								/>
							</div>
						</form>
					</div>
				</div>

				<!-- Table -->
				<Table {columns} {tableData} {actions} />
			</div>
			<Pagination />
		</div>
	</main>
</div>
