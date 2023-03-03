<template>
    <div class="menu-cover" :class="{'is-active':active}" >
        <div class="hamburger"></div>
    </div>
</template>
<script>
export default {
    props:['active']
}
</script>
<style scoped>
.menu-cover {
  background-color: transparent;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.menu-cover .hamburger {
  width: 25px;
  height: 3px;
  position: absolute;
  background-color: #ffffff;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.menu-cover .hamburger::before {
  content: "";
  position: absolute;
  top: -9px;
  width: 25px;
  height: 3px;
  position: absolute;
  background-color: #ffffff;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.menu-cover .hamburger::after {
  content: "";
  position: absolute;
  top: 9px;
  width: 25px;
  height: 3px;
  position: absolute;
  background-color: #ffffff;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.menu-cover.is-active .hamburger {
  background-color: transparent;
  -webkit-box-shadow: transparent;
  box-shadow: transparent;
}

.menu-cover.is-active .hamburger::before {
  top: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.menu-cover.is-active .hamburger::after {
  top: 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
</style>