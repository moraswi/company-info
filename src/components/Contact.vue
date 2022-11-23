<template>
  <div class="div pb-10">
    <v-card class="contactTop text-left" color="red" width="100%" flat>
      <v-container class="pb-3 pt-5">
        <h1 class="heading-h1 white--text">GET IN TOUCH WITH US</h1>
        <p class="paragraph-p1 white--text">
          Fill out the form below and we’ll be right with you!
        </p>
      </v-container>
    </v-card>
    <v-container class="mt-md-16">
      <v-row>
        <v-col class="text-left" cols="12" md="5">
          <h1>EMAIL US</h1>
          <h2>emai@emai.com</h2>
          <h1 class="mt-16">PHONE US</h1>
          <h2>011 111 2222</h2>
          <h1 class="mt-16">LOCATION</h1>
          <h2>South Africa,Limpopo,Polokwane</h2>
          <h3></h3>

          <div class="d-flex mt-5 hidden-sm-and-down">
            <v-icon large color="blue"> mdi-facebook </v-icon>
            <v-icon class="ml-5" large color="blue"> mdi-twitter </v-icon>
            <v-icon class="ml-5" large color="red"> mdi-instagram </v-icon>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <form ref="form" @submit.prevent="sendEmail()">
            <!-- Name -->

            <div class="field">
              <input
                v-model="form.fullName"
                type="text"
                autocomplete="off"
                name="fullName"
                id="fullName"
              />
              <label
                for="fullName"
                title="Full Name"
                data-title="Full Name"
              ></label>
            </div>

            <!--email  -->

            <div class="field mt-16">
              <input
                v-model="form.email"
                type="text"
                autocomplete="off"
                name="email"
                id="email"
              />
              <label for="email" title="Email" data-title="Email"></label>
            </div>

            <!-- Company -->

            <div class="field mt-16">
              <input
                v-model="form.companyName"
                type="text"
                autocomplete="off"
                name="company_name"
                id="company_name"
              />
              <label
                for="company"
                title="Company Name"
                data-title="Company Name"
              ></label>
            </div>

            <div class="field mt-16">
              <input
                v-model="form.phoneNumber"
                type="text"
                autocomplete="off"
                name="phoneNumber"
                id="phoneNumber"
              />
              <label
                for="phone"
                title="Phone Number"
                data-title="Phone Number"
              ></label>
            </div>

            <!-- Message -->
            <div class="field">
              <textarea
                v-model="form.message"
                class="message mt-7"
                name="message"
                id="message"
              ></textarea>
              <label
                class="ml-2 messageLable"
                for="email"
                title="Message"
                data-title="Message"
              ></label>
            </div>

            <button
              type="submit"
              id="submit"
              onclick="sendEmail()"
              class="sendBtn primary--text"
            >
              <v-span class=""> SEND</v-span>
            </button>
          </form>
        </v-col>
      </v-row>
    </v-container>
    <!-- Overlay -->
    <v-overlay :value="overlay" z-index="10">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
// import emailjs from "@emailjs/browser";
// import axios from "axios";

