import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig({
	build: {
		outDir: 'build',
		chunkSizeWarningLimit: 1600,
	},
	server:{
		host:'localhost',
		port:3000
	},

	plugins: [
		react({
			babel: {
				presets: ['@babel/preset-typescript'],
				plugins: [
					'@babel/plugin-transform-typescript',
					[
						'babel-plugin-styled-components',
						{
							ssr: false,
							pure: true,
							displayName: true,
							fileName: true,
							minify: true,
						},
					],
				],
			},
		}),
		checker({
			typescript: true,
		}),
		svgrPlugin({
			svgrOptions: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							removeViewBox: false,
						},
					],
				},
				// ...svgr options (https://react-svgr.com/docs/options/)
			},
		})
	],
});
