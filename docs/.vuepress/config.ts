import { defineUserConfig, defaultTheme} from 'vuepress'

export default defineUserConfig({
	base:'/',
	lang: 'zh-CN',
	title: 'LearnJTs',
	description: 'JS工具类方法,手写常用js方法汇总',
	head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

    theme: defaultTheme({
		// tab栏的图标; 图片 / 会自动去public文件夹里找图片
		logo: '/images/logo.png',

		// 顶部导航条   
		navbar: [
			{
				text: '介绍',
				link: '/pages/introduce.md',
			},
			// NavbarGroup
			{
				text: '教程',
				children: [
					{
						text: '安装指南',
						link: '/pages/learnJTs/install_guide.md',
						// 该元素将一直处于激活状态
						activeMatch: '/pages/learnJTs/install_guide.md',
					},
					{
						text: 'API使用',
						link: '/pages/learnJTs/detail_usage.md',
							activeMatch: '/pages/learnJTs/detail_usage.md',
						},
					{
						text: '待定...',
						link: '/pages/other/other.md',
						},
					],
			},
		],
		repo: 'https://github.com/dongyuanwai/learnjts',

        // 侧边栏
		sidebar: {
			// 不同子路径下的页面会使用不同的侧边栏
			'/pages/learnJTs/': [
				{
				text: '使用教程',
				children: ['install_guide.md', 'detail_usage.md'],
				},
			],
			'/pages/other/': [
				{
				text: 'other',
				children: ['other.md'],
				},
			],
		},

	}),
    
})