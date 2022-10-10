import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import piniaPersist from '@/plugins/pinia-plugin-persist'

import 'virtual:windi.css'
import './main.css'

export function createApp() {
  const app = createSSRApp(App);
	const pinia = Pinia.createPinia();
	pinia.use(piniaPersist)
	app.use(pinia);
	return {
		app,
		Pinia,
	};
}
