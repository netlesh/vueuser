<template>
  <Page>
    <ActionBar title="kuslar"></ActionBar>
    <StackLayout>
      <Label class="m-20" :text="message" textWrap="true"></Label>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      message: "Kuş listesi."
    };
  }
};
</script>

<style></style>
