<template>
  <nuxt-link
    :to="$routing.getUrl('/')"
    class="sf-header__logo"
    data-testid="header-logo"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 231 221"
      width="40"
      height="40"
      enable-background="new 0 0 1114.088 219.592"
      xml:space="preserve"
    >
      <rect
        id="backgroundrect"
        width="100%"
        height="100%"
        x="0"
        y="0"
        fill="none"
        stroke="none"
        class=""
        style=""
      />
      <g class="currentLayer" style="">
        <title>Layer 1</title>
        <g id="svg_1">
          <path
            fill="#1DCF65"
            d="M215.745,170.619c0.202,2.336-1.64,4.344-3.985,4.344H18.899c-2.339,0-4.179-1.998-3.986-4.33L28.734,3.67   C28.906,1.596,30.639,0,32.721,0h164.642c2.076,0,3.807,1.588,3.985,3.656L215.745,170.619z"
            id="svg_2"
          />

          <linearGradient
            id="SVGID_1_"
            x1="0.8002695878710615"
            y1="0.8600491690093369"
            x2="0.15258702143440372"
            y2="0.16609114750019782"
          >
            <stop offset="0" style="stop-color: #52d67a" />
            <stop offset="1" style="stop-color: #5aee87" />
          </linearGradient>
          <path
            fill="url(#SVGID_1_)"
            d="M231.14,214.18c0.241,2.914-2.059,5.412-4.982,5.412H5c-2.917,0-5.215-2.486-4.984-5.395   L15.893,14.198c0.207-2.601,2.376-4.604,4.984-4.604h188.742c2.602,0,4.769,1.995,4.983,4.588L231.14,214.18z"
            id="svg_3"
          />
        </g>
        <g id="svg_17">
          <g id="svg_18">
            <path
              fill="#FFFFFF"
              d="M111.224,156.169c-28.786,0-52.204-28.119-52.204-62.682c0-1.8,1.459-3.26,3.26-3.26s3.26,1.459,3.26,3.26    c0,30.968,20.494,56.162,45.685,56.162c25.191,0,45.685-25.194,45.685-56.162c0-1.8,1.459-3.26,3.26-3.26s3.26,1.459,3.26,3.26    C163.429,128.05,140.01,156.169,111.224,156.169z"
              id="svg_19"
            />
          </g>
          <g id="svg_20">
            <path
              fill="#FFFFFF"
              d="M143.358,92.613c-0.834,0-1.668-0.318-2.305-0.955c-1.273-1.273-1.273-3.337,0-4.61l16.894-16.894    c0.611-0.611,1.44-0.955,2.305-0.955l0,0c0.865,0,1.694,0.343,2.305,0.955l16.729,16.73c1.273,1.273,1.273,3.337,0,4.61    c-1.273,1.272-3.337,1.273-4.61,0L160.251,77.07l-14.588,14.588C145.026,92.295,144.192,92.613,143.358,92.613z"
              id="svg_21"
            />
          </g>
        </g>
      </g>
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sf-header__logo {
  height: 2rem;
}
</style>
