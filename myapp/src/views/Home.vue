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
        >{{item.title}}
        </li>
      </ul>
      <div class="layout-logo">
        toubu
        <div
          class="menuSwitch"
          :class="{isRotate:miniAside}"
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
            :name="item.title"
            v-for="item in menuList"
            :key="item.name"
          >
            <template slot="title">
              <Icon :type="item.icon" />
              {{item.title}}
            </template>
            <MenuItem
              v-for="itm in item.children"
              :name="itm.url"
            >{{itm.title}}</MenuItem>
          </Submenu>
        </i-menu>
      </div>
    </div>
     <!-- 菜单结束 -->
     <!-- 右侧内容开始 -->
    <div id="content">
      <!-- 右侧头部开始 -->
      <div id="header">
        
      
    </div>
     <!-- 右侧头部结束 -->
     <!-- 右侧导航开始 -->
       <div id="nav">
        <div class="btn-con left-btn">
            <Button type="text" @click="handleScroll(240)" size="small">
              <Icon :size="18" type="ios-arrow-back" />
            </Button>
          </div>
          <div class="nav-content"  ref="scrollOuter">
            <div class="nav-inner-wrap"  ref="scrollBody"  :style="{left: tagBodyLeft + 'px'}">
              <transition-group name="taglist-moving-animation">
                <Tag type="dot" v-for="tab in navList" :closable="tab.closable" :color="tab.choosed ? 'primary':'#e9eaec'" :name="tab.name" @click.native="clickTag(tab)" @on-close="closeTag" :key="tab.name">{{tab.title}}</Tag>
              </transition-group>
            </div>
          </div>
          <div class="btn-con right-btn">
            <Button type="text" @click="handleScroll(-240)" size="small">
              <Icon :size="18" type="ios-arrow-forward" />
            </Button>
          </div>
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
      tagBodyLeft:0,
      miniAside: false,//菜单栏开关
      closeMiniSubMenuTimer: null,
      navScroll: null,
      showMiniSubMenuList: false,
      miniSubMenuList: [],//小菜单列表
      menuList: [],//大菜单列表
      navList:[{closable:true,choosed:false,name:"/home",title:"首页"},{closable:true,choosed:false,name:"/home8",title:"首页"},{closable:true,choosed:false,name:"/home9",title:"首页"},{closable:true,choosed:false,name:"/home11",title:"首页"},{closable:true,choosed:false,name:"/home12",title:"首页"},{closable:true,choosed:false,name:"/home13",title:"首页"},{closable:true,choosed:false,name:"/home14",title:"首页"},{closable:true,choosed:false,name:"/home15",title:"首页"},{closable:true,choosed:false,name:"/home16",title:"首页"},{closable:true,choosed:false,name:"/home17",title:"首页"},{closable:true,choosed:false,name:"/home18",title:"首页"},{closable:true,choosed:false,name:"/home19",title:"首页"},{closable:true,choosed:false,name:"/home20",title:"首页"},{closable:true,choosed:false,name:"/home7",title:"首页"},{closable:true,choosed:false,name:"/home6",title:"首页"},{closable:true,choosed:false,name:"/home5",title:"首页"},{closable:true,choosed:false,name:"/home4",title:"首页"},{closable:true,choosed:false,name:"/home3",title:"首页"},{closable:true,choosed:false,name:"/home2",title:"首页"},{closable:true,choosed:false,name:"/home1",title:"首页"}],//Nav菜单
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
      this.getMenuList();//获取主菜单列表
      this.initNavScroll();
    },
    getMenuList() {
      // this.menuList = [
      //   {
      //     name: "首页",
      //     icon: "ios-analytics",
      //     list: [
      //       { name: "标题1", url: "/item1" },
      //       { name: "标题2", url: "/item2" }
      //     ]
      //   }
      // ];
      this.menuList=[
                {
                    title:'首页',
                    num:1,
                    name:'admin',
                    icon:'ios-home',
                    href:'/home',
                    closable:false,
                    showInTags:true,
                    showInMenus:true,
                    choosed:true
                },         
                {
                    title:'会员与代理商',
                    name:'members-agents',
                    icon:'ios-people',
                    children:[
                        {
                            title:'会员管理',
                            name:'memberManage',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'会员等级管理',
                            name:'memberLevels',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'会员汇入',
                            name:'memberRemit',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'代理商管理',
                            name:'agentManage',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'代理商申请审核',
                            name:'agent-audit',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        }
                    ]
                }]
    },
    miniSubMenuEnter: function() {
      clearTimeout(this.closeMiniSubMenuTimer);
    },
    changeSwicthMenu() {
      this.miniAside = !this.miniAside;
      // this.$nextTick(() => {
      //   this.navScroll.refresh();
      // });
    },//开启大小菜单
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
    },//鼠标移入小菜单
    closeMiniSubMenu() {
      this.closeMiniSubMenuTimer = setTimeout(() => {
        this.miniSubMenuList = [];
        this.showMiniSubMenuList = false;
      }, 100);
    },
    handleScroll(offset){
      console.log(offset)
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    clickTag(tab){
      console.log(tab)
      // this.navList.forEach(_tag=>{
      //           if(_tag.name == tag.name){
      //               _tag.choosed=true;
      //           }else{
      //               _tag.choosed= false;
      //           }
      //       })
      //       // 设置菜单选中name
      //       this.activeMenuName = tag.name;
      //       localStorage.activeMenuName = this.activeMenuName;
      //       // 刷新菜单
      //       this.$nextTick(()=>{
      //           if(this.$refs.side_menu){
      //               this.$refs.side_menu.updateActiveName()
      //           }
      //       });
      //       //点击tab跳转
      //       this.$router.push(`${tag.href}`);
    },
    closeTag(event, name){
      // 判断该标签是否是选中状态
            // 如果是那么就要设置标签数组中最后一个标签成选中状态
            // 如果否那么就直接删除就好
            let is_choosed = false;
            console.log(event,name)
            // this.menus.forEach((menu)=>{
            //     if(menu.name == name){
            //         is_choosed = menu.choosed;
            //         menu.showInTags = false;
            //     }
            // })
            // // 关闭标签并选中tags中最后一个标签高亮
            // if(is_choosed){
            //     let last_tag = this.tags[this.tags.length-1];
            //     last_tag.choosed = true;
            //     this.$router.push(last_tag.href);
            //     this.activeMenuName = last_tag.name;
            //     localStorage.activeMenuName = this.activeMenuName;
            // }
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
      .isRotate{
        transform: rotate(90deg)
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
      height: 40px;
      border-bottom: 1px solid #cecece;
      box-sizing: border-box;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      position: relative;
      .nav-content{
        flex:1;
        // display:flex;
        position:absolute;
        left:35px;
        right:35px;
        height:100%;
        overflow: hidden;
        .nav-inner-wrap{
          left:0;
          padding: 1px 4px 0;
          position: absolute;
          white-space: nowrap;
          -webkit-transition: left .3s ease;
          transition: left .3s ease;
        }
      }
      .btn-con{
        position: absolute;
        top: 0px;
        height: 100%;
        background: #fff;
        z-index: 10;
        display: flex;
        align-items: center;

      }
      .left-btn{
        left:0;
        border-right: 1px solid #f0f0f0;
      }
      .right-btn{
        right:0;
        border-left: 1px solid #f0f0f0;
      }
    }
    .layout-main {
      flex: 1;
    }
  }
}
</style>
