<template>
  <router-view/>
</template>

<style>
body {
  margin: 0;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background-color: #c7c7c7;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background: rgba(0,62,154,0.8);
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0,62,154,0.4);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,62,154,1);
}
</style>
