import { storiesOf } from '@storybook/vue'
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import OdsButton from '@onesait/onesait-ds/lib/button'
import iconsArray from '@onesait/onesait-ds/lib/icon.json'

const icons = iconsArray.map(e => `ods-icon-${e}`)
const stories = storiesOf('ODS/Button', module)

const types = [
  'primary',
  'secondary',
  'text'
]

types.forEach(type => {
  const template = `
    <ods-button
      @click="handleClick"
      type="${type}"
      :disabled="disabled"
      :circle="circle"
      :loading="loading"
      icon="ods-icon-plus">
      {{ text }} {{ icon }}</ods-button>
  `

  stories.add(type, () => ({
    components: {
      'ods-button': OdsButton
    },
    template: template,
    methods: {
      handleClick: action('clicked')
    },
    props: {
      text: {
        default: text('Text', 'Welcome to ODS')
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      loading: {
        default: boolean('Loading', false)
      },
      circle: {
        default: boolean('Circle', false)
      },
      icon: select('Icons', icons, '')
    }
  }))
})