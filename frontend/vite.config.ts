import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
export default defineConfig({
	build: {
		outDir: 'build',
	},
	server:{
		host:'localhost',
		port:3000
	},

	plugins: [
		react(),
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
		}),
	],
});
