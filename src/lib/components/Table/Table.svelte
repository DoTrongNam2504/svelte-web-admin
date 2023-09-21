<script lang="ts">
	import _ from 'lodash';
	import type { ColumnsTable } from '$lib/type.ts';
	import { Button } from 'flowbite-svelte';
	export let columns: ColumnsTable[] = [];
	export let tableData: object[] = [];
	export let actions: string[] = [];
	export let handleView = (row: object, index?: number) => {};
	export let handleEdit = (row: object, index?: number) => {};
	export let handleRemove = (row: object, index?: number) => {};

</script>

<div class="flex flex-col mt-4">
	<div class="overflow-x-auto rounded-lg">
		<div class="inline-block min-w-full align-middle">
			<div class="overflow-hidden shadow sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
					<thead class="bg-gray-50 dark:bg-gray-700">
						<tr>
							{#each columns as column}
								<th
									scope="col"
									class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
								>
									{@html column.title}
								</th>
							{/each}
							{#if actions.length !== 0}
								<th
									scope="col"
									class="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase dark:text-white w-28 outline-none"
								>
									Hành động
								</th>
							{/if}
						</tr>
					</thead>
					{#if tableData.length != 0}
						<tbody class="bg-white dark:bg-gray-800">
							{#each tableData as row, i (i)}
								<tr>
									{#each columns as column, j (j)}
										<td
											class="p-4 text-sm font-normal text-dark whitespace-nowrap dark:text-gray-400"
										>
											{@html !!column.render
												? column.render(_.get(row, column.dataIndex, ''), row)
												: _.get(row, column.dataIndex, '')}
										</td>
									{/each}
									{#if actions.length !== 0}
										<td
											class="p-4 text-sm font-normal text-dark whitespace-nowrap dark:text-gray-400"
										>
											<div class="flex justify-around items-center">
												{#each actions as action, j (j)}
												{#if action === "view"}
												<Button on:click={()=> handleView(row, i)}>
													<svg
														class="w-5 h-5  text-blue-600"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 20 14"
													>
														<g
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
														>
															<path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
															<path
																d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"
															/>
														</g>
													</svg>
												</Button >
												{:else if action ==="edit"}
												
												<Button on:click={()=> handleEdit(row, i)} >
													<svg
														class="w-5 h-5  mr-2 text-blue-600"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
														><path
															d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
														/><path
															fill-rule="evenodd"
															d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
															clip-rule="evenodd"
														/></svg
													>
												</Button>
												{:else if action === "delete"}
												<Button on:click={()=> handleRemove(row, i)} >
													<svg
														class="w-5 h-5 mr-2 text-red-500"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
														><path
															fill-rule="evenodd"
															d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
															clip-rule="evenodd"
														/></svg
													>
												</Button>
												{:else}
													return ; 
												{/if}
												{/each}
											</div>
										</td>
									{/if}
								</tr>
							{/each}
						</tbody>
					{:else if tableData.length === 0}
						<div
							class="w-full h-64 !mt-0 bg-white dark:bg-dark-100 flex justify-center items-center"
						>
							<div class="flex-col">
								<img src="/svgs/empty.svg" alt="Trống" />
								<span class="text-gray-300 dark:text-dark-200 block text-sm w-full text-center"
									>Danh sách trống</span
								>
							</div>
						</div>
					{/if}
				</table>
			</div>
		</div>
	</div>
</div>
