import { RouteRecordRaw } from 'vue-router'

import { IBreadCrumb } from '@/base-ui/breadcrumb'

// 保存第一个路由对象，当用户访问 /main时跳转到该对象
export let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []

  // routeFiles.keys() 获取到的是一个数组里面包含了相对于main文件夹的所有ts文件路径
  // require.context 可以对文件夹进行查找
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // routeFiles.keys() 可以获取到相对于第一个参数的文件路径
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.slice(1))
    allRoutes.push(route.default)
  })

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu in menus) {
      if (menus[menu].type === 1) {
        _recurseGetRoute(menus[menu].children)
      } else if (menus[menu].type === 2) {
        const route = allRoutes.find((route) => route.path === menus[menu].url)
        if (route) {
          if (!firstMenu) {
            firstMenu = route
          }
          routes.push(route)
        }
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 通过当前路径获取展开菜单项的id
export function mapPathToMenuId(userMenus: any[], path: string, breadcrumb?: IBreadCrumb[]): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const returnMenu = mapPathToMenuId(menu.children, path)
      if (returnMenu) {
        if (breadcrumb) {
          breadcrumb.push({ name: menu.name })
          breadcrumb.push({ name: returnMenu.name })
          return breadcrumb
        }
        return returnMenu.id
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}

export function mapPathToBreadcrumb(userMenus: any[], path: string, breadcrumb: IBreadCrumb[]) {
  return mapPathToMenuId(userMenus, path, breadcrumb)
}
