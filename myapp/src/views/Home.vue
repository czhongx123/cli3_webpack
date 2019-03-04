<template>
  <div class="home">
    <!-- 菜单开始 -->
    <div
      class="layout-menu"
      :class="{mini: miniAside}"
    >
      <ul
        class="miniMenu-subMenu"
        v-show="showMiniSubMenuList"
        @mouseenter="miniSubMenuEnter"
        @mouseleave="closeMiniSubMenu"
      >
        <li
          v-for="item in miniSubMenuList"
          :name="item.url"
          :key="item.name"
          @click="changePage(item.url)"
        >{{item.name}}
        </li>
      </ul>
      <div class="layout-logo">
        toubu
        <div
          class="menuSwitch"
          @click="changeSwicthMenu"
        >
          <Icon type="md-menu" />
        </div>
      </div>
      <div
        class="menu-content"
        :class="{mini: miniAside}"
      >
        <ul
          v-if="miniAside"
          class="miniMenu"
        >
          <li
            v-for="(item, index) in menuList"
            ref="miniMenuItem"
            :key="item.name"
            @mouseenter="miniMenuEnter(item,index)"
            @mouseleave="closeMiniSubMenu"
          >
            <Icon
              :type="item.icon"
              class="menu-icon"
            />
          </li>
        </ul>
        <i-menu
          theme="dark"
          width="auto"
          accordion
          v-else
          @on-select="changePage"
        >
          <Submenu
            :name="item.name"
            v-for="item in menuList"
            :key="item.name"
          >
            <template slot="title">
              <Icon :type="item.icon" />
              {{item.name}}
            </template>
            <MenuItem
              v-for="itm in item.list"
              :name="itm.url"
            >{{itm.name}}</MenuItem>
          </Submenu>
        </i-menu>
      </div>
    </div>
     <!-- 菜单结束 -->
     <!-- 右侧内容开始 -->
    <div id="content">
      <!-- 右侧头部开始 -->
      <div id="header">
        头部
    </div>
     <!-- 右侧头部结束 -->
     <!-- 右侧导航开始 -->
       <div id="nav">
      我的nav
  </div>
        <!-- 右侧导航结束 -->
        <!-- 主页面内容开始 -->
      <div class="layout-main">
        <router-view />
      </div>
       <!-- 主页面内容结束-->
    </div>
    <!-- 右侧内容结束 -->
  </div>
</template>

<script>
// @ is an alias to /src

import { getDiffDate } from "@/assets/js/tool";
import homeapi from "@/api/home";
import $ from "jquery";
import BScroll from "better-scroll";

export default {
  name: "home",
  components: {
  },
  data() {
    return {
      timer: null,
      miniAside: false,
      closeMiniSubMenuTimer: null,
      navScroll: null,
      showMiniSubMenuList: false,
      miniSubMenuList: [],
      menuList: []
    };
  },
  mounted() {
    console.log(homeapi);
    console.log(getDiffDate("2019-02-04", "2019-03-04"), "tool");
    console.log($(".home img").attr("src"));
    // let i=0;
    // this.timer=setInterval(()=>{
    //   i++;
    //   console.log(i)
    // },1000)
    this.init();
  },
  methods: {
    init() {
      this.getMenuList();
      this.initNavScroll();
    },
    getMenuList() {
      this.menuList = [
        {
          name: "首页",
          icon: "ios-analytics",
          list: [
            { name: "标题1", url: "/item1" },
            { name: "标题2", url: "/item2" }
          ]
        }
      ];
    },
    miniSubMenuEnter: function() {
      clearTimeout(this.closeMiniSubMenuTimer);
    },
    changeSwicthMenu() {
      this.miniAside = !this.miniAside;
      // this.$nextTick(() => {
      //   this.navScroll.refresh();
      // });
    },
    initNavScroll: function() {
      // this.navScroll = new BScroll("#layout-page-nav", {
      //   scrollX: true,
      //   scrollY: false,
      //   mouseWheel: true
      // });
    },
    changePage(page) {
      console.log(page);
      this.$router.push({ path: page });
    },
    miniMenuEnter(item, index) {
      if (item.list.length > 0) {
        clearTimeout(this.closeMiniSubMenuTimer);
        document.querySelector(".miniMenu-subMenu").style.top =
          this.$refs.miniMenuItem[index].offsetTop + "px";
        this.miniSubMenuList = item.list;
        console.log(this.miniSubMenuList, "this.miniSubMenuList");
        this.showMiniSubMenuList = true;
      } else {
        this.miniSubMenuList = [];
        this.showMiniSubMenuList = false;
      }
    },
    closeMiniSubMenu() {
      this.closeMiniSubMenuTimer = setTimeout(() => {
        this.miniSubMenuList = [];
        this.showMiniSubMenuList = false;
      }, 100);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>
<style scoped lang="scss">
.home {
  background: #fff;
  display: flex;
  .layout-menu {
    width: 200px;
    transition: width 0.3s;
    background: #515a6d;
    position: relative;
    z-index: 99999;
    height: 100%;
    .miniMenu-subMenu {
      position: absolute;
      transition: width 0.3s;
      z-index: 99;
      left: 90px;
      background: #515a6d;
      li {
        width: 150px;
        height: 40px;
        transition: width 0.3s;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #eee;
        cursor: pointer;
        list-style: none;
        &:hover {
          background: #363e4f;
        }
      }
    }
    .layout-logo {
      height: 60px;
      position: relative;
      background: #515a6d;
      transition: width 0.3s;
      .menuSwitch {
        position: absolute;
        height: 60px;
        top: 0;
        right: -40px;
        width: 40px;
        font-size: 30px;
        line-height: 60px;
        cursor: pointer;
      }
    }
    .menu-content {
      width: 200px;
      height: 100%;
      transition: width 0.3s;
      overflow: auto;
      .miniMenu {
        width: 90px;
        transition: width 0.3s;
        li {
          width: 100%;
          height: 70px;
          text-align: center;
          position: relative;
          transition: width 0.3s;
          .menu-icon {
            line-height: 70px;
            font-size: 24px;
            color: #f5f5f5;
          }
        }
      }
    }
    .mini {
      width: 90px;
      transition: width 0.3s;
    }
  }
  .mini {
    width: 90px;
    transition: width 0.3s;
  }

  #content {
    flex: 1;
    display: flex;
    flex-direction: column;
    #header {
      height: 60px;
      border-bottom: 1px solid #cecece;
      box-sizing: border-box;
    }
    #nav {
      height: 30px;
      border-bottom: 1px solid #cecece;
      box-sizing: border-box;
    }
    .layout-main {
      flex: 1;
    }
  }
}
</style>
