<main class="font-sans p-10">
	<nav class="mb-10">
		<a class="mr-2" href="/">Todo list</a>
		<a href="/completed">Completed</a>
	</nav>

	<slot />
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	@tailwind screens;
</style>
