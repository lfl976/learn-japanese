import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
console.log(import.meta.env.BASE_URL);
// https://astro.build/config
export default defineConfig({
	site: 'https://lfl976.github.io',
	base: '/learn-japanese',
	server: {
		host: true,
	},
	integrations: [
		starlight({
			title: '日语学习网站',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
console.log(import.meta.env.BASE_URL);
