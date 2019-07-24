<template>
  <div class="header">
    <header flex="cross:center box:justify">
      <div class="header__selection"></div>
      <div class="header__title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="466px"
          height="73px"
        >
          <defs>
            <filter
              filterUnits="userSpaceOnUse"
              id="Filter_0"
              x="0px"
              y="0px"
              width="466px"
              height="73px"
            >
              <feOffset in="SourceAlpha" dx="0.829" dy="0.559" />
              <feGaussianBlur result="blurOut" stdDeviation="2.449" />
              <feFlood flood-color="rgb(6, 23, 59)" result="floodOut" />
              <feComposite operator="atop" in="floodOut" in2="blurOut" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.66" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#Filter_0)">
            <text
              kerning="auto"
              font-family="Adobe Heiti Std"
              fill="rgb(0, 0, 0)"
              transform="matrix( 1, 0, 0, 1.0046511627907,19.1045, 49.1699720930233)"
              font-size="35.833px"
            >
              <tspan
                font-size="35.833px"
                font-family="FZZhengHeiS-B-GB"
                fill="#FFFFFF"
              >&#27993;&#27743;&#30465;&#8220;&#19977;&#26381;&#21153;&#8221;&#23567;&#31649;&#23478;</tspan>
            </text>
            <text
              kerning="auto"
              font-family="Adobe Heiti Std"
              stroke-width="1px"
              stroke="rgb(2, 5, 29)"
              fill-opacity="0"
              stroke-opacity="1"
              transform="matrix( 1, 0, 0, 1.0046511627907,19.1045, 49.1699720930233)"
              font-size="35.833px"
            >
              <tspan
                font-size="35.833px"
                font-family="FZZhengHeiS-B-GB"
                fill="#FFFFFF"
              >&#27993;&#27743;&#30465;&#8220;&#19977;&#26381;&#21153;&#8221;&#23567;&#31649;&#23478;</tspan>
            </text>
          </g>
        </svg>
      </div>
      <div class="header__time"></div>
    </header>
    <nav></nav>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  flex: 0 0 159px;
  &__selection {
    width: 161px;
    height: 44px;
    background-color: #2c33d9;
  }

  &__title {
  }

  &__time {
  }
}
</style>