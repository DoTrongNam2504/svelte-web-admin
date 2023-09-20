<script lang="ts">
	import { Select, Label, Input, Checkbox, Radio, Textarea } from 'flowbite-svelte';
	import ModalConfirm from '$lib/components/ModalConfirm.svelte';
	import { Button, Modal } from 'flowbite-svelte';
	let defaultModal = false;
	let isAddForm:boolean = true;
	let modalView= false; 
	let modalDelete= false; 
	let countries = [
		{ value: '01', name: 'DATA 01' },
		{ value: '02', name: 'DATA 02' }
	];
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import type { ColumnsTable } from '$lib/type.js';

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
			title: 'GIÁ THÀNH <br/>(VND)'
		}
	];
	const actions = ['view', 'edit', 'delete'];
</script>

<!-- ----------------form thêm sửa------------------------- -->
<Modal
	title={isAddForm ? 'Thêm mới vật tư, hóa chất ': 'Sửa thông tin vật tư, hóa chất '}
	bind:open={defaultModal}
	autoclose
	outsideclose
	class="w-6/12 "
>
	<form class=" flex flex-col space-y-6 w-full" action="#">
		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2">
				<span>Mã (HS)</span>
				<span class="text-red-600">*</span>

				<Input
					type="text"
					name="email"
					placeholder="Nhập vào mã vật tư, hóa chất"
					required
					class="border w-full"
				/>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-full">
				<span>Tên vật tư, hóa chất </span>
				<Input
					type="email"
					name="email"
					placeholder="Nhập vào tên vật tư, hóa chất"
					required
					class="border w-full"
				/>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2 flex flex-col">
				<span>Loại</span>
				<span>
					<Radio inline name="example" class="mr-2">Vật tư</Radio>
					<Radio inline name="example" class="ml-2" checked={true}>Hóa chất</Radio>
				</span>
			</Label>

			<Label class="space-y-2 w-1/2">
				<span>Thể loại</span>
				<Select
					type="email"
					name="email"
					placeholder="Chọn thể loại vật tư, hóa chất"
					required
					class="border w-full"
				/>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2 flex flex-col">
				<span>Hãng sản xuất</span>
				<Input
					type="email"
					name="email"
					placeholder="Nhập vào hãng sản xuất"
					required
					class="border w-full"
				/>
			</Label>

			<Label class="space-y-2 w-1/2">
				<span>Nước sản xuất</span>
				<Input
					type="email"
					name="email"
					placeholder="Nhập vào nước sản xuất"
					required
					class="border w-full"
				/>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2 flex flex-col">
				<span>Hãng sản xuất</span>
				<Input
					type="email"
					name="email"
					placeholder="Nhập vào hãng sản xuất"
					required
					class="border w-full"
				/>
			</Label>

			<Label class="space-y-2 w-1/2">
				<span>Nước sản xuất</span>
				<Input
					type="email"
					name="email"
					placeholder="Nhập vào nước sản xuất"
					required
					class="border w-full"
				/>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2 flex flex-col">
				<span>Đơn vị tính</span>
				<Select
					type="email"
					name="email"
					placeholder="Chọn đơn vị tính"
					required
					class="border w-full"
				/>
			</Label>

			<Label class="space-y-2 w-1/2">
				<span>Giá thành (Nghìn VNĐ) </span>
				<Input
					type="email"
					name="email"
					placeholder="Nhập vào giá thành"
					required
					class="border w-full"
				/>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-full flex flex-col">
				<span>Quy cách đóng gói</span>
				<Input
					type="email"
					name="email"
					placeholder="Nhập vào quy cách đóng gói"
					required
					class="border w-full"
				/>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-full flex flex-col">
				<span>Đặc tính kỹ thuật</span>
				<Textarea class="border w-full" placeholder="Nhập vào đặc tính kỹ thuật" />
			</Label>
		</div>
	</form>
	<svelte:fragment slot="footer">
		<Button on:click={() => alert('Handle "success"')} class="bg-cyan-700">Lưu lại</Button>
		<Button color="alternative">Hủy bỏ</Button>
	</svelte:fragment>
</Modal>


<!-- ------------------------modal xem ------------------- -->

