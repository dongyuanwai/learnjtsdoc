import { defineUserConfig, defaultTheme} from 'vuepress'
import sidebar from './config/slidebar.js'
export default defineUserConfig({
	base:'/learnjtsdoc/',
	lang: 'zh-CN',
	title: 'LearnJTs',
	description: 'JS工具类方法,手写常用js方法汇总,算法,JavaScript解算法',
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
			// 算法的导航
			{
				text: '算法',
				link: '/pages/algorithm/index.md',
			},
		],
		repo: 'https://github.com/dongyuanwai/learnjts',

        // 侧边栏
		sidebar: sidebar
	}),
    
})