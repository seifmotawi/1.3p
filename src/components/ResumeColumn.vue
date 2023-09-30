<!-- Columns for the resume page, section title, timeline vertical lines, the item cards, etc -->
<template>
  <div class="resume-column">
    <h2 class="section-title">{{ title }}</h2>
    <div class="timeline">
      <div class="vertical-line"></div>
      <div 
        v-for="(item, index) in items" 
        :key="item.title" 
        class="item-card"
        :style="{ top: `${index * 10}px` }"
      >
        <div class="year">{{ item.year }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="company">{{ item.company }}</div>
        <!-- Updated description div -->
        <div 
          v-for="(point, pointIndex) in item.description" 
          :key="pointIndex" 
          class="description"
        >
          {{ point }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};


</script>

<style scoped>
.resume-column {
  flex: 1;
  position: relative;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.timeline {
  display: grid;
  grid-auto-rows: minmax(100px, auto); 
  gap: 20px; 
  position: relative;
  padding-left: 50px;
}


.vertical-line {
  position: absolute;
  top: 0;
  left: 25px; 
  width: 2px;
  height: 100%;
  background: #000;
}

.item-card {
  position: relative;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem; 
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.item-card::before {
  content: "";
  position: absolute;
  left: -31px; 
  top: 10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #000;
}

.year,
.title,
.company,
.description {
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.5rem;
}

.company {
  font-size: 1.2rem;
}

.item-card {
  transition: background-color 0.5s ease, color 0.5s ease;
}

.item-card:hover {
  background-color: #7b7b7b;
  color: #fff;
}
</style>