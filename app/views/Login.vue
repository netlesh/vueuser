<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="nt-page">
      <StackLayout class="nt-form m-20">
        <Image
          class="logo m-b-20"
          src="~/assets/images/sebAPP-logo.png"
          width="150"
        ></Image>

        <GridLayout rows="auto, auto, auto">
          <StackLayout row="0" class="input-field">
            <TextField
              class="nt-input -rounded m-t-10 -border"
              hint="e-posta"
              keyboardType="email"
              autocorrect="false"
              autocapitalizationType="none"
              v-model="user.email"
              returnKeyType="next"
              @returnPress="focusPassword"
            ></TextField>
          </StackLayout>

          <StackLayout row="1" class="input-field">
            <TextField
              class="nt-input -rounded m-t-10 -border"
              ref="password"
              hint="Şifreniz"
              secure="true"
              v-model="user.password"
              returnKeyType="done"
            ></TextField>
          </StackLayout>

          <ActivityIndicator rowSpan="3"></ActivityIndicator>
        </GridLayout>

        <Button text="Giriş" @tap="submit" class="-primary m-t-20"></Button>
        <StackLayout class="hr m-30"></StackLayout>

        <Label
          class="pull-right text-danger"
          text="Şifrenizi mi unuttunuz?"
          @tap="forgotPassword()"
        ></Label>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      axios;
      const formData = {
        identifier: this.user.email,
        password: this.user.password
      };
      console.log(formData);
      axios
        .post("http://192.168.0.2:1337/auth/local", {
          identifier: formData.identifier,
          password: formData.password
        })
        .then(response => {
          // Handle success.
          console.log("Well done!");
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
        })
        .catch(error => {
          // Handle error.
          console.log("An error occurred:", error);
        });
    },
    focusPassword() {
      this.$refs.password.nativeView.focus();
    },
    forgotPassword() {
      console.warn("Sifre unutmus");
    }
  }
};
</script>

<style></style>
