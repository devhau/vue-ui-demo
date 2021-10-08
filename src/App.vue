<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      menu: {
        app: {
          logo: {
            app: "VAccount",
            mini: "VAC",
          },
          version: {
            app: "Version 1.0.2",
            mini: "1.0.2",
          },
        },
        sidebar: [
          {
            className: "",
            icon: () => "bi bi-box",
            title: () => `Bảng điều khiển${new Date()}`,
            link: "/",
          },
          {
            className: "",
            icon: "bi bi-box",
            title: "Gantt",
            router: {
              name: "Gantt",
            },
          },
          {
            className: "vh-user",
            icon: "bi bi-box",
            title: "Công việc",
            link: "",
            sub: () => {
              return h("h1", {}, "xin chào");
            },
          },
          {
            className: "",
            icon: "bi bi-box",
            title: "Chấm công",
            link: "",
          },
        ],
        header: {
          left: [
            {
              className: "",
              icon: "bi bi-box",
              title: "Trang chủ",
              link: "",
              sub: [],
            },
            {
              className: "",
              icon: "bi bi-box",
              title: "Báo cáo",
              link: "",
              sub: [
                {
                  className: "",
                  icon: "bi bi-box",
                  title: "Báo cáo doanh thu",
                  link: "",
                },
                {
                  className: "",
                  icon: "bi bi-box",
                  title: "Báo cáo nguồn hàng",
                  link: "",
                },
              ],
            },
            {
              className: "",
              icon: "bi bi-box",
              title: "Đơn hàng",
              link: "",
              sub: [],
            },
            {
              className: "",
              icon: "bi bi-box",
              title: "Đặt hàng",
              link: "",
              sub: [],
            },
          ],
          right: [
            {
              className: "",
              icon: "bi bi-box",
              title: "Tin nhắn",
              link: "",
              sub: [],
            },
            {
              className: "",
              icon: "bi bi-box",
              title: "Profile",
              link: "",
              sub: () => {
                return h("h1", {}, "xin chào");
              },
            },
          ],
        },
        footer: [
          {
            className: "",
            icon: "bi bi-box",
            title: "quản lý người dùng",
            link: "",
            sub: [],
          },
          {
            className: "",
            icon: "bi bi-box",
            title: "quản lý người dùng",
            link: "",
            sub: [],
          },
        ],
      },
    };
  },
});
</script>

<template>
  <vh-application
    :menu="menu"
    :miniSidebar="false"
  >
    <router-view></router-view>
  </vh-application>
</template>