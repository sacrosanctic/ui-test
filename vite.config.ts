import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitbook } from 'kitbook/plugins/vite';

export default defineConfig({
	plugins: [kitbook(), sveltekit()]
});
