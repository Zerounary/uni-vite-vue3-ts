import { createSSRApp } from "vue";
import App from "./App.vue";

import * as Pinia from 'pinia';
import piniaPersist from '@/plugins/pinia-plugin-persist'

// #ifdef H5 || APP-PLUS
import {Popup, Cell } from 'vant'
import 'vant/lib/index.css'
// #endif
import 'virtual:windi.css'
import './main.css'

export function createApp() {
  const app = createSSRApp(App);
	const pinia = Pinia.createPinia();
	pinia.use(piniaPersist)
	app.use(pinia);
	// #ifdef H5 || APP-PLUS
	app.use(Popup)
	app.use(Cell)
	// #endif
	return {
		app,
		Pinia,
	};
}
