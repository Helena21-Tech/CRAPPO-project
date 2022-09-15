import React from "react";
import classes from "./News.module.css";
import Button from "../Button/Button";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components/AnimationOnScroll";

const News = () => {
  return (
    <section className={classes.news}>
      <AnimationOnScroll animateIn={classes.showBg}>
        <div className={classes.newsBg}>
          <div className={classes.newsContent}>
            <h4>Start mining now.</h4>
            <p>
              Join now with CRAPPO to get the latest news & start mining now.
            </p>
          </div>
          <div className={classes.action}>
            <input type="email" id="email" placeholder="Enter your email" />
            <Button action="Subscribe" work="news" />
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default News;
