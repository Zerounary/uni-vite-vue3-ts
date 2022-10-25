import { shareMixinRoot, shareMixinMethods } from '@/utils/share'
import { navigateMixinMethods } from '@/utils/navigate'

const mixins = {
  ...shareMixinRoot,
  methods: {
    ...shareMixinMethods,
    ...navigateMixinMethods,
  },
}
export default mixins
