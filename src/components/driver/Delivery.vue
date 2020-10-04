<template lang="pug">
    div
        h1 {{ client }} | {{ location }}
        h2(v-if='recived') {{ recievedOn: }}
        h2(v-if='!recieved') {{ expectedBy: }}
        h2 Driver: {{ driverName }}
</template>

<script>
export default {
  props: {
    deliveryId: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      id: "",
      client: "",
      location: ""
    };
  },
  methods: {
    fetchDelivery() {
      this.data;
    }
  }
};
</script>

<style scoped></style>
