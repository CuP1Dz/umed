'use client';

import React, { useEffect } from 'react';
import anime from 'animejs';
import styles from "./page.module.css";
import Telega from "@/components/Telegram/Telegram"
import Header from "@/components/header/Header";
import Reception from "@/widgets/reception/Reception";
import Mainstream from "@/widgets/Main_stream/MainStream";
import Whatchoose from "@/widgets/what_choose/WhatChoose";
import Faststream from "@/widgets/Fast_stream/FastStream";
import Addstream from "@/widgets/add_stream/AddStream";
import News from "@/widgets/news/News";
import Blog from '@/widgets/blog/Blog';
import Review from '@/widgets/review/Review';
import Install from '@/widgets/install/Install';
import Footer from '@/components/footer/Footer';

const TopButton = () => {
  return (
    <a href="/">
    <button className={styles.topButton}>
      ▲
    </button></a>
  );
};

export default function Home() {
  useEffect(() => {
    anime({
      targets: 'div',
      translateX: [-1000, 0], // move from -1000px to 0px
      duration: 1000,
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <main className={styles.main}>
      <Telega/>
      <TopButton />
      <Header/>
      <Reception/>
      <Mainstream/>
      <Faststream/>
      <Addstream/>
      <Whatchoose/>
      <News/>
      <Blog/>
      <Review/>
      <Install/>
      <Footer/>
    </main>
  );
}