// stores/counter.js
import { defineStore } from 'pinia';
import uniStorage from '@/utils/uniStorage';
import {version} from '~/package.json'

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0, version };
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
	persist: {
		enabled: true,
		strategies: [
			{
				storage: uniStorage,
				paths: ['count']
			}
		]
	}
});
