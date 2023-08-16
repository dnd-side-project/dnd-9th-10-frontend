import cn from 'classnames'
import styles from './DateInput.module.css';
import React from "react";
import {dateToStr, strToDate} from "@dnd9-10/shared/src/utils/date";

export interface DateInputProps {
    className?: string;
    currDate: Date;
    setCurrDate: React.Dispatch<React.SetStateAction<Date>>;
}

export function DateInput(props: DateInputProps) {
    const {className, currDate, setCurrDate} = props

    return (
        <div className={cn(styles.wrap, className)}>
            <input
                type="date"
                className={styles.input}
                value={dateToStr(currDate, "-")}
                onChange={e => setCurrDate(strToDate(e.target.value))}
            />
        </div>
    );
}

export default DateInput;