<Modal
	title='Thông tin chi tiết  vật tư, hóa chất '
	bind:open={modalView}
	autoclose
	outsideclose
	class="w-6/12 "
>
	<form class=" flex flex-col space-y-6 w-full" action="#">
		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2 flex items-center ">
				<span class= "w-32">Mã (HS) </span>
				<span class= " !mt-0">: ATN 112</span>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-full flex items-center">
				<span class= "w-32">Tên </span>
				<span class= " !mt-0">: Athernol tuyệt đối</span>
				
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2 flex items-center">
				<span class= "w-32">Loại </span>
				<span class= " !mt-0">: Hóa chất</span>

			</Label>

			<Label class="space-y-2 w-1/2  flex items-center">
				<span class= "w-32">Thể loại</span>
				<span class= " !mt-0">: Hóa chất cơ bản</span>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-1/2  flex items-center">
				<span class= "w-32">Xuất xứ</span>
				<span class= " !mt-0">: Apple-Mỹ </span>
			</Label>
			<Label class="space-y-2 w-1/2  flex items-center">
				<span class= "w-32">Đơn vị tính </span>
				<span class= " !mt-0">: Lít</span>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">

			<Label class="space-y-2 w-1/2  flex items-center">
				<span class= "w-32">Quy cách đóng gói</span>
				<span class= " !mt-0">: Chai 5 lít </span>
			</Label>
			<Label class="space-y-2 w-1/2  flex items-center">
				<span class= "w-32">Giá thành </span>
				<span class= " !mt-0">: 1.000.000 (Nghìn VNĐ)</span>
			</Label>
		</div>

		<div class="flex flex-row space-x-10 flex-1">
			<Label class="space-y-2 w-full flex items-start">
				<span class= "w-32">Đặc tính kỹ thuật</span>
				<span class= "!mt-0 flex-1">: Có mùi đặc trưng, tương tự mùi rượu. Dễ bay hơi . Không màu, không mùi. Tan vô hạn trong nước và một số chất hữu cơ khác. Tỷ trọng: 0.8 g/cm3. 
				Nhiệt độ hóa rắn: -114.15 độ C. Sôi ở nhiệt độ 78,5oC. Nóng chảy ở  -117,3oC. Có tính hút ẩm mạnh.</span>
			</Label>
		</div>
	</form>
	<svelte:fragment slot="footer">
		<Button color="alternative">Hủy bỏ</Button>
	</svelte:fragment>
</Modal>;


<!-- ==== modal deleted============== -->
<ModalConfirm title= "Bạn có chắc muốn xóa vật tư, hóa chất này ?" isOpen={modalDelete} onCancel={()=> modalDelete = false}  />


<div class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64">
	<main>
		<div class="px-4 pt-3 pb-4 relative">
			<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
				<div class="bg-white flex items-center justify-between border-b border-gray-200 pb-4">
					<h1 class="text-xl font-semibold text-gray-900 sm:text-2xl mb-0">
						Quản lý danh mục vật tư, hóa chất
					</h1>
					<div class="items-center justify-between flex">
						<Button color="light" class="mr-2 flex item-center">
							Đối chiếu VTHC
							<svg
								class=" ml-2 w-4 h-4 text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</Button>

						<Button color="light" class="mr-2 flex item-center  border-solid">
							<svg
								class="w-4 h-4 text-gray-800 mr-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 7.828 1h8.239A.969.969 0 0 1 17 2v16a.969.969 0 0 1-.933 1H3.933A.97.97 0 0 1 3 18v-2M8 1v4a1 1 0 0 1-1 1H3m-2 6h10M9.061 9.232 11.828 12l-2.767 2.768"
								/>
							</svg>
							Nhập danh sách
						</Button>

						<Button
							on:click={() => (modalDelete = true)}
							class="item-center text-white bg-sky-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5
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
						<div class="flex items-center">
							<Select
								class="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 
				focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 "
								items={countries}
								placeholder="Loại"
							/>

							<Select
								class="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none 
				hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5  "
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
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
									placeholder="Nhập để tìm kiếm theo mã hóa chất"
								/>
							</div>
						</form>
					</div>
				</div>

				<!-- Table -->
				<Table {columns} {tableData} {actions}  />
			</div>
			<Pagination />
		</div>
	</main>
</div>