export default {
  name: "contactUs",

  data() {
    return {
      overlay: false,
      error: [],

      form: {
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        message: "",
      },
    };
  },

  //   methods: {
  //     async sendEmail() {
  //       try {
  //         this.overlay = true;
  //         var url = process.env.VUE_APP_AI_API_URL;
  //         var apiKey = process.env.VUE_APP_AI_API_KEY;

  //         const res = await axios.post(
  //           url + "emails/send-email",
  //           {
  //             name: this.form.fullName,
  //             email: this.form.email,
  //             company: this.form.companyName,
  //             contact_number: this.form.phoneNumber,
  //             message: this.form.message,
  //             website_name: "Softidoc Verify ID",
  //           },
  //           {
  //             headers: {
  //               AppApiKey: apiKey,
  //             },
  //           }
  //         );

  //         if (res.status == 200) {
  //           console.log(res);
  //           this.$swal({
  //             icon: "success",
  //             title: "Thank you!",
  //             text: "Your submission has been sent.",
  //           });
  //         }
  //       } catch (error) {
  //         const res = error.response;
  //         const data = res.data;
  //         const status = error.response.status;
  //         console.log("error");

  //         if (status == 400) {
  //           console.log(res);
  //           if ("errors" in data) {
  //             if ("name" in data.errors) {
  //               this.$swal({
  //                 icon: "error",
  //                 title: "Oops...",
  //                 text: data.errors.name[0],
  //               });
  //             } else if ("email" in data.errors) {
  //               this.$swal({
  //                 icon: "error",
  //                 title: "Oops...",
  //                 text: data.errors.email[0],
  //               });
  //             } else if ("contact_number" in data.errors) {
  //               this.$swal({
  //                 icon: "error",
  //                 title: "Oops...",
  //                 text: data.errors.contact_number[0],
  //               });
  //             } else if ("message" in data.errors) {
  //               this.$swal({
  //                 icon: "error",
  //                 title: "Oops...",
  //                 text: data.errors.message[0],
  //               });
  //             }
  //           }
  //         } else if (status == 404) {
  //           console.log(res);

  //           if ("message" in data) {
  //             this.$swal({
  //               icon: "error",
  //               title: "Oops...",
  //               text: "Page not found",
  //             });
  //           }
  //         } else if (status == 422) {
  //           console.log(res);

  //           if ("message" in data) {
  //             this.$swal({
  //               icon: "error",
  //               title: "Oops...",
  //               text: data.message,
  //             });
  //           }
  //         } else if (status == 500) {
  //           console.log(res);
  //           this.$swal({
  //             icon: "error",
  //             title: "Oops...",
  //             text: "Something went wrong!",
  //           });
  //         }
  //       } finally {
  //         this.overlay = false;
  //       }
  //     },

  //     // sendEmails() {
  //     //   var serviceId = process.env.VUE_APP_YOUR_SERVICE_ID;
  //     //   var templateId = process.env.VUE_APP_YOUR_TEMPLATE_ID;
  //     //   var publicKey = process.env.VUE_APP_YOUR_PUBLIC_KEY;

  //     //   this.overlay = true;

  //     //   if (
  //     //     this.form.name === "" ||
  //     //     this.form.email === "" ||
  //     //     this.form.companyName === "" ||
  //     //     this.form.message === ""
  //     //   ) {
  //     //     this.$swal({
  //     //       icon: "error",
  //     //       title: "Request failed",
  //     //       text: "Please fill out all the fields",
  //     //     });
  //     //     this.overlay = false;
  //     //   } else if (!this.validName(this.form.name)) {
  //     //     this.$swal({
  //     //       icon: "error",
  //     //       title: "Request failed",
  //     //       text: "Name must contain only A to Z or a to z",
  //     //     });
  //     //     this.overlay = false;
  //     //   } else if (!this.validEmail(this.form.email)) {
  //     //     this.$swal({
  //     //       icon: "error",
  //     //       title: "Request failed",
  //     //       text: "Invalid email",
  //     //     });
  //     //     this.overlay = false;
  //     //   } else {
  //     //     emailjs
  //     //       .sendForm(serviceId, templateId, this.$refs.form, publicKey)
  //     //       .then(
  //     //         (result) => {
  //     //           this.$swal({
  //     //             icon: "success",
  //     //             title: "Thank you!",
  //     //             text: "Your submission has been sent.",
  //     //           });
  //     //           console.log("SUCCESS!", result.text);
  //     //           this.overlay = false;
  //     //         },
  //     //         (error) => {
  //     //           console.log("error...", error);

  //     //           this.$swal({
  //     //             icon: "error",
  //     //             title: "Request failed",
  //     //             text: "An internal error occurred during your request!",
  //     //           });

  //     //           this.overlay = false;
  //     //         }
  //     //       );
  //     //   }
  //     // },

  //     validName: function (fullName) {
  //       var nameVar = /^[a-zA-Z\s]+$/;
  //       return nameVar.test(fullName);
  //     },

  //     validEmail: function (email) {
  //       var re =
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //       return re.test(email);
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
@import "@/components/Contact.scss";
</style>
