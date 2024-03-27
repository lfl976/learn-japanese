import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
console.log(import.meta.env.BASE_URL);
// https://astro.build/config
export default defineConfig({
	site: 'https://lfl976.github.io',
	base: '/learn-japanese',
	integrations: [
		starlight({
			title: '日语学习网站',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '动词变形', link: `/guides/动词变形/` },
					],
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
