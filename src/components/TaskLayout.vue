<template>
    <div class="layout">
      <header class="layout-header">
        <slot name="header" />
      </header>
  
      <main class="layout-body">
        <slot name="body" />
      </main>
  
      <footer class="layout-footer">
        <slot name="bottom" />
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
.layout {
  max-width: 600px;
  margin: 40px auto;
  padding: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

/* Header */
.layout-header {
  background-color: #f8f9fa;
  padding: 20px;
  position: relative;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 1px solid #e0e0e0;
}

.layout-header::after {
  content: "⚙️";
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  opacity: 0.6;
}

/* Body */
.layout-body {
  padding: 24px 20px 70px 20px;
  position: relative;
}

/* Footer */
.layout-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 12px 0;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  border-top: 1px solid #ddd;
}
</style>

  