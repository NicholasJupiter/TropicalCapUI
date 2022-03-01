<template>
  <h4>基本用法</h4>

  <cap-popover
    title="New feature!"
    placement="left"
    v-model:visibled="top"
    theme="light"
  >
    <template #content>
      <p style="font-size: 12px; line-height: 20px">
        This is a handy template you can use for your apps (as a an onboarding
        tip feature for instance). Feel free to resize it
      </p>
    </template>

    <template #footer>
      <cap-button size="small" type="assistant" round plain> Skip </cap-button>
      <cap-button size="small" type="assistant" round> Next </cap-button>
    </template>
    <cap-button size="large" style="margin-top: 10px;">Top</cap-button>
  </cap-popover>

  <div style="margin-top: 20px;display:flex;justify-content: space-between;">
    <cap-popover 
      title="New feature!"
      placement="right"
      theme="light"
    >
      <template #content>
        <p style="font-size: 12px; line-height: 20px">
          This is a handy template you can use for your apps (as a an onboarding
          tip feature for instance). Feel free to resize it
        </p>
      </template>

      <template #footer>
        <cap-button size="small" type="assistant" round plain>
          Skip
        </cap-button>
        <cap-button size="small" type="assistant" round> Next </cap-button>
      </template>

      <cap-button size="small">Right</cap-button>
    </cap-popover>

    <cap-popover 
      title="New feature!"
      placement="left"
      theme="light"
    >
      <template #content>
        <p style="font-size: 12px; line-height: 20px">
          This is a handy template you can use for your apps (as a an onboarding
          tip feature for instance). Feel free to resize it
        </p>
      </template>

      <template #footer>
        <cap-button size="small" type="assistant" round plain>
          Skip
        </cap-button>
        <cap-button size="small" type="assistant" round> Next </cap-button>
      </template>

      <cap-button size="small">Left</cap-button>
    </cap-popover>
  </div>

  <cap-popover title="New feature!" placement="right" theme="dark">
    <template #content>
      <p style="font-size: 12px; line-height: 20px">
        This is a handy template you can use for your apps (as a an onboarding
        tip feature for instance). Feel free to resize it
      </p>
    </template>
    <template #footer>
      <cap-button size="small" type="assistant" round plain> Skip </cap-button>
      <cap-button size="small" type="assistant" round> Next </cap-button>
    </template>
    <cap-button size="large">Bottom</cap-button>
  </cap-popover>

</template>  
<script lang="tsx" setup></script>
<style lang="scss">
.preview-content {
  .cap-button--large {
    margin-top: 20px;
  }
}
</style>
