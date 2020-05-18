<template>
  <v-col cols="12" md="8">
    <v-card>
      <ValidationObserver
        ref="observer"
        v-slot="{ invalid, validated, passes, validate }"
      >
        <v-card-text class="pt-0">
          <v-row>
            <v-col cols="12">
              <!-- content goes here -->
              <v-form>
                <v-row>
                  <v-col cols="12" md="3">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="code"
                    >
                      <v-text-field
                        name="code"
                        label="Code"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.code"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="name"
                    >
                      <v-text-field
                        name="name"
                        label="Name"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.name"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="address"
                    >
                      <v-textarea
                        name="address"
                        label="Address"
                        hint="Hint text"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.address"
                      ></v-textarea>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="city"
                    >
                      <v-text-field
                        name="city"
                        label="City"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.city"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12" md="4">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="province"
                    >
                      <v-text-field
                        name="province"
                        label="Province"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.province"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12" md="4">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="postal_code"
                    >
                      <v-text-field
                        name="postal_code"
                        label="Postal Code"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.postal_code"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="country"
                    >
                      <v-text-field
                        name="country"
                        label="Country"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.country"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12" md="8">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="tax_number"
                    >
                      <v-text-field
                        name="tax_number"
                        label="Tax ID. Number"
                        :error-messages="errors"
                        :success="valid"
                        v-model="dataForm.tax_number"
                        masked="true"
                        v-mask="'##.###.###.#-###.###'"
                        autocomplete="off"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required"
                      name="tax_number"
                    >
                      <v-file-input
                        :rules="rules"
                        :error-messages="errors"
                        :success="valid"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="Avatar"
                        v-model="dataForm.logo"
                      ></v-file-input>
                    </ValidationProvider>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="px-4 pb-5">
          <v-btn @click="clear">Clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="validate()">Validate</v-btn>
          <v-btn
            color="primary"
            @click="passes(submit)"
            :disabled="invalid || !validated"
            >Sign Up</v-btn
          >
        </v-card-actions>
      </ValidationObserver>
    </v-card>
  </v-col>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data: () => ({
    dataForm: {
      code: "",
      name: "",
      address: "",
      city: "",
      province: "",
      postal_code: "",
      country: "",
      tax_payer_no: "",
      logo: ""
    },
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ]
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      Object.assign(this.$data, this.$options.data());
      this.$refs.observer.reset();
    }
  }
};
</script>

<style>
</style>