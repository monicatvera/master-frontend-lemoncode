<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4"
  >
    <header class="text-center py-8">
      <h1 class="text-5xl font-extrabold tracking-tight">
        <span
          class="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
        >
          ToDo App ✨
        </span>
      </h1>
    </header>

    <main class="w-full px-4"">
      <slot />
    </main>
  </div>
</template>
