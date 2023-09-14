<script lang="ts">
	import NavTop from '$lib/components/NavTop/NavTop.svelte';
	import SideBar from '$lib/components/SideBar/SideBar.svelte';
</script>

<NavTop />
<div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
	<SideBar />
	<slot />
</div>
