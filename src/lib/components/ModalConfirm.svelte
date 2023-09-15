<script lang="ts">
  import { Button, Modal } from 'flowbite-svelte';
  export let isOpen = false;
  export let title = 'Xác nhận xóa bản ghi này?';
  export let onConfirm: () => void = () => {};
  export let onCancel: () => void = () => {};
</script>

<Modal
  bind:open={isOpen}
  on:cancel={() => {
    isOpen = false;
    onCancel();
  }}
>
  <p class="text-base leading-relaxed text-gray-900 dark:text-gray-400 text-center mt-4">{@html title}</p>
  <div class="flex space-x-2">
    <Button
      class="w-1/2 shadow-md text-green-200 dark:text-green-300 "
      style="border: 1px solid #eee;"
      on:click={() => {
        isOpen = false;
        onCancel();
      }}
      color="alternative">Hủy bỏ</Button
    >
    <Button
      class="w-1/2 shadow-md"
      style="border: 1px solid #eee;"
      on:click={() => {
        isOpen = false;
        onConfirm();
      }}>Xác nhận</Button
    >
  </div>
</Modal>
