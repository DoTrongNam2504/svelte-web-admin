<script lang="ts">
	import HeaderPage from '$lib/components/HeaderPage/HeaderPage.svelte';
	import FilterPage from '$lib/components/HeaderPage/FilterPage.svelte';
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import type { ColumnsTable } from '$lib/type.js';

	let tableData = [
		{
			prop1: 'HC 11011',
			prop2: 'Athenol tuyệt đối',
			prop3: 'Hóa chẩt',
			prop4: 'Hóa chất cơ bản',
			prop5: '10 000 000',
		}
	];
	let columns: ColumnsTable[] = [
		{
			key: 'prop1',
			dataIndex: 'prop1',
			title: 'MÃ HS'
		},
		{
			key: 'prop2',
			dataIndex: 'prop2',
			title: 'TÊN'
		},
		{
			key: 'prop3',
			dataIndex: 'prop3',
			title: 'NHÓM'
		},
		{
			key: 'prop4',
			dataIndex: 'prop4',
			title: 'THỂ LOẠI'
		},
		{
			key: 'prop5',
			dataIndex: 'prop5',
			title: 'GIÁ THÀNH(VND)'
		},
	];
  const actions = [
    'view', "edit", "delete"
  ]
  
</script>

<div
	id="main-content"
	class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
>
	<main>
		<div class="px-4 pt-3 pb-4">
			<div
				class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 mb-4"
			>
				<HeaderPage title="Quản lý danh mục vật tư, hóa chất" />

				<!--  header filter -->
				<FilterPage />

				<!-- Table -->
				<Table {columns} {tableData} actions={actions} />
			</div>
			<Pagination />
		</div>
	</main>
</div>
