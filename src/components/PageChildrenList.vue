<template>
  <b-row>
    <b-col sm="4" v-for="child in children" :key="child.id">
      <a :href="child.link.replace(baseUrl, '')" class="child-card">
        <div class="card mb-3" style="max-width: 18rem;">
          <div class="card-body" style="text-align: left;">
            <h5 style="margin: 0 auto;">{{child.title}}</h5>
          </div>
          <div class="card-footer child-card-footer">
            <span
              class="badge badge-hack-light m-1"
              v-for="tag in child.tags"
              :key="tag.id"
            >{{tag.title}}</span>
          </div>
        </div>
      </a>
    </b-col>
  </b-row>
</template>

<static-query>
    query {
          children: allWordPressPage {
    edges {
      node {
        title
        link
        parent
        id
        tags{
          title
          id
        }
      }
    }
  }
    }
</static-query>

<script>
export default {
  props: {
    parentId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      baseUrl: process.env.GRIDSOME_BASE_URL,
    };
  },
  computed: {
    children() {
      return this.$static.children.edges
        .map((c) => c.node)
        .filter((e) => e.parent.toString() === this.parentId);
    },
  },
};
</script>

<style scoped>
.child-card {
  color: #000000;
  text-decoration: none;
}

.card {
  border: 1px dashed #9013fe;
}

.badge-hack-light {
  color: #9013fe;
  background-color: #c318d81a;
}
</style>
