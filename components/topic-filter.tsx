import type { NextPage } from 'next';
import styles from './topic-filter.module.css';

export type TopicFilterType = {
  className?: string;
}



const TopicFilter:NextPage<TopicFilterType> = ({ className="" }) => {
  return (
    <div className={[styles.topicFilter, className].join(' ')}>
      <div className={styles.horizontalborder}>
        <div className={styles.ratingInput}>
          <h3 className={styles.heading3}>Ratings</h3>
          <img className={styles.svgIcon} alt="" src="/svg-4.svg" />
        </div>
        <div className={styles.group}>
          <div className={styles.label}>
            <div className={styles.inputField}>
              <div className={styles.input} />
              <input className={styles.border} type="radio" name="radioGroup-1" />
            </div>
            <div className={styles.inputIconContainerWrapper}>
              <div className={styles.inputIconContainer}>
                <img className={styles.svgIcon1} alt="" src="/svg-5@2x.png" />
                <div className={styles.container}>
                  <div className={styles.dropdownItems}>4.5</div>
                </div>
              </div>
            </div>
            <div className={styles.increaseIcon}>
              <div className={styles.up}>{`4.5 & up`}</div>
            </div>
            <div className={styles.resultContainer}>
              <div className={styles.div}>(10,000)</div>
              <div className={styles.container1}>
                <div className={styles.result}>Result</div>
              </div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.inputParent}>
              <div className={styles.input1} />
              <input className={styles.border1} type="radio" name="radioGroup-1" />
            </div>
            <div className={styles.labelInner}>
              <div className={styles.svgParent}>
                <img className={styles.svgIcon2} alt="" src="/svg-6@2x.png" />
                <div className={styles.container2}>
                  <div className={styles.div1}>4.0</div>
                </div>
              </div>
            </div>
            <div className={styles.upWrapper}>
              <div className={styles.up1}>{`4.0 & up`}</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div2}>(10,000)</div>
              <div className={styles.container3}>
                <div className={styles.result1}>Result</div>
              </div>
            </div>
          </div>
          <div className={styles.label2}>
            <div className={styles.inputGroup}>
              <div className={styles.input2} />
              <input className={styles.border2} type="radio" name="radioGroup-1" />
            </div>
            <div className={styles.labelChild}>
              <div className={styles.svgGroup}>
                <img className={styles.svgIcon3} alt="" src="/svg-7@2x.png" />
                <div className={styles.container4}>
                  <div className={styles.div3}>3.5</div>
                </div>
              </div>
            </div>
            <div className={styles.upContainer}>
              <div className={styles.up2}>{`3.5 & up`}</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div4}>(10,000)</div>
              <div className={styles.container5}>
                <div className={styles.result2}>Result</div>
              </div>
            </div>
          </div>
          <div className={styles.label3}>
            <div className={styles.inputContainer}>
              <div className={styles.input3} />
              <input className={styles.border3} type="radio" name="radioGroup-1" />
            </div>
            <div className={styles.labelInner1}>
              <div className={styles.svgContainer}>
                <img className={styles.svgIcon4} alt="" src="/svg-8@2x.png" />
                <div className={styles.container6}>
                  <div className={styles.div5}>3.0</div>
                </div>
              </div>
            </div>
            <div className={styles.upFrame}>
              <div className={styles.up3}>{`3.0 & up`}</div>
            </div>
            <div className={styles.parent1}>
              <div className={styles.div6}>(10,000)</div>
              <div className={styles.container7}>
                <div className={styles.result3}>Result</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.horizontalborder1}>
        <div className={styles.durationInput}>
          <h3 className={styles.heading31}>Video Duration</h3>
          <img className={styles.svgIcon5} alt="" src="/svg-4.svg" />
        </div>
        <div className={styles.maskGroupParent}>
          <img className={styles.maskGroupIcon} loading="lazy" alt="" src="/mask-group.svg" />
          <div className={styles.moreOptions}>
            <b className={styles.showMore}>Show more</b>
            <img className={styles.svgIcon6} alt="" src="/svg-10.svg" />
          </div>
        </div>
      </div>
      <div className={styles.horizontalborder2}>
        <b className={styles.heading32}>Topic</b>
        <img className={styles.svgIcon7} alt="" src="/svg-11.svg" />
      </div>
      <div className={styles.horizontalborder3}>
        <b className={styles.heading33}>Subcategory</b>
        <img className={styles.svgIcon8} alt="" src="/svg-11.svg" />
      </div>
      <div className={styles.horizontalborder4}>
        <b className={styles.heading34}>Level</b>
        <img className={styles.svgIcon9} alt="" src="/svg-11.svg" />
      </div>
      <div className={styles.horizontalborder5}>
        <b className={styles.heading35}>Language</b>
        <img className={styles.svgIcon10} alt="" src="/svg-11.svg" />
      </div>
      <div className={styles.priceFilter}>
        <div className={styles.horizontalborder6}>
          <b className={styles.heading36}>Price</b>
          <img className={styles.svgIcon11} alt="" src="/svg-11.svg" />
        </div>
        <div className={styles.horizontalborder7}>
          <b className={styles.heading37}>Features</b>
          <img className={styles.svgIcon12} alt="" src="/svg-11.svg" />
        </div>
      </div>
      <div className={styles.border4}>
        <b className={styles.heading38}>Subtitles</b>
        <img className={styles.svgIcon13} alt="" src="/svg-11.svg" />
      </div>
    </div>);
};

export default TopicFilter;
