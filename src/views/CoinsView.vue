<template lang="pug">
.coins-container
  .ui.container
    h1.ui.header {{ sify('硬幣排列工具') }}
    
    .coins-toolbar
        .coin-item(
      v-for="coin in availableCoins"
      :key="coin.id"
      :draggable="true"
      @dragstart="onDragStart($event, coin)"
      @touchstart="onTouchStart($event, coin, 'toolbar')"
      :style="{ backgroundColor: coin.color, width: coin.size + 'px', height: coin.size + 'px' }"
    )
            span.coin-value ${{ coin.value }}
    
    .drop-zone(
      @dragover.prevent
      @drop="onDrop($event)"
      @dragenter.prevent
      @dragleave.prevent
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      ref="dropZone"
    )
      .placed-coins
        .placed-coin(
          v-for="(coin, index) in placedCoins"
          :key="coin.id + '-' + index"
          :draggable="true"
          @dragstart="onPlacedCoinDragStart($event, index)"
          @touchstart="onTouchStart($event, coin, 'placed', index)"
          :style="{ backgroundColor: coin.color, left: coin.x + 'px', top: coin.y + 'px', width: coin.size + 'px', height: coin.size + 'px' }"
        )
          span.coin-value ${{ coin.value }}
      
      .drop-zone-text(v-if="placedCoins.length === 0")
        p {{ sify('將硬幣拖拽到此處進行排列') }}
    
    .controls
      button.ui.button.primary(@click="clearAll") {{ sify('清除所有') }}

    <!-- 浮動硬幣（觸控拖曳時顯示） -->
    .placed-coin(
    v-if="touchDragging && touchDragCoin && touchDragCoin.x !== null && touchDragCoin.y !== null" :style="{ backgroundColor: touchDragCoin.color, left: touchDragCoin.x + 'px', top: touchDragCoin.y + 'px', position: 'fixed', zIndex: 9999, pointerEvents: 'none', width: (touchDragCoin.size || 50) + 'px', height: (touchDragCoin.size || 50) + 'px' }")
        span.coin-value ${{ touchDragCoin.value }}
</template>

<script>
import { sify } from 'chinese-conv'

