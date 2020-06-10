<template>
  <div class="tool">
    <div class="tool-head">我的工具</div>
    <div class="tool-box">
      <div class="tool-item" v-for="item in toolList" :key="item.id">
        <img :src="item.src" />
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      toolList: [
        {
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB5lBMVEVHcEwA//83p9E3p9E4qNA3qNE4qNI3p9A3qNAAf/82p9A2ps9Vqqo2ptA2qNA3p9E2p9A3p9E2qNA3p9E2p883qNE2p9A2qNA3p9E3qNA2p9A3p9I2qNA3p9E3p9A3p9E3qNI2p9A2p9E3p9E3qNH///+f1enO6vS84vD6/f7y+fy44O/K6POx3e1ArNOv3O39/v6p2eun2etHr9Wi1ur8/v7A5PFsv932+/2KzOSMzeU5qdHB5PF6xeCDyeJfudqNzuWU0Obq9vqLzeRhuts/q9NCrdRqvt2MzeRat9lTtNf9/v/5/P5+x+Fiu9tQs9fg8fjV7fWt2+xDrdQ6qdJGrtT7/f5Vtdjr9vrP6vRovdz1+/2z3u2o2eu23+6W0edrv92r2uyq2uvH5/K03+6Qz+bD5fH4/P1IsNWFyuNwwd5ErtT3/P3U7PWe1ellvNxku9uy3u2q2uzp9fq/4/C03u7o9frl9PmZ0+jS7PXe8fdErdRywt/T7PWt3Oy74e+w3e3G5vJNstZStNdUtdim2Orj8/mU0ebL6PPI5/Lb7/dkvNuX0ufM6fOJzORMsdZpvt1mvNz0+vzv+Ptzwt9vwd7u9/t0w9+AyOKS0OaGyuOd1Oi84u+Jy+Q+q9Oi1+p7xuE8qtI08eaYAAAAJHRSTlMAAe/VTdRE/v0C0ksDQu57m/B500acmtHPmZ531p3Qb0rteoAvIJg9AAADCUlEQVRYw6WX518aMRjHz4F71dbu3URE4AARRBRx4cZRV111a22tdu/W7r33Hv9pkxwcx/mEO+9+L+BJnjzfzz3ZEQSqgswDGdvQFpSeUZaZK8jaYUEGlJcVC08rzkaGlFOaxgDFyLBK2ffnGAfkkCwKLMiE8gqETGRK+cJec4ASYb85wHaBP3/EmhaP3e+3e1pmRG6jIoHj8AbHRrAsm7XDC7fLhgGjkzasku38Q92AQY8bA+p2tekDzJzAHDWP6wFMuzFX7iZNQN0sTilPnQZgCmvoeGrANNZUUyrAuFsb0F3DBwwm+r/SQXSWGH4XUX/SWLRxAXOqVFeIsU4N50A4HP4R91XxAKOKBEK0op4Ybxlg9R9CZ5ZjPl8XBzCpGPBTpPw7QCyWsZP9/Yx7nTDAq5j/S7TiL7VOS4A/5Pe7vC6GQUBQ0VEsjPYh/iIB+kOh0DfZXQsCxhLxVjrf1gcqiHqp61eFpM9xPwQQExm876MVaw2b1okjnkMEANTI8R/esYpyPgC3A4AOGfARaQJqAYBHBnyKAQKVRGzqN1ZK8m2aSwqAXQZ8jS4yACvcpWaDekGcBAD1Cr81AZin5i01wK8fcIOarXoAdhgQoGafnhQ8MADfJGZEDYA6sYUD6KT2hAoADWM7BxCl9oAKAE2kiA0GzEqrKfmYEqHFZIUB/dR+nQwAFxNqhAGsE950w12QBBi2wYApWniF8XOH43YsAy+8pS3AgADd3jp7cFieUHc4e2KXDwTgCuZ8QX6irNxzn7etX4AB+GW8wb3U2zpqa4YBeIElXXeNFR6L/KMtvh6uVBNdVw78/Fy186p0KvQibUAqLSJzgDVkDvAImQL4niBTgIvntC5ZjdIBtDQChS+Xi7ovmg8u96jDJ1x9W7ipkstA8FkgEb36dEXkXXXTuffood5g1Ub9JVd5R+sQt9ERIcPsdb/MHGCP2SfPYSF3t5n4XeT5mmXm2VdIH45HjQP2SW/fQwa/IftYWuz1nJVnJP5gYeL5nptfYknfSnCRZWe+9Pz/D6XnYl/dcXDlAAAAAElFTkSuQmCC',
          title: '成为代理',
          id: 1
        },
        {
          src:
            'data:image/png;base64,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',
          title: '地址管理',
          id: 2
        },
        {
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABfVBMVEVHcEz61zP51jP/1Cr52DP61zL71TT61zL51zL51zP51TT/2jb51jP61jL32Db/3z//3TP51jP61jP61jP61zL51zP//1X41TP/zDP51jL/0i351zL61jL52DH51zP61jP51jP41jL51zL61zL61jP51zP//wD61jL51jL51jP62DP51jP51jT51zP51jP51jP20zT61zL61jP21DP61zL51jP51zL61zP31DH41TD51zL51jP51zP31y/71zP71jP61jP61zH52DH/1Cr61zP51zL61zP51jP61jP51jL/0jf/1Dj51jL51DX62TP51zL/2DP51zP//wD/2iT51zP51jL51zH/4jj41zT51jL61zP51zP51zP71TH61zP61zP51zP61jP51jP42TH61zP51zL/zy/51zP61zP71jP61jL/zDP72DL41zT61jL51jL61zP51zP61zP41zH61jL32TT61TP51jP32jP61zL52TD51zL71zP51jP61zMvz5tVAAAAfnRSTlMAzP0GVWZEM7vuXQ7q3SEID+nkn+LzA1AK8RHtqy76o4VR7HXcgAHY/MtpuCxa8Osdodce04yN4SQluvizIEFG3zRcDOD7bZF3lxcS8jA2iRTGAgfmtmEJJ/bNlcFDm3u5qb0pbo4Qj9tFOAVCTrGSaMetTXAidl4j2S+TQJZiaIYLAAABhElEQVQYGe3B1XZTQQBA0UNChSRt6u6uuFtxd3d3d+d8OxFWVtOnzB0e2Zv/CrIjEzMm07G1BbKzRtjcwpc1CQ1ZtIXE0t1N6jYinJvQFN8akvmRh1GVryb0PU/6sDL104QWoFWBX7/nG5P4DB1KlIMH9nE2S4we7B3+tLg6mb1pwBhtS2CUXfsxzm6M04uRMBJGwkgYCSNhJAzW9LTuY30FBpq9TTXDHL3ACgY5Ajx59+H9qgoMcRzIjLkcBshl4ZjVMMA41Kf0/GjzwviYZRigGW7ocBcFe9oswdpNw0O91ENJtyVYu3uQ0ZuUda21CGt3Hx7pXf7aaBHW7gEs6h3K0p0WYe2aoFn7+yjJWIIBrsEtvXyVgtP9lmCASTgzpNNzL149vm4ZBug8AVdmrIIhBqbg+TOXwyAjwMvXb980VmCY9jwrGOhQ5iJVDHZqYHKurgIjYSSMhJEwEkbCSBgJI2Ek1hklxwajtLMpZ4TW9bBjZ8qEUvPbKTo52JDIYB//wB/LXb9UYsSbaQAAAABJRU5ErkJggg==',
          title: '我的钱包',
          id: 3
        },
        {
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABiVBMVEVHcExMu4hMuYdNu4dNu4hMuoZPt4dMu4hNuohNuodKv4pNuohMuodRuYtNu4hNuohMu4dNuYcA//9MuodNu4hPvYhMu4dMu4hNu4dMuodMuodKuohLu4dMu4dMu4dNvIhNuodMu4ZOvIVNuodOuodMu4d/f39NuohMuohNuohNu4dNu4hMuolMuohItpFMu4hMu4hNuYdNu4hVqqpOvIhNuodMuodNuohNu4dNuodmzJlNvIhNu4lNuohIv4hMu4hOxIlOuolNuodNvYhNuoZMu4hOu4dNu4hNvIhKuYpNu4hNu4hLuolMuodNvIVMuodMu4hOu4hOuYdPu4hNu4hMuodMuohMuolPv49Nu4dMu4dRt4RNuohOu4dMu4dNu4dNuodNuoc/v39NuohNuYdNu4dNu4ZMu4dNu4dMu4hLuYdMu4hMuohLu4lNuodNu4dLtIdMu4dQu4ZJu4ZNu4hNu4hMuohMu4hMuodMu4hVv39FuYtNuodNuohVqn9Mu4hNuohMuodNu4j5H6oWAAAAgnRSTlMA32vWh2ggwb/+GIP6Fur7/GAB9rk6qar4vtQpIo/HdsI5KqtV6QL3sMailz/oB/n9QuEDWJjY2by2BUVMbBy0DU7rK1mfYvVjMLWuJbMX3JZLPi3Q75JDELiaGeQxcZ7J4ASKXE9IsW3bM9K7W3eEEXUTJpvM8x6gPAwL46gG4sqCHPgIbQAAAdJJREFUWMPtl1dTwkAURiMIGkUQEbCBCipVxAL23nvvvffeu95frlgjezebhCdn+N6YzTm72cmw33JcPIxMJzw3xIBnNJYBpOdXKuXbs+Ej9kVFuMMbhK/wzl659H1HNg/CeIwz0ukmo7UbiGQNagbYbNrYjrcaqHlwHtVrS3B0z9ZZuz8JEpIVLrD4CglBJshKDSFIlidIigvign8s4PNH9bEIeA3HjV8pF0R4jptQLOBVkcdSFb/CX16+IIqXLYjmRQWuqWF8/xKlfQeuLW5IzeLFBHPvP1LUDB4RHHwPLWijDBgPs4TA/TOW8NeA8mAhBKHfwYq8yBmVQ9n/z6wTglPBqGAN+PwAPYSgXDj8s4bP+Y/JD8NBCO7KgFwDbX4ozSBP1z4gDC25FB5GkOP5EEgDjQczIngqRQ0o/4I2hCVADCgPm6ggsEsacL6A0m/8wagH9XaUN+XSGtKrtL90FbVilTRL4S9EStrJKptfCYjVvFsdiy++Fi+KXQzeZGZVTZsor2tlV/xlET69SkJTXnNTeUORpK5d9xjL/JFU+vD3L5Je+DUmkteXy7lwnBPd2zov887i7zcIdm+7UMGl6Wwj5Am36Yovb4xp8QuwWN4AUu+xRaVbZFkAAAAASUVORK5CYII=',
          title: '安全中心',
          id: 4
        },
        {
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB1FBMVEVHcExPmu8/f/9Ll+xPme5Vqv9/f/9Pme5Qme9Pme9mmf9Qm/BQmu5Pmu5Pme5Ikf9Qmu9Qmu5Pmu5Qmu9OnO9Vqv9RmepOmfBPmu9Qmu9Pmu9Qm/BRl+5OnOtQme1Pnu1Pmu9Qme9Pmu9PmvBQme5Pme5Pme9RmfBPmO9Omu5Qmu5Pmu9Om+9QmfBQme9RmO1Qme9RmuxRmu9Pme9Qme5Qmu/////h7vzO4vq51/nf7fzF3fqKvPRnp/Ho8v2NvfXD3PnQ5PtcofCt0Pjz+P7+//+v0fj1+f5Rm+/C3PnX6Pvr9P3O4/utz/d/tfNTnO/d7Pyky/fc6/x2sPLx9/7G3vra6vxaoPCOvvXZ6fzM4vrR5Pv9/v9Yn/Dn8f14sfNpqPGgyPbH3/rj7/zs9P1Rmu/5+/77/f+EuPSBtvNrqvKaxfZ9tPOQv/VVne/g7fycxvbL4frl8P3D3fqYxPZ1r/KrzvdjpfFgpPGZxPbb6vy31fiAtvOGufSFuPRqqfHT5vuiyvfk7/xxrfKjyvedxvb6/P6HuvR7s/Pi7vzW5/uVwvX8/f+01PhpqfHM4fr0+f672Pnv9v6Ju/RboPD+/v9XnvDS5ft+tfOTwfWDt/Rfo/A5K19UAAAANXRSTlMAxgQbyQMC/OXjBWbL+vkH4ZjN5DEGGUTnxeYzLxpJHZGSlkfeXZRVQ17Ik2FGYkjiHEKXzHUOwl4AAAIxSURBVFjD3ZdnVxNBFIYnkJDdJIj0YsPeu/clRhOISUgAAaWrIE3A3ntDsffe/6wzC0vJ8Zzs3vmiPh/2zu7JfXZnJnfPXiGmKdpeHDL85Ai/Edq9tVzMp2CjQS4pDebN5a8oIQbefDt/SRWxMMqm85eVEpOqnSo/r4TYeH1SECQNtsj9M3QEZkAsJy0qRbGeYLPYoyfYJGr0BDuEX0+wSOjlk/9vFdQhbA+vXhnO0LU7t9u5gg70EN0H7jEFN1J4SJSJoZspeILUkAyP8XSAJRibwgMVoyk8YwnuAn3WoAeNDgWnE5IuxOQxSnQJaIkp0v1WiJ3LKTiJWZ5TZwpZnMkpOJWU9OO1PA5SM3B8r6IJOGYNzrpag0/ylg3WhShQ734RP5/QFDRhIqkj+A4MR3QEQwiPRdCyT3EUOKLiYReCzM/4L4pk7eJBx4JvP0bHvxLxn0AyTkrgfg3aO6+/kOlfRgZ5gsa0NdnRt9YZRwBMhLvsamQI2rr7eufKOZJVCxfdvg/42zgr+BhXyLKsU7HVvUCnmP4XwcgBxSPglTXodSQYeI93f95GHMopOH+5Iy5fZW/YArqgfpeetAXN+xfQlltQn0i03ro5c/Iy+eEf/UJxI9D+zDP0BItFSE/gEav0BLVitZ5glyg3tZYgIMQ2HcFa2TP5vPz86gLVtlWwJ1Ez03qWMf8L5lK7dc1nzaK6Yl7zvX6N69sHfQv690DlOo9Z6Cy30PSs3GD37r8B3vlI0jFO56IAAAAASUVORK5CYII=',
          title: '推广链接',
          id: 5
        },
        {
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACzVBMVEVHcEzCsKGlinj//wDIuauvmYilinijiHaslYOljHijinili3iji3iji3iliXWmjHekinejjnqii3OljHKjiniji3iZmWZ/f3+mjn2RkW2ijHmmjnygjXqji3ijineqiHejinekineji3ijkX+ki3ijiXeii3m8qpumiXejine8qZqki3ukinqjinejiniji3mji3iki3eii3eji3ekiXeki3iki3ikinaji3ejineijHaiineliniji3iji3eki3ikinj////38uvh182+rZ/VycDBsaTh1szcz8XIuK3b0cnIua7OwbeokH6nj33///6tloWvmYj08e/6+fjLvbL9/Pzs5+P+/v6tloTRxbvd1M24pJXBsKPn4dz7+vnx7erh2NL8/Pvz8O6rlIOxnIzf1s/49vTq5N/az8ft6OXe1c739fPi2M7o4t317+jn4Nvi18718vCvmYeokH3k3Nbc0MbDsqb59/X49vWtl4b+/v3+/f38+/rw6+jWysLXzcTLvLGljXri2tSslYTVycHx7uuul4bHuKz6+PerlILc0su/raDa0Mjw7OnJuq79/fz8+/u0n4/Qw7nu6eb08O7Qwrnj3Na6p5i6p5mumIe0n5DGt6u8qpzm39mxm4vh2dOzno6/rqHZz8fJuq/m4Nv7+vqqk4K4pJa5ppe4pZfFtajs5uPz7+zJu7D28/GpkH/Rxby8qZupkH7FtanFtqr7+/mvmonQw7r07ui9q52zn4/CsKSljHnDs6e3pZX07ufVysHk3deynY2umYi/rqCmjXvNwLX18/Hi29Xr5eHYzcW2opLl3djb0crLvbHSxbu+qpvt6eS6ppewmom1oJHUxrrm39r59/a9q5vj2M+5pJa4pZbAr6L5+PeynIy6qJm9q5yvmIfk3NfCsqXm4Nq5pZfFtKbv6ODq5eDXzMO8qprCsaLJu6+2opPRxLuhMFbkAAAAQXRSTlMA844B+PpVHPFmiHfaqiUx5hkLFJnlBQL4B1D4G7v+D+JgXw7jYiz1YsD1HzCiwSrfPkLPj9DLkL7XOl5ENcTNx2O0w5AAAAKzSURBVFjDY2AY7ICfnyLtfLw8PLx8ZGsX5hLllhTjVBARJEu7ELcAlzyMoUyydjFOFYTFYKeQpJ2ZjUdWDVlAW9fAmpl4/VZ2DoboYrYWZkZEatfntWTDZpuNsawOVudKsSEDDT05U3MmrMDEXk5TFUWxFMgiGWlGZKDFiheooyiWlgEawM7hRDbgYKeaAXnO7iQC5zwUA3Ii3EgEETkoBji7OJIIXJxJMCDNnxID/J/caUwl34Bgr4lvvZpuk2tAq0/z4xdAR9wLA3KCSDUgPP9IW2Raf1RGsOPLdkfHg3vKgkgxINs1cEVCtaPjm1evnzreTa4IPRRbH+ATR7QB85ND4sGMh8+dOic4etcd2OvoWBESGOVPpAGZC6Aq+x48u+/oWHs4Auz+zOkzJhPphehYCN0f1RMMpPbthkZqauDiNKIMyIpB4SYEwlhLIwNcQ4kwILRyCjK3etkSODspZlcuEdE4aSoKd0M0Emf7TiIMKAxIROKt2bIewanZFkZMQorJQiQpl00rVyNkItuJSomx0bDsEJi8diuE3XXrXI1jUEA2cXlhFigHxId0rmoIaAkFi/RevnnhvGNZHZGZadHsqpI581zLHR3XbU5JAIlcu+F0tS89JZFIA+KaZy6cC02QYcs31jo6Trg0MeLilTNEZ+fcJKS8GdUW0uHo3xuc0U16kQZ1UGRAfZXj9cp4cg0Ali/dp9MbjuHJTE1euMA0qBElKQEdeAxo9MYFimGOSCzEVx744XS8L3GFKlUMON7iCgYZ5BoQBNHvesp/oLwABunQ2DtJrgEnfCDg0YB5AQxSId44W06mAeHvoP5IGjAvkGHAUVdcoJg4A3pwGtBFWSOL4lYaEQYUFHmSCIoKUAzYX+pBIijdQd3GNkUGSLCQDSRABogrcpINlMQHQe8cAKTTL+2Byq7tAAAAAElFTkSuQmCC',
          title: '留言板',
          id: 6
        }
      ]
    }
  }
}
</script>
<style scoped>
.tool {
  height: 30%;
  width: 95%;
  transform: translateX(2.5%);
  border-radius: 15px;
  background-color: #fff;
}
.tool .tool-head {
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 14px;
  padding-left: 2rem;
}
.tool .tool-box {
  height: 142px;
  padding-left: 1rem;
}
.tool .tool-item {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 24%;
  height: 38%;
  margin-bottom: 1rem;
}
.tool-item {
  text-align: center;
}
.tool-item img {
  width: 2rem;
  height: 2rem;
}
.tool-item .title {
  font-size: 14px;
  color: rgb(109, 105, 105);
}
</style>
