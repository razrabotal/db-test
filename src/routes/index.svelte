<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/todos');
		const jsonRes = await res.json();
		return {
			props: {
				todos: jsonRes.todos
			}
		};
	}
</script>

<script>
	export let todos;

	let value = '';
	let todosList = todos;

	function addTodo() {
		const todo = {
			text: value,
			completed: false
		};

		fetch('/todos', {
			method: 'POST',
			body: JSON.stringify(todo)
		}).then(() => {
			refetch();
		});
	}

	function refetch() {
		fetch('/todos')
			.then((r) => r.json())
			.then((r) => (todosList = r.todos));
	}
</script>

<h2 class="text-lg font-bold mb-2">Add todo</h2>

<div class="mb-5">
	<input class="border-2 p-2" type="text" bind:value />

	<button
		disabled={value.trim() === ''}
		class="py-2 px-4 bg-blue-700 text-white"
		on:click={addTodo}
	>
		Add
	</button>
</div>

<div class="list">
	<h2 class="text-lg font-bold mb-2">Todo list</h2>
	{#each todosList as todo}
		<div class=" bg-gray-100 p-3 rounded-md mb-2">{todo?.text}</div>
	{/each}
</div>