export default {
  name: 'CoinsView',
  props: ['si'],
  data() {
    return {
      availableCoins: [
        { id: 'coin-1', value: 1, color: '#C0C0C0', size: 40 },
        { id: 'coin-5', value: 5, color: '#C0C0C0', size: 45 },
        { id: 'coin-10', value: 10, color: '#C0C0C0', size: 50 },
        { id: 'coin-50', value: 50, color: '#CD7F32', size: 55 }
      ],
      placedCoins: [],
      draggedCoin: null,
      draggedIndex: null,
      // 觸控專用
      touchDragging: false,
      touchDragCoin: null,
      touchDragIndex: null,
      touchOffset: { x: 0, y: 0 },
      originalCoin: null
    }
  },
  methods: {
    sify(t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    // 滑鼠拖曳
    onDragStart(event, coin) {
      console.log('Drag start:', coin)
      this.draggedCoin = { ...coin, id: coin.id + '-' + Date.now() }
      event.dataTransfer.effectAllowed = 'copy'
      event.dataTransfer.setData('text/plain', coin.id)
      event.stopPropagation()
    },
    onPlacedCoinDragStart(event, index) {
      this.draggedIndex = index
      this.draggedCoin = { ...this.placedCoins[index] }
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('text/plain', 'placed-' + index)
      event.stopPropagation()
    },
    onDrop(event) {
      console.log('Drop event:', event)
      event.preventDefault()
      event.stopPropagation()
      const rect = event.currentTarget.getBoundingClientRect()
      const coinSize = this.draggedCoin.size || 50
      const x = event.clientX - rect.left - coinSize / 2
      const y = event.clientY - rect.top - coinSize / 2
      
      if (this.draggedIndex !== null) {
        // 移動已放置的硬幣
        this.placedCoins.splice(this.draggedIndex, 1)
        this.draggedIndex = null
      }
      
      if (this.draggedCoin) {
        // 添加新硬幣
        this.placedCoins.push({
          ...this.draggedCoin,
          x: Math.max(0, Math.min(x, rect.width - coinSize)), // 確保不超出邊界
          y: Math.max(0, Math.min(y, rect.height - coinSize))
        })
        this.draggedCoin = null
      }
    },
    // 觸控拖曳
    onTouchStart(e, coin, type, index) {
      if (e.touches.length !== 1) return;
      e.preventDefault();
      this.touchDragging = true;
      if (type === 'toolbar') {
        this.touchDragCoin = { ...coin, id: coin.id + '-' + Date.now() };
        this.touchDragIndex = null;
      } else {
        this.touchDragCoin = { ...coin };
        this.touchDragIndex = index;
      }
      const touch = e.touches[0];
      const rect = e.target.getBoundingClientRect();
      
      // 計算觸控點相對於硬幣中心的偏移量
      this.touchOffset = {
        x: touch.clientX - (rect.left + rect.width / 2),
        y: touch.clientY - (rect.top + rect.height / 2)
      };
      
      // 保存原始硬幣資訊
      this.originalCoin = coin;
      
      // 先不設定位置，等 move 時再設定
      this.touchDragCoin.x = null;
      this.touchDragCoin.y = null;
      window.addEventListener('touchmove', this.onTouchMove, { passive: false });
      window.addEventListener('touchend', this.onTouchEnd, { passive: false });
    },
    onTouchMove(e) {
      if (!this.touchDragging || !this.touchDragCoin) return;
      e.preventDefault();
      const touch = e.touches[0];
      // 浮動硬幣位置 = 觸控位置 - 偏移量
      this.touchDragCoin.x = touch.clientX - this.touchOffset.x - this.originalCoin.size / 2;
      this.touchDragCoin.y = touch.clientY - this.touchOffset.y - this.originalCoin.size / 2;
      this.$forceUpdate();
    },
    onTouchEnd(e) {
      if (!this.touchDragging || !this.touchDragCoin) return;
      const dropZone = this.$refs.dropZone;
      const rect = dropZone.getBoundingClientRect();
      const touch = (e.changedTouches && e.changedTouches[0]) || (e.touches && e.touches[0]);
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        // 轉換回相對於 drop-zone 的位置
        const coinSize = this.touchDragCoin.size || 50;
        const x = touch.clientX - rect.left - coinSize / 2;
        const y = touch.clientY - rect.top - coinSize / 2;
        const finalCoin = { ...this.touchDragCoin };
        finalCoin.x = Math.max(0, Math.min(x, rect.width - coinSize));
        finalCoin.y = Math.max(0, Math.min(y, rect.height - coinSize));
        
        if (this.touchDragIndex !== null) {
          this.placedCoins.splice(this.touchDragIndex, 1);
        }
        this.placedCoins.push(finalCoin);
      }
      this.touchDragging = false;
      this.touchDragCoin = null;
      this.touchDragIndex = null;
      this.originalCoin = null;
      window.removeEventListener('touchmove', this.onTouchMove);
      window.removeEventListener('touchend', this.onTouchEnd);
      this.$forceUpdate();
    },
    clearAll() {
      this.placedCoins = []
    },

    onDragEnter(event) {
      console.log('Drag enter')
      event.preventDefault()
      event.stopPropagation()
    },
    onDragLeave(event) {
      console.log('Drag leave')
      event.preventDefault()
      event.stopPropagation()
    }
  },
  mounted() {
    // 綁定 this
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }
}
</script>

<style scoped>
.coins-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.coins-toolbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.coin-item {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  border: 2px solid #333;
  -webkit-user-drag: element;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;
}

.coin-item:hover {
  transform: scale(1.1);
}

.coin-item:active {
  cursor: grabbing;
  transform: scale(0.95);
}

.coin-value {
  font-weight: bold;
  color: #333;
  font-size: 12px;
}

.drop-zone {
  min-height: 400px;
  border: 3px dashed #ccc;
  border-radius: 10px;
  position: relative;
  background-color: #f9f9f9;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;
  overflow: hidden;
  pointer-events: auto;
}

.drop-zone:hover {
  border-color: #007bff;
}

.drop-zone-text {
  text-align: center;
  color: #666;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.placed-coins {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.placed-coin {
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
  border: 2px solid #333;
  z-index: 10;
  -webkit-user-drag: element;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;
}

.placed-coin:hover {
  transform: scale(1.1);
  z-index: 20;
}

.placed-coin:active {
  cursor: grabbing;
  transform: scale(0.95);
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

/* RWD 設計 */
@media screen and (max-width: 768px) {
  .coins-container {
    padding: 10px;
  }
  
  .coins-toolbar {
    gap: 15px;
  }
  
  .coin-value {
    font-size: 11px;
  }
  
  .drop-zone {
    min-height: 300px;
  }
  
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .ui.button {
    width: 200px;
    margin: 5px 0;
  }
}

@media screen and (max-width: 480px) {
  .coins-toolbar {
    gap: 10px;
  }
  
  .coin-value {
    font-size: 10px;
  }
  
  .drop-zone {
    min-height: 250px;
  }
  
  .drop-zone-text {
    font-size: 16px;
  }
}
</style> 