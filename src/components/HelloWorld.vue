<template>
  <div class="con">
    <Layout class="layout">
      <Sider v-model="isCollapsed" hide-trigger collapsible :collapsed-width="78">
        <Menu active-name="1-2" :open-names="['1']" width="auto" theme="dark">
          <Submenu name="1">
              <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  Navigation One
              </template>
              <MenuGroup title="Item 1">
                  <MenuItem name="1-1">Option 1</MenuItem>
                  <MenuItem name="1-2">Option 2</MenuItem>
              </MenuGroup>
              <MenuGroup title="Item 2">
                  <MenuItem name="1-3">Option 3</MenuItem>
                  <MenuItem name="1-4">Option 4</MenuItem>
              </MenuGroup>
          </Submenu>
          <Submenu name="2">
              <template slot="title">
                  <Icon type="ios-filing"></Icon>
                  Navigation Two
              </template>
              <MenuItem name="2-1">Option 5</MenuItem>
              <MenuItem name="2-2">Option 6</MenuItem>
              <Submenu name="3">
                  <template slot="title">Submenu</template>
                  <MenuItem name="3-1">Option 7</MenuItem>
                  <MenuItem name="3-2">Option 8</MenuItem>
              </Submenu>
          </Submenu>
          <Submenu name="4">
              <template slot="title">
                  <Icon type="ios-gear"></Icon>
                  Navigation Three
              </template>
              <MenuItem name="4-1">Option 9</MenuItem>
              <MenuItem name="4-2">Option 10</MenuItem>
              <MenuItem name="4-3">Option 11</MenuItem>
              <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout class="main-content">
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="3">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
            </div>
          </Menu>
        </Header>
        <Content>
          content
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Helloworld',
  data () {
    return {
      isCollapsed: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con {
  height: 100%;
}
.layout {
  height: 100%;
}
</style>
