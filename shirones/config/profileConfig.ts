import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "@/utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "/images/demo-avatar.png",
	name: "WYL.龙尊",
	bio: "一个喜欢在代码、创意与日常之间来回徘徊的初中生",
	links: [
		{
			name: "X",
			icon: "fa6-brands:x-twitter",
			url: "https://x.com/LongZunNB",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/profiles/76561199754303717/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/wyl9178",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/3546704626322093",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://github.com/wyl9178",
		},
        {
			name: "tiktok",
			icon: "fa6-brands:tiktok",
			url: "https://www.douyin.com/user/MS4wLjABAAAAUQAkKBeDuCLNR0SY052hvOcVBca2P9fCeWAxjbLE4CfohMtjBMp3VJh3uF2QWS3j?from_tab_name=main&relation=0&vid=7534151914452782393",
		},
	],
});
