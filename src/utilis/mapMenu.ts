import { RouteRecordRaw } from 'vue-router'

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
          routes.push(route)
        }
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
