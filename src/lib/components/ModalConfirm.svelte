<script lang="ts">
  import { Button, Modal } from 'flowbite-svelte';
  export let isOpen = false;
  export let title = 'Xác nhận xóa bản ghi này?';
  export let onConfirm: () => void = () => {};
  export let onCancel: () => void = () => {};
</script>

<Modal class="w-2/12"
  bind:open={isOpen}
  on:cancel={() => {
    isOpen = false;
    onCancel();
  }}
  autoclose
	outsideclose
>
  <p class="text-base leading-relaxed text-gray-900  text-center mt-4">
    <svg class="w-6 h-6 text-gray-800 dark:text-white m-auto mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
    </svg>
    {@html title}
  </p>
  <div class="flex space-x-2">
    <Button
      class="w-1/2 text-dark-100 bg-gray-300 "
      style="border: 1px solid #eee;"
      on:click={() => {
        isOpen = false;
        onCancel();
      }}
      color="alternative">Hủy bỏ</Button
    >
    <Button
      class="w-1/2 bg-red text-white bg-red-600"
      style="border: 1px solid #eee;"
      on:click={() => {
        isOpen = false;
        onConfirm();
      }}>Xác nhận</Button
    >
  </div>
</Modal>
