import React from 'react'
import './Featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChangingProgressProvider from './ChangingProgressProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Featured = () => {
  return (
    <div className = "featured">
        <div className = "top">
            <h1 className = "title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize = "small" />

        </div>
        <div className = "bottom">
            <div className="featuredChart">
                <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60,70, 80, 90, 100]}>
                {percentage => (
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                    pathTransitionDuration: 0.95,
                    trailColor: '#82ca9d',
                    textColor: 'blue',
                    pathColor: '#8885FF',
                    trailWidth: 5,
                    pathWidth: 5,
                    pathDirection: 'counterclockwise',
                    pathTextDirection: 'clockwise',
                    pathTextOffset: 0,
                    pathTextTranslate: (value) => ({
                        x: value,
                        y: 0,
                    }),

                    })}
                />
                )}
                </ChangingProgressProvider>
            </div>
            <p className = "title">Total Sales Made Today</p>
            <div className="amount">R3507.00</div>
            <div className="desc">Last 24 hours</div>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Goal</div>
                    <div class = "itemResult negative">
                        R5.5k
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Weekly</div>
                    <div class = "itemResult positive">
                        R10.5k
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Monthly</div>
                    <div class = "itemResult positive">
                        R20.5k
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured