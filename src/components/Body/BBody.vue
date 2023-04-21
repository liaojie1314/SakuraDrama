<template>
  <div class="first-screen">
    <div class="block text-center list">
      <el-carousel height="250px">
        <el-carousel-item :key="item" v-for="item in bannerList">
          <h3 class="small justify-center" text="2xl">
            <img :src="item" alt="">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <BodyItem :live="liveList[0]" :rank="rankList[0]">
      <svg style="margin-top:0px; width: 36px;height:36px" class="anime" viewBox="0 0 1024 1024">
        <path
          d="M273.408 166.912h477.696c58.368 0 105.984 47.616 105.984 105.984v477.696c0 58.368-47.616 105.984-105.984 105.984H273.408c-58.368 0-105.984-47.616-105.984-105.984V273.408C166.912 215.04 215.04 166.912 273.408 166.912z"
          fill="#7B78EB"></path>
        <path
          d="M512 525.312v98.816c33.28-14.848 72.704 0.512 87.552 33.792 14.848 33.28-0.512 72.704-33.792 87.552-16.896 7.68-35.84 7.68-53.248 0v111.616H273.408c-58.368 0-105.984-47.616-105.984-105.984V512h137.216c-21.504 19.456-24.064 53.248-4.608 74.752 19.456 21.504 53.248 24.064 74.752 4.608 21.504-18.944 24.064-53.248 4.608-74.752l-4.608-4.608H512v-40.96c-4.096 0.512-9.216 0.512-13.312 0-51.2 0-86.016-47.616-86.016-105.984s20.992-108.032 86.016-108.032h13.312V166.912h238.592c58.368 0 105.984 47.616 105.984 105.984v251.904h-120.832c20.992-23.552 19.456-59.392-3.584-80.896-23.552-20.992-59.392-19.456-80.896 3.584-19.968 21.504-19.968 55.296 0 76.8H512z"
          fill="#9796ED"></path>
        <path
          d="M512 525.312v98.816l13.312-4.096c35.84-7.68 72.704 15.872 79.872 52.224 7.68 35.84-18.432 72.192-54.272 78.848-4.096 1.024-8.704 1.024-13.312 1.024-9.216 0-16.384-3.072-25.088-6.144v111.616h-14.336v-132.608l18.432 8.192c27.136 11.776 58.368-0.512 70.144-27.648 11.776-27.136-0.512-58.368-27.648-70.144-13.312-5.632-28.672-5.632-42.496 0l-18.432 8.192v-117.76H399.872c14.848 33.28-0.512 72.704-33.792 87.552-33.28 14.848-72.704-0.512-87.552-33.792-7.68-16.896-7.68-35.84 0-53.248H166.912V512h137.216c-21.504 19.456-24.064 53.248-4.608 74.752 19.456 21.504 53.248 24.064 74.752 4.608 21.504-19.456 24.064-53.248 4.608-74.752l-4.608-4.608H512v-39.936h-13.312c-51.2 0-86.016-47.104-86.016-105.984s20.992-109.568 86.016-109.568h13.312V166.912h13.312v105.984h-26.624c-49.664 0-73.216 33.28-73.216 94.208 0 53.248 30.72 92.672 73.216 92.672 3.584 0.512 7.68 0.512 11.264 0l15.36-2.048V512h102.912c-13.824-35.84 4.096-76.8 40.448-90.624 35.84-13.824 76.8 4.096 90.624 40.448 6.144 15.872 6.144 33.792 0 50.176h97.792v13.312h-120.832c20.992-23.552 19.456-59.392-3.584-80.896-23.552-20.992-59.392-19.456-80.896 3.584-19.968 21.504-19.968 55.296 0 76.8H512z"
          fill="#6A68C6"></path>
        <path
          d="M444.928 693.248c-23.04 13.312-52.224 5.12-65.024-17.408-4.096-7.68-6.144-15.36-6.144-24.064V392.192c0-26.624 20.992-47.616 47.616-47.616 8.704 0 16.896 2.048 24.576 6.656l221.696 132.608c23.04 13.312 30.208 42.496 16.896 65.024-4.096 6.656-10.24 12.8-16.896 16.896"
          fill="#FDDE80"></path>
      </svg>
    </BodyItem>
    <div class="list">
      <div style="margin-bottom: 40px;position: relative;">
        <div class="live-list" style="height:456px;width: 854px;">
          <header class="storey-title">
            <div class="l-con" style="position:relative">
              <img src="" alt="">
              <svg style="margin-top:0px; width: 36px;height:36px" class="rotate" viewBox="0 0 1024 1024">
                <path
                  d="M588.8 359.68l-12.032-7.424 150.272-206.592a30.976 30.976 0 0 0-51.2-36.352l-153.6 210.176L281.6 170.24a30.976 30.976 0 1 0-33.024 52.736L486.4 369.92l-22.784 31.488a30.976 30.976 0 1 0 51.2 36.352l25.6-35.072 16.128 9.728A30.976 30.976 0 1 0 588.8 359.68z"
                  fill="#FB813A"></path>
                <path d="M763.648 850.688m-53.248 0a53.248 53.248 0 1 0 106.496 0 53.248 53.248 0 1 0-106.496 0Z"
                  fill="#FB813A"></path>
                <path d="M261.12 797.44a53.248 53.248 0 1 0 53.504 53.248 53.248 53.248 0 0 0-53.504-53.248z"
                  fill="#FB813A"></path>
                <path
                  d="M141.312 314.368m92.928 0l556.288 0q92.928 0 92.928 92.928l0 360.704q0 92.928-92.928 92.928l-556.288 0q-92.928 0-92.928-92.928l0-360.704q0-92.928 92.928-92.928Z"
                  fill="#FDDE80"></path>
                <path d="M520.448 575.232m-128.256 0a128.256 128.256 0 1 0 256.512 0 128.256 128.256 0 1 0-256.512 0Z"
                  fill="#FFFFFF"></path>
                <path
                  d="M476.928 546.56c0-26.88 19.2-37.632 42.24-25.6l49.664 28.672a25.6 25.6 0 0 1 0 48.64l-49.664 28.672c-23.04 13.568-42.24 2.56-42.24-24.32z"
                  fill="#FB813A"></path>
              </svg>
              <a class="name">番剧</a>
              <ul style="display: inline-flex;margin-top: 0px;">
                <li :class="{ 'tab-switch-item': true, 'on': isActive[0] }" @click="changeRotate(0)">周一</li>
                <li :class="{ 'tab-switch-item': true, 'on': isActive[1] }" @click="changeRotate(1)">周二</li>
                <li :class="{ 'tab-switch-item': true, 'on': isActive[2] }" @click="changeRotate(2)">周三</li>
                <li :class="{ 'tab-switch-item': true, 'on': isActive[3] }" @click="changeRotate(3)">周四</li>
                <li :class="{ 'tab-switch-item': true, 'on': isActive[4] }" @click="changeRotate(4)">周五</li>
                <li :class="{ 'tab-switch-item': true, 'on': isActive[5] }" @click="changeRotate(5)">周六</li>
                <li :class="{ 'tab-switch-item': true, 'on': isActive[6] }" @click="changeRotate(6)">周日</li>
              </ul>
              <a class="tl-link" style="position: absolute; right: -395px;">新番时间表<svg t="1589603389578" class="icon"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6789" width="16"
                  height="16">
                  <path d="M327.6 950.8l435.8-436.2-435.8-439-45.4 45.1 390.9 393.8-390.8 391.1z" p-id="6790"
                    fill="#00a1d6"></path>
                </svg></a>
            </div>
            <div class="exchange-btn" style="width: 142px; height: 22px; display: inline-flex;">
            </div>
          </header>
          <div class="zone-list-box" style="display: flex;width: 854px;">
            <div class="time-line-card item" style="display: flex;margin-top: 0px;" v-for="item in showRotate"
              @click="gotoPlay(item.id)">
              <a class="pic">
                <img class="cover" :src="item.cover">
              </a>
              <div class="txt" style="width: 145px;margin-left: 10px;font-weight: 500;">
                <a class="ss"
                  style="display: inline-block;font-size: 14px;height: 45px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin: 0px 0 15px;">{{
                    item.name }}</a>
                <p class="update">
                  <a style="width: 100%;color: #00a1d6;display: inline-block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 12px;font-weight: 400;"
                    class="published">第{{ item.episodes }}话</a>
                </p>
              </div>
            </div>
          </div>
          <ItemTab :data="rankList[1]"></ItemTab>
        </div>
      </div>
    </div>
    <div class="list">
      <div style="margin-bottom: 40px;position: relative;">
        <ItemList :data="liveList[1]">
          <svg style="margin-top:0px; width: 36px;height:36px" class="movie" viewBox="0 0 1024 1024">
            <path
              d="M954.624 452.864H919.04v-168.96a37.376 37.376 0 0 0-25.6-36.608A36.608 36.608 0 0 0 846.848 281.6v170.24H199.936v-168.96a37.632 37.632 0 0 0-25.6-36.608A36.352 36.352 0 0 0 128 281.6v170.24H92.16a15.616 15.616 0 0 0-15.36 15.872v82.688a15.36 15.36 0 0 0 15.36 15.616h26.88v85.248a135.68 135.68 0 0 0 134.4 136.192h114.432a135.68 135.68 0 0 0 134.4-136.192v-20.992a7.936 7.936 0 0 1 7.68-7.936h25.6a7.68 7.68 0 0 1 7.68 7.936v20.992a135.936 135.936 0 0 0 134.4 136.192H793.6a135.68 135.68 0 0 0 134.4-136.192v-85.248h25.6a15.36 15.36 0 0 0 15.36-15.616v-81.664a15.616 15.616 0 0 0-15.36-15.872"
              fill="#E5E6E6"></path>
            <path
              d="M361.216 727.552h-102.4A87.296 87.296 0 0 1 172.8 640v-79.872a61.184 61.184 0 0 1 60.416-61.44h153.6a61.184 61.184 0 0 1 60.416 61.44V640a87.296 87.296 0 0 1-86.528 87.552"
              fill="#FF5C7A"></path>
            <path
              d="M685.568 727.552h102.4A87.296 87.296 0 0 0 873.984 640v-79.872a61.184 61.184 0 0 0-60.416-61.44h-153.6a61.184 61.184 0 0 0-60.416 61.44V640a87.296 87.296 0 0 0 86.528 87.552"
              fill="#2CBAE5"></path>
          </svg>
        </ItemList>
        <div class="live-tabs" style="width: 320px;height: 456px; position: absolute;right: 0;top: 0; display: flex;">
          <div class="tab-switch" style="display:block;">
            <div style="display: flex;">
              <div class="tab-switch-item" style="font-size: 20px; width: 100px;margin-top: 10px;">特别推荐</div>
            </div>
            <a class="item" style="position: relative;">
              <img src="../../assets/img/tbtj.jpg"
                style="width: 320px;height: 330px;    border-radius: 2px;margin-top: 20px;" alt="">
              <p class="title"
                style="position: absolute;top: 158px;left: 12px;display: -ms-flexbox;display: flex;overflow: hidden;-ms-flex-align: center;align-items: center;width: 70%;color: #fff;text-overflow: ellipsis;white-space: nowrap;font-size: 14px;">
                大奖等你来拿</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <BodyItem :live="liveList[2]" :rank="rankList[2]">
      <svg style="margin-top:0px; width: 36px;height:36px" class="variety" viewBox="0 0 1024 1024">
        <path
          d="M534.442796 378.982175m36.203867 36.203867l30.592268 30.592268q36.203867 36.203867 0 72.407734l-360.590518 360.590518q-36.203867 36.203867-72.407734 0l-30.592268-30.592268q-36.203867-36.203867 0-72.407735l360.590518-360.590517q36.203867-36.203867 72.407734 0Z"
          fill="#FF8693"></path>
        <path
          d="M369.92 543.744l137.472-137.472a38.912 38.912 0 0 1 54.528 0l48.384 48.64a38.4 38.4 0 0 1 0 54.528l-137.984 137.984z"
          fill="#FC6376"></path>
        <path
          d="M286.133941 631.021801m12.854616 12.85013l72.601422 72.576083q12.854616 12.850129 0.004486 25.704746l-1.62889 1.629458q-12.850129 12.854616-25.704745 0.004486l-72.601422-72.576083q-12.854616-12.850129-0.004486-25.704745l1.62889-1.629459q12.850129-12.854616 25.704745-0.004486Z"
          fill="#FFA9B1"></path>
        <path
          d="M737.024 547.584a99.328 99.328 0 0 1 62.72-62.72l51.2-13.568a27.136 27.136 0 0 0 13.056-49.664L826.624 384a98.816 98.816 0 0 1-22.784-85.76l16.896-63.232c7.168-27.136-8.96-43.52-36.096-36.096l-63.232 16.896a98.816 98.816 0 0 1-85.76-23.04l-37.376-36.864a27.136 27.136 0 0 0-49.408 13.312l-13.824 51.2a97.792 97.792 0 0 1-62.464 62.72l-51.2 13.824a27.136 27.136 0 0 0-13.312 49.408L445.44 384a97.536 97.536 0 0 1 23.04 85.504l-16.896 63.232c-7.424 27.392 8.96 43.52 36.096 36.352l63.232-16.896a97.792 97.792 0 0 1 85.76 22.784l37.376 37.376a26.88 26.88 0 0 0 49.408-13.312z"
          fill="#FDDE80"></path>
        <path
          d="M886.272 417.536l-74.752-75.008 30.464-114.432a41.216 41.216 0 0 0-8.704-41.472A41.728 41.728 0 0 0 791.808 179.2l-114.432 30.72-74.752-76.032A41.728 41.728 0 0 0 563.2 120.576a41.216 41.216 0 0 0-28.416 31.488l-27.392 102.4L404.48 281.6a42.24 42.24 0 0 0-31.744 28.16 42.24 42.24 0 0 0 13.312 40.448L460.8 425.216l-30.72 114.432a41.728 41.728 0 0 0 8.96 41.472 37.888 37.888 0 0 0 27.392 10.752 56.832 56.832 0 0 0 14.08-2.048l114.432-30.72 74.752 75.008a45.824 45.824 0 0 0 31.232 14.336 34.304 34.304 0 0 0 8.96 0 41.216 41.216 0 0 0 28.416-31.488l27.392-102.4 102.4-27.392a41.984 41.984 0 0 0 31.488-28.416 40.96 40.96 0 0 0-13.312-41.216z m-84.736-203.52h5.12a16.896 16.896 0 0 1 0 5.12l-25.6 93.696-72.96-73.728z m-32 139.776l-34.56 128-128 34.56-102.4-102.4 34.56-128 128-34.56z m-199.424-192c0-2.56 1.792-4.096 1.792-4.608a9.984 9.984 0 0 1 4.096 3.072l59.648 59.648-87.296 23.296z m-157.696 162.048L409.6 320a12.8 12.8 0 0 1 4.864-2.048l81.152-21.76-23.552 87.808z m58.368 230.4a18.944 18.944 0 0 1-5.12 0 17.92 17.92 0 0 1 0-5.12l25.6-93.696L563.2 528.64z m230.4 51.2c0 2.816-1.536 4.096-1.536 4.864a20.992 20.992 0 0 1-4.352-3.328l-59.392-59.392 87.296-23.552z m156.16-156.16l-81.152 21.76 23.296-87.04 59.392 59.392a40.96 40.96 0 0 1 3.328 3.84 12.8 12.8 0 0 1-4.096 2.56z"
          fill="#FCC029"></path>
      </svg>
    </BodyItem>
    <BodyItem :live="liveList[3]" :rank="rankList[3]">
      <svg style="margin-top:0px; width: 36px;height:36px" class="tv" viewBox="0 0 1024 1024">
        <path
          d="M147.2 201.728m79.616 0l571.136 0q79.616 0 79.616 79.616l0 458.24q0 79.616-79.616 79.616l-571.136 0q-79.616 0-79.616-79.616l0-458.24q0-79.616 79.616-79.616Z"
          fill="#9796ED"></path>
        <path
          d="M222.976 269.312h77.056v57.856H222.976zM390.144 269.312h77.056v57.856h-77.056zM557.312 269.312h77.056v57.856h-77.056zM724.48 269.312h77.056v57.856H724.48zM222.976 693.76h77.056v57.856H222.976zM390.144 693.76h77.056v57.856h-77.056zM557.312 693.76h77.056v57.856h-77.056zM147.2 375.296h730.368v270.08H147.2z"
          fill="#7B78EA"></path>
        <path
          d="M521.369822 529.707066m23.351494-23.351495l2.534271-2.53427q23.351494-23.351494 46.702989 0l199.664327 199.664327q23.351494 23.351494 0 46.702989l-2.534271 2.534271q-23.351494 23.351494-46.702988 0l-199.664328-199.664328q-23.351494-23.351494 0-46.702989Z"
          fill="#FFD043"></path>
        <path
          d="M708.352 418.816h-25.6v-24.32a13.568 13.568 0 0 0-13.568-13.568H665.6a13.312 13.312 0 0 0-13.312 13.568v24.32h-25.6a13.568 13.568 0 0 0-13.568 13.568v5.632a13.568 13.568 0 0 0 13.568 13.568h25.6v24.32a13.312 13.312 0 0 0 13.312 13.568h5.632a13.568 13.568 0 0 0 13.568-13.568v-24.32h25.6a13.312 13.312 0 0 0 13.312-13.568v-5.632a13.312 13.312 0 0 0-15.36-13.568zM517.888 418.816h-25.6v-24.32a13.312 13.312 0 0 0-13.312-13.568h-5.632a13.568 13.568 0 0 0-13.568 13.568v24.32H435.2a13.312 13.312 0 0 0-13.312 13.568v5.632a13.312 13.312 0 0 0 13.312 13.568h25.6v24.32a13.568 13.568 0 0 0 13.568 13.568h5.632a13.312 13.312 0 0 0 13.312-13.568v-24.32h25.6a13.312 13.312 0 0 0 13.312-13.568v-5.632a13.312 13.312 0 0 0-14.336-13.568zM493.568 572.16h-18.432v-18.432a10.24 10.24 0 0 0-10.24-10.24H460.8a10.24 10.24 0 0 0-10.24 10.24v18.432h-18.432a10.24 10.24 0 0 0-10.24 10.24v4.352a10.24 10.24 0 0 0 10.24 10.24h18.432V614.4a10.24 10.24 0 0 0 10.24 10.24h4.352a10.24 10.24 0 0 0 10.24-10.24v-18.432h18.432a10.24 10.24 0 0 0 10.24-10.24v-4.352a10.24 10.24 0 0 0-10.496-9.216z"
          fill="#FFD778"></path>
      </svg>
    </BodyItem>
    <BodyItem :live="liveList[4]" :rank="rankList[4]" :is-pic="true">
      <svg style="margin-top:0px; width: 36px;height:36px" class="pictures" viewBox="0 0 1024 1024">
        <path
          d="M298.496 284.928l17.664-51.2a36.608 36.608 0 0 1 33.28-22.016h325.376a37.12 37.12 0 0 1 34.304 22.016l17.408 51.2h88.576a69.376 69.376 0 0 1 66.56 70.656v377.344a69.12 69.12 0 0 1-67.84 70.144H209.92a69.12 69.12 0 0 1-68.352-70.144V355.584a69.376 69.376 0 0 1 68.352-70.656z"
          fill="#FFBA7B"></path>
        <path
          d="M141.568 457.728h740.096v271.36a69.632 69.632 0 0 1-73.728 73.984H210.688a69.12 69.12 0 0 1-69.12-69.376z"
          fill="#FB952C"></path>
        <path d="M512 358.4a197.376 197.376 0 1 1-197.376 197.376A197.632 197.632 0 0 1 512 358.4z" fill="#FB952C"></path>
        <path d="M512 409.6a148.224 148.224 0 1 1-147.968 147.968A147.968 147.968 0 0 1 512 409.6z" fill="#FFFFFF"></path>
        <path d="M512 457.728a98.816 98.816 0 1 1-98.56 98.56A98.56 98.56 0 0 1 512 457.728z" fill="#FB952C"></path>
        <path
          d="M733.696 358.4h73.984a25.6 25.6 0 0 1 25.6 25.6 25.6 25.6 0 0 1-25.6 25.6h-73.984a25.6 25.6 0 0 1-25.6-25.6 25.6 25.6 0 0 1 25.6-25.6z"
          fill="#FFFFFF"></path>
      </svg>
    </BodyItem>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import api from '@/api/home.js'
import { useRouter } from 'vue-router';
import BodyItem from '../Body/BodyItem.vue';
import ItemList from './ItemList.vue';
import ItemTab from './ItemTab.vue';
let isActive = reactive([true, false, false, false, false, false, false])
const router = useRouter()
const bannerList = ['/src/assets/img/banner/banner1.jpg', '/src/assets/img/banner/banner2.jpg', '/src/assets/img/banner/banner3.jpg',
  '/src/assets/img/banner/banner4.jpg', '/src/assets/img/banner/banner5.jpg', '/src/assets/img/banner/banner6.jpg']
let liveList = reactive([
  {
    name: '动漫',
    data: []
  },
  {
    name: '电影',
    data: []
  },
  {
    name: '综艺',
    data: []
  },
  {
    name: '电视剧',
    data: []
  },
  {
    name: '图片',
    data: []
  },
])
let rankList = reactive([
  {
    name: '动漫',
    data: []
  },
  {
    name: '播出表',
    data: []
  },
  {
    name: '综艺',
    data: []
  },
  {
    name: '电视剧',
    data: []
  },
  {
    name: '图片',
    data: []
  }
])

let rotateList = reactive([
  {
    day: 0,
    data: []
  },
  {
    day: 1,
    data: []
  },
  {
    day: 2,
    data: []
  },
  {
    day: 3,
    data: []
  },
  {
    day: 4,
    data: []
  },
  {
    day: 5,
    data: []
  },
  {
    day: 6,
    data: []
  }
])
let showRotate = reactive([])
const getPictures = () => {
  api.getPictures().then((res) => {
    if (res.code === 0) {
      liveList[4].data = res.pictures
    }
  }).catch(error => {
    console.log(error);
  })
}
const getAnime = () => {
  api.getAnime().then((res) => {
    if (res.code === 0) {
      liveList[0].data = res.anime
    }
  }).catch(error => {
    console.log(error);
  })
}
const getMovie = () => {
  api.getMovie().then((res) => {
    if (res.code === 0) {
      liveList[1].data = res.movie
    }
  }).catch(error => {
    console.log(error);
  })
}
const getTV = () => {
  api.getTV().then((res) => {
    if (res.code === 0) {
      liveList[3].data = res.tv
    }
  }).catch(error => {
    console.log(error);
  })
}
const getVariety = () => {
  api.getVariety().then((res) => {
    if (res.code === 0) {
      liveList[2].data = res.variety
    }
  }).catch(error => {
    console.log(error);
  })
}
const changeRotate = (day) => {
  for (let i = 0; i < isActive.length; i++) {
    isActive[i] = false
  }
  isActive[day] = true
  for (let i = 0; i < rotateList.length; i++) {
    if (rotateList[i].day == day) {
      showRotate = rotateList[i].data
    }
  }
}
const getRotate = () => {
  api.getRotate().then((res) => {
    if (res.code === 0) {
      rotateList[0].data = res.Monday
      rotateList[1].data = res.Tuesday
      rotateList[2].data = res.Wednesday
      rotateList[3].data = res.Thursday
      rotateList[4].data = res.Friday
      rotateList[5].data = res.Saturday
      rotateList[6].data = res.Sunday
      showRotate = res.Monday
      changeRotate(0)
    }
  }).catch(error => {
    console.log(error);
  })
}

const getRank = () => {
  api.getRank().then((res) => {
    if (res.code === 0) {
      rankList[0].data = res.anime
      rankList[1].data = res.rotate
      rankList[2].data = res.variety
      rankList[3].data = res.TV
      rankList[4].data = res.pictures
    }
  }).catch(error => {
    console.log(error);
  })
}

function gotoPlay(video_id) {
  router.push({
    name: 'video',
    query: {
      video_id
    }
  })
}

onMounted(() => {
  getAnime()
  getMovie()
  getPictures()
  getTV()
  getVariety()
  getRank()
  getRotate()
})
</script>

<style scoped lang='less'>
.cover {
  width: 70px;
  height: 80px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.list {
  margin-top: 50px;
}

.first-screen {
  margin: 0 auto;
  width: 1224px;
  height: 3400px;
}

.storey-title {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;

  .l-con {
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
}

.icon {
  fill: #999999;
}

.zone-list-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 854px;
  height: 404px;
}

.exchange-btn {
  height: 22px;
}

.tab-switch-item {
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  margin-right: 24px;
  cursor: pointer;
}

.time-line-card {
  width: 200px;
  height: 80px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.tab-switch-item.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}

.tl-link:hover {
  color: #fff;
  background: #00a1d6;
}

.tl-link {
  width: 110px;
  height: 30px;
  border: 1px solid #00a1d6;
  border-radius: 2px;
  background: #fff;
  text-align: center;
  line-height: 27px;
  padding: 0 0 0 14px;
  font-size: 14px;
  color: #00a1d6;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  transition: all .2s;
  line-height: 16px;
}

.tab-switch .item:before {
  position: absolute;
  top: 140px;
  left: 0;
  width: 100%;
  height: 48px;
  border-radius: 2px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
  content: "";
}

.tab-switch .item:before {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 48px;
  border-radius: 2px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
  content: "";
}

.storey-title {

  .tab-switch-item.on {
    border-bottom: 1px solid #00a1d6;
    color: #00a1d6;
  }

  .name {
    margin: 0 20px 0 0;
    vertical-align: bottom;
    font-size: 20px;
    line-height: 36px;
  }
}

.live-card {
  width: 206px;
  height: 189px;

  .pic {
    position: relative;
    display: block;
    cursor: pointer;
    margin-bottom: 10px;
    width: 100%;
    height: 116px;
  }

  .pic:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 48px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
    background-repeat: repeat-x;
    bottom: 0;
    left: 0;
    border-radius: 2px;
  }

}
</style>