import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
console.log(import.meta.env.BASE_URL);
// https://astro.build/config
export default defineConfig({
	site: "https://lfl976.github.io",
	base: "/learn-japanese",
	server: {
		host: true,
	},
	integrations: [
		starlight({
			title: "轻松入门日语",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "入门篇", //  分类标题
					items: [
						{
							label: "为什么要学习日语？",
							link: "beginner/01-why-learn-japanese",
						},
						{ label: "日语基础知识", link: "beginner/02-basic-knowledge" },
						{ label: "五十音图详解", link: "beginner/03-fifty-sounds" },
					],
				},
				{
					label: "语法篇",
					items: [
						{
							label: "基础语法", //  子分类标题
							items: [
								{
									label: "名词与代词",
									link: "grammar/basic/04-nouns-pronouns",
								},
								{ label: "动词基础", link: "grammar/basic/05-verbs-basics" },
								{
									label: "形容词基础",
									link: "grammar/basic/06-adjectives-basics",
								},
								{ label: "助词详解", link: "grammar/basic/07-particles" },
							],
						},
						{
							label: "进阶语法", //  子分类标题
							items: [
								{ label: "动词时态", link: "grammar/advanced/08-verb-tenses" },
								{
									label: "被动语态与使役语态",
									link: "grammar/advanced/09-passive-causative",
								},
								{ label: "敬语表达", link: "grammar/advanced/10-honorifics" },
								{ label: "条件表达", link: "grammar/advanced/11-conditionals" },
								{
									label: "其他重要句型",
									link: "grammar/advanced/12-important-patterns",
								},
							],
						},
					],
				},
				{
					label: "常用表达篇",
					items: [
						{
							label: "日常问候与自我介绍",
							link: "expressions/13-greetings-introductions",
						},
						{ label: "数字与时间表达", link: "expressions/14-numbers-time" },
						{ label: "购物与点餐", link: "expressions/15-shopping-dining" },
						{
							label: "问路与交通",
							link: "expressions/16-directions-transportation",
						},
						{
							label: "其他常用表达",
							link: "expressions/17-common-expressions",
						},
					],
				},
				{
					label: "文化与实践篇",
					items: [
						{
							label: "日本文化简介",
							link: "culture-practice/18-japanese-culture",
						},
						{
							label: "日语阅读练习",
							link: "culture-practice/19-reading-practice",
						},
						{
							label: "日语听力训练",
							link: "culture-practice/20-listening-practice",
						},
						{
							label: "日语口语练习",
							link: "culture-practice/21-speaking-practice",
						},
						{
							label: "日语写作练习",
							link: "culture-practice/22-writing-practice",
						},
					],
				},
			],
		}),
	],
});
console.log(import.meta.env.BASE_URL);
