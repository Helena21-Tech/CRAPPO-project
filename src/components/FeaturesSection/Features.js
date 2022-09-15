import React from "react";
import classes from "./Features.module.css"
import Circle from "../../images/features-circle-1.png";
import Circle1 from "../../images/features-circle-2.png";
import FeatureImg from "../../images/feature-1-img.png";
import FeatureImg1 from "../../images/feature-2-img.png";
import FeatureImg2 from "../../images/feature-3-img.png";
import Button from "../Button/Button";
import Grid from "./Grid";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components/AnimationOnScroll";

const Features = ()=>{
return (
  <section className={classes.features}>
    <img src={Circle} alt="Features circle" className={classes.circle} />
    <img src={Circle1} alt="Features circle" className={classes.circle1} />
    <h2 className={classes.header}>
      Market sentiments, portfolio and run the infrastructure of your choice
    </h2>
    <Grid>
      <AnimationOnScroll animateIn={classes.gridContent}>
        <div className={classes.gridContent}>
          <h4>Invest Smart</h4>
          <p>
            Get the full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </p>
          <AnimationOnScroll animateIn={classes.btnShow}>
            <Button action="Learn more" />
          </AnimationOnScroll>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn={classes.gridImg}>
        <div className={classes.gridImg}>
          <img src={FeatureImg} alt="Feature" />
        </div>
      </AnimationOnScroll>
    </Grid>
    <Grid>
      <AnimationOnScroll animateIn={classes.gridImg}>
        <div className={classes.gridImg}>
          <img src={FeatureImg1} alt="Feature" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn={classes.gridContent}>
        <div className={classes.gridContent}>
          <h4>Detailed Statistics</h4>
          <p>
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <AnimationOnScroll animateIn={classes.btnSlide}>
            <Button action="Learn more" />
          </AnimationOnScroll>
          
        </div>
      </AnimationOnScroll>
    </Grid>
    <Grid>
      <AnimationOnScroll animateIn={classes.gridContent}>
        <div className={classes.gridContent}>
          <h4>Grow your profits and track your investments.</h4>
          <p>
            Use your analytical tools. Clear TradingView chart let you track
            current and historical profit investments."
          </p>
          <AnimationOnScroll animateIn={classes.btnShow}>
            <Button action="Learn more" />
          </AnimationOnScroll>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn={classes.gridImg}>
        <div className={classes.gridImg}>
          <img src={FeatureImg2} alt="Feature" />
        </div>
      </AnimationOnScroll>
    </Grid>
  </section>
);
}

export default Features;